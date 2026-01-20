import React, { useRef, useMemo, Suspense, lazy } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css";

// Lazy-loaded pages
const Welcome = lazy(() => import("./Welcome"));
const Home = lazy(() => import("../../pages/HomePage"));
const About = lazy(() => import("../../pages/AboutPage"));
const Learn = lazy(() => import("../../pages/Learn"));
const Projects = lazy(() => import("../../Projects/Projects"));
const Contact = lazy(() => import("../../pages/ContactPage"));

// Loader for Suspense
const SlideLoader = () => (
  <div className="slide-loader">
    <div className="spinner-border spinner-border-sm text-secondary"></div>
  </div>
);

// Map of routes for slider
const ROUTE_MAP = {
  "/welcome": <Welcome />,
  "/": <Home />,
  "/about": <About />,
  "/contact": <Contact />,
  "/learn": <Learn />,
  "/projects": <Projects />,
};

const MAIN_ROUTES = Object.keys(ROUTE_MAP);

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const trackRef = useRef(null);

  const startX = useRef(0);
  const startY = useRef(0);
  const currentTranslate = useRef(0);
  const isDragging = useRef(false);

  const currentIndex = useMemo(() => {
    const i = MAIN_ROUTES.indexOf(location.pathname);
    return i === -1 ? 1 : i;
  }, [location.pathname]);

  const prevRoute = MAIN_ROUTES[currentIndex - 1];
  const nextRoute = MAIN_ROUTES[currentIndex + 1];

  // ------------------------
  // Touch Handlers
  // ------------------------
  const onTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
    if (trackRef.current) trackRef.current.style.transition = "none";
  };

  const onTouchMove = (e) => {
    if (!isDragging.current) return;

    const dx = e.touches[0].clientX - startX.current;
    const dy = e.touches[0].clientY - startY.current;

    // Ignore mostly vertical swipes
    if (Math.abs(dx) < Math.abs(dy)) return;

    // Resistance at edges
    const resistance =
      (!prevRoute && dx > 0) || (!nextRoute && dx < 0) ? 0.3 : 1;

    currentTranslate.current = dx * resistance;

    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(calc(-100vw + ${currentTranslate.current}px))`;
    }
  };

  const onTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const threshold = window.innerWidth * 0.25; // must swipe 25% of width

    if (trackRef.current) {
      trackRef.current.style.transition =
        "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";

      if (currentTranslate.current < -threshold && nextRoute) {
        trackRef.current.style.transform = "translateX(-200vw)";
        setTimeout(() => {
          navigate(nextRoute);
          resetTrack();
        }, 400);
      } else if (currentTranslate.current > threshold && prevRoute) {
        trackRef.current.style.transform = "translateX(0vw)";
        setTimeout(() => {
          navigate(prevRoute);
          resetTrack();
        }, 400);
      } else {
        trackRef.current.style.transform = "translateX(-100vw)";
      }
    }
  };

  const resetTrack = () => {
    if (trackRef.current) {
      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = "translateX(-100vw)";
      currentTranslate.current = 0;
    }
  };

  return (
    <div
      className="layout"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <Header />
      <main className="slider-viewport">
        <div className="slider-track" ref={trackRef}>
          {/* Previous Slide */}
          <div className="slide">
            <Suspense fallback={<SlideLoader />}>
              {prevRoute ? ROUTE_MAP[prevRoute] : <div className="edge" />}
            </Suspense>
          </div>

          {/* Current Slide */}
          <div className="slide active">
            <Suspense fallback={<SlideLoader />}>
              {ROUTE_MAP[location.pathname]}
            </Suspense>
          </div>

          {/* Next Slide */}
          <div className="slide">
            <Suspense fallback={<SlideLoader />}>
              {nextRoute ? ROUTE_MAP[nextRoute] : <div className="edge" />}
            </Suspense>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
