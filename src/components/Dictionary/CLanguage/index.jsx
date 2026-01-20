import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaHome } from "react-icons/fa";

// Chapters Import
import Chapter1 from './Chapter1.jsx';
import Chapter2 from './Chapter2.jsx';
import Chapter3 from './Chapter3.jsx';
import Chapter4 from './Chapter4.jsx';
import Chapter5 from './Chapter5.jsx';
import Chapter6 from './Chapter6.jsx';
import Chapter7 from './Chapter7.jsx';
import Chapter8 from './Chapter8.jsx';
import Chapter9 from './Chapter9.jsx';
import Chapter10 from './Chapter10.jsx';
import Chapter11 from './Chapter11.jsx';
import Chapter12 from './Chapter12.jsx';
import Chapter13 from './Chapter13.jsx';
import Chapter14 from './Chapter14.jsx';
import Chapter15 from './Chapter15.jsx';
import Chapter16 from './Chapter16.jsx';
import Chapter17 from './Chapter17.jsx';
import Chapter18 from './Chapter18.jsx';
import Chapter19 from './Chapter19.jsx';
import Chapter20 from './Chapter20.jsx';

const chapters = [
  { id: 0, title: 'C Introduction' },
  { id: 1, title: 'C Get Started' },
  { id: 2, title: 'C Syntax' },
  { id: 3, title: 'C Output' },
  { id: 4, title: 'C Comments' },
  { id: 5, title: 'C Variables' },
  { id: 6, title: 'C Data Types' },
  { id: 7, title: 'C Type Conversion' },
  { id: 8, title: 'C Constants' },
  { id: 9, title: 'C Operators' },
  { id: 10, title: 'C Booleans' },
  { id: 11, title: 'C If...Else' },
  { id: 12, title: 'C Switch' },
  { id: 13, title: 'C While Loop' },
  { id: 14, title: 'C For Loop' },
  { id: 15, title: 'C Break/Continue' },
  { id: 16, title: 'C Arrays' },
  { id: 17, title: 'C Strings' },
  { id: 18, title: 'C User Input' },
  { id: 19, title: 'C Memory Address' },
];

export default function CLanguage() {
  const [selected, setSelected] = useState(0); // 0-based index like Fundamentals
  const [drawer, setDrawer] = useState(false);
  const [desktop, setDesktop] = useState(window.innerWidth >= 992);
  const navigate = useNavigate();

  const total = chapters.length;
  const current = chapters[selected];

  // Sync with window size
  useEffect(() => {
    const check = () => setDesktop(window.innerWidth >= 992);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Scroll to top on change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selected]);

  const next = () => selected < total - 1 && setSelected(p => p + 1);
  const prev = () => selected > 0 && setSelected(p => p - 1);

  // Switch Case rendering like Fundamentals
  const renderChapter = () => {
    switch (selected) {
      case 0: return <Chapter1 />;
      case 1: return <Chapter2 />;
      case 2: return <Chapter3 />;
      case 3: return <Chapter4 />;
      case 4: return <Chapter5 />;
      case 5: return <Chapter6 />;
      case 6: return <Chapter7 />;
      case 7: return <Chapter8 />;
      case 8: return <Chapter9 />;
      case 9: return <Chapter10 />;
      case 10: return <Chapter11 />;
      case 11: return <Chapter12 />;
      case 12: return <Chapter13 />;
      case 13: return <Chapter14 />;
      case 14: return <Chapter15 />;
      case 15: return <Chapter16 />;
      case 16: return <Chapter17 />;
      case 17: return <Chapter18 />;
      case 18: return <Chapter19 />;
      case 19: return <Chapter20 />;
      default: return <Chapter1 />;
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
        <button className="exit-top-btn" onClick={() => navigate("/learn")}>
          <FaHome />
        </button>
      </header>

      {/* 🔹 OVERLAY */}
      <div className={`drawer-overlay ${!desktop && drawer ? "visible" : ""}`} onClick={() => setDrawer(false)} />

      {/* 🔹 SIDEBAR (DRAWER) */}
      <aside className={`drawer ${drawer ? "open" : ""}`}>
        <div className="drawer-header">
          <div className="drawer-logo">C</div>
          <div className="drawer-header-text">
            <h4>C Language</h4>
            <p>Programming Course 2026</p>
          </div>
        </div>

        <div className="drawer-list">
          {chapters.map((ch) => (
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
        <div className="content-card">
           {renderChapter()}
        </div>
      </main>
    </div>
  );
}