'use client';

import { motion, useAnimation, useInView } from 'framer-motion';

import { ReactNode, useEffect, useRef } from 'react';

import ParallaxScroll from './ParallaxScroll';

interface AnimatedSectionProps {
  children: ReactNode;
  id: string;
  className?: string;
  title?: string;
  subtitle?: string;
  hasParallaxBackground?: boolean;
  hasFadingEdges?: boolean;
}

const AnimatedSection = ({
  children,
  id,
  className = '',
  title,
  subtitle,
  hasParallaxBackground = false,
  hasFadingEdges = false,
}: AnimatedSectionProps) => {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, {
    once: true,
    amount: 0.05, // Lower threshold to trigger earlier
    margin: '-100px 0px', // Negative margin to start animation before element is fully in view
  });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <section id={id} className={`py-16 relative overflow-hidden ${className}`}>
      {hasParallaxBackground && (
        <div className="absolute inset-0 pointer-events-none">
          <ParallaxScroll direction="up" intensity={0.15}>
            <div className="absolute top-0 left-0 w-full h-[50vh] opacity-10 bg-gradient-radial from-blue-600/20 to-transparent rounded-full transform -translate-x-1/2 -translate-y-1/4" />
          </ParallaxScroll>
          <ParallaxScroll direction="down" intensity={0.1}>
            <div className="absolute bottom-0 right-0 w-full h-[50vh] opacity-10 bg-gradient-radial from-purple-600/20 to-transparent rounded-full transform translate-x-1/2 translate-y-1/4" />
          </ParallaxScroll>
        </div>
      )}

      {hasFadingEdges && (
        <>
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-gray-900 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
        </>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center mb-16"
          >
            {title && (
              <h2 className="text-3xl font-bold mb-4 section-title inline-block">{title}</h2>
            )}
            {subtitle && <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
          </motion.div>
        )}

        <motion.div
          ref={contentRef}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                ease: 'easeOut',
                staggerChildren: 0.1,
              },
            },
          }}
          className="w-full"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedSection;
