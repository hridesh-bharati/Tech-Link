import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useTheme } from "../../contexts/ThemeContext";
import "./AppSidebar.css";

export default function AppSidebar({ open, onClose, onNavigate }) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const isLoggedIn = !!user;

  // Get current theme mode (light/dark/system)
  const getCurrentThemeMode = useCallback(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    return 'system';
  }, []);

  const [themeMode, setThemeMode] = useState(() => getCurrentThemeMode());

  // Menu data
  const coursesMenu = [
    { path: "/courses", icon: "bi-laptop-fill", label: "Courses" },
    { path: "/videos", icon: "bi-play-circle-fill", label: "Videos", badge: "FREE" },
    { path: "/notes", icon: "bi-journal-text", label: "Notes", badge: "PDF" },
    { path: "/quizzes", icon: "bi-question-circle-fill", label: "Quizzes", badge: "100+" },
  ];

  const appMenu = [
    { path: "/dashboard", icon: "bi-speedometer2", label: "Dashboard" },
    { path: "/profile", icon: "bi-person-circle", label: "Profile" },
    { path: "/settings", icon: "bi-gear-fill", label: "Settings" },
    { path: "/notifications", icon: "bi-bell-fill", label: "Notifications", badge: 3 },
    { path: "/bookmarks", icon: "bi-bookmark-fill", label: "Bookmarks" },
  ];

  const helpMenu = [
    { path: "/help", icon: "bi-question-circle", label: "Help" },
    { path: "/faq", icon: "bi-chat-left-text", label: "FAQ" },
    { path: "/feedback", icon: "bi-chat-heart", label: "Feedback" },
  ];

  const themeOptions = [
    { value: "light", label: "Light", icon: "bi-sun" },
    { value: "dark", label: "Dark", icon: "bi-moon" },
    { value: "system", label: "System", icon: "bi-display" },
  ];

  // Handle theme change
  const handleThemeChange = useCallback((mode) => {
    if (mode === "system") {
      // Remove saved theme to use system preference
      localStorage.removeItem('theme');
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const newTheme = prefersDark ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
    } else {
      // Set specific theme
      document.documentElement.setAttribute('data-theme', mode);
      localStorage.setItem('theme', mode);
      
      // Update theme context
      if (mode !== theme) {
        toggleTheme();
      }
    }
    setThemeMode(mode);
  }, [theme, toggleTheme]);

  // Update theme mode when theme changes
  useEffect(() => {
    setThemeMode(getCurrentThemeMode());
  }, [theme, getCurrentThemeMode]);

  // Body lock and swipe gestures
  useEffect(() => {
    if (open) {
      document.body.classList.add('sidebar-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('sidebar-open');
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.classList.remove('sidebar-open');
      document.body.style.overflow = '';
    };
  }, [open]);

  const sidebarTouchStart = useRef(null);

  // Navigation handler
  const go = useCallback((path) => {
    if (onNavigate) {
      onNavigate(path, { hapticFeedback: false });
    } else {
      navigate(path);
    }
    onClose();
  }, [navigate, onClose, onNavigate]);

  const renderMenu = (items) =>
    items.map((item) => (
      <button
        key={item.path}
        className="sidebar-menu-item"
        onClick={() => go(item.path)}
      >
        <div className="sidebar-menu-icon">
          <i className={`bi ${item.icon}`} />
        </div>
        <span className="sidebar-menu-label">{item.label}</span>
        {item.badge && (
          <span className={`sidebar-menu-badge ${typeof item.badge === 'number' ? 'badge-count' : 'badge-text'}`}>
            {item.badge}
          </span>
        )}
      </button>
    ));

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="sidebar-backdrop"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.aside
            className="app-sidebar"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              type: "tween",
              ease: [0.25, 0.46, 0.45, 0.94],
              duration: 0.3
            }}
          >
            <div className="sidebar-swipe-handle">
              <div className="sidebar-swipe-bar"></div>
            </div>

            <div className="sidebar-header">
              <div className="sidebar-logo">
                <div className="sidebar-logo-icon">
                  H
                </div>
                <div className="sidebar-logo-text">
                  <h3 className="sidebar-app-name">Portfolio Pro</h3>
                  <p className="sidebar-app-tagline">Learn • Build • Share</p>
                </div>
              </div>
              <button
                className="sidebar-close-btn"
                onClick={onClose}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>

            <div className="sidebar-user-section">
              {isLoggedIn ? (
                <button
                  className="sidebar-user-card"
                  onClick={() => go("/profile")}
                >
                  <div className="sidebar-user-avatar">
                    {user?.photoURL ? (
                      <img src={user.photoURL} alt={user.name} />
                    ) : (
                      <span>{user?.name?.[0]?.toUpperCase() || "U"}</span>
                    )}
                  </div>
                  <div className="sidebar-user-info">
                    <h4 className="sidebar-user-name">{user?.name}</h4>
                    <p className="sidebar-user-email">{user?.email}</p>
                    <span className="sidebar-user-status">
                      <i className="bi bi-circle-fill"></i> Online
                    </span>
                  </div>
                  <div className="sidebar-user-action">
                    <i className="bi bi-chevron-right"></i>
                  </div>
                </button>
              ) : (
                <button
                  className="sidebar-login-card"
                  onClick={() => go("/login")}
                >
                  <div className="sidebar-login-icon">
                    <i className="bi bi-person-circle"></i>
                  </div>
                  <div className="sidebar-login-info">
                    <h4 className="sidebar-login-title">Sign In</h4>
                    <p className="sidebar-login-subtitle">Access all features</p>
                  </div>
                  <div className="sidebar-login-action">
                    <i className="bi bi-arrow-right-short"></i>
                  </div>
                </button>
              )}
            </div>

            <div className="sidebar-quick-actions">
              <button 
                className="sidebar-quick-action"
                onClick={() => go("/create")}
              >
                <i className="bi bi-plus-circle"></i>
                <span>Create</span>
              </button>
              <button 
                className="sidebar-quick-action"
                onClick={() => go("/downloads")}
              >
                <i className="bi bi-download"></i>
                <span>Download</span>
              </button>
            </div>

            <div className="sidebar-content">
              <div className="sidebar-section">
                <h6 className="sidebar-section-title">
                  <i className="bi bi-book"></i>
                  Learning
                </h6>
                {renderMenu(coursesMenu)}
              </div>

              <div className="sidebar-section">
                <h6 className="sidebar-section-title">
                  <i className="bi bi-grid-3x3-gap"></i>
                  App Features
                </h6>
                {renderMenu(appMenu)}
              </div>

              {/* THEME SECTION - FIXED */}
              <div className="sidebar-section">
                <h6 className="sidebar-section-title">
                  <i className="bi bi-palette"></i>
                  Appearance
                </h6>
                <div className="sidebar-theme-selector">
                  {themeOptions.map((option) => (
                    <button
                      key={option.value}
                      className={`sidebar-theme-option ${themeMode === option.value ? 'active' : ''}`}
                      onClick={() => handleThemeChange(option.value)}
                    >
                      <div className="sidebar-theme-icon">
                        <i className={`bi ${option.icon}`}></i>
                      </div>
                      <span className="sidebar-theme-label">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="sidebar-section">
                <h6 className="sidebar-section-title">
                  <i className="bi bi-life-preserver"></i>
                  Support
                </h6>
                {renderMenu(helpMenu)}
              </div>

              {isLoggedIn && (
                <button
                  className="sidebar-logout-btn"
                  onClick={() => {
                    logout();
                    go("/login");
                  }}
                >
                  <i className="bi bi-box-arrow-left"></i>
                  <span>Logout</span>
                </button>
              )}

              <div className="sidebar-footer">
                <div className="sidebar-footer-content">
                  <p className="sidebar-footer-text">
                    Portfolio Pro v2.1.4
                  </p>
                  <p className="sidebar-footer-copyright">
                    © 2024 Made with <i className="bi bi-heart-fill"></i>
                  </p>
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}