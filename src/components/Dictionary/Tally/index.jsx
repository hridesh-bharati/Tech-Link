// src/components/Dictionary/Tally/index.jsx
import React, { useState, useEffect, useRef } from "react";
import Chapter1 from "./Chapter1";
import "./index.css";

const chapters = [
  { id: 1, title: 'Tally Introduction', completed: true, category: 'Fundamentals', icon: '📊' },
  { id: 2, title: 'Company Creation', completed: true, category: 'Fundamentals', icon: '🏢' },
  { id: 3, title: 'Ledger Creation', completed: true, category: 'Fundamentals', icon: '📒' },
  { id: 4, title: 'Accounting Vouchers', completed: true, category: 'Accounting', icon: '🧾' },
  { id: 5, title: 'Payment Entry', completed: true, category: 'Accounting', icon: '💳' },
  { id: 6, title: 'Receipt Entry', completed: true, category: 'Accounting', icon: '💰' },
  { id: 7, title: 'Contra Entry', completed: true, category: 'Accounting', icon: '🔄' },
  { id: 8, title: 'Journal Entry', completed: true, category: 'Accounting', icon: '📝' },
  { id: 9, title: 'Sales & Purchase', completed: true, category: 'Accounting', icon: '🛒' },
  { id: 10, title: 'GST Setup', completed: true, category: 'GST', icon: '🏛️' },
  { id: 11, title: 'GST Invoices', completed: true, category: 'GST', icon: '🧾' },
  { id: 12, title: 'GST Returns', completed: true, category: 'GST', icon: '📄' },
  { id: 13, title: 'GST Reports', completed: true, category: 'GST', icon: '📊' },
  { id: 14, title: 'Inventory Management', completed: true, category: 'Advanced', icon: '📦' },
  { id: 15, title: 'Payroll Management', completed: true, category: 'Advanced', icon: '👥' },
  { id: 16, title: 'TDS Management', completed: true, category: 'Advanced', icon: '💸' },
  { id: 17, title: 'Tally Reports', completed: true, category: 'Advanced', icon: '📈' },
  { id: 18, title: 'Backup & Restore', completed: true, category: 'Advanced', icon: '💾' },
  { id: 19, title: 'Multi-Company', completed: true, category: 'Advanced', icon: '🏢' },
  { id: 20, title: 'Tally Shortcuts', completed: true, category: 'Advanced', icon: '⚡' },
];

const categories = ["All", "Fundamentals", "Accounting", "GST", "Advanced"];

export default function Tally() {
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredChapters, setFilteredChapters] = useState(chapters);
  const drawerRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Filter chapters by category
  useEffect(() => {
    if (selectedCategory === "All") setFilteredChapters(chapters);
    else setFilteredChapters(chapters.filter(ch => ch.category === selectedCategory));
  }, [selectedCategory]);

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (drawerOpen && drawerRef.current && !drawerRef.current.contains(e.target)
        && hamburgerRef.current && !hamburgerRef.current.contains(e.target)) {
        setDrawerOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [drawerOpen]);

  const renderChapter = () => {
    switch(selectedChapter){
      case 1: return <Chapter1 />;
      default: return <Chapter1 />;
    }
  }

  const completedChapters = chapters.filter(ch => ch.completed).length;
  const totalChapters = chapters.length;

  return (
    <div className="tally-tutorial">
      {/* Hamburger */}
      <div className="hamburger-container">
        <button ref={hamburgerRef} className="hamburger-btn" onClick={() => setDrawerOpen(!drawerOpen)}>
          <span className={`hamburger-line ${drawerOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${drawerOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${drawerOpen ? 'open' : ''}`}></span>
        </button>
        <span className="hamburger-title">Tally Chapters</span>
      </div>

      {/* Drawer Overlay */}
      <div className={`drawer-overlay ${drawerOpen ? 'open' : ''}`} onClick={() => setDrawerOpen(false)} />

      {/* Drawer */}
      <div ref={drawerRef} className={`drawer ${drawerOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <h5>Tally ERP 9</h5>
          <button className="close-btn" onClick={() => setDrawerOpen(false)}>&times;</button>
        </div>

        {/* Category Filters */}
        <div className="category-filters p-3 border-bottom">
          <small className="text-muted d-block mb-2">Filter by Category:</small>
          <div className="d-flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Chapter Links */}
        <div className="drawer-chapters">
          {filteredChapters.map(ch => (
            <div key={ch.id} className={`chapter-link ${selectedChapter === ch.id ? 'active' : ''}`}
              onClick={() => { setSelectedChapter(ch.id); setDrawerOpen(false); }}>
              <span className="chapter-icon">{ch.icon}</span>
              <span className="chapter-text">{ch.title}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="drawer-footer">
          <span>{completedChapters}/{totalChapters} completed</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {renderChapter()}
      </div>
    </div>
  )
}
