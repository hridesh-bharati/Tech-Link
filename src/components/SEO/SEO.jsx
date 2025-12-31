// src/components/SEO/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { generateCanonicalUrl, generateMetaDescription } from '../../utils/seo';

const SEO = ({
  title = "Hridesh Bharati | Full Stack Developer & Educator",
  description = "Professional portfolio of Hridesh Bharati - Full Stack Developer and educator specializing in modern web technologies.",
  keywords = "Hridesh Bharati, Full Stack Developer, Web Development, Programming, Education",
  image = "/og-image.png",
  type = "website",
  author = "Hridesh Bharati"
}) => {
  const location = useLocation();
  const canonical = generateCanonicalUrl(location.pathname);
  const metaDescription = generateMetaDescription(description);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Hridesh Bharati Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@hrideshbharati" />
      
      {/* Mobile Specific */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="theme-color" content="#2c3e50" />
      
      {/* Additional SEO */}
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Preload critical resources */}
      <link rel="preload" href="/logo.png" as="image" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://api.hrideshbharati.com" />
    </Helmet>
  );
};

export default SEO;