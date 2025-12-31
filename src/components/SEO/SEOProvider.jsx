// src/components/SEO/SEOProvider.jsx
import React, { createContext, useContext, useState } from 'react';
import SEO from './SEO';
import { generateCanonicalUrl } from '../../utils/seo';
import { useLocation } from 'react-router-dom';

const SEOContext = createContext({});

export const useSEO = () => useContext(SEOContext);

const SEOProvider = ({ children }) => {
  const location = useLocation();
  const [seoData, setSeoData] = useState({
    title: '',
    description: '',
    keywords: '',
    image: '/og-image.png',
    type: 'website',
  });

  const updateSEO = (data) => {
    setSeoData(prev => ({ ...prev, ...data }));
  };

  const getCanonical = () => {
    return generateCanonicalUrl(location.pathname);
  };

  const value = {
    seoData,
    updateSEO,
    getCanonical,
  };

  return (
    <SEOContext.Provider value={value}>
      <SEO {...seoData} />
      {children}
    </SEOContext.Provider>
  );
};

export default SEOProvider;