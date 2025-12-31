// src/components/SEO/SchemaMarkup.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { 
  generateStructuredData, 
  getBreadcrumbData,
  generateCanonicalUrl 
} from '../../utils/seo';

const SchemaMarkup = ({ type = 'WebPage', data = {} }) => {
  const location = useLocation();
  
  // Generate structured data based on type and current route
  const generateSchemaData = () => {
    const baseData = {
      url: generateCanonicalUrl(location.pathname),
      datePublished: new Date().toISOString().split('T')[0],
      dateModified: new Date().toISOString().split('T')[0],
      ...data
    };

    switch (type.toLowerCase()) {
      case 'person':
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": data.name || "Hridesh Bharati",
          "jobTitle": data.jobTitle || "Full Stack Developer",
          "description": data.description || "Full Stack Developer specializing in modern web technologies",
          "url": generateCanonicalUrl(),
          "image": data.image || "/profile.jpg",
          "sameAs": data.sameAs || [
            "https://github.com/hrideshbharati",
            "https://linkedin.com/in/hrideshbharati",
            "https://twitter.com/hrideshbharati",
            "https://stackoverflow.com/users/hrideshbharati"
          ],
          "knowsAbout": data.knowsAbout || [
            "Web Development",
            "React",
            "Node.js",
            "JavaScript",
            "GraphQL",
            "TypeScript",
            "MongoDB",
            "PostgreSQL",
            "API Design",
            "Software Architecture"
          ],
          "alumniOf": data.alumniOf || {
            "@type": "EducationalOrganization",
            "name": "Computer Science University"
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN",
            "addressRegion": data.region || "India"
          },
          "worksFor": data.worksFor || {
            "@type": "Organization",
            "name": "Freelance"
          }
        };

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": data.name || "Hridesh Bharati Portfolio",
          "url": generateCanonicalUrl(),
          "description": data.description || "Professional portfolio showcasing web development projects and programming courses",
          "publisher": {
            "@type": "Person",
            "name": "Hridesh Bharati"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${generateCanonicalUrl()}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        };

      case 'webpage':
        const webpageData = {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": data.name || document.title,
          "url": generateCanonicalUrl(location.pathname),
          "description": data.description || document.querySelector('meta[name="description"]')?.content,
          "inLanguage": "en-US",
          "isPartOf": {
            "@type": "WebSite",
            "name": "Hridesh Bharati Portfolio",
            "url": generateCanonicalUrl()
          }
        };

        // Add breadcrumbs if not home page
        if (location.pathname !== '/') {
          webpageData.breadcrumb = getBreadcrumbData(location.pathname);
        }

        return webpageData;

      case 'portfolio':
        return {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": data.name || "Hridesh Bharati's Portfolio",
          "description": data.description || "Collection of web development projects and programming work",
          "url": generateCanonicalUrl(),
          "author": {
            "@type": "Person",
            "name": "Hridesh Bharati",
            "url": generateCanonicalUrl()
          },
          "datePublished": "2024-01-01",
          "genre": ["Web Development", "Programming", "Software Engineering"]
        };

      case 'course':
        return {
          "@context": "https://schema.org",
          "@type": "Course",
          "name": data.title || "Programming Course",
          "description": data.description || "Learn programming with hands-on projects",
          "provider": {
            "@type": "Organization",
            "name": "Hridesh Bharati Portfolio",
            "sameAs": generateCanonicalUrl()
          },
          "courseCode": data.code || "CS101",
          "educationalLevel": data.level || "beginner",
          "timeRequired": data.duration || "PT8H",
          "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": ["online"],
            "instructor": {
              "@type": "Person",
              "name": "Hridesh Bharati"
            }
          }
        };

      case 'project':
        return {
          "@context": "https://schema.org",
          "@type": "SoftwareSourceCode",
          "name": data.title || "Web Development Project",
          "description": data.description || "A web development project showcasing modern technologies",
          "url": generateCanonicalUrl(),
          "programmingLanguage": data.technologies || ["JavaScript", "React", "Node.js"],
          "codeRepository": data.repository || "https://github.com/hrideshbharati",
          "author": {
            "@type": "Person",
            "name": "Hridesh Bharati"
          },
          "dateCreated": data.createdAt || "2024-01-01",
          "keywords": data.keywords || ["web development", "programming", "open source"]
        };

      case 'localbusiness':
        return {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Hridesh Bharati - Web Development Services",
          "description": "Professional web development and programming services",
          "url": generateCanonicalUrl(),
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN",
            "addressRegion": "India"
          },
          "areaServed": "Worldwide",
          "serviceType": [
            "Web Development",
            "Full Stack Development",
            "Consulting",
            "Programming Training"
          ],
          "openingHours": "Mo-Fr 09:00-18:00",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "contact@hrideshbharati.com",
            "availableLanguage": ["English", "Hindi"]
          }
        };

      case 'breadcrumblist':
        return getBreadcrumbData(location.pathname);

      default:
        return generateStructuredData(type, data);
    }
  };

  // Generate FAQ schema if provided
  const generateFAQSchema = (faqs) => {
    if (!faqs || !Array.isArray(faqs) || faqs.length === 0) return null;

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  };

  // Generate organization schema
  const generateOrganizationSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Hridesh Bharati Portfolio",
      "url": generateCanonicalUrl(),
      "logo": `${generateCanonicalUrl()}/logo.png`,
      "description": "Professional portfolio and web development services",
      "sameAs": [
        "https://github.com/hrideshbharati",
        "https://linkedin.com/in/hrideshbharati",
        "https://twitter.com/hrideshbharati"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
        "contactType": "customer service",
        "email": "contact@hrideshbharati.com",
        "availableLanguage": ["English"]
      }
    };
  };

  // Generate site navigation schema
  const generateSiteNavigationSchema = () => {
    const mainMenuItems = [
      { name: "Home", url: generateCanonicalUrl("/") },
      { name: "About", url: generateCanonicalUrl("/about") },
      { name: "Projects", url: generateCanonicalUrl("/projects") },
      { name: "Learn", url: generateCanonicalUrl("/learn") },
      { name: "Contact", url: generateCanonicalUrl("/contact") }
    ];

    return {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      "name": "Main Navigation",
      "url": generateCanonicalUrl(),
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": mainMenuItems.length,
        "itemListElement": mainMenuItems.map((item, index) => ({
          "@type": "SiteNavigationElement",
          "position": index + 1,
          "name": item.name,
          "url": item.url
        }))
      }
    };
  };

  const schemaData = generateSchemaData();
  const faqSchema = data.faqs ? generateFAQSchema(data.faqs) : null;
  const organizationSchema = generateOrganizationSchema();
  const navigationSchema = generateSiteNavigationSchema();

  return (
    <Helmet>
      {/* Primary schema data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      {/* Organization schema (always included) */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Site navigation schema */}
      <script type="application/ld+json">
        {JSON.stringify(navigationSchema)}
      </script>

      {/* FAQ schema if provided */}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}

      {/* Additional schemas based on route */}
      {location.pathname === '/' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Hridesh Bharati - Portfolio Collection",
            "description": "Collection of web development projects and programming work",
            "url": generateCanonicalUrl(),
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": 10,
              "itemListElement": []
            }
          })}
        </script>
      )}

      {location.pathname === '/projects' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Web Development Projects",
            "description": "Collection of web development projects by Hridesh Bharati",
            "url": generateCanonicalUrl('/projects'),
            "numberOfItems": data.projectsCount || 5,
            "itemListOrder": "ItemListUnordered"
          })}
        </script>
      )}

      {location.pathname === '/learn' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LearningResource",
            "name": "Programming Learning Resources",
            "description": "Free programming courses and tutorials",
            "url": generateCanonicalUrl('/learn'),
            "learningResourceType": "course",
            "educationalLevel": ["beginner", "intermediate"],
            "competencyRequired": "basic programming knowledge"
          })}
        </script>
      )}
    </Helmet>
  );
};

// Utility function to generate FAQ data
export const createFAQData = (questionsAndAnswers) => {
  return questionsAndAnswers.map(([question, answer]) => ({
    question,
    answer
  }));
};

// Common FAQ data
export const commonFAQs = createFAQData([
  ["What services does Hridesh Bharati offer?", "Hridesh offers full stack web development, consulting, and programming education services."],
  ["What technologies does Hridesh specialize in?", "React, Node.js, JavaScript, TypeScript, GraphQL, MongoDB, and modern web development tools."],
  ["Is Hridesh available for freelance work?", "Yes, Hridesh is available for freelance and contract web development projects."],
  ["Does Hridesh offer programming courses?", "Yes, free programming courses and tutorials are available in the Learn section."],
  ["How can I contact Hridesh?", "You can use the contact form on the website or connect through social media links."]
]);

// Default props for different page types
export const schemaTypes = {
  home: {
    type: 'WebPage',
    data: {
      name: 'Hridesh Bharati | Full Stack Developer Portfolio',
      description: 'Professional portfolio showcasing web development projects and programming expertise',
      faqs: commonFAQs
    }
  },
  about: {
    type: 'Person',
    data: {
      name: 'Hridesh Bharati',
      jobTitle: 'Full Stack Developer',
      description: 'Full Stack Developer specializing in modern web technologies and scalable applications'
    }
  },
  projects: {
    type: 'ItemList',
    data: {
      name: 'Web Development Projects',
      description: 'Collection of web development projects built with modern technologies',
      projectsCount: 8
    }
  },
  learn: {
    type: 'LearningResource',
    data: {
      name: 'Programming Courses & Tutorials',
      description: 'Free programming courses covering web development, algorithms, and software engineering'
    }
  },
  contact: {
    type: 'ContactPage',
    data: {
      name: 'Contact Hridesh Bharati',
      description: 'Get in touch for web development projects, collaboration, or learning opportunities'
    }
  }
};

// HOC for automatic schema markup
export const withSchemaMarkup = (WrappedComponent, schemaType = 'WebPage') => {
  return function WithSchemaComponent(props) {
    const schemaProps = schemaTypes[schemaType] || { type: schemaType };
    
    return (
      <>
        <SchemaMarkup {...schemaProps} />
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default SchemaMarkup;