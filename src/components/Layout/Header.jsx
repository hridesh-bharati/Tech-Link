import { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useTheme } from "../../contexts/ThemeContext";
import AppSidebar from "./AppSidebar";
import "./Header.css";
import GoogleTranslate from "../GoogleTranslate";

// Navigation configuration
const NAV_CONFIG = {
  desktop: [
    { id: "home", label: "Home", path: "/", icon: "bi-house-fill" },
    { id: "about", label: "About", path: "/about", icon: "bi-person-fill" },
    { id: "learn", label: "Learn", path: "/learn", icon: "bi-code-slash" },
    { id: "projects", label: "Projects", path: "/projects", icon: "bi-briefcase-fill" },
    { id: "contact", label: "Contact", path: "/contact", icon: "bi-chat-dots-fill" },
  ],
  mobile: [
    { id: "home", path: "/", icon: "bi-house-door-fill", label: "Home", iconActive: "bi-house-fill" },
    { id: "about", path: "/about", icon: "bi-person", label: "About", iconActive: "bi-person-fill" },
    { id: "contact", path: "/contact", icon: "", label: "Contact", iconActive: "bi-chat-dots-fill" },
    { id: "learn", path: "/learn", icon: "bi-code-square", label: "Learn", iconActive: "bi-code-slash" },
    { id: "projects", path: "/projects", icon: "bi-briefcase", label: "Projects", iconActive: "bi-briefcase-fill" },
  ]
};

// User menu options
const USER_MENU_OPTIONS = [
  {
    id: "profile",
    label: "Profile",
    path: "/profile",
    icon: "bi-person-circle",
    description: "View your profile"
  },
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: "bi-speedometer2",
    description: "Your activity"
  },
  {
    id: "settings",
    label: "Settings",
    path: "/settings",
    icon: "bi-gear",
    description: "Account settings"
  },
  {
    id: "logout",
    label: "Logout",
    icon: "bi-box-arrow-left",
    isLogout: true,
    className: "text-danger"
  }
];

// Haptic feedback utility
const haptic = (pattern = "light") => {
  if ("vibrate" in navigator) {
    const patterns = {
      light: 5,
      medium: 10,
      heavy: 20,
      navigation: 15,
    };
    navigator.vibrate(patterns[pattern] || patterns.light);
  }
};

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  // State
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 1025);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [mobileNavVisible, setMobileNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Refs
  const headerRef = useRef(null);
  const userMenuRef = useRef(null);
  const hideTimeoutRef = useRef(null);

  // Memoized values
  const activePath = useMemo(() => pathname, [pathname]);

  const userInitial = useMemo(() => {
    if (!user?.name) return 'U';
    return user.name.charAt(0).toUpperCase();
  }, [user]);

  // Check if path is active
  const isActive = useCallback((path) => {
    if (path === "/") return activePath === "/";
    return activePath.startsWith(path);
  }, [activePath]);

  // Haptic feedback
  const triggerHaptic = useCallback((intensity = "light") => {
    haptic(intensity);
  }, []);

  // Handle theme toggle
  const handleThemeToggle = useCallback(() => {
    triggerHaptic("medium");
    toggleTheme();
  }, [toggleTheme, triggerHaptic]);

  // Scroll handler
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  // Mobile nav scroll handler
  const handleMobileNavScroll = useCallback(() => {
    if (isDesktop) return;

    const scrollY = window.scrollY;
    const scrollDelta = scrollY - lastScrollY;

    if (Math.abs(scrollDelta) > 10) {
      if (scrollDelta > 0) {
        // Scrolling DOWN - hide nav
        setMobileNavVisible(false);
        if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = setTimeout(() => {
          setMobileNavVisible(true);
        }, 2000);
      } else if (scrollDelta < 0) {
        // Scrolling UP - show nav
        setMobileNavVisible(true);
        if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      }
    }
    setLastScrollY(scrollY);
  }, [lastScrollY, isDesktop]);

  // Resize handler
  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    const desktop = width >= 1025;
    setIsDesktop(desktop);
    if (desktop) {
      setSidebarOpen(false);
      setShowUserMenu(false);
    }
  }, []);

  // Navigation handler
  const handleNavigate = useCallback((path, options = {}) => {
    const { hapticFeedback = true, closeMenu = true } = options;
    if (hapticFeedback) triggerHaptic("navigation");
    if (closeMenu) {
      setSidebarOpen(false);
      setShowUserMenu(false);
    }
    if (!isDesktop) setMobileNavVisible(true);
    navigate(path);
  }, [navigate, triggerHaptic, isDesktop]);

  // Logout handler
  const handleLogout = useCallback(() => {
    triggerHaptic("heavy");
    logout();
    setShowUserMenu(false);
    navigate('/login');
  }, [logout, navigate, triggerHaptic]);

  // Effects
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    const throttledNavScroll = () => {
      requestAnimationFrame(handleMobileNavScroll);
    };
    window.addEventListener('scroll', throttledNavScroll, { passive: true });

    window.addEventListener('resize', handleResize);

    // Click outside handler
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', throttledNavScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, [handleScroll, handleMobileNavScroll, handleResize]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowUserMenu(false);
        setSidebarOpen(false);
        triggerHaptic("light");
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        handleNavigate('/search', { hapticFeedback: true });
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 't') {
        e.preventDefault();
        handleThemeToggle();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleThemeToggle, handleNavigate, triggerHaptic]);

  return (
    <>
      <header
        ref={headerRef}
        className={`my-header theme-transition ${scrolled ? 'scrolled' : ''}`}
        role="banner"
      >
        <div className="header-container">
          {/* HEADER LEFT */}
          <div className="header-left">
            <button
              type="button"
              className="menu-btn"
              onClick={() => {
                triggerHaptic("medium");
                setSidebarOpen(true);
              }}
              aria-label="Open menu"
              aria-expanded={sidebarOpen}
            >
              <i className="bi bi-list" />
            </button>
            <GoogleTranslate />
            <Link
              to="/"
              className="logo-container"
              onClick={(e) => {
                e.preventDefault();
                handleNavigate("/");
              }}
              aria-label="Home"
            >
              <div className="logo-wrapper">
                <img
                  src="/icons/logo2.png"
                  alt="Portfolio Pro"
                  className="header-logo rounded-0"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="logo-fallback">
                  <div className="logo-icon">
                    <i className="bi bi-code-slash"></i>
                  </div>
                  <div className="logo-text">
                    <span className="logo-title">Portfolio Pro</span>
                    <span className="logo-subtitle">Learn • Build • Share</span>
                  </div>
                </div>
              </div>
            </Link>

            {!isDesktop && (
              <div className="mobile-header-right">
                {/* MOBILE THEME TOGGLE REMOVED - Now only in Desktop */}

                {/* Mobile User/Auth Button */}
                {user ? (
                  <button
                    type="button"
                    className="mobile-user-btn"
                    onClick={() => handleNavigate('/profile')}
                    aria-label="Go to profile"
                  >
                    <i className="bi bi-person-circle" />
                    {user.notifications > 0 && (
                      <span className="notification-badge">{user.notifications}</span>
                    )}
                  </button>
                ) : (
                  <button
                    type="button"
                    className="mobile-auth-btn"
                    onClick={() => handleNavigate('/login')}
                    aria-label="Login"
                  >
                    <i className="bi bi-person-circle" />
                  </button>
                )}
              </div>
            )}
          </div>

          {/* DESKTOP NAVIGATION */}
          {isDesktop && (
            <nav className="desktop-nav" aria-label="Primary navigation">
              <div className="nav-items">
                {NAV_CONFIG.desktop.map((item) => {
                  const active = isActive(item.path);
                  return (
                    <Link
                      key={item.id}
                      to={item.path}
                      className={`nav-item ${active ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigate(item.path);
                      }}
                      aria-current={active ? 'page' : undefined}
                    >
                      <i className={`bi ${item.icon}`} />
                      <span>{item.label}</span>
                      {active && <div className="active-indicator" />}
                    </Link>
                  );
                })}
              </div>
            </nav>
          )}

          {/* DESKTOP HEADER RIGHT */}
          {isDesktop && (
            <div className="header-right">
              <div className="header-actions">
                <button
                  type="button"
                  className="action-btn"
                  onClick={() => handleNavigate('/search')}
                  aria-label="Search"
                >
                  <i className="bi bi-search" />
                </button>

                <button
                  type="button"
                  className="action-btn notification-btn"
                  onClick={() => handleNavigate('/notifications')}
                  aria-label="Notifications"
                >
                  <i className="bi bi-bell" />
                  {user?.notifications > 0 && (
                    <span className="notification-badge">{user.notifications}</span>
                  )}
                </button>

                {/* Desktop Theme Toggle */}
                <button
                  type="button"
                  className="theme-toggle-btn"
                  onClick={handleThemeToggle}
                  aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
                >
                  <div className="theme-toggle-inner">
                    <i className="bi bi-sun theme-icon-sun" />
                    <i className="bi bi-moon theme-icon-moon" />
                  </div>
                </button>

                {user ? (
                  <div className="user-menu-container" ref={userMenuRef}>
                    <button
                      type="button"
                      className="user-btn"
                      onClick={() => setShowUserMenu(!showUserMenu)}
                      aria-expanded={showUserMenu}
                      aria-haspopup="true"
                    >
                      {user.avatar ? (
                        <img src={user.avatar} alt={`${user.name}'s profile`} className="user-avatar" />
                      ) : (
                        <div className="user-initials">
                          <span>{userInitial}</span>
                        </div>
                      )}
                    </button>

                    {showUserMenu && (
                      <div className="user-dropdown-menu" role="menu">
                        <div className="user-dropdown-content">
                          <div className="user-info-section">
                            <div className="user-avatar-small">
                              {user.avatar ? (
                                <img src={user.avatar} alt={user.name} />
                              ) : (
                                <div className="user-initials-small">{userInitial}</div>
                              )}
                            </div>
                            <div>
                              <div className="user-name">{user.name || 'User'}</div>
                              <div className="user-email">{user.email || ''}</div>
                            </div>
                          </div>

                          <hr className="dropdown-divider" />

                          {USER_MENU_OPTIONS.map((option) =>
                            option.isLogout ? (
                              <button
                                key={option.id}
                                type="button"
                                className={`dropdown-item ${option.className}`}
                                onClick={handleLogout}
                                role="menuitem"
                              >
                                <i className={`bi ${option.icon}`} />
                                <span>{option.label}</span>
                              </button>
                            ) : (
                              <Link
                                key={option.id}
                                to={option.path}
                                className="dropdown-item"
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleNavigate(option.path);
                                }}
                                role="menuitem"
                              >
                                <i className={`bi ${option.icon}`} />
                                <div>
                                  <div className="dropdown-item-label">{option.label}</div>
                                  {option.description && (
                                    <div className="dropdown-item-desc">{option.description}</div>
                                  )}
                                </div>
                              </Link>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    type="button"
                    className="auth-btn"
                    onClick={() => handleNavigate('/login')}
                    aria-label="Login"
                  >
                    <i className="bi bi-person-circle" />
                    <span>Login</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* MOBILE BOTTOM NAVIGATION */}
      {!isDesktop && (
        <nav
          className={`mobile-bottom-nav ${mobileNavVisible ? 'nav-visible' : 'nav-hidden'}`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          {/* Background div को और prominent बनाएं */}
          <div className="nav-background"></div>

          <div className="nav-items-container">
            {NAV_CONFIG.mobile.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`mobile-nav-btn ${active ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate(item.path, { hapticFeedback: false });
                  }}
                  aria-current={active ? 'page' : undefined}
                >
                  <div className="mobile-nav-icon-wrapper">
                    <div className="nav-icon-circle">
                      <i className={`bi ${active ? item.iconActive || item.icon : item.icon}`} />
                    </div>
                  </div>
                  <span className="mobile-nav-label">{item.label}</span>
                </Link>
              );
            })}

            <div className="nav-center-action">
              <button
                className="center-action-btn"
                onClick={() => handleNavigate('/contact')}
                aria-label="Create new"
              >
                <i className="bi bi-telephone-fill"></i>

              </button>
            </div>
          </div>
        </nav>
      )}
      {/* SPACER FOR FIXED HEADER */}
      <div style={{ height: '60px' }} aria-hidden="true" />

      {/* SIDEBAR */}
      <AppSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onNavigate={handleNavigate}
      />
    </>
  );
}