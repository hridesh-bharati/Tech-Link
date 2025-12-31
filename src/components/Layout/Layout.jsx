// src/components/Layout/Layout.jsx
import React, { useRef, useState, useEffect, useCallback } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import LoadingBar from "../SEO/LoadingBar.jsx";
import SEO from "../SEO/SEO.jsx";
import SchemaMarkup from "../SEO/SchemaMarkup.jsx";
import { generateCanonicalUrl, getPerformanceMetrics } from "../../utils/seo";
import "./Layout.css";

// Main routes only - exact paths
const MAIN_ROUTES = ["/", "/about", "/learn", "/projects", "/contact"];
const SWIPE_THRESHOLD = 70;
const DIRECTION_LOCK = 15;
const MAX_SWIPE = 120;
const SWIPE_DEBOUNCE = 150;

const Layout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);
  const [showSwipeHint, setShowSwipeHint] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);

  const start = useRef({ x: 0, y: 0 });
  const isHorizontal = useRef(false);
  const isVertical = useRef(false);
  const isSwipingRef = useRef(false);
  const swipeTimer = useRef(null);
  const hintTimer = useRef(null);
  const performanceData = useRef(null);

  const [style, setStyle] = useState({});

  // Detect mobile on resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      
      // Show swipe hint only on mobile for new visitors
      if (mobile && !localStorage.getItem('swipeHintShown')) {
        setShowSwipeHint(true);
        hintTimer.current = setTimeout(() => {
          setShowSwipeHint(false);
          localStorage.setItem('swipeHintShown', 'true');
        }, 3000);
      }
    };

    if (typeof window !== 'undefined') {
      handleResize(); // Initial check
      window.addEventListener('resize', handleResize);
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
      if (hintTimer.current) clearTimeout(hintTimer.current);
    };
  }, []);

  // Track page views
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Store performance data
      performanceData.current = getPerformanceMetrics();
      
      // Set loading state for initial load
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 800);
      
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const logPageView = useCallback((path) => {
    const viewData = {
      path,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
    };
    
    // In production, send to your analytics endpoint
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/analytics/pageview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(viewData),
      }).catch(err => console.log('Analytics error:', err));
    }
  }, []);

  // Check if current path is EXACTLY a main route
  const isExactMainRoute = useCallback(() => {
    return MAIN_ROUTES.includes(pathname);
  }, [pathname]);

  // Get current main route index
  const getCurrentRouteIndex = useCallback(() => {
    return MAIN_ROUTES.indexOf(pathname);
  }, [pathname]);

  // Handle swipe navigation
  const handleSwipeNavigation = useCallback((direction) => {
    const currentIndex = getCurrentRouteIndex();
    
    if (direction === 'left' && currentIndex < MAIN_ROUTES.length - 1) {
      setSwipeDirection('left');
      navigate(MAIN_ROUTES[currentIndex + 1]);
    } else if (direction === 'right' && currentIndex > 0) {
      setSwipeDirection('right');
      navigate(MAIN_ROUTES[currentIndex - 1]);
    }
    
    // Reset swipe direction after animation
    setTimeout(() => setSwipeDirection(null), 500);
  }, [getCurrentRouteIndex, navigate]);

  // Touch event handlers
  const onTouchStart = useCallback((e) => {
    if (!isMobile || !isExactMainRoute()) return;

    const t = e.touches[0];
    start.current = { x: t.clientX, y: t.clientY };
    isHorizontal.current = false;
    isVertical.current = false;
    isSwipingRef.current = false;
    
    // Add swiping class to body
    document.body.classList.add('swiping');
    
    // Clear any existing timer
    if (swipeTimer.current) clearTimeout(swipeTimer.current);
  }, [isMobile, isExactMainRoute]);

  const onTouchMove = useCallback((e) => {
    if (!isMobile || !isExactMainRoute()) return;

    const t = e.touches[0];
    const dx = t.clientX - start.current.x;
    const dy = t.clientY - start.current.y;

    // Direction lock
    if (!isHorizontal.current && !isVertical.current) {
      if (Math.abs(dx) > DIRECTION_LOCK) {
        isHorizontal.current = true;
        isSwipingRef.current = true;
        setSwipeDirection(dx > 0 ? 'right' : 'left');
        document.body.classList.add('swipe-active');
      } else if (Math.abs(dy) > DIRECTION_LOCK) {
        isVertical.current = true;
      }
    }

    if (isHorizontal.current) {
      e.preventDefault();
      const limitedDx = Math.max(-MAX_SWIPE, Math.min(MAX_SWIPE, dx));
      setStyle({
        transform: `translateX(${limitedDx}px)`,
        transition: "none",
      });
    }
  }, [isMobile, isExactMainRoute]);

  const onTouchEnd = useCallback((e) => {
    if (!isMobile || !isHorizontal.current || !isExactMainRoute()) {
      document.body.classList.remove('swiping', 'swipe-active');
      return;
    }

    const dx = e.changedTouches[0].clientX - start.current.x;

    setStyle({
      transform: "translateX(0)",
      transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    });

    // Remove swiping classes
    document.body.classList.remove('swiping', 'swipe-active');

    if (Math.abs(dx) < SWIPE_THRESHOLD) {
      isSwipingRef.current = false;
      setSwipeDirection(null);
      return;
    }

    // Debounce swipe navigation
    if (swipeTimer.current) clearTimeout(swipeTimer.current);

    swipeTimer.current = setTimeout(() => {
      const direction = dx < 0 ? 'left' : 'right';
      handleSwipeNavigation(direction);
    }, SWIPE_DEBOUNCE);

    setTimeout(() => {
      isSwipingRef.current = false;
    }, 150);
  }, [isMobile, isExactMainRoute, handleSwipeNavigation]);

  // Get SEO data based on current route
  const getSEOData = useCallback(() => {
    const seoData = {
      title: "Hridesh Bharati | Full Stack Developer",
      description: "Professional portfolio of Hridesh Bharati - Full Stack Developer specializing in modern web technologies.",
      keywords: "Hridesh Bharati, Full Stack Developer, Web Development, Programming, React, Node.js",
      canonical: generateCanonicalUrl(pathname),
      image: "/og-image.png",
      type: "website",
    };

    switch (pathname) {
      case '/':
        seoData.title = "Hridesh Bharati | Full Stack Developer Portfolio";
        seoData.description = "Welcome to my portfolio. I'm Hridesh Bharati, a Full Stack Developer passionate about building scalable web applications.";
        seoData.keywords = "portfolio, web developer, react, node.js, javascript, full stack developer portfolio";
        break;
      case '/about':
        seoData.title = "About Hridesh Bharati | Skills & Experience";
        seoData.description = "Learn about Hridesh Bharati's technical skills, professional experience, and journey in software development.";
        seoData.keywords = "about, experience, skills, background, career, software engineer profile";
        break;
      case '/projects':
        seoData.title = "Projects by Hridesh Bharati | Portfolio Showcase";
        seoData.description = "Explore my latest web development projects including full-stack applications, open-source contributions, and innovative solutions.";
        seoData.keywords = "projects, portfolio, web applications, open source, github, coding projects";
        break;
      case '/contact':
        seoData.title = "Contact Hridesh Bharati | Get in Touch";
        seoData.description = "Get in touch with Hridesh Bharati for collaboration, project inquiries, or learning opportunities.";
        seoData.keywords = "contact, hire, collaboration, connect, email, freelance web developer";
        break;
    }

    return seoData;
  }, [pathname]);

  // Get schema data based on route
  const getSchemaData = useCallback(() => {
    const baseData = {
      name: getSEOData().title,
      description: getSEOData().description,
      url: getSEOData().canonical,
    };

    switch (pathname) {
      case '/about':
        return { type: 'Person', data: { ...baseData, jobTitle: 'Full Stack Developer' } };
      case '/projects':
        return { type: 'ItemList', data: { ...baseData, itemListOrder: 'ItemListUnordered' } };
      default:
        return { type: 'WebPage', data: baseData };
    }
  }, [pathname, getSEOData]);

  // Keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isExactMainRoute()) return;
      
      const currentIndex = getCurrentRouteIndex();
      
      switch (e.key) {
        case 'ArrowLeft':
          if (currentIndex > 0) {
            e.preventDefault();
            navigate(MAIN_ROUTES[currentIndex - 1]);
          }
          break;
        case 'ArrowRight':
          if (currentIndex < MAIN_ROUTES.length - 1) {
            e.preventDefault();
            navigate(MAIN_ROUTES[currentIndex + 1]);
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isExactMainRoute, getCurrentRouteIndex, navigate]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (swipeTimer.current) clearTimeout(swipeTimer.current);
      if (hintTimer.current) clearTimeout(hintTimer.current);
      document.body.classList.remove('swiping', 'swipe-active');
    };
  }, []);

  const seoData = getSEOData();
  const schemaData = getSchemaData();

  return (
    <div
      className="layout"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      itemScope
      itemType="https://schema.org/WebPage"
      data-swipe-direction={swipeDirection}
    >
      <LoadingBar loading={loading} />
      
      <SEO {...seoData} />
      <SchemaMarkup {...schemaData} />
      
      {/* Additional meta tags */}
      <Helmet>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#00a884" />
      </Helmet>
      
      <Header isSwipingRef={isSwipingRef} />
      
      {/* Swipe hints */}
      {isMobile && isExactMainRoute() && (
        <>
          <div className={`swipe-indicator ${showSwipeHint ? 'show' : ''}`}>
            Swipe to navigate
          </div>
          <div className={`swipe-hint-left ${swipeDirection === 'right' ? 'show' : ''}`}>
            <i className="bi bi-chevron-left"></i>
          </div>
          <div className={`swipe-hint-right ${swipeDirection === 'left' ? 'show' : ''}`}>
            <i className="bi bi-chevron-right"></i>
          </div>
        </>
      )}
      
      <main 
        className="main-content" 
        style={style}
        role="main"
        aria-label="Main content"
        data-page={pathname.replace('/', '') || 'home'}
      >
        <Outlet context={{ setLoading }} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;