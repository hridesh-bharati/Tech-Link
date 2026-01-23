import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { toast } from "react-toastify";
import { Search, Bell, Home, Menu, ChevronDown } from "lucide-react";

const Header = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [search, setSearch] = useState("");

  if (!user) return null;

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    console.log("Searching:", search);
    setSearch("");
  };

  const handleLogout = async () => {
    await logout();
    toast.success("Logged out successfully 👋");
    navigate("/login", { replace: true });
  };

  return (
    <header className="bg-white border-bottom sticky-top shadow-sm">
      <div className="container-fluid px-3 py-2">
        <div className="d-flex justify-content-between align-items-center">

          {/* LEFT: Menu & Search */}
          <div className="d-flex align-items-center gap-3">
            <button
              className="btn btn-light p-2"
              onClick={toggleSidebar}
              title="Toggle Menu"
            >
              <Menu size={20} />
            </button>

            <form
              onSubmit={handleSearch}
              className="d-none d-md-block"
            >
              <div className="input-group rounded-pill overflow-hidden shadow-sm">
                <input
                  type="text"
                  className="form-control border-0 px-3"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button className="btn btn-light px-3">
                  <Search size={18} />
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT: Home, Notifications, Profile */}
          <div className="d-flex align-items-center gap-3">

            {/* Home Button */}
            <button
              className="btn btn-primary btn-sm align-items-center gap-1"
              onClick={() => navigate("/")}
            >
              <Home size={16} /> Home
            </button>

            {/* Notifications */}
            <button className="btn btn-light position-relative p-2 rounded-circle">
              <Bell size={20} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3
              </span>
            </button>

          {/* Profile Dropdown */}
<div className="dropdown">
  <button
    className="btn btn-light d-flex align-items-center gap-2 px-2 py-1 rounded-pill"
    data-bs-toggle="dropdown"
  >
    {/* Avatar like Profile component */}
    <div
      className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center"
      style={{ width: 36, height: 36 }}
    >
      <img
        src={user.avatar || user.photoURL || "/default-avatar.png"}
        alt="Profile"
        className="w-100 h-100"
        style={{ objectFit: "cover", display: "block" }}
        onError={(e) => {
          e.target.src = "/default-avatar.png";
        }}
      />
    </div>

    {/* Name & Role */}
    <div className="d-none d-md-block text-start">
      <div className="fw-semibold" style={{ fontSize: 14 }}>
        {user.name}
      </div>
      <div className="text-muted" style={{ fontSize: 12 }}>
        {user.role || "User"}
      </div>
    </div>

    <ChevronDown size={16} className="d-none d-md-block" />
  </button>

  <ul className="dropdown-menu dropdown-menu-end shadow border-0 mt-2">
    <li>
      <button
        className="dropdown-item"
        onClick={() => navigate("/dashboard/profile")}
      >
        👤 My Profile
      </button>
    </li>
    <li>
      <button
        className="dropdown-item"
        onClick={() => navigate("/dashboard/settings")}
      >
        ⚙️ Settings
      </button>
    </li>
    <li><hr className="dropdown-divider" /></li>
    <li>
      <button
        className="dropdown-item text-danger"
        onClick={handleLogout}
      >
        🚪 Logout
      </button>
    </li>
  </ul>
</div>


          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
