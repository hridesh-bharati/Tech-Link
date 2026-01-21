// src/components/Dictionary/Fundamentals/index.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaBars, FaTimes, FaChevronRight } from "react-icons/fa";

/* ===== CHAPTERS ===== */
import Overview from "./Overview.jsx";
import Chapter1 from "./Chapter1";
import Chapter2 from "./Chapter2";
import Chapter3 from "./Chapter3";
import Chapter4 from "./Chapter4";
import Chapter5 from "./Chapter5";
import Chapter6 from "./Chapter6";
import Chapter7 from "./Chapter7";
import Chapter8 from "./Chapter8";

/* ===== META ===== */
const chapters = [
  { id: 0, title: "Overview" },
  { id: 1, title: "Introduction to Computer" },
  { id: 2, title: "Computer Hardware" },
  { id: 3, title: "Computer Software" },
  { id: 4, title: "CPU (Central Processing Unit)" },
  { id: 5, title: "Input & Output Devices" },
  { id: 6, title: "Computer Memory" },
  { id: 7, title: "Operating System" },
  { id: 8, title: "Applications of Computer" },
];

const chapterComponents = [
  Overview,
  Chapter1,
  Chapter2,
  Chapter3,
  Chapter4,
  Chapter5,
  Chapter6,
  Chapter7,
  Chapter8,
];

export default function Fundamentals() {
  const [selected, setSelected] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  const CurrentChapter = chapterComponents[selected];

  /* Reset internal scroll */
  useEffect(() => {
    const scrollDiv = document.querySelector(".scroll-content-unique");
    if (scrollDiv) scrollDiv.scrollTop = 0;
  }, [selected]);

  /* Lock body scroll when sidebar open */
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
            <div className="badge-c">BC</div>
            <button
              className="close-btn-unique"
              onClick={() => setShowSidebar(false)}
            >
              <FaTimes />
            </button>
          </div>

          <div className="header-meta">
            <strong>Fundamentals</strong>

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
            {/* Overview needs setter */}
            {selected === 0 ? (
              <Overview setChapter={setSelected} />
            ) : (
              <CurrentChapter />
            )}
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
