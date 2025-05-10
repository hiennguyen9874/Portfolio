"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxScrollProps {
  children: React.ReactNode;
  baseVelocity?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  intensity?: number;
}

const ParallaxScroll = ({
  children,
  baseVelocity = 1,
  className = '',
  direction = 'up',
  intensity = 0.1
}: ParallaxScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Determine which transform property to use based on direction
  const isHorizontal = direction === 'left' || direction === 'right';
  const isReverse = direction === 'down' || direction === 'right';
  
  // Calculate the transform value
  const transformValue = useTransform(
    scrollYProgress,
    [0, 1],
    isReverse 
      ? [0, 100 * intensity * baseVelocity] 
      : [0, -100 * intensity * baseVelocity]
  );

  // Set the transform property based on direction
  const transform = isHorizontal
    ? { x: transformValue }
    : { y: transformValue };

  return (
    <motion.div
      ref={ref}
      style={transform}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxScroll; 