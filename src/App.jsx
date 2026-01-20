import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from './contexts/ThemeContext';
import "react-toastify/dist/ReactToastify.css";
/* Layout & Pages */
import Layout from "./components/Layout/Layout";
import CourseDetail from "./pages/CourseDetail";
import NotFoundPage from "./components/PageNotFound/NotFoundPage";

/* Auth Pages */
import Login from "./admin/login/Login";
import Signup from "./admin/signup/Signup";
import ForgotPassword from "./admin/forgot-password/ForgotPassword";

/* Dashboard */
import Dashboard from "./admin/dashboard/Dashboard";
import Profile from "./admin/dashboard/pages/ProfilePage";

/* Route Guards */
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import RouteAnalytics from "./components/Routes/RouteAnalytics";

function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <BrowserRouter>
          <RouteAnalytics />
          <ToastContainer position="top-right" autoClose={3000} theme="light" />

          <Routes>
            {/* Public Auth */}
            <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
            <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
            <Route path="/forgot-password" element={<PublicRoute><ForgotPassword /></PublicRoute>} />

            {/* Protected Dashboard */}
            <Route path="/dashboard/*" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/dashboard/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

            {/* Public Website */}
            <Route path="/*" element={<Layout />}>
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
