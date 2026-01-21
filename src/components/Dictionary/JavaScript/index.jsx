// src/components/Dictionary/JavaScript/index.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaBars, FaTimes, FaChevronRight } from "react-icons/fa";

// Chapters Import
import Intro from "./Chapters/Intro.jsx";
import Variables from "./Chapters/Variables.jsx";
// import DataTypes from "./Chapters/DataTypes.jsx";
// import Operators from "./Chapters/Operators.jsx";
// import Functions from "./Chapters/Functions.jsx";
// import Loops from "./Chapters/Loops.jsx";
// import Conditionals from "./Chapters/Conditionals.jsx";
// import Arrays from "./Chapters/Arrays.jsx";
// import Objects from "./Chapters/Objects.jsx";
// import DOM from "./Chapters/DOM.jsx";
// import Events from "./Chapters/Events.jsx";

const chapters = [
  { id: 0, title: "Introduction", component: <Intro /> },
  { id: 1, title: "Variables", component: <Variables /> },
//   { id: 2, title: "Data Types", component: <DataTypes /> },
//   { id: 3, title: "Operators", component: <Operators /> },
//   { id: 4, title: "Functions", component: <Functions /> },
//   { id: 5, title: "Loops", component: <Loops /> },
//   { id: 6, title: "Conditionals", component: <Conditionals /> },
//   { id: 7, title: "Arrays", component: <Arrays /> },
//   { id: 8, title: "Objects", component: <Objects /> },
//   { id: 9, title: "DOM Manipulation", component: <DOM /> },
//   { id: 10, title: "Events", component: <Events /> },
];

export default function JavaScriptCourse() {
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
    <div className="app-container-unique js-theme">

      {/* ===== SIDEBAR ===== */}
      <aside className={`sidebar-wrapper-unique ${showSidebar ? "open" : ""}`}>
        <div className="sidebar-header-unique">
          <div className="header-top js-bg">
            <div className="badge-c">JS</div>
            <button className="close-btn-unique" onClick={() => setShowSidebar(false)}>
              <FaTimes />
            </button>
          </div>
          <div className="header-meta">
            <strong>JavaScript Tutorial</strong>
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
