import React, { useEffect, useRef, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import GradientText from '../../Shared/GradientText';
import "./Hero.css"

const Hero = () => {
  const typedElement = useRef(null);
  const typedInstance = useRef(null);

  // Memoized scroll function
  const scrollToProjects = useCallback(() => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Memoized Typed.js options
  const typedOptions = useMemo(() => ({
    strings: [
      'Frontend Developer',
      'UI/UX Designer',
      'React Specialist',
      'Next.js Expert',
      'TypeScript Developer',
      'Web Animations Pro'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1500,
    startDelay: 500,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    smartBackspace: true,
  }), []);

  // Typed.js initialization
  useEffect(() => {
    if (!typedElement.current) return;

    typedInstance.current = new Typed(typedElement.current, typedOptions);

    return () => {
      typedInstance.current?.destroy();
    };
  }, [typedOptions]);

  // Particle creation function
  const createParticles = useCallback(() => {
    const particlesContainer = document.querySelector('.hero-particles-container');
    if (!particlesContainer) return;

    // Clear existing particles
    particlesContainer.innerHTML = '';

    const particleCount = Math.min(30, Math.floor(window.innerWidth / 30)); 
    const colors = [
      'radial-gradient(circle, rgba(37,99,235,0.4) 0%, rgba(37,99,235,0) 70%)',
      'radial-gradient(circle, rgba(124,58,237,0.4) 0%, rgba(124,58,237,0) 70%)',
      'radial-gradient(circle, rgba(6,182,212,0.4) 0%, rgba(6,182,212,0) 70%)',
      'radial-gradient(circle, rgba(16,185,129,0.4) 0%, rgba(16,185,129,0) 70%)'
    ];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'hero-particle';

      const size = Math.random() * 5 + 2;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const color = colors[i % colors.length];
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;

      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        top: ${top}%;
        background: ${color};
        animation: hero-float ${duration}s linear infinite;
        animation-delay: ${delay}s;
        opacity: ${Math.random() * 0.3 + 0.1};
        will-change: transform, opacity;
      `;

      particlesContainer.appendChild(particle);
    }
  }, []);

  // Particle effect with throttled resize handler
  useEffect(() => {
    let resizeTimeout;
    let animationFrame;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (animationFrame) cancelAnimationFrame(animationFrame);
        animationFrame = requestAnimationFrame(createParticles);
      }, 250);
    };

    // Initial creation on next animation frame
    animationFrame = requestAnimationFrame(createParticles);
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [createParticles]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  // Floating elements animation
  const floatingElements = useMemo(() => [
    { icon: 'bi-braces', className: 'hero-floating-element-1' },
    { icon: 'bi-lightning', className: 'hero-floating-element-2' },
    { icon: 'bi-code-slash', className: 'hero-floating-element-3' }
  ], []);

  return (
    <section className="hero-section py-5 section" id="home">
      {/* Background Particles */}
      <div className="hero-particles-container" aria-hidden="true"></div>

      {/* Animated Background Shapes */}
      <div className="hero-background-shapes" aria-hidden="true">
        {[1, 2, 3].map((shape) => (
          <motion.div
            key={shape}
            className={`hero-background-shape hero-shape-${shape}`}
            animate={{
              rotate: shape % 2 === 0 ? -360 : 360,
              scale: [1, 1.1, 1],
              ...(shape === 2 && { y: [0, -30, 0] }),
              ...(shape === 3 && { x: [0, 30, 0] })
            }}
            transition={{
              rotate: {
                duration: shape === 1 ? 20 : shape === 2 ? 25 : 30,
                repeat: Infinity,
                ease: "linear"
              },
              scale: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              },
              ...(shape === 2 && {
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }),
              ...(shape === 3 && {
                x: { duration: 7, repeat: Infinity, ease: "easeInOut" }
              })
            }}
          />
        ))}
      </div>

      <div className="container hero-container">
        {/* Left Side Content */}
        <motion.div
          className="hero-content-wrapper"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Typed.js Title */}
          <motion.div variants={itemVariants} className="hero-title-wrapper">
            <h1 className="hero-main-title">
              Hi, I'm <GradientText>Hridesh Bharati</GradientText>
            </h1>
            <div className="hero-typed-container mx-4">
              <span className="hero-typed-prefix">I'm a </span>
              <span 
                className="hero-typed-text" 
                ref={typedElement}
                aria-live="polite"
              ></span>
            </div>
          </motion.div>

          {/* Optimized Subtitle */}
          <motion.div variants={itemVariants}>
            <h2 className="hero-subtitle">
              I <span className="hero-highlight-word">build</span>
              {' '}<span className="hero-floating-word">exceptional</span>{' '}
              digital experiences that are{' '}
              <motion.span
                className="hero-gradient-word"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                fast
              </motion.span>,{' '}
              <span className="hero-highlight-word">accessible</span>, and{' '}
              <span className="hero-floating-word">visually appealing</span>.
            </h2>
          </motion.div>

          {/* Enhanced Description Card */}
          <motion.div
            variants={itemVariants}
            className="hero-description-wrapper"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="hero-description-content">
              <motion.div
                className="hero-description-icon"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                aria-hidden="true"
              >
                <i className="bi bi-rocket-takeoff"></i>
              </motion.div>
              <p className="hero-description-text">
                I specialize in <span className="hero-tech-highlight">React</span>,{' '}
                <span className="hero-tech-highlight">Next.js</span>, and{' '}
                <span className="hero-tech-highlight">TypeScript</span>.
                With a strong focus on performance and user experience,
                I create web applications that not only look great but also
                deliver <span className="hero-success-highlight">exceptional results</span>.
              </p>
            </div>
          </motion.div>

          {/* Enhanced Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="hero-actions"
          >
            <motion.button
              className="hero-action-btn btn-primary"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 40px rgba(37, 99, 235, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              aria-label="View my work portfolio"
            >
              <div className="hero-btn-icon">
                <i className="bi bi-briefcase-fill"></i>
              </div>
              <span>View My Work</span>
              <div className="hero-btn-arrow">
                <i className="bi bi-arrow-right"></i>
              </div>
            </motion.button>

            <motion.a
              href="#contact"
              className="hero-action-btn btn-outline"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(37, 99, 235, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Contact me for collaboration"
            >
              <div className="hero-btn-icon">
                <i className="bi bi-chat-left-dots-fill"></i>
              </div>
              <span>Let's Talk</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side Hero Image */}
        <motion.div
          className="hero-image-section"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          <div className="hero-image-wrapper">
            {/* Floating Elements */}
            <div className="hero-floating-elements" aria-hidden="true">
              {floatingElements.map((element, index) => (
                <motion.div
                  key={index}
                  className={`hero-floating-element ${element.className}`}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    rotate: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    scale: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <i className={`bi ${element.icon}`}></i>
                </motion.div>
              ))}
            </div>

            <div className="hero-profile-image-wrapper">
              <motion.div
                className="hero-profile-image"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="hero-image-container">
                  {/* Animated border/gradient wrapper */}
                  <motion.div
                    className="hero-gradient-border"
                    animate={{
                      background: [
                        'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                        'linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)',
                        'linear-gradient(135deg, #06b6d4 0%, #10b981 100%)',
                        'linear-gradient(135deg, #10b981 0%, #2563eb 100%)'
                      ]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    aria-hidden="true"
                  >
                    {/* Image inside */}
                    <img
                      src="/img/pic1.jpg"
                      alt="Hridesh Bharati - Frontend Developer"
                      className="hero-profile-photo-inner"
                      loading="eager"
                      width="350"
                      height="350"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.style.background = 'linear-gradient(135deg, #2563eb, #7c3aed)';
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;