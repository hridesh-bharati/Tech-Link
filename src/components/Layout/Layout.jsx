import React, { useRef, useMemo, Suspense, lazy } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

/* ===== ROUTES ===== */
const ROUTE_MAP = {
  "/welcome": <Welcome />,
  "/": <Home />,
  "/about": <About />,
  "/learn": <Learn />,
  "/projects": <Projects />,
  "/contact": <Contact />,
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

  /* ===== CURRENT INDEX ===== */
  const currentIndex = useMemo(() => {
    const i = MAIN_ROUTES.indexOf(location.pathname);
    return i === -1 ? 1 : i;
  }, [location.pathname]);

  const prevRoute = MAIN_ROUTES[currentIndex - 1];
  const nextRoute = MAIN_ROUTES[currentIndex + 1];

  /* ===== TOUCH HANDLERS ===== */
  const onTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;

    if (trackRef.current) {
      trackRef.current.style.transition = "none";
    }
  };

  const onTouchMove = (e) => {
    if (!isDragging.current) return;

    const dx = e.touches[0].clientX - startX.current;
    const dy = e.touches[0].clientY - startY.current;

    /* 🔥 vertical scroll priority */
    if (Math.abs(dy) > Math.abs(dx)) return;

    e.preventDefault();

    const resistance =
      (!prevRoute && dx > 0) || (!nextRoute && dx < 0) ? 0.3 : 1;

    currentTranslate.current = dx * resistance;

    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(calc(-100vw + ${currentTranslate.current}px), 0, 0)`;
    }
  };

  const onTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const threshold = window.innerWidth * 0.25;

    if (!trackRef.current) return;

    trackRef.current.style.transition =
      "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";

    if (currentTranslate.current < -threshold && nextRoute) {
      trackRef.current.style.transform = "translate3d(-200vw,0,0)";
      setTimeout(() => {
        navigate(nextRoute);
        resetTrack();
      }, 400);
    } else if (currentTranslate.current > threshold && prevRoute) {
      trackRef.current.style.transform = "translate3d(0vw,0,0)";
      setTimeout(() => {
        navigate(prevRoute);
        resetTrack();
      }, 400);
    } else {
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
      className="layout"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <Header />

      <main className="slider-viewport">
        <div className="slider-track" ref={trackRef}>
          {/* PREVIOUS */}
          <div className="slide">
            <Suspense fallback={<SlideLoader />}>
              {prevRoute ? ROUTE_MAP[prevRoute] : <div className="edge" />}
            </Suspense>
          </div>

          {/* CURRENT */}
          <div className="slide active">
            <Suspense fallback={<SlideLoader />}>
              {ROUTE_MAP[location.pathname]}
            </Suspense>
          </div>

          {/* NEXT */}
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
