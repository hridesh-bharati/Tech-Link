// src\components\Dictionary\Fundamentals\index.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaHome } from "react-icons/fa";

import Overview from "./Overview.jsx";
import Chapter1 from "./Chapter1";
import Chapter2 from "./Chapter2";
import Chapter3 from "./Chapter3";
import Chapter4 from "./Chapter4";
import Chapter5 from "./Chapter5";
import Chapter6 from "./Chapter6";
import Chapter7 from "./Chapter7";
import Chapter8 from "./Chapter8";

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
  const [selected, setSelected] = useState(0);
  const [drawer, setDrawer] = useState(false);
  const [desktop, setDesktop] = useState(false);
  const navigate = useNavigate();

  const total = chapters.length;
  const current = chapters[selected];

  useEffect(() => {
    const check = () => setDesktop(window.innerWidth >= 992);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    document.body.style.overflow = !desktop && drawer ? "hidden" : "auto";
  }, [drawer, desktop]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selected]);

  const next = () => selected < total - 1 && setSelected(p => p + 1);
  const prev = () => selected > 0 && setSelected(p => p - 1);

  const renderChapter = () => {
    switch (selected) {
      case 0: return <Overview setChapter={setSelected} />;
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

  return (
    <div className="android-app">
      {/* 🔹 TOP APP BAR */}
      <header className="app-bar">
        <div className="app-bar-left">
           <button className="icon-btn ripple" onClick={() => setDrawer(true)}>☰</button>
           <div className="app-bar-title">
             <span>{current.title}</span>
             <small>Chapter {selected + 1} / {total}</small>
           </div>
        </div>
        
        {/* Quick Exit Button in Top Bar */}
        <button className="exit-top-btn" onClick={() => navigate("/learn")} title="Back to Courses">
          <FaHome />
        </button>
      </header>

      {/* 🔹 OVERLAY */}
      <div className={`drawer-overlay ${!desktop && drawer ? "visible" : ""}`} onClick={() => setDrawer(false)} />

      {/* 🔹 PROPER SIDEBAR (DRAWER) */}
      <aside className={`drawer ${drawer ? "open" : ""}`}>
        <div className="drawer-header">
          <div className="drawer-logo">BC</div>
          <div className="drawer-header-text">
             <h4>Fundamentals</h4>
             <p>Computer Course 2026</p>
          </div>
        </div>

        <div className="drawer-list">
          {chapters.map(ch => (
            <div
              key={ch.id}
              className={`drawer-item ripple ${selected === ch.id ? "active" : ""}`}
              onClick={() => {
                setSelected(ch.id);
                setDrawer(false);
              }}
            >
              <span className="ch-num">{ch.id + 1}</span>
              {ch.title}
            </div>
          ))}
        </div>
      </aside>

      {/* 🔹 MAIN CONTENT */}
      <main className="content-area">
        {renderChapter()}
      </main>

    </div>
  );
}