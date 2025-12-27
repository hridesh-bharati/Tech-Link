import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Header.css";

export default function AppSidebar({ open, onClose }) {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("theme-mode") || "system"
  );
  const [appearanceOpen, setAppearanceOpen] = useState(false); // collapse state

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  // Apply theme
  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = (mode) => {
      if (mode === "system") {
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        root.setAttribute("data-theme", prefersDark ? "dark" : "light");
      } else {
        root.setAttribute("data-theme", mode);
      }
    };

    applyTheme(themeMode);
    localStorage.setItem("theme-mode", themeMode);
  }, [themeMode]);

  // Logout / close tab
  const handleLogout = () => {
    try {
      window.close();
      setTimeout(() => {
        alert("Please close the tab to exit the app.");
      }, 300);
    } catch {
      alert("Please close the tab to exit the app.");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            className="pf-backdrop"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
          >
            {/* HEADER */}
            <div className="pf-app-sidebar-head">
              <span>Settings</span>
              <button className="btn border-0 display-1" onClick={onClose}>
                <i className="bi bi-x-lg" />
              </button>
            </div>

            {/* PROFILE */}
            <div className="pf-profile">
              <div className="pf-avatar">HB</div>
              <div>
                <strong>Hridesh</strong>
                <p>Frontend Developer</p>
              </div>
            </div>

            {/* SETTINGS LIST */}
            <nav className="pf-settings-list">
              {/* PERSONALIZE */}
              <button className="pf-setting-item">
                <i className="bi bi-person" />
                <span>Personalize</span>
              </button>

              {/* APPEARANCE COLLAPSE */}
              <button
                className="pf-setting-item"
                onClick={() => setAppearanceOpen(!appearanceOpen)}
              >
                <i className="bi bi-palette" />
                <span>Appearance</span>
                <i
                  className={`bi ${appearanceOpen ? "bi-chevron-up" : "bi-chevron-down"
                    } pf-chevron`}
                />
              </button>

              {appearanceOpen && (
                <div className="pf-appearance-options">
                  {["system", "light", "dark"].map((mode) => (
                    <button
                      key={mode}
                      className={`pf-setting-item appearance-item ${themeMode === mode ? "active" : ""
                        }`}
                      onClick={() => setThemeMode(mode)}
                    >
                      <i
                        className={`bi ${mode === "system"
                            ? "bi-display"
                            : mode === "light"
                              ? "bi-sun"
                              : "bi-moon"
                          }`}
                      />
                      <span>{mode.charAt(0).toUpperCase() + mode.slice(1)}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* ABOUT */}
              <button className="pf-setting-item about-item">
                <i className="bi bi-info-circle" />
                <span>About</span>
              </button>

              {/* LOGOUT */}
              <button className="pf-setting-item danger" onClick={handleLogout}>
                <i className="bi bi-box-arrow-right" />
                <span>Logout</span>
              </button>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
