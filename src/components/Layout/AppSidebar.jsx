import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Header.css";

export default function AppSidebar({ open, onClose }) {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("theme-mode") || "system"
  );
  const [appearanceOpen, setAppearanceOpen] = useState(false);

  // Body scroll lock with useCallback
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Apply theme with useCallback
  const applyTheme = useCallback((mode) => {
    const root = document.documentElement;
    
    if (mode === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      root.setAttribute("data-theme", prefersDark ? "dark" : "light");
    } else {
      root.setAttribute("data-theme", mode);
    }
  }, []);

  // Apply theme on change
  useEffect(() => {
    applyTheme(themeMode);
    localStorage.setItem("theme-mode", themeMode);
  }, [themeMode, applyTheme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleChange = () => {
      if (themeMode === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [themeMode, applyTheme]);

  // Logout function
  const handleLogout = useCallback(() => {
    if (window.confirm("Are you sure you want to exit the app?")) {
      try {
        window.close();
      } catch {
        alert("Please close the tab to exit the app.");
      }
    }
  }, []);

  // Handle escape key to close sidebar
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape" && open) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [open, onClose]);

  // Appearance options data
  const appearanceOptions = [
    { value: "system", label: "System", icon: "bi-display" },
    { value: "light", label: "Light", icon: "bi-sun" },
    { value: "dark", label: "Dark", icon: "bi-moon" },
  ];

  // Navigation items
  const navItems = [
    { id: "personalize", label: "Personalize", icon: "bi-person" },
    { id: "appearance", label: "Appearance", icon: "bi-palette", hasChildren: true },
    { id: "about", label: "About", icon: "bi-info-circle" },
    { id: "logout", label: "Logout", icon: "bi-box-arrow-right", isDanger: true },
  ];

  return (
    <AnimatePresence mode="wait">
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            className="pf-backdrop"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          {/* SIDEBAR */}
          <motion.aside
            className="pf-app-sidebar"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            drag="x"
            dragConstraints={{ left: -300, right: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -120) onClose();
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Settings sidebar"
          >
            {/* HEADER */}
            <div className="pf-app-sidebar-head">
              <h2 className="pf-sidebar-title">Settings</h2>
              <button 
                className="pf-close-btn" 
                onClick={onClose}
                aria-label="Close sidebar"
              >
                <i className="bi bi-x-lg" />
              </button>
            </div>

            {/* PROFILE */}
            <div className="pf-profile">
              <div className="pf-avatar" aria-hidden="true">
                HB
              </div>
              <div className="pf-profile-info">
                <strong className="pf-profile-name">Hridesh</strong>
                <p className="pf-profile-role">Frontend Developer</p>
              </div>
            </div>

            {/* SETTINGS LIST */}
            <nav className="pf-settings-list" aria-label="Settings menu">
              {navItems.map((item) => {
                if (item.id === "appearance") {
                  return (
                    <div key={item.id}>
                      <button
                        className={`pf-setting-item ${appearanceOpen ? "active" : ""}`}
                        onClick={() => setAppearanceOpen(!appearanceOpen)}
                        aria-expanded={appearanceOpen}
                      >
                        <i className={`bi ${item.icon}`} />
                        <span>{item.label}</span>
                        <i
                          className={`bi ${appearanceOpen ? "bi-chevron-up" : "bi-chevron-down"
                            } pf-chevron`}
                          aria-hidden="true"
                        />
                      </button>

                      {appearanceOpen && (
                        <div className="pf-appearance-options">
                          {appearanceOptions.map((option) => (
                            <button
                              key={option.value}
                              className={`pf-setting-item ${themeMode === option.value ? "active" : ""
                                }`}
                              onClick={() => setThemeMode(option.value)}
                              aria-pressed={themeMode === option.value}
                            >
                              <i className={`bi ${option.icon}`} />
                              <span>{option.label}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <button
                    key={item.id}
                    className={`pf-setting-item ${item.isDanger ? "danger" : ""}`}
                    onClick={item.id === "logout" ? handleLogout : undefined}
                    aria-label={item.label}
                  >
                    <i className={`bi ${item.icon}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* VERSION INFO */}
            <div className="pf-sidebar-footer">
              <p className="pf-version-info">
                <i className="bi bi-code-slash" /> Version 1.0.0
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}