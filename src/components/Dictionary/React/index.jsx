// src/components/Dictionary/ReactCourse/index.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaBars, FaTimes, FaChevronRight } from "react-icons/fa";

// Chapters Import
import Intro from "./Chapters/Intro.jsx";
import JSX from "./Chapters/JSX.jsx";
// import Components from "./Chapters/Components.jsx";
// import PropsState from "./Chapters/PropsState.jsx";
// import Lifecycle from "./Chapters/Lifecycle.jsx";
// import Events from "./Chapters/Events.jsx";
// import Hooks from "./Chapters/Hooks.jsx";
// import Router from "./Chapters/Router.jsx";
// import Redux from "./Chapters/Redux.jsx";
// import ContextAPI from "./Chapters/ContextAPI.jsx";

const chapters = [
  { id: 0, title: "Introduction", component: <Intro /> },
  { id: 1, title: "JSX", component: <JSX /> },
  // { id: 2, title: "Components", component: <Components /> },
  // { id: 3, title: "Props & State", component: <PropsState /> },
  // { id: 4, title: "Lifecycle Methods", component: <Lifecycle /> },
  // { id: 5, title: "Events", component: <Events /> },
  // { id: 6, title: "Hooks", component: <Hooks /> },
  // { id: 7, title: "React Router", component: <Router /> },
  // { id: 8, title: "Redux", component: <Redux /> },
  // { id: 9, title: "Context API", component: <ContextAPI /> },
];

export default function ReactCourse() {
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

  return (
    <div className="app-container-unique react-theme">

      {/* ===== SIDEBAR ===== */}
      <aside className={`sidebar-wrapper-unique ${showSidebar ? "open" : ""}`}>
        <div className="sidebar-header-unique">
          <div className="header-top react-bg">
            <div className="badge-c">React</div>
            <button className="close-btn-unique" onClick={() => setShowSidebar(false)}>
              <FaTimes />
            </button>
          </div>
          <div className="header-meta">
            <strong>React Tutorial</strong>
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
            {currentChapter.component}
          </div>
        </div>
      </main>

      {/* ===== OVERLAY ===== */}
      {showSidebar && <div className="overlay-unique" onClick={() => setShowSidebar(false)} />}
    </div>
  );
}
