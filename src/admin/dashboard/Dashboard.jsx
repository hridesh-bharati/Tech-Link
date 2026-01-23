import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import OverviewPage from "./pages/OverviewPage";
import UsersPage from "./pages/UsersPage";
import CoursesPage from "./pages/CoursesPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import ProfilePage from "./pages/ProfilePage";
import ProfileEdit from "./pages/ProfileEdit";
import SettingsPage from "./pages/SettingsPage";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // 📱 Mobile check
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) setSidebarOpen(false);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="d-flex">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        isMobile={isMobile}
      />

      <div className="flex-grow-1 min-vh-100">
        <Header
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          isMobile={isMobile}
        />

        <main className="p-3 p-md-4">
          <Routes>
            <Route index element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<OverviewPage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="courses" element={<CoursesPage />} />
            <Route path="analytics" element={<AnalyticsPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="profile-edit" element={<ProfileEdit />} />
            <Route path="settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
