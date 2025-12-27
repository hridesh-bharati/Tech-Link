/* ============================= */
/* SMOOTH SCROLL (APP LIKE) */
/* ============================= */
export const smoothScroll = (target, offset = 0) => {
  const element =
    typeof target === 'string' ? document.querySelector(target) : target;

  if (!element) return;

  const elementTop = element.getBoundingClientRect().top;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  window.scrollTo({
    top: elementTop + scrollTop - offset,
    behavior: 'smooth'
  });
};

/* ============================= */
/* INTERSECTION OBSERVER */
/* (ANIMATION TRIGGER) */
/* ============================= */
export const createObserver = (callback, options = {}) => {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target);

          /* 🔥 once animated, unobserve (perf boost) */
          obs.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.15,
      ...options
    }
  );

  return observer;
};

/* ============================= */
/* SCROLL PROGRESS BAR */
/* (SMOOTH + RAF) */
/* ============================= */
export const setupScrollProgress = () => {
  const progressBar = document.querySelector('.scroll-progress');
  if (!progressBar) return;

  let ticking = false;

  const updateProgress = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress = docHeight > 0 ? scrollTop / docHeight : 0;

    progressBar.style.transform = `scaleX(${progress})`;
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateProgress);
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  updateProgress();

  /* cleanup (important for SPA / React) */
  return () => {
    window.removeEventListener('scroll', onScroll);
  };
};
