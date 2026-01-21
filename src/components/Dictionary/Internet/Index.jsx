// src/components/Dictionary/InternetCourse/index.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaBars, FaTimes, FaChevronRight } from "react-icons/fa";

// Chapters Import
import Intro from "./Chapters/Intro.jsx";
// import History from "./Chapters/History.jsx";
// import Protocols from "./Chapters/Protocols.jsx";
// import IPAddress from "./Chapters/IPAddress.jsx";
// import DNS from "./Chapters/DNS.jsx";
// import HTTP from "./Chapters/HTTP.jsx";
// import FTP from "./Chapters/FTP.jsx";
// import Email from "./Chapters/Email.jsx";
// import Security from "./Chapters/Security.jsx";
// import WebTools from "./Chapters/WebTools.jsx";

const chapters = [
  { id: 0, title: "Introduction", component: <Intro /> },
//   { id: 1, title: "History of Internet", component: <History /> },
//   { id: 2, title: "Internet Protocols", component: <Protocols /> },
//   { id: 3, title: "IP Addressing", component: <IPAddress /> },
//   { id: 4, title: "DNS", component: <DNS /> },
//   { id: 5, title: "HTTP & HTTPS", component: <HTTP /> },
//   { id: 6, title: "FTP & File Transfer", component: <FTP /> },
//   { id: 7, title: "Email & Communication", component: <Email /> },
//   { id: 8, title: "Internet Security", component: <Security /> },
//   { id: 9, title: "Web Tools & Browsers", component: <WebTools /> },
];

export default function InternetCourse() {
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
    <div className="app-container-unique internet-theme">

      {/* ===== SIDEBAR ===== */}
      <aside className={`sidebar-wrapper-unique ${showSidebar ? "open" : ""}`}>
        <div className="sidebar-header-unique">
          <div className="header-top internet-bg">
            <div className="badge-c">Net</div>
            <button className="close-btn-unique" onClick={() => setShowSidebar(false)}>
              <FaTimes />
            </button>
          </div>
          <div className="header-meta">
            <strong>Internet Tutorial</strong>
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
