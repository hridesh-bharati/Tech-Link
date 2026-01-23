// src/App.jsx
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* Contexts */
import { ThemeProvider } from "./contexts/ThemeContext";
import { useAuth } from "./contexts/AuthContext";

/* Layout & Pages */
import Layout from "./components/Layout/Layout";
import CourseDetail from "./pages/CourseDetail";
import NotFoundPage from "./components/PageNotFound/NotFoundPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";

/* Auth & Dashboard */
import Login from "./admin/login/Login";
import Signup from "./admin/signup/Signup";
import Dashboard from "./admin/dashboard/Dashboard";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublicRoute from "./components/Routes/PublicRoute";

/* Analytics */
import { trackUserVisit, removeInactiveUsers } from "./utils/analytics";

function App() {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (loading || !user?.uid) return;

    // Track visit for real logged-in user
    trackUserVisit(user.uid);

    // Remove inactive users every 60 seconds
    const interval = setInterval(() => removeInactiveUsers(10), 60000);
    return () => clearInterval(interval);
  }, [user, loading]);

  return (
    <ThemeProvider>
      <HelmetProvider>
        <BrowserRouter>
          <ToastContainer position="top-right" autoClose={3000} />

          <Routes>
            {/* Public Auth Routes */}
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <PublicRoute>
                  <Signup />
                </PublicRoute>
              }
            />

            {/* Admin Dashboard */}
            <Route
              path="/dashboard/*"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* Public Website */}
            <Route path="/" element={<Layout />}>
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="learn/:courseId" element={<CourseDetail />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
