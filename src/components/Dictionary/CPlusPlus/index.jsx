import React, { useState, useEffect } from 'react';
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

const chapters = [
  { id: 0, title: 'Introduction' },
  { id: 1, title: 'Get Started' },
  { id: 2, title: 'Syntax' },
  { id: 3, title: 'Output' },
  { id: 4, title: 'Comments' },
  { id: 5, title: 'Variables' },
  { id: 6, title: 'Data Types' },
  { id: 7, title: 'Type Conversion' },
  { id: 8, title: 'Constants' },
  { id: 9, title: 'Operators' },
  { id: 10, title: 'Strings' },
];

export default function CPlusPlus() {
  const [selected, setSelected] = useState(0); // 0-based like others
  const [drawer, setDrawer] = useState(false);
  const [desktop, setDesktop] = useState(window.innerWidth >= 992);
  const navigate = useNavigate();

  const total = chapters.length;
  const current = chapters[selected];

  useEffect(() => {
    const check = () => setDesktop(window.innerWidth >= 992);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selected]);

  const next = () => selected < total - 1 && setSelected(p => p + 1);
  const prev = () => selected > 0 && setSelected(p => p - 1);

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
      default: return <Chapter1 />;
    }
  };

  return (
    <div className="android-app">
      {/* 🔹 TOP BAR */}
      <header className="app-bar">
        <div className="app-bar-left">
          <button className="icon-btn ripple" onClick={() => setDrawer(true)}>☰</button>
          <div className="app-bar-title">
            <span>{current.title}</span>
            <small>C++ Chapter {selected + 1} / {total}</small>
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
          <div className="drawer-logo">C++</div>
          <div className="drawer-header-text">
            <h4>C++ Course</h4>
            <p>Object Oriented Programming</p>
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

        <div className="drawer-footer">
          <button className="exit-drawer-btn" onClick={() => navigate("/learn")}>
            <FaSignOutAlt /> Back to All Courses
          </button>
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