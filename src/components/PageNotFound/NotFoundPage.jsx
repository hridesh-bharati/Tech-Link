import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="simple-404">
      <div className="error-container">
        {/* 404 Number */}
        <div className="error-number">404</div>
        
        {/* Message */}
        <div className="error-title">Page Not Found</div>
        <div className="error-description">
          we couldn't find the page you are looking for.
        </div>
        
        {/* Button */}
        <Link to="/" className="home-button">
          Back To Home
        </Link>
        
        {/* Brand */}
        <div className="brand-name">HB Tech Link</div>
      </div>
    </div>
  );
};

export default NotFoundPage;