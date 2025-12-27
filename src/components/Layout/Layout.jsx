import React, { useRef, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css";

const ROUTES = ["/", "/about", "/learn", "/projects", "/contact"];
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

  const onTouchStart = (e) => {
    if (!isMobile) return;

    const t = e.touches[0];
    start.current = { x: t.clientX, y: t.clientY };
    isHorizontal.current = false;
    isVertical.current = false;
    isSwipingRef.current = false;
  };

  const onTouchMove = (e) => {
    if (!isMobile) return;

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
    if (!isMobile || !isHorizontal.current) return;

    const dx = e.changedTouches[0].clientX - start.current.x;
    const index = ROUTES.indexOf(pathname);

    setStyle({
      transform: "translateX(0)",
      transition: "transform 0.25s ease",
    });

    if (Math.abs(dx) < SWIPE_THRESHOLD) {
      isSwipingRef.current = false;
      return;
    }

    if (dx < 0 && index < ROUTES.length - 1) {
      navigate(ROUTES[index + 1]);
    } else if (dx > 0 && index > 0) {
      navigate(ROUTES[index - 1]);
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
