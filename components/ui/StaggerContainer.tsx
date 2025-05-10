'use client';

import { motion } from 'framer-motion';

import { ReactNode } from 'react';

import ScrollAnimation from './ScrollAnimation';

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  containerDelay?: number;
  containerVariant?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight';
}

const StaggerContainer = ({
  children,
  className = '',
  staggerDelay = 0.1,
  containerDelay = 0,
  containerVariant = 'fadeIn',
}: StaggerContainerProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: containerDelay,
      },
    },
  };

  return (
    <ScrollAnimation variant={containerVariant} className={className} delay={containerDelay}>
      <motion.div variants={container} initial="hidden" animate="show" className="w-full">
        {children}
      </motion.div>
    </ScrollAnimation>
  );
};

export default StaggerContainer;
