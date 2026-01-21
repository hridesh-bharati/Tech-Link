import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaBars, FaTimes, FaChevronRight, FaChevronLeft } from "react-icons/fa";

/* ===== Chapters (Ensure all 20 are mapped) ===== */
import Chapter1 from "./Chapter1"; import Chapter2 from "./Chapter2";
import Chapter3 from "./Chapter3"; import Chapter4 from "./Chapter4";
import Chapter5 from "./Chapter5"; import Chapter6 from "./Chapter6";
import Chapter7 from "./Chapter7"; import Chapter8 from "./Chapter8";
import Chapter9 from "./Chapter9"; import Chapter10 from "./Chapter10";
import Chapter11 from "./Chapter11"; import Chapter12 from "./Chapter12";
import Chapter13 from "./Chapter13"; import Chapter14 from "./Chapter14";
import Chapter15 from "./Chapter15"; import Chapter16 from "./Chapter16";
import Chapter17 from "./Chapter17"; import Chapter18 from "./Chapter18";
import Chapter19 from "./Chapter19"; import Chapter20 from "./Chapter20";

const chapters = [
  { id: 0, title: "C Introduction" }, { id: 1, title: "C Get Started" },
  { id: 2, title: "C Syntax" }, { id: 3, title: "C Output" },
  { id: 4, title: "C Comments" }, { id: 5, title: "C Variables" },
  { id: 6, title: "C Data Types" }, { id: 7, title: "C Type Conversion" },
  { id: 8, title: "C Constants" }, { id: 9, title: "C Operators" },
  { id: 10, title: "C Booleans" }, { id: 11, title: "C If Else" },
  { id: 12, title: "C Switch" }, { id: 13, title: "C While Loop" },
  { id: 14, title: "C For Loop" }, { id: 15, title: "C Break Continue" },
  { id: 16, title: "C Arrays" }, { id: 17, title: "C Strings" },
  { id: 18, title: "C User Input" }, { id: 19, title: "C Memory Address" }
];

const chapterComponents = [
  Chapter1, Chapter2, Chapter3, Chapter4, Chapter5,
  Chapter6, Chapter7, Chapter8, Chapter9, Chapter10,
  Chapter11, Chapter12, Chapter13, Chapter14, Chapter15,
  Chapter16, Chapter17, Chapter18, Chapter19, Chapter20
];

export default function CLanguage() {
  const [selected, setSelected] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  const CurrentChapter = chapterComponents[selected];

  // Scroll to top when chapter changes
  useEffect(() => {
    const scrollDiv = document.querySelector(".scroll-content-unique");
    if (scrollDiv) scrollDiv.scrollTop = 0;
  }, [selected]);

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
      <div className="badge-c">C</div>
      <button className="close-btn-unique" onClick={() => setShowSidebar(false)}>
        <FaTimes />
      </button>
    </div>
    <div className="header-meta">
      <strong>C Programming</strong>
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
            <h5 className="chapter-title-text">{chapters[selected].title}</h5>
          </div>
          <button className="home-btn-unique" onClick={() => navigate("/learn")}>
            <FaHome />
          </button>
        </nav>

        <div className="scroll-content-unique">
          <div className="content-card-unique">
            <CurrentChapter />
          </div>

          <div className="nav-footer-unique">
            <button
              className="btn-prev-next"
              disabled={selected === 0}
              onClick={() => setSelected((s) => s - 1)}
            >
              <FaChevronLeft /> Previous
            </button>

            <button
              className="btn-prev-next primary"
              disabled={selected === chapters.length - 1}
              onClick={() => setSelected((s) => s + 1)}
            >
              Next <FaChevronRight />
            </button>
          </div>
        </div>
      </main>

      {/* ===== OVERLAY ===== */}
      {showSidebar && <div className="overlay-unique" onClick={() => setShowSidebar(false)}></div>}
    </div>
  );
}