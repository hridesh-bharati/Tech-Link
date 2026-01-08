import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  BarChart3,
  UserCircle,
  Settings,
  LogOut,
  Globe,
} from "lucide-react";

const Sidebar = ({ sidebarOpen, setSidebarOpen, isMobile }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // ✅ single source of truth
  const isLoggedIn = !!user;

  const navItems = [
    { path: "overview", label: "Overview", icon: <LayoutDashboard size={18} /> },
    { path: "users", label: "Users", icon: <Users size={18} /> },
    { path: "courses", label: "Courses", icon: <BookOpen size={18} /> },
    { path: "analytics", label: "Analytics", icon: <BarChart3 size={18} /> },
    { path: "profile", label: "Profile", icon: <UserCircle size={18} /> },
    { path: "settings", label: "Settings", icon: <Settings size={18} /> },
  ];

  const handleLogout = () => {
    logout(); // clears context & localStorage
    navigate("/", { replace: true });
  };

  return (
    <aside
      className={`sidebar bg-white shadow-sm d-flex flex-column ${sidebarOpen ? "open" : "collapsed"
        }`}
      style={{ width: sidebarOpen ? 250 : 70, transition: "0.3s", minHeight: "100vh" }}
    >
      {/* LOGO */}
      <div className="p-3 border-bottom d-flex align-items-center gap-2">
        <div className="bg-primary text-white rounded p-2">
          <BookOpen size={20} />
        </div>
        {sidebarOpen && (
          <div>
            <h6 className="mb-0 fw-bold">TechLink</h6>
            <small className="text-muted">Admin Panel</small>
          </div>
        )}
      </div>

      {/* USER CARD */}
      {sidebarOpen && isLoggedIn && (
        <div className="p-3 border-bottom d-flex align-items-center gap-3">
          <div
            className="rounded-circle overflow-hidden bg-primary text-white d-flex align-items-center justify-content-center"
            style={{ width: 45, height: 45 }}
          >
            {user.avatar ? (
              <img
                src={user.avatar}
                alt="avatar"
                className="w-100 h-100 object-fit-cover"
              />
            ) : (
              <span className="fw-bold">{user.name?.charAt(0)?.toUpperCase()}</span>
            )}
          </div>

          <div>
            <h6 className="mb-0">{user.name}</h6>
            <small className="text-muted d-block">{user.email}</small>
            <span className="badge bg-primary mt-1">{user.role || "Admin"}</span>
          </div>
        </div>
      )}

      {/* NAVIGATION */}
      <nav className="flex-grow-1 p-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={`/dashboard/${item.path}`}
            className={({ isActive }) =>
              `nav-link d-flex align-items-center gap-2 rounded px-3 py-2 mb-1 ${isActive ? "bg-primary text-white" : "text-dark"
              } ${!sidebarOpen ? "justify-content-center" : ""}`
            }
            onClick={isMobile ? () => setSidebarOpen(false) : undefined}
          >
            {item.icon}
            {sidebarOpen && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* FOOTER */}
      <div className="p-3 border-top">
        {sidebarOpen && (
          <div className="text-muted d-flex align-items-center gap-2 mb-2">
            <Globe size={14} /> <small>v2.1.0</small>
          </div>
        )}

        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center gap-2"
          >
            <LogOut size={16} />
            {sidebarOpen && "Logout"}
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center gap-2"
          >
            <UserCircle size={16} />
            {sidebarOpen && "Login"}
          </button>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
