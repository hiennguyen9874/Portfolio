'use client';

import { useState, useEffect } from 'react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Smooth scrolling implementation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        
        const targetId = target.getAttribute('href');
        const targetElement = document.querySelector(targetId as string);
        
        if (targetElement) {
          window.scrollTo({
            top: (targetElement as HTMLElement).offsetTop - 80,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          if (isOpen) {
            setIsOpen(false);
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [isOpen]);

  return (
    <>
      <div className="md:hidden flex items-center">
        <button 
          id="menu-btn" 
          className="text-gray-300 hover:text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      <div id="mobile-menu" className={`md:hidden ${isOpen ? '' : 'hidden'} bg-dark border-t border-gray-800`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md">Home</a>
          <a href="#skills" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md">Skills</a>
          <a href="#projects" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md">Projects</a>
          <a href="#experience" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md">Experience</a>
          <a href="#blog" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md">Blog</a>
          <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md">Contact</a>
        </div>
      </div>
    </>
  );
};

export default MobileMenu; 