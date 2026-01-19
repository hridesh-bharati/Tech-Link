import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useTheme } from "../../contexts/ThemeContext";
import { FaLaptopCode, FaTimes, FaSun, FaMoon, FaDownload, FaFilePdf, FaProjectDiagram } from "react-icons/fa";
import "./AppSidebar.css";

// Reusable NavItem to keep code DRY
const NavItem = ({ item, isActive, onClick }) => (
  <button 
    onClick={() => onClick(item.path)}
    className={`nav-pill-btn d-flex align-items-center gap-3 w-100 border-0 mb-1 ${isActive ? 'active shadow-sm' : ''}`}
  >
    <span className="icon-wrap">{item.icon}</span>
    <span className="flex-grow-1 text-start small fw-medium">{item.label}</span>
    {item.badge && <span className="badge rounded-pill bg-danger x-small">{item.badge}</span>}
  </button>
);

export default function AppSidebar({ open, onClose }) {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const sections = [
    {
      title: "Learning",
      items: [
        { path: "/courses", icon: <FaLaptopCode />, label: "Computer Courses" },
        { path: "/notes", icon: <FaFilePdf />, label: "Notes & PDFs", badge: "NEW" },
        { path: "/downloads", icon: <FaDownload />, label: "Downloads" },
      ]
    },
    {
      title: "Portfolio",
      items: [
        { path: "/projects", icon: <FaProjectDiagram />, label: "My Projects" },
        { path: "/contact", icon: <i className="bi bi-chat-dots" />, label: "Hire Me" },
      ]
    }
  ];

  const handleNav = (path) => { navigate(path); onClose(); };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div className="sidebar-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />
          
          <motion.aside 
            className="app-sidebar shadow-lg border-0"
            initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 22, stiffness: 200 }}
          >
            {/* Header: Brand + Close */}
            <div className="p-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="d-flex align-items-center gap-2">
                  <div className="brand-icon-box shadow-sm"> <FaLaptopCode /> </div>
                  <h6 className="mb-0 fw-bold tracking-tight text-uppercase">CoursePort</h6>
                </div>
                <button className="btn btn-light rounded-circle p-2 d-flex shadow-sm border-0" onClick={onClose}> <FaTimes /> </button>
              </div>

              {/* User Card: Android Style */}
              <div className="p-3 rounded-4 d-flex align-items-center gap-3 bg-body-tertiary border border-light-subtle shadow-sm clickable" onClick={() => handleNav('/profile')}>
                <div className="avatar-sm bg-primary text-white rounded-circle d-grid place-items-center fw-bold shadow-sm">
                  {user?.name?.[0] || 'H'}
                </div>
                <div className="overflow-hidden">
                  <div className="text-truncate fw-bold small">{user?.name || "Hridesh Bharati"}</div>
                  <div className="text-muted x-small text-truncate">Frontend Developer</div>
                </div>
              </div>
            </div>

            {/* Content: Material Scroll Area */}
            <div className="p-3 flex-grow-1 overflow-auto">
              {sections.map((sec, i) => (
                <div key={i} className="mb-4">
                  <label className="text-uppercase x-small fw-bold text-primary px-3 mb-2 d-block opacity-75">{sec.title}</label>
                  {sec.items.map(item => (
                    <NavItem 
                      key={item.path} 
                      item={item} 
                      isActive={location.pathname === item.path} 
                      onClick={handleNav} 
                    />
                  ))}
                </div>
              ))}

              {/* Theme Toggle: Segmented Control */}
              <div className="px-2">
                <label className="text-uppercase x-small fw-bold text-primary mb-2 d-block opacity-75">Appearance</label>
                <div className="btn-group w-100 rounded-pill p-1 bg-body-tertiary shadow-sm">
                  <button className={`btn rounded-pill border-0 py-2 small fw-medium ${theme==='light'?'bg-white shadow-sm text-primary':'text-muted'}`} onClick={()=>toggleTheme('light')}><FaSun className="me-2"/> Light</button>
                  <button className={`btn rounded-pill border-0 py-2 small fw-medium ${theme==='dark'?'bg-dark text-white shadow-sm':'text-muted'}`} onClick={()=>toggleTheme('dark')}><FaMoon className="me-2"/> Dark</button>
                </div>
              </div>
            </div>

            {/* Footer: Bottom Button */}
            <div className="p-4 border-top border-light-subtle">
              <button className={`btn w-100 rounded-pill py-2 fw-bold shadow-sm ${user?'btn-outline-danger border-2':'btn-primary'}`} onClick={user?logout:()=>handleNav('/login')}>
                {user?'Sign Out':'Student Sign In'}
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}