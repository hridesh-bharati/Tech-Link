import React, { useRef, useMemo, Suspense, lazy } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css";

/* ===== LAZY PAGES ===== */
const Welcome = lazy(() => import("./Welcome"));
const Home = lazy(() => import("../../pages/HomePage"));
const About = lazy(() => import("../../pages/AboutPage"));
const Learn = lazy(() => import("../../pages/Learn"));
const Projects = lazy(() => import("../../Projects/Projects"));
const Contact = lazy(() => import("../../pages/ContactPage"));

/* ===== LOADER ===== */
const SlideLoader = () => (
  <div className="slide-loader">
    <div className="spinner-border spinner-border-sm text-secondary"></div>
  </div>
);

/* ===== ROUTES MAP ===== */
const ROUTE_MAP = {
  "/welcome": <Welcome />,
  "/": <Home />,
  "/about": <About />,
  "/contact": <Contact />,
  "/learn": <Learn />,
  "/projects": <Projects />,
};

const MAIN_ROUTES = Object.keys(ROUTE_MAP);

/* ===== Helper function to check if current path is a main route ===== */
const isMainRoute = (pathname) => {
  // Normalize path for comparison
  const normalizedPath = pathname.endsWith('/') && pathname !== '/' 
    ? pathname.slice(0, -1) 
    : pathname;
  
  return MAIN_ROUTES.includes(normalizedPath);
};

/* ===== Helper function to get the base/main route for nested paths ===== */
const getBaseRouteForNested = (pathname) => {
  // Special case for home route
  if (pathname === "/") return "/";
  
  // Normalize the path
  const normalizedPath = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  
  // Check if it's already a main route
  if (isMainRoute(normalizedPath)) {
    return normalizedPath;
  }
  
  // Find the longest matching base route for nested paths
  for (const route of MAIN_ROUTES.sort((a, b) => b.length - a.length)) {
    const normalizedRoute = route === "/" ? "" : route;
    if (normalizedPath.startsWith(normalizedRoute + "/")) {
      return route;
    }
  }
  
  return "/"; // Default to home if no match
};

/* ===== Check if path is under learn routes ===== */
const isLearnNestedRoute = (pathname) => {
  return pathname.startsWith("/learn/") && pathname !== "/learn";
};

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const trackRef = useRef(null);

  const startX = useRef(0);
  const startY = useRef(0);
  const currentTranslate = useRef(0);
  const isDragging = useRef(false);

  /* ===== Current slide logic ===== */
  const { currentSlideIndex, isNestedRoute, baseRoute } = useMemo(() => {
    const pathname = location.pathname;
    
    // Check if it's a nested route under learn
    if (isLearnNestedRoute(pathname)) {
      return {
        currentSlideIndex: MAIN_ROUTES.indexOf("/learn"),
        isNestedRoute: true,
        baseRoute: "/learn"
      };
    }
    
    if (isMainRoute(pathname)) {
      // Current path is a main route
      const i = MAIN_ROUTES.indexOf(pathname);
      return {
        currentSlideIndex: i === -1 ? 3 : i, // Default to 'learn' index if not found
        isNestedRoute: false,
        baseRoute: pathname
      };
    } else {
      // Current path is nested under a main route (other than learn)
      const baseRoute = getBaseRouteForNested(pathname);
      const i = MAIN_ROUTES.indexOf(baseRoute);
      return {
        currentSlideIndex: i === -1 ? 3 : i,
        isNestedRoute: true,
        baseRoute: baseRoute
      };
    }
  }, [location.pathname]);

  const prevRoute = MAIN_ROUTES[currentSlideIndex - 1];
  const nextRoute = MAIN_ROUTES[currentSlideIndex + 1];

  /* ===== Touch handlers ===== */
  const onTouchStart = (e) => {
    if (isNestedRoute) {
      // Special handling for learn nested routes - allow vertical scroll
      if (isLearnNestedRoute(location.pathname)) {
        // Check if user is trying to scroll vertically
        const touch = e.touches[0];
        startY.current = touch.clientY;
        startX.current = touch.clientX;
        return;
      }
      return; // Disable swipe for other nested routes
    }
    
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
    
    if (trackRef.current) {
      trackRef.current.style.transition = "none";
    }
  };

  const onTouchMove = (e) => {
    // Special case for learn nested routes
    if (isLearnNestedRoute(location.pathname)) {
      const dx = e.touches[0].clientX - startX.current;
      const dy = e.touches[0].clientY - startY.current;
      
      // Only prevent horizontal scroll if vertical scroll is minimal
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dy) < 10) {
        e.preventDefault();
        return;
      }
      // Allow vertical scroll
      return;
    }
    
    if (isNestedRoute || !isDragging.current) return;
    
    const dx = e.touches[0].clientX - startX.current;
    const dy = e.touches[0].clientY - startY.current;
    
    // Vertical scroll priority
    if (Math.abs(dy) > Math.abs(dx)) return;
    
    e.preventDefault();
    
    const resistance = (!prevRoute && dx > 0) || (!nextRoute && dx < 0) ? 0.3 : 1;
    currentTranslate.current = dx * resistance;
    
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(calc(-100vw + ${currentTranslate.current}px), 0, 0)`;
    }
  };

  const onTouchEnd = () => {
    if (isNestedRoute || !isDragging.current) return;
    
    isDragging.current = false;
    const threshold = window.innerWidth * 0.25;
    
    if (!trackRef.current) return;
    
    trackRef.current.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";

    if (currentTranslate.current < -threshold && nextRoute) {
      // Swipe left - go to next route
      trackRef.current.style.transform = "translate3d(-200vw,0,0)";
      setTimeout(() => { 
        navigate(nextRoute); 
        resetTrack(); 
      }, 400);
    } else if (currentTranslate.current > threshold && prevRoute) {
      // Swipe right - go to previous route
      trackRef.current.style.transform = "translate3d(0vw,0,0)";
      setTimeout(() => { 
        navigate(prevRoute); 
        resetTrack(); 
      }, 400);
    } else {
      // Return to original position
      trackRef.current.style.transform = "translate3d(-100vw,0,0)";
    }
  };

  const resetTrack = () => {
    if (!trackRef.current) return;
    trackRef.current.style.transition = "none";
    trackRef.current.style.transform = "translate3d(-100vw,0,0)";
    currentTranslate.current = 0;
  };

  return (
    <div 
      className={`layout ${isNestedRoute ? 'nested-route' : ''}`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <Header />
      <main className="slider-viewport">
        <div className="slider-track" ref={trackRef}>
          {/* PREVIOUS SLIDE - Show only for main routes */}
          <div className="slide">
            <Suspense fallback={<SlideLoader />}>
              {!isNestedRoute && prevRoute ? (
                ROUTE_MAP[prevRoute]
              ) : (
                <div className="edge" />
              )}
            </Suspense>
          </div>

          {/* CURRENT SLIDE */}
          <div className="slide active">
            <Suspense fallback={<SlideLoader />}>
              {isNestedRoute ? (
                // For nested routes, always show Outlet
                // CourseDetail will render here for /learn/:courseId
                <Outlet />
              ) : (
                // For main routes, show from ROUTE_MAP or Outlet
                // This handles regular main routes
                ROUTE_MAP[location.pathname] || <Outlet />
              )}
            </Suspense>
          </div>

          {/* NEXT SLIDE - Show only for main routes */}
          <div className="slide">
            <Suspense fallback={<SlideLoader />}>
              {!isNestedRoute && nextRoute ? (
                ROUTE_MAP[nextRoute]
              ) : (
                <div className="edge" />
              )}
            </Suspense>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;