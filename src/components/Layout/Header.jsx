import { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useTheme } from "../../contexts/ThemeContext";
import AppSidebar from "./AppSidebar";
import "./Header.css";

const NAV_CONFIG = {
  desktop: [
    { id: "home", label: "Home", path: "/", icon: "bi-house" },
    { id: "about", label: "About", path: "/about", icon: "bi-person" },
    { id: "learn", label: "Learn", path: "/learn", icon: "bi-code-square" },
    { id: "projects", label: "Projects", path: "/projects", icon: "bi-briefcase" },
    { id: "contact", label: "Contact", path: "/contact", icon: "bi-chat" },
  ],
  mobile: [
    { id: "home", path: "/", icon: "bi-house", label: "Home", iconActive: "bi-house-fill" },
    { id: "about", path: "/about", icon: "bi-person", label: "About", iconActive: "bi-person-fill" },
    { id: "contact", path: "/contact", icon: "", label: "Contact", iconActive: "" },
    { id: "learn", path: "/learn", icon: "bi-code-square", label: "Learn", iconActive: "bi-code-slash" },
    { id: "projects", path: "/projects", icon: "bi-briefcase", label: "Projects", iconActive: "bi-briefcase-fill" },
  ]
};

const USER_MENU_OPTIONS = [
  { id: "profile", label: "Profile", path: "/profile", icon: "bi-person-circle" },
  { id: "dashboard", label: "Dashboard", path: "/dashboard", icon: "bi-speedometer2" },
  { id: "settings", label: "Settings", path: "/settings", icon: "bi-gear" },
  { id: "logout", label: "Logout", icon: "bi-box-arrow-left", isLogout: true }
];

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 1025);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [mobileNavVisible, setMobileNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const headerRef = useRef(null);
  const userMenuRef = useRef(null);
  const hideTimeoutRef = useRef(null);

  const activePath = useMemo(() => pathname, [pathname]);

  const userInitial = useMemo(() => {
    if (!user?.name) return 'U';
    return user.name.charAt(0).toUpperCase();
  }, [user]);

  const isActive = useCallback((path) => {
    if (path === "/") return activePath === "/";
    return activePath.startsWith(path);
  }, [activePath]);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  const handleMobileNavScroll = useCallback(() => {
    if (isDesktop) return;

    const scrollY = window.scrollY;
    const scrollDelta = scrollY - lastScrollY;

    if (Math.abs(scrollDelta) > 10) {
      if (scrollDelta > 0 && scrollY > 100) {
        setMobileNavVisible(false);
        if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = setTimeout(() => {
          setMobileNavVisible(true);
        }, 2000);
      } else if (scrollDelta < 0) {
        setMobileNavVisible(true);
        if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      }
    }
    setLastScrollY(scrollY);
  }, [lastScrollY, isDesktop]);

  const handleResize = useCallback(() => {
    const desktop = window.innerWidth >= 1025;
    setIsDesktop(desktop);
    if (desktop) {
      setSidebarOpen(false);
      setShowUserMenu(false);
    }
  }, []);

  const handleNavigate = useCallback((path, options = {}) => {
    const { closeMenu = true } = options;
    if (closeMenu) {
      setSidebarOpen(false);
      setShowUserMenu(false);
    }
    if (!isDesktop) setMobileNavVisible(true);
    navigate(path);
  }, [navigate, isDesktop]);

  const handleLogout = useCallback(() => {
    logout();
    setShowUserMenu(false);
    navigate('/login');
  }, [logout, navigate]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleMobileNavScroll);
    window.addEventListener('resize', handleResize);

    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleMobileNavScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, [handleScroll, handleMobileNavScroll, handleResize]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowUserMenu(false);
        setSidebarOpen(false);
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        handleNavigate('/search');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleNavigate]);

  return (
    <>
      <header
        ref={headerRef}
        className={`my-header ${scrolled ? 'scrolled' : ''}`}
      >
        <div className="header-container">
          <div className="header-left">
            <button
              className="menu-btn"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              <i className="bi bi-list" />
            </button>

            <Link
              to="/"
              className="logo-container"
              onClick={(e) => {
                e.preventDefault();
                handleNavigate("/");
              }}
            >
              <div className="logo-wrapper">
                <img
                  src="/icons/logo2.png"
                  alt="Portfolio Pro"
                  className="header-logo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="logo-fallback">
                  <div className="logo-icon">
                    <i className="bi bi-code-slash"></i>
                  </div>
                  <div className="logo-title">Portfolio Pro</div>
                </div>
              </div>
            </Link>

            {!isDesktop && (
              <div className="mobile-header-right">
                {user ? (
                  <button
                    className="mobile-user-btn"
                    onClick={() => handleNavigate('/profile')}
                    aria-label="User profile"
                  >
                    <i className="bi bi-person-circle" />
                    {user.notifications > 0 && (
                      <span className="notification-badge" />
                    )}
                  </button>
                ) : (
                  <button
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

          {isDesktop && (
            <>
              <nav className="desktop-nav" aria-label="Main navigation">
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
                      </Link>
                    );
                  })}
                </div>
              </nav>

              <div className="header-right">
                <div className="header-actions">
                  <button
                    className="action-btn"
                    onClick={() => handleNavigate('/search')}
                    aria-label="Search"
                  >
                    <i className="bi bi-search" />
                  </button>

                  <button
                    className="action-btn notification-btn"
                    onClick={() => handleNavigate('/notifications')}
                    aria-label="Notifications"
                  >
                    <i className="bi bi-bell" />
                    {user?.notifications > 0 && (
                      user.notifications > 9 ? (
                        <span className="notification-badge" />
                      ) : (
                        <span className="notification-count">{user.notifications}</span>
                      )
                    )}
                  </button>

                  <button
                    className="theme-toggle-btn"
                    onClick={toggleTheme}
                    aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
                  >
                    <i className="bi bi-sun theme-icon-sun" />
                    <i className="bi bi-moon theme-icon-moon" />
                  </button>

                  {user ? (
                    <div className="user-menu-container" ref={userMenuRef}>
                      <button
                        className="user-btn"
                        onClick={() => setShowUserMenu(!showUserMenu)}
                        aria-expanded={showUserMenu}
                        aria-haspopup="true"
                      >
                        {user.avatar ? (
                          <img src={user.avatar} alt={user.name} className="user-avatar" />
                        ) : (
                          <div className="user-initials">{userInitial}</div>
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
                                  <div className="user-initials">{userInitial}</div>
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
                                  className="dropdown-item"
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
                                  <span>{option.label}</span>
                                </Link>
                              )
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      className="auth-btn"
                      onClick={() => handleNavigate('/login')}
                      aria-label="Login"
                    >
                      <i className="bi bi-person-circle" />
                      <span>Sign in</span>
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </header>

      {!isDesktop && (
        <nav
          className={`mobile-bottom-nav ${mobileNavVisible ? '' : 'nav-hidden'}`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="nav-items-container">
            {NAV_CONFIG.mobile.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`mobile-nav-btn${active ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate(item.path);
                  }}
                  aria-current={active ? 'page' : undefined}
                >
                  <div className="mobile-nav-icon-wrapper">
                    <i className={`bi ${active ? item.iconActive || item.icon : item.icon}`} />
                  </div>
                  <span className="mobile-nav-label">{item.label}</span>
                </Link>
              );
            })}

            <div className="nav-center-action">
              <button
                className="center-action-btn"
                onClick={() => handleNavigate('/contact')}
                aria-label="Contact"
              >
                <i class="bi bi-telephone-fill"></i>
              </button>
            </div>
          </div>
        </nav>
      )}

      <div style={{ height: isDesktop ? '70px' : '60px' }} aria-hidden="true" />

      <AppSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onNavigate={handleNavigate}
      />
    </>
  );
}