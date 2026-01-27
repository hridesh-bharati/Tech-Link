import React, { useState, useEffect, Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaBars,
  FaTimes,
  FaChevronRight,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import "./index.css";

/* ===============================
   Lazy loader with PRELOAD support
================================= */
const lazyWithPreload = (importFn) => {
  const Component = lazy(importFn);
  Component.preload = importFn;
  return Component;
};

/* ===============================
   Chapters (lazy + preload)
================================= */
const Intro = lazyWithPreload(() => import("./Chapters/Intro.jsx"));
const Elements = lazyWithPreload(() => import("./Chapters/Elements.jsx"));
const Comment = lazyWithPreload(() => import("./Chapters/Comment.jsx"));
const Attributes = lazyWithPreload(() => import("./Chapters/Attributes.jsx"));
const Headings = lazyWithPreload(() => import("./Chapters/Headings.jsx"));
const Paragraphs = lazyWithPreload(() => import("./Chapters/Paragraphs.jsx"));
const Formatting = lazyWithPreload(() => import("./Chapters/Formatting.jsx"));
const Links = lazyWithPreload(() => import("./Chapters/Links.jsx"));
const Images = lazyWithPreload(() => import("./Chapters/Images.jsx"));
const Lists = lazyWithPreload(() => import("./Chapters/Lists.jsx"));
const Tables = lazyWithPreload(() => import("./Chapters/Tables.jsx"));

/* ===============================
   Chapters config
================================= */
const chapters = [
  { id: 0, title: "Introduction", Component: Intro },
  { id: 1, title: "HTML Elements", Component: Elements },
  { id: 2, title: "HTML Comments", Component: Comment },
  { id: 3, title: "Attributes", Component: Attributes },
  { id: 4, title: "Headings", Component: Headings },
  { id: 5, title: "Paragraphs", Component: Paragraphs },
  { id: 6, title: "Formatting", Component: Formatting },
  { id: 7, title: "Links", Component: Links },
  { id: 8, title: "Images", Component: Images },
  { id: 9, title: "Lists", Component: Lists },
  { id: 10, title: "Tables", Component: Tables },
];

export default function HTML() {
  const [selected, setSelected] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  const { title, Component } = chapters[selected];

  /* ===============================
     Scroll reset on chapter change
  ================================ */
  useEffect(() => {
    const el = document.querySelector(".scroll-content-unique");
    if (el) el.scrollTop = 0;
  }, [selected]);

  /* ===============================
     Lock body scroll on sidebar
  ================================ */
  useEffect(() => {
    document.body.style.overflow = showSidebar ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showSidebar]);

  /* ===============================
     Preload first chapters (FAST)
  ================================ */
  useEffect(() => {
    Intro.preload();
    Elements.preload();
    Comment.preload();
  }, []);

  const handleNext = () => {
    if (selected < chapters.length - 1) {
      chapters[selected + 1].Component.preload?.();
      setSelected((p) => p + 1);
    }
  };

  const handlePrev = () => {
    if (selected > 0) {
      chapters[selected - 1].Component.preload?.();
      setSelected((p) => p - 1);
    }
  };

  return (
    <div className="app-container-unique html-theme">
      {/* ========== SIDEBAR ========== */}
      <aside className={`sidebar-wrapper-unique ${showSidebar ? "open" : ""}`}>
        <div className="sidebar-header-unique">
          <div className="header-top html-bg">
            <div className="badge-c">HTML</div>
            <button
              className="close-btn-unique"
              onClick={() => setShowSidebar(false)}
            >
              <FaTimes />
            </button>
          </div>

          <div className="header-meta">
            <strong>HTML Tutorial</strong>
            <div className="progress-mini">
              <div
                className="progress-fill"
                style={{
                  width: `${((selected + 1) / chapters.length) * 100}%`,
                }}
              />
            </div>
            <span>
              {selected + 1} of {chapters.length} Chapters
            </span>
          </div>
        </div>

        <div className="sidebar-list-unique">
          {chapters.map((ch) => (
            <div
              key={ch.id}
              className={`list-item-unique ${
                selected === ch.id ? "active" : ""
              }`}
              onMouseEnter={() => ch.Component.preload?.()} // 🔥 PRELOAD
              onClick={() => {
                setSelected(ch.id);
                setShowSidebar(false);
              }}
            >
              <div className="item-content">
                <span className="index-circle">{ch.id + 1}</span>
                <span className="chapter-title">{ch.title}</span>
              </div>
              {selected === ch.id && (
                <FaChevronRight className="active-arrow" />
              )}
            </div>
          ))}
        </div>
      </aside>

      {/* ========== MAIN CONTENT ========== */}
      <main className="main-section-unique">
        <nav className="top-nav-unique">
          <div className="nav-left">
            <button
              className="hamburger-unique"
              onClick={() => setShowSidebar(true)}
            >
              <FaBars />
            </button>
            <h5 className="chapter-title-text">{title}</h5>
          </div>

          <button className="home-btn-unique" onClick={() => navigate("/learn")}>
            <FaHome />
          </button>
        </nav>

        <div className="scroll-content-unique">
          <div className="content-card-unique">
            <Suspense
              fallback={
                <div className="loading-screen">
                  <div className="skeleton line" />
                  <div className="skeleton line" />
                  <div className="skeleton line short" />
                </div>
              }
            >
              <Component />
            </Suspense>

            {/* Navigation */}
            <div className="chapter-nav-buttons">
              <button
                onClick={handlePrev}
                disabled={selected === 0}
                className="nav-btn prev btn btn-primary btn-sm m-2"
              >
                <FaArrowLeft /> Previous
              </button>

              <button
                onClick={handleNext}
                disabled={selected === chapters.length - 1}
                className="nav-btn next btn btn-primary btn-sm m-2"
              >
                Next <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </main>

      {showSidebar && (
        <div
          className="overlay-unique"
          onClick={() => setShowSidebar(false)}
        />
      )}
    </div>
  );
}
