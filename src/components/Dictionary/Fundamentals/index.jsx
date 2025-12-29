import React, { useState, useEffect, useRef } from "react";

import Overview from "./Overview.jsx";
import Chapter1 from "./Chapter1";
import Chapter2 from "./Chapter2";
import Chapter3 from "./Chapter3";
import Chapter4 from "./Chapter4";
import Chapter5 from "./Chapter5";
import Chapter6 from "./Chapter6";
import Chapter7 from "./Chapter7";
import Chapter8 from "./Chapter8";

import "../CLanguage/index.css"; // SAME CSS reuse

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

export default function Fundamentals() {
  const [selectedChapter, setSelectedChapter] = useState(0); // ✅ Overview first
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const sidebarRef = useRef(null);

  // Responsive check
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 992);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Body scroll lock (mobile)
  useEffect(() => {
    if (!isDesktop && sidebarOpen) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }
  }, [sidebarOpen, isDesktop]);

  const renderChapter = () => {
    switch (selectedChapter) {
      case 0: return <Overview />;
      case 1: return <Chapter1 />;
      case 2: return <Chapter2 />;
      case 3: return <Chapter3 />;
      case 4: return <Chapter4 />;
      case 5: return <Chapter5 />;
      case 6: return <Chapter6 />;
      case 7: return <Chapter7 />;
      case 8: return <Chapter8 />;
      default: return <Overview />;
    }
  };

  const totalChapters = chapters.length;
  const completedChapters = selectedChapter + 1;
  const currentChapter = chapters.find(c => c.id === selectedChapter);

  return (
    <div className="c-tutorial">

      {/* Mobile Top Bar */}
      <div className="mobile-topbar d-lg-none">
        <div className="d-flex justify-content-between align-items-center px-3 py-2">

          <button
            className="hamburger-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>

          <div className="text-center">
            <h6 className="mb-0 fw-bold">Computer Fundamentals</h6>
            <small className="text-muted">
              Chapter {selectedChapter + 1} of {totalChapters}
            </small>
          </div>

          <button
            className="btn btn-sm btn-primary"
            disabled={selectedChapter === totalChapters - 1}
            onClick={() => setSelectedChapter(selectedChapter + 1)}
          >
            ▶
          </button>

        </div>
      </div>

      <div className="container-fluid g-0">
        <div className="row g-0">

          {/* Overlay */}
          {!isDesktop && sidebarOpen && (
            <div
              className="sidebar-overlay open"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Sidebar */}
          <div
            ref={sidebarRef}
            className={`sidebar-wrapper ${sidebarOpen ? "open" : ""}`}
          >
            <div className="sidebar-content">

              <div className="sidebar-header p-3 border-bottom">
                <h5 className="fw-bold mb-0">📘 Fundamentals</h5>
              </div>

              <div className="chapters-scroll">
                {chapters.map(ch => (
                  <div
                    key={ch.id}
                    className={`chapter-link ${selectedChapter === ch.id ? "active" : ""}`}
                    onClick={() => {
                      setSelectedChapter(ch.id);
                      setSidebarOpen(false);
                    }}
                  >
                    <span>
                      {selectedChapter === ch.id ? "📖 " : ""}
                      {ch.title}
                    </span>
                    {selectedChapter === ch.id && <span>▶</span>}
                  </div>
                ))}
              </div>

              <div className="sidebar-footer p-3 border-top">
                <small>Progress</small>
                <div className="progress mt-1">
                  <div
                    className="progress-bar"
                    style={{
                      width: `${(completedChapters / totalChapters) * 100}%`
                    }}
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Main Content */}
          <div className="main-content-wrapper">

            <div className="desktop-nav d-none d-lg-flex justify-content-between align-items-center">
              <button
                className="hamburger-btn"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                ☰
              </button>

              <div className="text-center">
                <h5 className="fw-bold mb-0">{currentChapter?.title}</h5>
                <small className="text-muted">
                  Chapter {selectedChapter + 1} of {totalChapters}
                </small>
              </div>

              <button
                className="btn btn-primary btn-sm"
                disabled={selectedChapter === totalChapters - 1}
                onClick={() => setSelectedChapter(selectedChapter + 1)}
              >
                Next →
              </button>
            </div>

            <div className="content-area p-3 p-lg-4">
              {renderChapter()}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
