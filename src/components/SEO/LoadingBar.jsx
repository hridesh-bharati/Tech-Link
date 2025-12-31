// src/components/SEO/LoadingBar.jsx
import React, { useState, useEffect } from 'react';
import './LoadingBar.css';

const LoadingBar = ({ loading = false, color = 'linear-gradient(90deg, #3498db, #2ecc71, #f39c12)', height = '3px' }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let interval;
    
    if (loading) {
      setIsVisible(true);
      setProgress(0);
      
      // Simulate loading progress
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setIsVisible(false);
              setProgress(0);
            }, 300);
            return 100;
          }
          
          // Accelerate then decelerate for natural feel
          let increment;
          if (prev < 50) {
            increment = 20; // Faster at start
          } else if (prev < 80) {
            increment = 10; // Medium
          } else {
            increment = 5; // Slower at end
          }
          
          return Math.min(prev + increment, 100);
        });
      }, 200);
    } else {
      // Complete the loading
      setProgress(100);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setProgress(0);
      }, 300);
      
      return () => clearTimeout(timer);
    }
    
    return () => clearInterval(interval);
  }, [loading]);

  // Listen to route changes for automatic loading bar
  useEffect(() => {
    const handleStart = () => {
      setIsVisible(true);
      setProgress(30);
    };
    
    const handleComplete = () => {
      setProgress(100);
      setTimeout(() => {
        setIsVisible(false);
        setProgress(0);
      }, 300);
    };
    
    // Simulate route change detection
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;
    
    history.pushState = function(...args) {
      originalPushState.apply(this, args);
      handleStart();
      setTimeout(handleComplete, 500);
    };
    
    history.replaceState = function(...args) {
      originalReplaceState.apply(this, args);
      handleStart();
      setTimeout(handleComplete, 300);
    };
    
    // Handle back/forward navigation
    window.addEventListener('popstate', handleStart);
    
    return () => {
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
      window.removeEventListener('popstate', handleStart);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="loading-bar"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label="Loading progress"
    >
      <div 
        className="loading-bar-progress"
        style={{
          width: `${progress}%`,
          height: height,
          background: color,
          transition: progress < 100 ? 'width 0.2s ease' : 'width 0.3s ease',
        }}
      />
      
      {/* Optional: Show percentage */}
      {progress > 0 && progress < 100 && (
        <div className="loading-bar-percentage">
          {progress}%
        </div>
      )}
      
      {/* Optional: Spinner for mobile */}
      <div className="loading-bar-spinner" aria-hidden="true">
        <div className="spinner-dot"></div>
        <div className="spinner-dot"></div>
        <div className="spinner-dot"></div>
      </div>
    </div>
  );
};

// Higher-order component to wrap pages with loading state
export const withLoading = (WrappedComponent) => {
  return function WithLoadingComponent(props) {
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
      // Simulate loading
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      
      return () => clearTimeout(timer);
    }, []);
    
    return (
      <>
        <LoadingBar loading={isLoading} />
        <WrappedComponent {...props} isLoading={isLoading} />
      </>
    );
  };
};

// Custom hook for manual loading control
export const useLoadingBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const startLoading = () => {
    setIsLoading(true);
  };
  
  const stopLoading = () => {
    setIsLoading(false);
  };
  
  const withLoading = async (callback) => {
    startLoading();
    try {
      const result = await callback();
      return result;
    } finally {
      stopLoading();
    }
  };
  
  return {
    isLoading,
    startLoading,
    stopLoading,
    withLoading,
    LoadingBarComponent: () => <LoadingBar loading={isLoading} />
  };
};

export default LoadingBar;