import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaBars, FaTimes, FaChevronRight } from "react-icons/fa";

/* ===== Chapters ===== */
import Chapter1 from "./Chapter1.jsx";
import Chapter2 from "./Chapter2.jsx";
import Chapter3 from "./Chapter3.jsx";
import Chapter4 from "./Chapter4.jsx";
import Chapter5 from "./Chapter5.jsx";
import Chapter6 from "./Chapter6.jsx";
import Chapter7 from "./Chapter7.jsx";
import Chapter8 from "./Chapter8.jsx";
import Chapter9 from "./Chapter9.jsx";
import Chapter10 from "./Chapter10.jsx";
import Chapter11 from "./Chapter11.jsx";

/* ===== CHAPTER META ===== */
const chapters = [
  { id: 0, title: "C++ Introduction" },
  { id: 1, title: "C++ Get Started" },
  { id: 2, title: "C++ Syntax" },
  { id: 3, title: "C++ Output" },
  { id: 4, title: "C++ Comments" },
  { id: 5, title: "C++ Variables" },
  { id: 6, title: "C++ Data Types" },
  { id: 7, title: "C++ Type Conversion" },
  { id: 8, title: "C++ Constants" },
  { id: 9, title: "C++ Operators" },
  { id: 10, title: "C++ Strings" },
];

const chapterComponents = [
  Chapter1,
  Chapter2,
  Chapter3,
  Chapter4,
  Chapter5,
  Chapter6,
  Chapter7,
  Chapter8,
  Chapter9,
  Chapter10,
  Chapter11,
];

export default function CPlusPlus() {
  const [selected, setSelected] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  const CurrentChapter = chapterComponents[selected];

  /* Scroll reset on chapter change */
  useEffect(() => {
    const scrollDiv = document.querySelector(".scroll-content-unique");
    if (scrollDiv) scrollDiv.scrollTop = 0;
  }, [selected]);

  /* Body scroll lock */
  useEffect(() => {
    document.body.style.overflow = showSidebar ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showSidebar]);

  return (
    <div className="app-container-unique">

      {/* ===== SIDEBAR ===== */}
      <aside className={`sidebar-wrapper-unique ${showSidebar ? "open" : ""}`}>
        <div className="sidebar-header-unique">
          <div className="header-top">
            <div className="badge-c">C++</div>
            <button
              className="close-btn-unique"
              onClick={() => setShowSidebar(false)}
            >
              <FaTimes />
            </button>
          </div>

          <div className="header-meta">
            <strong>C++ Programming</strong>

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

      {/* ===== MAIN CONTENT ===== */}
      <main className="main-section-unique">
        <nav className="top-nav-unique">
          <div className="nav-left">
            <button
              className="hamburger-unique"
              onClick={() => setShowSidebar(true)}
            >
              <FaBars />
            </button>

            <h5 className="chapter-title-text">
              {chapters[selected].title}
            </h5>
          </div>

          <button
            className="home-btn-unique"
            onClick={() => navigate("/learn")}
          >
            <FaHome />
          </button>
        </nav>

        <div className="scroll-content-unique">
          <div className="content-card-unique">
            <CurrentChapter />
          </div>
        </div>
      </main>

      {/* ===== OVERLAY ===== */}
      {showSidebar && (
        <div
          className="overlay-unique"
          onClick={() => setShowSidebar(false)}
        />
      )}
    </div>
  );
}
