'use client';

import { useEffect } from 'react';

const ScrollAnimationProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Add scroll animation for sections
    const observerOptions = {
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    // Cleanup
    return () => {
      document.querySelectorAll('section').forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return <>{children}</>;
};

export default ScrollAnimationProvider; 