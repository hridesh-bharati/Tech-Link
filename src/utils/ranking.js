// src/utils/ranking.js
export const rankingStrategy = {
  technical: {
    performance: {
      target: 'LCP < 2.5s',
      weight: 0.3,
      metrics: ['LCP', 'FID', 'CLS']
    },
    seo: {
      target: 'Score > 90',
      weight: 0.4,
      metrics: ['metaTags', 'structuredData', 'mobileFriendly']
    },
    accessibility: {
      target: 'Score > 95',
      weight: 0.15,
      metrics: ['aria', 'contrast', 'keyboardNavigation']
    },
    bestPractices: {
      target: 'Score > 90',
      weight: 0.15,
      metrics: ['https', 'securityHeaders', 'validHTML']
    }
  },
  
  content: {
    keywords: [
      'full stack developer',
      'react developer portfolio',
      'web development projects',
      'programming courses',
      'javascript tutorials'
    ],
    density: {
      title: '3-5%',
      headings: '2-4%',
      content: '1-2%'
    }
  },
  
  backlink: {
    qualitySources: [
      'github.com',
      'linkedin.com',
      'dev.to',
      'medium.com',
      'stackoverflow.com'
    ],
    targetDA: '> 40'
  }
};

export const trackRankingMetrics = () => {
  const metrics = {
    pageViews: localStorage.getItem('pageViews') || 0,
    avgTimeOnPage: localStorage.getItem('avgTimeOnPage') || 0,
    bounceRate: localStorage.getItem('bounceRate') || 0,
    conversions: localStorage.getItem('conversions') || 0
  };
  
  // Update metrics
  const now = Date.now();
  const lastVisit = localStorage.getItem('lastVisit');
  
  if (lastVisit) {
    const timeSpent = now - parseInt(lastVisit);
    const currentAvg = parseInt(metrics.avgTimeOnPage);
    const newAvg = Math.floor((currentAvg + timeSpent) / 2);
    metrics.avgTimeOnPage = newAvg;
    localStorage.setItem('avgTimeOnPage', newAvg);
  }
  
  localStorage.setItem('lastVisit', now);
  localStorage.setItem('pageViews', parseInt(metrics.pageViews) + 1);
  
  return metrics;
};

export const generateRankingReport = () => {
  const performance = getPerformanceMetrics();
  const userMetrics = trackRankingMetrics();
  
  return {
    timestamp: new Date().toISOString(),
    url: window.location.href,
    performance,
    userMetrics,
    strategy: rankingStrategy,
    suggestions: []
  };
};