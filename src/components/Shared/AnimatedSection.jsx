import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { createObserver } from '../../utils/scrollUtils';

const AnimatedSection = ({ 
  children, 
  className = '',
  delay = 0,
  duration = 0.6,
  once = true,
  threshold = 0.1,
  animation = 'fadeUp',
  ...props 
}) => {
  const controls = useAnimation();
  const ref = useRef(null);

  const animations = {
    fadeUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 }
    },
    fadeDown: {
      hidden: { opacity: 0, y: -30 },
      visible: { opacity: 1, y: 0 }
    },
    fadeLeft: {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 }
    },
    fadeRight: {
      hidden: { opacity: 0, x: 30 },
      visible: { opacity: 1, x: 0 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    },
    rotate: {
      hidden: { opacity: 0, rotate: -10 },
      visible: { opacity: 1, rotate: 0 }
    }
  };

  useEffect(() => {
    const observer = createObserver(
      () => {
        controls.start('visible');
        if (once) observer.unobserve(ref.current);
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [controls, once, threshold]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animations[animation]}
      transition={{ duration, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;