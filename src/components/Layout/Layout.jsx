import React, { useRef, useState, useEffect, useCallback, useMemo } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "./Layout.css";

const MAIN_ROUTES = ["/", "/about", "/learn", "/projects", "/contact"];
const CONFIG = { threshold: 70, lock: 15, max: 120, debounce: 150 };

const Layout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showSwipeHint, setShowSwipeHint] = useState(false);
  const [swipeOffset, setSwipeOffset] = useState(0);

  const start = useRef({ x: 0, y: 0 });
  const isScrolling = useRef(null); // 'h' for horizontal, 'v' for vertical

  const currentIndex = useMemo(() => MAIN_ROUTES.indexOf(pathname), [pathname]);
  const isMainRoute = currentIndex !== -1;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    if (isMobile && !localStorage.getItem("swipeHintShown")) {
      setShowSwipeHint(true);
      setTimeout(() => {
        setShowSwipeHint(false);
        localStorage.setItem("swipeHintShown", "true");
      }, 3000);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  const handleNavigation = (direction) => {
    if (direction === "left" && currentIndex < MAIN_ROUTES.length - 1) navigate(MAIN_ROUTES[currentIndex + 1]);
    if (direction === "right" && currentIndex > 0) navigate(MAIN_ROUTES[currentIndex - 1]);
  };

  const onTouchStart = (e) => {
    if (!isMobile || !isMainRoute) return;
    start.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    isScrolling.current = null;
  };

  const onTouchMove = (e) => {
    if (!isMobile || !isMainRoute || isScrolling.current === 'v') return;

    const dx = e.touches[0].clientX - start.current.x;
    const dy = e.touches[0].clientY - start.current.y;

    if (!isScrolling.current) {
      if (Math.abs(dx) > CONFIG.lock) isScrolling.current = 'h';
      else if (Math.abs(dy) > CONFIG.lock) isScrolling.current = 'v';
    }

    if (isScrolling.current === 'h') {
      if (e.cancelable) e.preventDefault();
      // Apply resistance at edges (Android style)
      const edgeResistance = (dx > 0 && currentIndex === 0) || (dx < 0 && currentIndex === MAIN_ROUTES.length - 1) ? 0.3 : 1;
      setSwipeOffset(Math.max(-CONFIG.max, Math.min(CONFIG.max, dx * edgeResistance)));
    }
  };

  const onTouchEnd = () => {
    if (Math.abs(swipeOffset) > CONFIG.threshold) {
      handleNavigation(swipeOffset < 0 ? "left" : "right");
    }
    setSwipeOffset(0);
    isScrolling.current = null;
  };

  return (
    <div className="layout" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
      <Helmet>
        <meta name="theme-color" content="#00a884" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Helmet>

      <Header />

      <div className={`swipe-hint ${showSwipeHint ? "active" : ""}`}>
        <div className="hint-pill">↔ Swipe to explore</div>
      </div>

      <main 
        className="main-viewport" 
        style={{ 
          transform: `translateX(${swipeOffset}px)`,
          transition: swipeOffset === 0 ? 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
        }}
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;