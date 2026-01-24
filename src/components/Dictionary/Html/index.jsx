import React, { useState, useEffect, Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaBars, FaTimes, FaChevronRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./index.css"
// Lazy loading for performance
const Intro = lazy(() => import("./Chapters/Intro.jsx"));
const Elements = lazy(() => import("./Chapters/Elements.jsx"));
const Attributes = lazy(() => import("./Chapters/Attributes.jsx"));
const Comment = lazy(() => import("./Chapters/Comment.jsx"));
const Headings = lazy(() => import("./Chapters/Headings.jsx"));
const Paragraphs = lazy(() => import("./Chapters/Paragraphs.jsx"));
const Formatting = lazy(() => import("./Chapters/Formatting.jsx"));
const Links = lazy(() => import("./Chapters/Links.jsx"));
const Images = lazy(() => import("./Chapters/Images.jsx"));
const Lists = lazy(() => import("./Chapters/Lists.jsx"));
const Tables = lazy(() => import("./Chapters/Tables.jsx"));

// const Forms = lazy(() => import("./Chapters/Forms.jsx"));
const chapters = [
  { id: 0, title: "Introduction", component: <Intro /> },
  { id: 1, title: "HTML Elements", component: <Elements /> },
  { id: 2, title: "HTML Comments", component: <Comment /> },
  { id: 3, title: "Attributes", component: <Attributes /> },
  { id: 4, title: "Headings", component: <Headings /> },
  { id: 5, title: "Paragraphs", component: <Paragraphs /> },
  { id: 6, title: "Formatting", component: <Formatting /> },
  { id: 7, title: "Links", component: <Links /> },
  { id: 8, title: "Images", component: <Images /> },
  { id: 9, title: "Lists", component: <Lists /> },
  { id: 10, title: "Tables", component: <Tables /> },
]


export default function HTML() {
  const [selected, setSelected] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  const currentChapter = chapters[selected];

  useEffect(() => {
    const scrollDiv = document.querySelector(".scroll-content-unique");
    if (scrollDiv) scrollDiv.scrollTop = 0;
  }, [selected]);

  useEffect(() => {
    document.body.style.overflow = showSidebar ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showSidebar]);

  const handleNext = () => {
    if (selected < chapters.length - 1) setSelected(selected + 1);
  };

  const handlePrev = () => {
    if (selected > 0) setSelected(selected - 1);
  };

  return (
    <div className="app-container-unique html-theme">
      {/* ===== SIDEBAR ===== */}
      <aside className={`sidebar-wrapper-unique ${showSidebar ? "open" : ""}`}>
        <div className="sidebar-header-unique">
          <div className="header-top html-bg">
            <div className="badge-c">HTML</div>
            <button className="close-btn-unique" onClick={() => setShowSidebar(false)}>
              <FaTimes />
            </button>
          </div>
          <div className="header-meta">
            <strong>HTML Tutorial</strong>
            <div className="progress-mini">
              <div className="progress-fill" style={{ width: `${((selected + 1) / chapters.length) * 100}%` }}></div>
            </div>
            <span>{selected + 1} of {chapters.length} Chapters</span>
          </div>
        </div>

        <div className="sidebar-list-unique">
          {chapters.map((ch) => (
            <div
              key={ch.id}
              className={`list-item-unique ${selected === ch.id ? "active" : ""}`}
              onClick={() => {
                setSelected(ch.id);
                setShowSidebar(false);
              }}
            >
              <div className="item-content">
                <span className="index-circle">{ch.id + 1}</span>
                <span className="chapter-title">{ch.title}</span>
              </div>
              {selected === ch.id && <FaChevronRight className="active-arrow" />}
            </div>
          ))}
        </div>
      </aside>

      {/* ===== MAIN CONTENT ===== */}
      <main className="main-section-unique">
        <nav className="top-nav-unique">
          <div className="nav-left">
            <button className="hamburger-unique" onClick={() => setShowSidebar(true)}>
              <FaBars />
            </button>
            <h5 className="chapter-title-text">{currentChapter.title}</h5>
          </div>
          <button className="home-btn-unique" onClick={() => navigate("/learn")}>
            <FaHome />
          </button>
        </nav>

        <div className="scroll-content-unique">
          <div className="content-card-unique">
            <Suspense fallback={<div className="loading-screen">Loading Chapter...</div>}>
              {currentChapter.component}
            </Suspense>

            {/* Navigation Buttons */}
            <div className="chapter-nav-buttons">
              <button onClick={handlePrev} disabled={selected === 0} className="nav-btn prev">
                <FaArrowLeft /> Previous
              </button>
              <button onClick={handleNext} disabled={selected === chapters.length - 1} className="nav-btn next">
                Next <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </main>

      {showSidebar && <div className="overlay-unique" onClick={() => setShowSidebar(false)} />}
    </div>
  );
}