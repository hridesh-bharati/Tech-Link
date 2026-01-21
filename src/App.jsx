import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from './contexts/ThemeContext';
import "react-toastify/dist/ReactToastify.css";

/* Layout & Pages */
import Layout from "./components/Layout/Layout";
import CourseDetail from "./pages/CourseDetail";
import NotFoundPage from "./components/PageNotFound/NotFoundPage";

/* Auth & Dashboard */
import Login from "./admin/login/Login";
import Signup from "./admin/signup/Signup";
import Dashboard from "./admin/dashboard/Dashboard";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublicRoute from "./components/Routes/PublicRoute";

function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <BrowserRouter>
          <ToastContainer position="top-right" autoClose={3000} />

          <Routes>
            {/* Auth Routes */}
            <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
            <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />

            {/* Dashboard */}
            <Route path="/dashboard/*" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

            {/* Website Layout with Nested Routes */}
            <Route path="/" element={<Layout />}>
              {/* Dynamic Course Route - Ab Layout ke Outlet mein render hoga */}
              <Route path="learn/:courseId" element={<CourseDetail />} />
              
              {/* Catch-all for sub-routes under Layout */}
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;