import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useTheme } from "../../contexts/ThemeContext";
import {
  FaLaptopCode, FaPlayCircle, FaFilePdf, FaQuestionCircle,
  FaDownload, FaProjectDiagram, FaSun, FaMoon,
  FaCode, FaCertificate, FaTrophy, FaSignOutAlt, FaUserGraduate
} from "react-icons/fa";
import "./AppSidebar.css";

const sections = [
  {
    title: "Learning Path",
    items: [
      { path: "/courses", label: "My Courses", icon: <FaLaptopCode /> },
      { path: "/playground", label: "Code Editor", icon: <FaCode />, badge: "PRO" },
      { path: "/videos", label: "Video Lessons", icon: <FaPlayCircle /> },
      { path: "/notes", label: "Study Material", icon: <FaFilePdf /> },
    ],
  },
  {
    title: "Portfolio & Growth",
    items: [
      { path: "/projects", label: "My Projects", icon: <FaProjectDiagram /> },
      { path: "/certificates", label: "Certificates", icon: <FaCertificate /> },
      { path: "/quizzes", label: "Skill Assessment", icon: <FaQuestionCircle /> },
      { path: "/leaderboard", label: "Rankings", icon: <FaTrophy /> },
    ],
  },
];

export default function AppSidebar({ open, onClose }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // Get real user info from AuthContext
  const { theme, toggleTheme } = useTheme();

  if (!open) return null;

  const handleNavigation = (path) => {
    navigate(path);
    onClose();
  };

  // Compute user initial if avatar is missing
  const userInitial = user?.name ? user.name.charAt(0).toUpperCase() : "U";
  const userRole = user?.role || "Student"; // Fallback role

  return (
    <>
      <div className="sidebar-backdrop" onClick={onClose} />

      <aside className={`app-sidebar bg-body shadow-lg d-flex flex-column`}>

        {/* Header: Logo */}
        <div className="p-3 d-flex align-items-center justify-content-between border-bottom">
          <div className="d-flex align-items-center gap-2">
            <div className="bg-success rounded-3 p-1 text-white">
              <FaUserGraduate size={20} />
            </div>
            <span className="fw-bold fs-5 tracking-tight">CoursePort</span>
          </div>
          <button className="btn-close btn-sm" onClick={onClose}></button>
        </div>

        {/* User Profile & Progress */}
        {user && (
          <div className="p-3 border-bottom bg-light bg-opacity-10">
            <div className="d-flex align-items-center gap-3 mb-2" 
                 role="button" onClick={() => handleNavigation("/profile")}>
              {user.avatar ? (
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="rounded-circle"
                  style={{ width: 45, height: 45, objectFit: "cover" }}
                />
              ) : (
                <div className="avatar-circle bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold"
                     style={{ width: 45, height: 45, minWidth: 45 }}>
                  {userInitial}
                </div>
              )}
              <div className="overflow-hidden">
                <div className="fw-bold text-truncate">{user.name}</div>
                <div className="text-muted small text-truncate">{userRole}</div>
              </div>
            </div>

            {/* Learning Progress Bar */}
            <div className="mt-3">
              <div className="d-flex justify-content-between small mb-1">
                <span className="text-muted">Course Progress</span>
                <span className="fw-bold">{user.progress || 0}%</span>
              </div>
              <div className="progress" style={{ height: "6px" }}>
                <div className="progress-bar bg-success" style={{ width: `${user.progress || 0}%` }}></div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Links */}
        <div className="flex-grow-1 overflow-auto py-3">
          {sections.map((sec) => (
            <div key={sec.title} className="mb-4">
              <h6 className="px-4 text-uppercase text-muted small fw-bold mb-2" style={{ letterSpacing: '1px' }}>
                {sec.title}
              </h6>
              <div className="list-group list-group-flush">
                {sec.items.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <button
                      key={item.path}
                      onClick={() => handleNavigation(item.path)}
                      className={`list-group-item list-group-item-action d-flex align-items-center gap-3 rounded-3 ${isActive ? "active shadow-sm" : ""}`}
                    >
                      <span className={isActive ? "text-white" : "text-success"}>{item.icon}</span>
                      <span className="flex-grow-1">{item.label}</span>
                      {item.badge && (
                        <span className="badge rounded-pill bg-warning text-dark small">{item.badge}</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Theme & Settings */}
        <div className="p-3 border-top mt-auto bg-light bg-opacity-10">
          <div className="btn-group w-100 mb-3" role="group">
            <input type="radio" className="btn-check" name="theme" id="light" checked={theme === "light"} onChange={() => toggleTheme("light")} />
            <label className="btn btn-outline-secondary btn-sm d-flex align-items-center justify-content-center gap-2" htmlFor="light">
              <FaSun /> Light
            </label>

            <input type="radio" className="btn-check" name="theme" id="dark" checked={theme === "dark"} onChange={() => toggleTheme("dark")} />
            <label className="btn btn-outline-secondary btn-sm d-flex align-items-center justify-content-center gap-2" htmlFor="dark">
              <FaMoon /> Dark
            </label>
          </div>

          <button 
            className={`btn w-100 d-flex align-items-center justify-content-center gap-2 ${user ? "btn-outline-danger" : "btn-success"}`}
            onClick={user ? logout : () => handleNavigation("/login")}
          >
            {user ? <><FaSignOutAlt /> Sign Out</> : "Student Sign In"}
          </button>
        </div>
      </aside>
    </>
  );
}
