// src/utils/seo.js

// Generate meta description
export const generateMetaDescription = (content, maxLength = 160) => {
  const cleanContent = content
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\s+/g, ' ') // Replace multiple spaces
    .trim();

  if (cleanContent.length <= maxLength) return cleanContent;

  return cleanContent.substring(0, maxLength).trim() + '...';
};

// Generate canonical URL (Vite compatible)
export const generateCanonicalUrl = (path = '') => {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL || 'https://hrideshbharati.com';
  const cleanPath = path === '/' ? '' : path;
  return `${baseUrl}${cleanPath}`;
};

// Generate breadcrumbs structured data
export const getBreadcrumbData = (pathname) => {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: generateCanonicalUrl()
    }
  ];

  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    breadcrumbs.push({
      "@type": "ListItem",
      position: index + 2,
      name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      item: generateCanonicalUrl(currentPath)
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs
  };
};

// Generate structured data for various types
export const generateStructuredData = (type, data) => {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type,
    url: generateCanonicalUrl(),
    dateModified: new Date().toISOString(),
  };

  switch (type) {
    case 'Person':
      return {
        ...baseData,
        name: data.name || "Hridesh Bharati",
        jobTitle: data.jobTitle || "Full Stack Developer",
        description: data.description || "Full Stack Developer specializing in modern web technologies",
        knowsAbout: data.knowsAbout || [
          "Web Development",
          "React",
          "Node.js",
          "JavaScript",
          "GraphQL",
          "TypeScript",
          "MongoDB",
          "PostgreSQL"
        ],
        sameAs: data.sameAs || [
          "https://github.com/hrideshbharati",
          "https://linkedin.com/in/hrideshbharati",
          "https://twitter.com/hrideshbharati"
        ],
        image: data.image || "/profile.jpg",
        alumniOf: data.alumniOf || {
          "@type": "EducationalOrganization",
          name: "Computer Science University"
        }
      };

    case 'WebSite':
      return {
        ...baseData,
        name: data.name || "Hridesh Bharati Portfolio",
        description: data.description || "Professional portfolio showcasing web development projects and programming courses",
        publisher: {
          "@type": "Person",
          name: "Hridesh Bharati"
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${generateCanonicalUrl()}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      };

    case 'WebPage':
      return {
        ...baseData,
        name: data.name || document.title,
        description: data.description || document.querySelector('meta[name="description"]')?.content,
        inLanguage: "en-US",
        isPartOf: {
          "@type": "WebSite",
          name: "Hridesh Bharati Portfolio",
          url: generateCanonicalUrl()
        }
      };

    case 'Course':
      return {
        ...baseData,
        name: data.title || "Programming Course",
        description: data.description || "Learn programming with hands-on projects",
        provider: {
          "@type": "Organization",
          name: "Hridesh Bharati Portfolio",
          sameAs: generateCanonicalUrl()
        },
        educationalLevel: data.level || "beginner",
        timeRequired: data.duration || "PT8H",
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: ["online"],
          instructor: {
            "@type": "Person",
            name: "Hridesh Bharati"
          }
        }
      };

    case 'ItemList':
      return {
        ...baseData,
        name: data.name || "Web Development Projects",
        description: data.description || "Collection of web development projects",
        numberOfItems: data.numberOfItems || 5,
        itemListOrder: data.itemListOrder || "ItemListUnordered"
      };

    case 'LearningResource':
      return {
        ...baseData,
        name: data.name || "Programming Learning Resources",
        description: data.description || "Free programming courses and tutorials",
        learningResourceType: data.learningResourceType || "course",
        educationalLevel: data.educationalLevel || ["beginner", "intermediate"],
        competencyRequired: data.competencyRequired || "basic programming knowledge"
      };

    case 'ContactPage':
      return {
        ...baseData,
        name: data.name || "Contact Hridesh Bharati",
        description: data.description || "Get in touch for web development projects and collaboration",
        mainEntity: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "contact@hrideshbharati.com",
          availableLanguage: ["English", "Hindi"]
        }
      };

    case 'Organization':
      return {
        ...baseData,
        name: "Hridesh Bharati Portfolio",
        url: generateCanonicalUrl(),
        logo: `${generateCanonicalUrl()}/logo.png`,
        description: "Professional portfolio and web development services",
        sameAs: [
          "https://github.com/hrideshbharati",
          "https://linkedin.com/in/hrideshbharati",
          "https://twitter.com/hrideshbharati"
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-XXXXXXXXXX",
          contactType: "customer service",
          email: "contact@hrideshbharati.com",
          availableLanguage: ["English"]
        }
      };

    default:
      return baseData;
  }
};

// Performance metrics
export const getPerformanceMetrics = () => {
  if (!window.performance || !window.performance.getEntriesByType) {
    return { pageLoaded: performance.now(), domLoaded: 0, firstPaint: 0, firstContentfulPaint: 0 };
  }

  try {
    const navigation = performance.getEntriesByType('navigation')[0];
    const paint = performance.getEntriesByType('paint');

    return {
      dns: navigation ? navigation.domainLookupEnd - navigation.domainLookupStart : 0,
      tcp: navigation ? navigation.connectEnd - navigation.connectStart : 0,
      request: navigation ? navigation.responseStart - navigation.requestStart : 0,
      response: navigation ? navigation.responseEnd - navigation.responseStart : 0,
      domLoaded: navigation ? navigation.domContentLoadedEventEnd - navigation.startTime : 0,
      pageLoaded: navigation ? navigation.loadEventEnd - navigation.startTime : performance.now(),
      firstPaint: paint?.find(p => p.name === 'first-paint')?.startTime || 0,
      firstContentfulPaint: paint?.find(p => p.name === 'first-contentful-paint')?.startTime || 0
    };
  } catch (error) {
    console.error('Error getting performance metrics:', error);
    return { pageLoaded: performance.now(), domLoaded: 0, firstPaint: 0, firstContentfulPaint: 0 };
  }
};

// FAQ Schema
export const generateFAQSchema = (faqs) => {
  if (!faqs || !Array.isArray(faqs) || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };
};

// Organization Schema
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hridesh Bharati Portfolio",
  url: generateCanonicalUrl(),
  logo: `${generateCanonicalUrl()}/logo.png`,
  description: "Professional portfolio and web development services",
  sameAs: [
    "https://github.com/hrideshbharati",
    "https://linkedin.com/in/hrideshbharati",
    "https://twitter.com/hrideshbharati"
  ]
});

// Site Navigation Schema
export const generateSiteNavigationSchema = () => {
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
    name: "Main Navigation",
    url: generateCanonicalUrl(),
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: mainMenuItems.length,
      itemListElement: mainMenuItems.map((item, index) => ({
        "@type": "SiteNavigationElement",
        position: index + 1,
        name: item.name,
        url: item.url
      }))
    }
  };
};

// Common FAQs
export const commonFAQs = [
  { question: "What services does Hridesh Bharati offer?", answer: "Hridesh offers full stack web development, consulting, and programming education services." },
  { question: "What technologies does Hridesh specialize in?", answer: "React, Node.js, JavaScript, TypeScript, GraphQL, MongoDB, and modern web development tools." },
  { question: "Is Hridesh available for freelance work?", answer: "Yes, Hridesh is available for freelance and contract web development projects." },
  { question: "Does Hridesh offer programming courses?", answer: "Yes, free programming courses and tutorials are available in the Learn section." },
  { question: "How can I contact Hridesh?", answer: "You can use the contact form on the website or connect through social media links." }
];

// Utility to create FAQ data
export const createFAQData = (questionsAndAnswers) =>
  questionsAndAnswers.map(([question, answer]) => ({ question, answer }));

// Rank tracking
export const trackRanking = (keyword, position) => {
  const data = {
    keyword,
    position,
    timestamp: new Date().toISOString(),
    url: window.location.href,
    userAgent: navigator.userAgent
  };

  if (import.meta.env.MODE === 'production') {
    fetch('/api/ranking/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).catch(console.error);
  }
};

// Page title generator
export const generatePageTitle = (pathname) => {
  const baseTitle = "Hridesh Bharati | Full Stack Developer";
  switch (pathname) {
    case '/': return `${baseTitle} Portfolio`;
    case '/about': return `About ${baseTitle}`;
    case '/projects': return `Projects by ${baseTitle}`;
    case '/learn': return `Learn Programming | Courses by ${baseTitle}`;
    case '/contact': return `Contact ${baseTitle}`;
    default: return baseTitle;
  }
};

// Keywords generator
export const generateKeywords = (pathname) => {
  const baseKeywords = ["Hridesh Bharati", "Full Stack Developer", "Web Development"];
  switch (pathname) {
    case '/': return [...baseKeywords, "portfolio", "web developer portfolio", "react developer"];
    case '/about': return [...baseKeywords, "about", "experience", "skills", "career"];
    case '/projects': return [...baseKeywords, "projects", "portfolio showcase", "github", "open source"];
    case '/learn': return [...baseKeywords, "learn programming", "courses", "tutorials", "coding education"];
    case '/contact': return [...baseKeywords, "contact", "hire", "collaboration", "freelance"];
    default: return baseKeywords;
  }
};
