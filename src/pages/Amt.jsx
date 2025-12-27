import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

const Amt = () => {
  const [activeChars, setActiveChars] = useState(new Set());
  const [charStates, setCharStates] = useState({});
  const [isAnimating, setIsAnimating] = useState(true);
  const [touchCount, setTouchCount] = useState(0);
  const animationRef = useRef(null);
  
  const paragraphLines = [
    "I build exceptional digital experiences",
    "that are fast, accessible, visually appealing",
    "and responsive.",
    "Passionate about learning new technologies",
    "and implementing innovative solutions."
  ];

  const fullText = paragraphLines.join('\n');
  const allChars = fullText.split('');
  
  // Start animation with 90% characters
  const startMassiveAnimation = () => {
    if (!isAnimating) return;
    
    const totalChars = allChars.length;
    const charsToAnimate = Math.floor(totalChars * 0.9); // 90% characters
    const newActiveChars = new Set();
    const newCharStates = {};
    
    // Select 90% of characters randomly
    const indices = Array.from({ length: totalChars }, (_, i) => i)
      .filter(i => allChars[i] !== ' ' && allChars[i] !== '\n')
      .sort(() => Math.random() - 0.5)
      .slice(0, charsToAnimate);
    
    indices.forEach(index => {
      newActiveChars.add(index);
      
      // Maximum float distance
      newCharStates[index] = {
        x: (Math.random() - 0.5) * 200, // Up to 200px horizontal
        y: (Math.random() - 0.5) * 150, // Up to 150px vertical
        rotation: (Math.random() - 0.5) * 1080, // Up to 1080° rotation
        scale: Math.random() * 1.5 + 1.5, // 1.5x to 3x scale
        opacity: 0.6,
        delay: Math.random() * 0.3
      };
    });
    
    setActiveChars(newActiveChars);
    setCharStates(newCharStates);
    
    // Return characters after 1 second
    setTimeout(() => {
      setActiveChars(new Set());
      setCharStates({});
    }, 1000);
  };

  // Auto animation loop
  useEffect(() => {
    let animationInterval;
    
    if (isAnimating) {
      // Start immediately
      startMassiveAnimation();
      
      // Repeat every 2 seconds
      animationInterval = setInterval(() => {
        startMassiveAnimation();
      }, 2000);
    }
    
    return () => {
      if (animationInterval) {
        clearInterval(animationInterval);
      }
    };
  }, [isAnimating]);

  // Handle touch/click
  const handleInteraction = () => {
    setTouchCount(prev => {
      const newCount = prev + 1;
      
      if (newCount >= 3) {
        // Reset on 3rd touch
        setIsAnimating(true);
        return 0;
      } else {
        // Toggle animation
        setIsAnimating(prev => !prev);
        return newCount;
      }
    });
    
    // Clear all floating characters immediately
    setActiveChars(new Set());
    setCharStates({});
  };

  // Render character with animation
  const renderCharacter = (char, index) => {
    const isActive = activeChars.has(index);
    const state = charStates[index];
    
    if (isActive && state) {
      return (
        <motion.span
          key={index}
          className="floating-char d-inline-block position-relative"
          initial={{ 
            x: 0, 
            y: 0, 
            rotate: 0, 
            scale: 1,
            opacity: 1 
          }}
          animate={{ 
            x: state.x,
            y: state.y,
            rotate: state.rotation,
            scale: state.scale,
            opacity: state.opacity
          }}
          transition={{ 
            duration: 0.9,
            delay: state.delay,
            ease: "easeOut"
          }}
          style={{
            color: 'inherit',
            zIndex: 10,
            fontWeight: '600',
            willChange: 'transform, opacity'
          }}
        >
          {char}
          {/* Trail effect */}
          <motion.span
            className="char-trail position-absolute"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0 }}
            transition={{ duration: 0.3, delay: state.delay }}
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '40px',
              height: '40px',
              background: 'radial-gradient(circle, currentColor 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(6px)',
              opacity: 0.3
            }}
          />
        </motion.span>
      );
    }
    
    // Normal character
    return (
      <span
        key={index}
        className="normal-char d-inline-block"
        style={{
          color: 'inherit',
          transition: 'all 0.3s ease'
        }}
      >
        {char}
      </span>
    );
  };

  return (
    <div 
      ref={animationRef}
      className="container-fluid py-4"
      onClick={handleInteraction}
      onTouchStart={handleInteraction}
      style={{ cursor: 'pointer', userSelect: 'none' }}
    >
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          
          {/* Subtitle with Bootstrap */}
          <p className="hero-subtitle text-center mb-4 fs-5 text-muted">
            Building digital experiences with{" "}
            <span className="static-word fw-bold text-dark">
              creativity
            </span>
          </p>

          {/* Main Paragraph Container */}
          <div className="paragraph-wrapper position-relative mb-4">
            <div className="paragraph-box bg-white rounded-4 p-4 p-md-5 border shadow-sm">
              
              {/* Paragraph Lines */}
              <div className="text-center">
                {paragraphLines.map((line, lineIndex) => {
                  const lineStartIndex = paragraphLines
                    .slice(0, lineIndex)
                    .join('').length + lineIndex;
                  
                  return (
                    <div key={lineIndex} className="line-wrapper mb-2 fs-5 fw-medium">
                      {line.split('').map((char, charIndex) => {
                        const globalIndex = lineStartIndex + charIndex;
                        return renderCharacter(char, globalIndex);
                      })}
                    </div>
                  );
                })}
              </div>

            

            </div>

            {/* Background Glow Effect */}
            {isAnimating && (
              <motion.div
                className="glow-overlay position-absolute rounded-4"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.1, 0.2, 0.1],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity 
                }}
                style={{
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'radial-gradient(circle at center, rgba(0,0,0,0.05) 0%, transparent 70%)',
                  zIndex: -1,
                  pointerEvents: 'none'
                }}
              />
            )}
          </div>

          {/* Control Info with Bootstrap */}
          <div className="control-info text-center small text-muted mt-3">
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <span className="d-flex align-items-center">
                <i className="bi bi-play-circle me-1"></i>
                Auto-animates every 2s
              </span>
              {/* <span className="d-flex align-items-center">
                <i className="bi bi-hand-index me-1"></i>
                Tap to control
              </span>
              <span className="d-flex align-items-center">
                <i className="bi bi-arrow-clockwise me-1"></i>
                Resets after 3 taps
              </span> */}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Amt;