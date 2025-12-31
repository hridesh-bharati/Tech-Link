// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProjectsPage from './Projects/Projects.jsx';
import ContactPage from './pages/ContactPage.jsx';
import Learn from './pages/Learn.jsx';


// Performance monitoring
const sendPerformanceMetrics = () => {
  if (window.performance) {
    const perfData = window.performance.getEntriesByType('navigation')[0];
    if (perfData) {
      const metrics = {
        loadTime: perfData.loadEventEnd - perfData.startTime,
        domContentLoaded: perfData.domContentLoadedEventEnd - perfData.startTime,
        firstPaint: performance.getEntriesByType('paint')
          .find(entry => entry.name === 'first-paint')?.startTime || 0,
      };
      
      // Log performance metrics
      console.log('Performance Metrics:', metrics);
      
      // Send to your analytics endpoint
      if (process.env.NODE_ENV === 'production') {
        fetch('/api/analytics/performance', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(metrics),
        }).catch(console.error);
      }
    }
  }
};

// Preconnect to external domains
const setupResourceHints = () => {
  // Preconnect to external domains
  const preconnectDomains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://cdn.jsdelivr.net'
  ];
  
  preconnectDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
  
  // Prefetch critical routes
  const prefetchRoutes = ['/about', '/projects'];
  prefetchRoutes.forEach(route => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = route;
    document.head.appendChild(link);
  });
};

function App() {
  React.useEffect(() => {
    // Send performance data on load
    sendPerformanceMetrics();
    
    // Setup resource hints
    setupResourceHints();
    
    // Service worker registration
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/sw.js').catch(err => {
        console.log('ServiceWorker registration failed: ', err);
      });
    }
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="Learn" element={<Learn />} />
            <Route path="contact" element={<ContactPage />} />
            
            {/* 404 Route */}
            <Route path="*" element={
              <div className="container py-5 text-center">
                <h1>404 - Page Not Found</h1>
                <p>The page you're looking for doesn't exist.</p>
              </div>
            } />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;