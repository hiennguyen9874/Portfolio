'use client';

import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

import { personalInfo } from '@/config/personal-info';

const HeroSection = () => {
  return (
    <>
      <Script id="person-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "${personalInfo.name}",
            "jobTitle": "${personalInfo.title}",
            "description": "${personalInfo.description}",
            "url": "${personalInfo.website.url}",
            "sameAs": [
              "${personalInfo.contact.social.github.url}",
              "${personalInfo.contact.social.linkedin.url}",
              "${personalInfo.contact.social.twitter.url}"
            ],
            "knowsAbout": ${JSON.stringify(personalInfo.skills)}
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
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text font-extrabold tracking-tight mb-2 block text-5xl md:text-7xl">
                  {personalInfo.name}
                </span>
                <span className="gradient-text text-3xl md:text-5xl font-semibold">
                  {personalInfo.title}
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {personalInfo.description}
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
                <Link
                  href="/cv"
                  className="px-6 py-3 border border-blue-700 bg-transparent hover:bg-blue-700/20 text-white font-medium rounded-lg transition duration-300 flex items-center gap-2"
                  aria-label="Download my resume"
                  role="button"
                >
                  <FileDown className="h-5 w-5" aria-hidden="true" />
                  Resume
                </Link>
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
