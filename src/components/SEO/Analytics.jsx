// src/components/SEO/Analytics.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics (replace with your measurement ID)
    if (window.gtag) {
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_path: location.pathname,
      });
    }

    // Track page view in your own analytics
    trackPageView(location.pathname);
  }, [location]);

  const trackPageView = (path) => {
    const analyticsData = {
      path,
      timestamp: new Date().toISOString(),
      referrer: document.referrer,
      screenSize: `${window.innerWidth}x${window.innerHeight}`,
      userAgent: navigator.userAgent,
    };

    // Send to your analytics endpoint
    fetch('/api/analytics/pageview', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(analyticsData),
    }).catch(err => console.log('Analytics error:', err));
  };

  return null;
};

export default Analytics;