// src/components/Dictionary/CPlusPlus/index.jsx
import React, { useState, useEffect, useRef } from 'react';
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
// import Chapter12 from './Chapter12.jsx';
// import Chapter13 from './Chapter13.jsx';
// import Chapter14 from './Chapter14.jsx';
// import Chapter15 from './Chapter15.jsx';
// import Chapter16 from './Chapter16.jsx';
// import Chapter17 from './Chapter17.jsx';
// import Chapter18 from './Chapter18.jsx';
// import Chapter19 from './Chapter19.jsx';
// import Chapter20 from './Chapter20.jsx';

import "./index.css"

const chapters = [
  { id: 1, title: 'C++ Introduction', completed: false },
  { id: 2, title: 'C++ Get Started', completed: false },
  { id: 3, title: 'C++ Syntax', completed: false },
  { id: 4, title: 'C++ Output', completed: false },
  { id: 5, title: 'C++ Comments', completed: false },
  { id: 6, title: 'C++ Variables', completed: false },
  { id: 7, title: 'C++ Data Types', completed: false },
  { id: 8, title: 'C++ Type Conversion', completed: false },
  { id: 9, title: 'C++ Constants', completed: false },
  { id: 10, title: 'C++ Operators', completed: false },
  { id: 11, title: 'C++ Strings', completed: false },
  { id: 12, title: 'C++ If...Else', completed: false },
  { id: 13, title: 'C++ Switch', completed: false },
  { id: 14, title: 'C++ While Loop', completed: false },
  { id: 15, title: 'C++ For Loop', completed: false },
  { id: 16, title: 'C++ Arrays', completed: false },
  { id: 17, title: 'C++ Functions', completed: false },
  { id: 18, title: 'C++ Pointers', completed: false },
  { id: 19, title: 'C++ Classes & Objects', completed: false },
  { id: 20, title: 'C++ OOP Concepts', completed: false },
];

export default function CPlusPlus() {
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const sidebarRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Check if desktop on mount and resize
  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 992);
    };

    checkIfDesktop(); // Initial check
    window.addEventListener('resize', checkIfDesktop);
    
    return () => {
      window.removeEventListener('resize', checkIfDesktop);
    };
  }, []);

  // Toggle body scroll when sidebar opens/closes (mobile only)
  useEffect(() => {
    if (!isDesktop) {
      if (sidebarOpen) {
        document.body.classList.add('sidebar-open');
      } else {
        document.body.classList.remove('sidebar-open');
      }
    }
    
    return () => {
      document.body.classList.remove('sidebar-open');
    };
  }, [sidebarOpen, isDesktop]);

  // Close sidebar when clicking outside (mobile only)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarOpen && !isDesktop) {
        const sidebar = sidebarRef.current;
        const hamburger = hamburgerRef.current;
        
        if (sidebar && !sidebar.contains(event.target) &&
            hamburger && !hamburger.contains(event.target)) {
          setSidebarOpen(false);
        }
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [sidebarOpen, isDesktop]);

  // Handle resize to adjust sidebar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
        // On mobile, close sidebar if open
        if (sidebarOpen) {
          setSidebarOpen(false);
        }
      }
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [sidebarOpen]);

  const renderChapter = () => {
    switch (selectedChapter) {
      case 1: return <Chapter1 />;
      case 2: return <Chapter2 />;
      case 3: return <Chapter3 />;
      case 4: return <Chapter4 />;
      case 5: return <Chapter5 />;
      case 6: return <Chapter6 />;
      case 7: return <Chapter7 />;
      case 8: return <Chapter8 />;
      case 9: return <Chapter9 />;
      case 10: return <Chapter10 />;
      case 11: return <Chapter11 />;
      // case 12: return <Chapter12 />;
      // case 13: return <Chapter13 />;
      // case 14: return <Chapter14 />;
      // case 15: return <Chapter15 />;
      // case 16: return <Chapter16 />;
      // case 17: return <Chapter17 />;
      // case 18: return <Chapter18 />;
      // case 19: return <Chapter19 />;
      // case 20: return <Chapter20 />;
      default: return <Chapter1 />;
    }
  };

  const completedChapters = chapters.filter(ch => ch.completed).length;
  const totalChapters = chapters.length;

  // Determine CSS classes based on screen size
  const sidebarClassName = isDesktop 
    ? `sidebar-wrapper ${sidebarOpen ? 'desktop-open' : ''}`
    : `sidebar-wrapper ${sidebarOpen ? 'open' : ''}`;
  
  const mainContentClassName = isDesktop
    ? `main-content-wrapper ${sidebarOpen ? 'desktop-sidebar-open' : ''}`
    : `main-content-wrapper ${sidebarOpen ? 'sidebar-open' : ''}`;

  const currentChapter = chapters.find(ch => ch.id === selectedChapter);

  return (
    <div className="cpp-tutorial">
      {/* Mobile Header */}
      <div className="mobile-topbar d-lg-none">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center py-2 px-3">
            <button 
              ref={hamburgerRef}
              className="hamburger-btn"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle menu"
              aria-expanded={sidebarOpen}
            >
              <span className={`hamburger-line ${sidebarOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-line ${sidebarOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-line ${sidebarOpen ? 'open' : ''}`}></span>
            </button>
            
            <div className="text-center">
              <h6 className="mb-0 fw-bold">C++ Tutorial</h6>
              <small className="text-muted">Chapter {selectedChapter}/{totalChapters}</small>
            </div>
            
            <button 
              className="btn btn-sm btn-primary"
              onClick={() => {
                const next = Math.min(selectedChapter + 1, totalChapters);
                setSelectedChapter(next);
              }}
              disabled={selectedChapter === totalChapters}
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid g-0">
        <div className="row g-0">
          {/* Overlay - Mobile only */}
          {!isDesktop && (
            <div 
              className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`} 
              onClick={() => setSidebarOpen(false)}
            />
          )}
          
          {/* Sidebar */}
          <div 
            ref={sidebarRef}
            className={sidebarClassName}
          >
            <div className="sidebar-content">
              {/* Desktop Sidebar Header with Close Button */}
              {isDesktop && sidebarOpen && (
                <div className="sidebar-header-desktop">
                  <h5 className="mb-0">
                    <i className="bi bi-cpu me-2"></i>
                    C++ Tutorial Chapters
                  </h5>
                  <button 
                    className="sidebar-close-btn"
                    onClick={() => setSidebarOpen(false)}
                    aria-label="Close sidebar"
                  >
                    <i className="bi bi-x-lg"></i>
                  </button>
                </div>
              )}

              {/* Mobile Sidebar Header */}
              <div className="sidebar-header d-flex justify-content-between align-items-center p-3 border-bottom d-lg-none">
                <h5 className="mb-0 fw-bold">
                  <i className="bi bi-cpu me-2"></i>
                  C++ Tutorial
                </h5>
                <button 
                  className="sidebar-close-btn"
                  onClick={() => setSidebarOpen(false)}
                  aria-label="Close menu"
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>

              <div className="chapters-scroll">
                {chapters.map(chapter => (
                  <div 
                    key={chapter.id}
                    className={`chapter-link ${selectedChapter === chapter.id ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedChapter(chapter.id);
                      setSidebarOpen(false);
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <span className={`chapter-status ${chapter.completed ? 'completed' : 'pending'}`}>
                        <i className={`bi ${chapter.completed ? 'bi-check-circle' : 'bi-circle'}`}></i>
                      </span>
                      <span className="chapter-text">
                        {chapter.title}
                      </span>
                    </div>
                    {selectedChapter === chapter.id && (
                      <i className="bi bi-chevron-right text-primary"></i>
                    )}
                  </div>
                ))}
              </div>

              <div className="sidebar-footer p-3 border-top">
                <div className="progress-container">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted small">Progress</span>
                    <span className="fw-bold">{completedChapters}/{totalChapters}</span>
                  </div>
                  <div className="progress">
                    <div 
                      className="progress-bar" 
                      style={{ width: `${(completedChapters / totalChapters) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className={mainContentClassName}>
            {/* Desktop Navigation */}
            <div className="desktop-nav d-none d-lg-flex justify-content-between align-items-center">
              {/* Left Section: Hamburger + Title */}
              <div className="desktop-nav-header">
                <button
                  className={`hamburger-btn desktop-hamburger-btn ${sidebarOpen ? 'hidden' : ''}`}
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  aria-label="Toggle sidebar"
                >
                  <span className={`hamburger-line ${sidebarOpen ? 'open' : ''}`}></span>
                  <span className={`hamburger-line ${sidebarOpen ? 'open' : ''}`}></span>
                  <span className={`hamburger-line ${sidebarOpen ? 'open' : ''}`}></span>
                </button>
                
                <div className="desktop-title">
                  <div>
                    <h5 className="desktop-title-text mb-0">C++ Tutorial</h5>
                    <div className="desktop-title-subtext">
                      Chapter {selectedChapter}/{totalChapters}
                    </div>
                  </div>
                </div>
                
                <button
                  className="btn btn-outline-primary btn-sm nav-btn"
                  disabled={selectedChapter === 1}
                  onClick={() => setSelectedChapter(selectedChapter - 1)}
                >
                  <i className="bi bi-chevron-left me-2"></i>
                  Previous
                </button>
              </div>
              
              {/* Center Section: Current Chapter */}
              <div className="text-center mx-4">
                <h5 className="mb-0 fw-bold">{currentChapter?.title}</h5>
                <small className="text-muted">Chapter {selectedChapter}</small>
              </div>
              
              {/* Right Section: Next Button */}
              <div className="nav-controls">
                <button
                  className="btn btn-primary btn-sm nav-btn"
                  disabled={selectedChapter === totalChapters}
                  onClick={() => setSelectedChapter(selectedChapter + 1)}
                >
                  Next
                  <i className="bi bi-chevron-right ms-2"></i>
                </button>
              </div>
            </div>

            {/* Mobile Chapter Navigation */}
            <div className="mobile-chapter-nav d-flex d-lg-none justify-content-between align-items-center p-3 border-bottom">
              <button
                className="btn btn-outline-primary btn-sm"
                disabled={selectedChapter === 1}
                onClick={() => setSelectedChapter(selectedChapter - 1)}
              >
                <i className="bi bi-chevron-left"></i>
              </button>
              
              <div className="text-center">
                <h6 className="mb-0 fw-bold">{currentChapter?.title}</h6>
              </div>
              
              <button
                className="btn btn-outline-primary btn-sm"
                disabled={selectedChapter === totalChapters}
                onClick={() => setSelectedChapter(selectedChapter + 1)}
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>

            {/* Content */}
            <div className="content-area p-0 m-0 p-lg-4">
              {renderChapter()}
              
              {/* Navigation at bottom */}
              <div className="bottom-nav d-flex justify-content-between align-items-center">
                <button
                  className="btn btn-outline-primary bottom-nav-btn"
                  disabled={selectedChapter === 1}
                  onClick={() => setSelectedChapter(selectedChapter - 1)}
                >
                  <i className="bi bi-chevron-left me-2"></i>
                  Previous Chapter
                </button>
                
                <div className="text-center d-none d-md-block">
                  <small className="text-muted">
                    Chapter {selectedChapter} of {totalChapters}
                  </small>
                  <div className="mt-1">
                    <small className="text-primary fw-medium">
                      {currentChapter?.title}
                    </small>
                  </div>
                </div>
                
                <button
                  className="btn btn-primary bottom-nav-btn"
                  disabled={selectedChapter === totalChapters}
                  onClick={() => setSelectedChapter(selectedChapter + 1)}
                >
                  Next Chapter
                  <i className="bi bi-chevron-right ms-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}