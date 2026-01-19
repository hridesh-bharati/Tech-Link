// src/components/Dictionary/CPlusPlus/index.jsx
import React, { useState } from 'react';
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

import "./index.css"  

const chapters = [
  { id: 1, title: 'Introduction' },
  { id: 2, title: 'Get Started' },
  { id: 3, title: 'Syntax' },
  { id: 4, title: 'Output' },
  { id: 5, title: 'Comments' },
  { id: 6, title: 'Variables' },
  { id: 7, title: 'Data Types' },
  { id: 8, title: 'Type Conversion' },
  { id: 9, title: 'Constants' },
  { id: 10, title: 'Operators' },
  { id: 11, title: 'Strings' },
];

export default function CPlusPlus() {
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const total = chapters.length;

  const handleNext = () => setSelectedChapter(prev => Math.min(prev + 1, total));
  const handlePrev = () => setSelectedChapter(prev => Math.max(prev - 1, 1));

  const ActiveChapterView = () => {
    const map = {
      1: Chapter1, 2: Chapter2, 3: Chapter3, 4: Chapter4, 5: Chapter5,
      6: Chapter6, 7: Chapter7, 8: Chapter8, 9: Chapter9, 10: Chapter10, 11: Chapter11
    };
    const Component = map[selectedChapter] || Chapter1;
    return <Component />;
  };

  return (
    <div className="android-shell">
      {/* Material 3 Top App Bar */}
      <header className="top-app-bar">
        <button className="icon-btn" onClick={() => setDrawerOpen(true)}>
          <i className="bi bi-list"></i>
        </button>
        
        <div className="app-bar-title">
          <h1>C++ Dictionary</h1>
          <span>{selectedChapter} / {total} • {chapters[selectedChapter-1].title}</span>
        </div>

        <div className="app-bar-actions">
          <button 
            className="icon-btn" 
            onClick={handlePrev} 
            disabled={selectedChapter === 1}
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button 
            className="icon-btn" 
            onClick={handleNext} 
            disabled={selectedChapter === total}
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </header>

      {/* Content Area */}
      <main className="main-viewport">
        <div className="content-card">
          <ActiveChapterView />
        </div>
      </main>

      {/* Floating Action Button */}
      {selectedChapter < total && (
        <button className="fab-extended" onClick={handleNext}>
          <span>Next</span>
          <i className="bi bi-arrow-right-short"></i>
        </button>
      )}

      {/* Drawer Menu */}
      <div className={`scrim ${drawerOpen ? 'active' : ''}`} onClick={() => setDrawerOpen(false)} />
      <aside className={`nav-drawer ${drawerOpen ? 'open' : ''}`}>
        <div className="drawer-headline">Chapters</div>
        <nav className="drawer-items">
          {chapters.map(ch => (
            <div 
              key={ch.id} 
              className={`drawer-pill ${selectedChapter === ch.id ? 'active' : ''}`}
              onClick={() => { setSelectedChapter(ch.id); setDrawerOpen(false); }}
            >
              <span className="pill-index">{ch.id}</span>
              <span className="pill-label">{ch.title}</span>
            </div>
          ))}
        </nav>
      </aside>
    </div>
  );
}