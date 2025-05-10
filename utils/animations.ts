/**
 * Utility functions for animations and interactions
 */

// Scroll to element with smooth scrolling
export const scrollToElement = (elementId: string): void => {
  const targetElement = document.querySelector(elementId);

  if (targetElement) {
    window.scrollTo({
      top: (targetElement as HTMLElement).offsetTop - 80,
      behavior: 'smooth',
    });
  }
};

// Initialize intersection observer for animations
export const initSectionObserver = (): IntersectionObserver => {
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeIn');
      }
    });
  }, observerOptions);

  return observer;
};

// Toggle mobile menu
export const toggleMobileMenu = (mobileMenuElement: HTMLElement): void => {
  mobileMenuElement.classList.toggle('hidden');
};
