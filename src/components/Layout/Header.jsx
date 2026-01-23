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
    { id: "contact", label: "Contact", path: "/contact", icon: "bi-chat" },
    { id: "learn", label: "Learn", path: "/learn", icon: "bi-code-square" },
    { id: "projects", label: "Projects", path: "/projects", icon: "bi-briefcase" },
  ],
  mobile: [
    { id: "home", path: "/", icon: "bi-house", label: "Home", iconActive: "bi-house-fill" },
    { id: "about", path: "/about", icon: "bi-person", label: "About", iconActive: "bi-person-fill" },
    { id: "contact", path: "/contact", icon: "bi-chat", label: "Contact", iconActive: "bi-chat-fill" },
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

  const userMenuRef = useRef(null);
  const hideTimeoutRef = useRef(null);

  const isActive = (path) => path === "/" ? pathname === "/" : pathname.startsWith(path);

  const userInitial = useMemo(() => user?.name?.charAt(0).toUpperCase() || 'U', [user]);

  // Combined Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (!isDesktop) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setMobileNavVisible(false);
        } else {
          setMobileNavVisible(true);
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', () => setIsDesktop(window.innerWidth >= 1025));
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', () => {});
    };
  }, [lastScrollY, isDesktop]);

  const handleAction = (path, options = {}) => {
    if (!isDesktop && 'vibrate' in navigator) navigator.vibrate(20);
    if (options.closeMenu) {
      setShowUserMenu(false);
      setSidebarOpen(false);
    }
    navigate(path);
  };

  return (
    <>
      <header className={`main-header fixed-top ${scrolled ? 'scrolled shadow-sm' : ''}`}>
        <div className="container-fluid h-100 d-flex align-items-center justify-content-between px-3 px-lg-5">
          
          {/* Left: Brand */}
          <div className="d-flex align-items-center gap-2">
            <button className="btn p-0 border-0" onClick={() => setSidebarOpen(true)}>
              <i className="bi bi-list fs-2"></i>
            </button>
            <Link to="/" className="navbar-brand d-flex align-items-center gap-2 m-0">
              <img src="/icons/logo2.png" alt="Logo" height="35" />
            </Link>
          </div>

          {/* Center: Desktop Nav */}
          {isDesktop && (
            <nav className="d-flex align-items-center gap-4">
              {NAV_CONFIG.desktop.map(item => (
                <Link 
                  key={item.id} 
                  to={item.path} 
                  className={`nav-link-custom ${isActive(item.path) ? 'active' : ''}`}
                >
                  <i className={`bi ${item.icon} me-2`}></i>
                  {item.label}
                </Link>
              ))}
            </nav>
          )}

          {/* Right: Actions */}
          <div className="d-flex align-items-center gap-3">
            <button className="btn-icon-circle d-none d-md-flex" onClick={() => handleAction('/search')}><i className="bi bi-search"></i></button>
            <button className="btn-icon-circle d-none d-md-flex" onClick={toggleTheme}>
              <i className={`bi ${theme === 'light' ? 'bi-moon' : 'bi-sun'}`}></i>
            </button>

            {user ? (
              <div className="position-relative" ref={userMenuRef}>
                <div className="avatar-trigger" onClick={() => setShowUserMenu(!showUserMenu)}>
                  {user.avatar ? <img src={user.avatar} alt="user" /> : <div className="user-initial">{userInitial}</div>}
                </div>
                {showUserMenu && (
                  <div className="dropdown-custom shadow-lg border">
                    <div className="px-3 py-2 border-bottom mb-1">
                      <div className="fw-bold small">{user.name}</div>
                      <div className="text-muted extra-small">{user.email}</div>
                    </div>
                    {USER_MENU_OPTIONS.map(opt => (
                      <button key={opt.id} className={`dropdown-item-custom ${opt.isLogout ? 'text-danger' : ''}`} 
                        onClick={() => opt.isLogout ? logout() : handleAction(opt.path, {closeMenu: true})}>
                        <i className={`bi ${opt.icon} me-2`}></i> {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button className="btn btn-primary rounded-pill px-4 btn-sm" onClick={() => handleAction('/login')}>Sign In</button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      {!isDesktop && (
        <nav className={`mobile-nav-bottom fixed-bottom bg-white border-top transition-all ${mobileNavVisible ? 'show' : 'hide'}`}>
          <div className="d-flex justify-content-around align-items-center h-100 position-relative">
            {NAV_CONFIG.mobile.map(item => {
              const active = isActive(item.path);
              return (
                <button key={item.id} className={`m-nav-item ${active ? 'active' : ''}`} onClick={() => handleAction(item.path)}>
                  <i className={`bi ${active ? item.iconActive : item.icon}`}></i>
                  <span>{item.label}</span>
                </button>
              );
            })}
            {/* Center Floating Action */}
            <div className="center-fab-container">
              <button className="center-fab" onClick={() => handleAction('/contact')}>
                <i className="bi bi-telephone-fill"></i>
              </button>
            </div>
          </div>
        </nav>
      )}

      <div style={{ height: '70px' }}></div>

      <AppSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} onNavigate={handleAction} />
    </>
  );
}