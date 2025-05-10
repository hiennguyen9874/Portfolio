"use client";

import { ReactNode, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import React from 'react';

type AnimationVariant = 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'stagger';

interface ScrollAnimationProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

const initialStates = {
  hidden: { opacity: 0, y: 30 },
  fadeIn: { opacity: 0, y: 30 },
  slideUp: { opacity: 0, y: 60 },
  slideLeft: { opacity: 0, x: 60 },
  slideRight: { opacity: 0, x: -60 },
  scale: { opacity: 0, scale: 0.8 },
  stagger: { opacity: 0, y: 30 }
};

const variants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  fadeIn: {
    opacity: 1,
    y: 0
  },
  slideUp: {
    opacity: 1,
    y: 0
  },
  slideLeft: {
    opacity: 1,
    x: 0
  },
  slideRight: {
    opacity: 1,
    x: 0
  },
  scale: {
    opacity: 1,
    scale: 1
  },
  stagger: {
    opacity: 1,
    y: 0
  }
};

const ScrollAnimation = ({
  children,
  variant = 'fadeIn',
  delay = 0,
  duration = 0.5,
  className = '',
  threshold = 0.2,
  once = true
}: ScrollAnimationProps) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once,
    amount: threshold
  });

  useEffect(() => {
    if (isInView) {
      controls.start(variant);
    }
  }, [controls, isInView, variant]);

  return (
    <motion.div
      ref={ref}
      initial={initialStates[variant]}
      animate={controls}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation; 