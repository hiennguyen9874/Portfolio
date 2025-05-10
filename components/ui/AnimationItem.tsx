"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimationItemProps {
  children: ReactNode;
  className?: string;
  variant?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  custom?: number;
}

const variants = {
  fadeIn: {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'tween',
        ease: 'easeOut'
      }
    }
  },
  slideUp: {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'tween',
        ease: 'easeOut'
      }
    }
  },
  slideLeft: {
    hidden: { opacity: 0, x: 40 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: 'tween',
        ease: 'easeOut'
      }
    }
  },
  slideRight: {
    hidden: { opacity: 0, x: -40 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: 'tween',
        ease: 'easeOut'
      }
    }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20
      }
    }
  }
};

const AnimationItem = ({
  children,
  className = '',
  variant = 'fadeIn',
  custom = 0
}: AnimationItemProps) => {
  return (
    <motion.div
      variants={variants[variant]}
      className={className}
      custom={custom}
    >
      {children}
    </motion.div>
  );
};

export default AnimationItem; 