'use client';

import { motion } from 'framer-motion';

import Image from 'next/image';
import Script from 'next/script';

const HeroSection = () => {
  return (
    <>
      <Script id="person-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Your Name",
            "jobTitle": "Senior Software Developer",
            "description": "Senior Software Developer specializing in Backend Development, DevOps Automation, and Deep Learning solutions",
            "url": "https://your-domain.com",
            "sameAs": [
              "https://github.com/yourusername",
              "https://linkedin.com/in/yourusername",
              "https://twitter.com/yourusername"
            ],
            "knowsAbout": [
              "Backend Development",
              "DevOps",
              "Deep Learning",
              "Python",
              "Go",
              "Cloud Computing"
            ]
          }
        `}
      </Script>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16"
        aria-label="Introduction"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="gradient-text">Senior Software Developer</span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Architecting scalable backend systems, automating infrastructure, and implementing
                deep learning solutions to solve complex problems.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <a
                  href="#contact"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300"
                  aria-label="Contact me"
                  role="button"
                >
                  Contact Me
                </a>
                <a
                  href="#skills"
                  className="px-6 py-3 border border-gray-700 hover:bg-gray-800 text-white font-medium rounded-lg transition duration-300 flex items-center gap-2"
                  aria-label="View my skills"
                  role="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  View Skills
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, type: 'spring', stiffness: 100 }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-xl opacity-20 animate-pulse"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  transition={{ delay: 0.7, duration: 1 }}
                ></motion.div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <motion.div
                    initial={{ rotate: -5, y: 0 }}
                    animate={{ rotate: 5, y: -10 }}
                    transition={{
                      repeat: Infinity,
                      repeatType: 'reverse',
                      duration: 2,
                      ease: 'easeInOut',
                    }}
                  >
                    <Image
                      src="/profile-image.jpg"
                      alt="Senior Software Developer Profile"
                      width={320}
                      height={320}
                      priority
                      className="rounded-full w-56 h-56 md:w-72 md:h-72 object-cover border-4 border-gray-800 shadow-xl"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
