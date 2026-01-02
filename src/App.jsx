import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./Projects/Projects";
import Learn from "./pages/Learn";
import CourseDetail from "./pages/CourseDetail";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./components/PageNotFound/NotFoundPage"; 
function App() {
  useEffect(() => {
    if ("serviceWorker" in navigator && import.meta.env.PROD) {
      navigator.serviceWorker
        .register("/sw.js")
        .catch(err => console.error("SW failed:", err));
    }
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="learn" element={<Learn />} />
            <Route path="learn/:courseId" element={<CourseDetail />} />
            <Route path="contact" element={<ContactPage />} />

            <Route
              path="*"
              element={<NotFoundPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;