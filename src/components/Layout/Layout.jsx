import React, { useRef, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css";

// Main routes only - exact paths
const MAIN_ROUTES = ["/", "/about", "/learn", "/projects", "/contact"];
const SWIPE_THRESHOLD = 70;
const DIRECTION_LOCK = 15;
const MAX_SWIPE = 120;

const Layout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const start = useRef({ x: 0, y: 0 });
  const isHorizontal = useRef(false);
  const isVertical = useRef(false);
  const isSwipingRef = useRef(false);

  const [style, setStyle] = useState({});
  const isMobile = window.innerWidth <= 768;

  // Check if current path is EXACTLY a main route
  const isExactMainRoute = () => {
    return MAIN_ROUTES.includes(pathname);
  };

  // Check if we're in a sub-route (like /learn/cpp, /learn/c)
  const isSubRoute = () => {
    // If it's exactly a main route, not a sub-route
    if (MAIN_ROUTES.includes(pathname)) return false;
    
    // Check if path starts with any main route + "/"
    for (const route of MAIN_ROUTES) {
      if (route !== "/" && pathname.startsWith(route + "/")) {
        return true;
      }
    }
    return false;
  };

  // Get current main route index - only for exact main routes
  const getCurrentRouteIndex = () => {
    return MAIN_ROUTES.indexOf(pathname);
  };

  const onTouchStart = (e) => {
    if (!isMobile || !isExactMainRoute()) return; // ✅ Only exact main routes

    const t = e.touches[0];
    start.current = { x: t.clientX, y: t.clientY };
    isHorizontal.current = false;
    isVertical.current = false;
    isSwipingRef.current = false;
  };

  const onTouchMove = (e) => {
    if (!isMobile || !isExactMainRoute()) return; // ✅ Only exact main routes

    const t = e.touches[0];
    const dx = t.clientX - start.current.x;
    const dy = t.clientY - start.current.y;

    // direction lock
    if (!isHorizontal.current && !isVertical.current) {
      if (Math.abs(dx) > DIRECTION_LOCK) {
        isHorizontal.current = true;
        isSwipingRef.current = true;
      } else if (Math.abs(dy) > DIRECTION_LOCK) {
        isVertical.current = true;
      }
    }

    // vertical scroll → ignore swipe
    if (isVertical.current) return;

    if (isHorizontal.current) {
      e.preventDefault();
      const limitedDx = Math.max(-MAX_SWIPE, Math.min(MAX_SWIPE, dx));
      setStyle({
        transform: `translateX(${limitedDx}px)`,
        transition: "none",
      });
    }
  };

  const onTouchEnd = (e) => {
    if (!isMobile || !isHorizontal.current || !isExactMainRoute()) return;

    const dx = e.changedTouches[0].clientX - start.current.x;
    const currentIndex = getCurrentRouteIndex();

    setStyle({
      transform: "translateX(0)",
      transition: "transform 0.25s ease",
    });

    if (Math.abs(dx) < SWIPE_THRESHOLD) {
      isSwipingRef.current = false;
      return;
    }

    if (dx < 0 && currentIndex < MAIN_ROUTES.length - 1) {
      navigate(MAIN_ROUTES[currentIndex + 1]);
    } else if (dx > 0 && currentIndex > 0) {
      navigate(MAIN_ROUTES[currentIndex - 1]);
    }

    setTimeout(() => {
      isSwipingRef.current = false;
    }, 150);
  };

  return (
    <div
      className="layout"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <Header isSwipingRef={isSwipingRef} />

      <main className="main-content" style={style}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;