import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { toast } from "react-toastify";
import { Search, Bell, Home, Menu } from "lucide-react";

const Header = ({ toggleSidebar, isMobile }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      console.log("Searching:", search);
      setSearch("");
    }
  };

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/login", { replace: true });
  };

  if (!user) return null;

  return (
    <header className="bg-white border-bottom shadow-sm sticky-top">
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

            <form onSubmit={handleSearch} className="d-none d-md-block">
              <div className="input-group" style={{ width: "300px" }}>
                <input
                  type="text"
                  className="form-control border-end-0"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button 
                  type="submit" 
                  className="btn btn-light border border-start-0"
                >
                  <Search size={18} />
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT: User & Notifications */}
          <div className="d-flex align-items-center gap-3">
            
            {/* Home Button */}
            <button
              className="btn btn-outline-primary btn-sm d-none d-sm-flex align-items-center gap-1"
              onClick={() => navigate("/")}
              title="Go to Homepage"
            >
              <Home size={16} />
              <span>Home</span>
            </button>

            {/* Notifications */}
            <button 
              className="btn btn-light position-relative p-2"
              title="Notifications"
            >
              <Bell size={20} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3
              </span>
            </button>

            {/* User Profile */}
            <div className="dropdown">
              <button 
                className="btn btn-light d-flex align-items-center gap-2 p-2"
                type="button"
                data-bs-toggle="dropdown"
              >
                <div 
                  className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                  style={{ width: "36px", height: "36px" }}
                >
                  {user.avatar ? (
                    <img 
                      src={user.avatar} 
                      alt="Profile" 
                      className="rounded-circle w-100 h-100 object-fit-cover"
                    />
                  ) : (
                    <span className="fw-bold">{user.name?.charAt(0)?.toUpperCase()}</span>
                  )}
                </div>
                <div className="d-none d-md-block text-start">
                  <div className="fw-bold" style={{ fontSize: "14px" }}>
                    {user.name}
                  </div>
                  <div className="text-muted" style={{ fontSize: "12px" }}>
                    {user.email}
                  </div>
                </div>
              </button>

              <ul className="dropdown-menu dropdown-menu-end shadow border-0 mt-2">
                <li>
                  <button 
                    className="dropdown-item"
                    onClick={() => navigate("/dashboard/profile")}
                  >
                    👤 Profile
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