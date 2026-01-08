import React, { useRef, useState, useEffect, useCallback } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "./Layout.css";

/* Main routes (order matters for swipe) */
const MAIN_ROUTES = ["/", "/about", "/contact", "/learn", "/projects"];

/* Swipe config */
const SWIPE_THRESHOLD = 70;
const DIRECTION_LOCK = 15;
const MAX_SWIPE = 120;
const SWIPE_DEBOUNCE = 150;

const Layout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );
  const [showSwipeHint, setShowSwipeHint] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [style, setStyle] = useState({});

  const start = useRef({ x: 0, y: 0 });
  const isHorizontal = useRef(false);
  const isVertical = useRef(false);
  const swipeTimer = useRef(null);
  const hintTimer = useRef(null);

  /* Resize → mobile detect */
  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      if (mobile && !localStorage.getItem("swipeHintShown")) {
        setShowSwipeHint(true);
        hintTimer.current = setTimeout(() => {
          setShowSwipeHint(false);
          localStorage.setItem("swipeHintShown", "true");
        }, 2500);
      }
    };

    onResize();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (hintTimer.current) clearTimeout(hintTimer.current);
    };
  }, []);

  /* Helpers */
  const isExactMainRoute = useCallback(
    () => MAIN_ROUTES.includes(pathname),
    [pathname]
  );

  const getCurrentIndex = useCallback(
    () => MAIN_ROUTES.indexOf(pathname),
    [pathname]
  );

  /* Swipe navigation */
  const handleSwipeNavigation = useCallback(
    direction => {
      const index = getCurrentIndex();

      if (direction === "left" && index < MAIN_ROUTES.length - 1) {
        navigate(MAIN_ROUTES[index + 1]);
      }
      if (direction === "right" && index > 0) {
        navigate(MAIN_ROUTES[index - 1]);
      }

      setSwipeDirection(null);
    },
    [getCurrentIndex, navigate]
  );

  /* Touch handlers */
  const onTouchStart = useCallback(
    e => {
      if (!isMobile || !isExactMainRoute()) return;

      const t = e.touches[0];
      start.current = { x: t.clientX, y: t.clientY };
      isHorizontal.current = false;
      isVertical.current = false;
    },
    [isMobile, isExactMainRoute]
  );

  const onTouchMove = useCallback(
    e => {
      if (!isMobile || !isExactMainRoute()) return;

      const t = e.touches[0];
      const dx = t.clientX - start.current.x;
      const dy = t.clientY - start.current.y;

      if (!isHorizontal.current && !isVertical.current) {
        if (Math.abs(dx) > DIRECTION_LOCK) {
          isHorizontal.current = true;
          setSwipeDirection(dx > 0 ? "right" : "left");
        } else if (Math.abs(dy) > DIRECTION_LOCK) {
          isVertical.current = true;
        }
      }

      if (isHorizontal.current) {
        e.preventDefault();
        const limitedDx = Math.max(-MAX_SWIPE, Math.min(MAX_SWIPE, dx));
        setStyle({
          transform: `translateX(${limitedDx}px)`,
          transition: "none",
        });
      }
    },
    [isMobile, isExactMainRoute]
  );

  const onTouchEnd = useCallback(
    e => {
      if (!isMobile || !isHorizontal.current || !isExactMainRoute()) {
        setStyle({});
        setSwipeDirection(null);
        return;
      }

      const dx = e.changedTouches[0].clientX - start.current.x;

      setStyle({
        transform: "translateX(0)",
        transition: "transform 0.25s ease",
      });

      if (Math.abs(dx) < SWIPE_THRESHOLD) {
        setSwipeDirection(null);
        return;
      }

      if (swipeTimer.current) clearTimeout(swipeTimer.current);

      swipeTimer.current = setTimeout(() => {
        handleSwipeNavigation(dx < 0 ? "left" : "right");
      }, SWIPE_DEBOUNCE);
    },
    [isMobile, isExactMainRoute, handleSwipeNavigation]
  );

  /* Keyboard navigation */
  useEffect(() => {
    const onKey = e => {
      if (!isExactMainRoute()) return;

      const index = getCurrentIndex();

      if (e.key === "ArrowLeft" && index > 0) {
        navigate(MAIN_ROUTES[index - 1]);
      }
      if (e.key === "ArrowRight" && index < MAIN_ROUTES.length - 1) {
        navigate(MAIN_ROUTES[index + 1]);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isExactMainRoute, getCurrentIndex, navigate]);

  /* Cleanup */
  useEffect(() => {
    return () => {
      if (swipeTimer.current) clearTimeout(swipeTimer.current);
      if (hintTimer.current) clearTimeout(hintTimer.current);
    };
  }, []);

  return (
    <div
      className="layout"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      data-swipe={swipeDirection}
    >
      <Helmet>
        <meta name="theme-color" content="#00a884" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Helmet>

      <Header />

      {isMobile && isExactMainRoute() && (
        <div className={`swipe-indicator ${showSwipeHint ? "show" : ""}`}>
          Swipe to navigate
        </div>
      )}

      <main className="main-content p-0" style={style}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
