import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AppSidebar from "./AppSidebar";
import "./Header.css";

const NAV_ITEMS = [
  { id: "home", label: "Home", path: "/", icon: "bi-house-fill" },
  { id: "about", label: "About", path: "/about", icon: "bi-person-fill" },
  { id: "learn", label: "Learn", path: "/learn", icon: "bi-code-slash" },
  { id: "projects", label: "Projects", path: "/projects", icon: "bi-grid-fill" },
  { id: "contact", label: "Contact", path: "/contact", icon: "bi-chat-dots-fill" },
];

export default function Header({ isSwipingRef }) {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1025);

  useEffect(() => {
    const onScroll = () => {
      if (isSwipingRef?.current) return;
      setScrolled(window.scrollY > 10);
    };
    
    const onResize = () => {
      setIsDesktop(window.innerWidth >= 1025);
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [isSwipingRef]);

  const isActive = (path) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <>
      {/* ===== TOP HEADER ===== */}
      <header className={`pf-header ${scrolled ? "pf-blur" : ""}`}>
        <div className="pf-header-inner container-lg">
          
          {/* Left: Brand & Menu Button */}
          <div className="pf-header-left d-flex justify-between  w-100">
            <button
              className="pf-brand-btn"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              <i className="bi bi-list" />
            </button>
            
            <Link to="/" className="pf-logo-link">
              <img 
                className="pf-logo" 
                src="icons/logo2.png" 
                alt="Site Logo"
              />
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          {isDesktop && (
            <nav className="pf-desktop-nav">
              {NAV_ITEMS.map((n) => (
                <Link
                  key={n.id}
                  to={n.path}
                  className={`pf-desktop-nav-item ${isActive(n.path) ? "active" : ""}`}
                >
                  <i className={`bi ${n.icon}`} />
                  <span>{n.label}</span>
                </Link>
              ))}
            </nav>
          )}

          {/* Right: Desktop Actions */}
          {isDesktop && (
            <div className="pf-header-actions ms-4">
              <button 
                className="pf-theme-toggle"
                onClick={() => {
                  const current = localStorage.getItem("theme-mode") || "system";
                  const next = current === "light" ? "dark" : "light";
                  localStorage.setItem("theme-mode", next);
                  document.documentElement.setAttribute("data-theme", next);
                }}
                aria-label="Toggle theme"
              >
                <i className="bi bi-sun-fill" />
                <i className="bi bi-moon-fill" />
              </button>
              
              <button 
                className="pf-settings-btn"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open settings"
              >
                <i className="bi bi-gear-fill" />
              </button>
            </div>
          )}
        </div>
      </header>

      {/* ===== MOBILE BOTTOM NAV ===== */}
      {!isDesktop && (
        <nav className="pf-mob-float">
          {NAV_ITEMS.map((n) => (
            <Link
              key={n.id}
              to={n.path}
              className={`pf-mob-btn ${isActive(n.path) ? "active" : ""}`}
            >
              <i className={`bi ${n.icon}`} />
              <span>{n.label}</span>
            </Link>
          ))}
        </nav>
      )}

      {/* ===== SETTINGS SIDEBAR ===== */}
      <AppSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}