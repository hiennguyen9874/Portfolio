'use client';

import { personalInfo } from '@/config/personal-info';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: 'fab fa-github', url: personalInfo.contact.social.github.url },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: personalInfo.contact.social.linkedin.url },
    { name: 'Twitter', icon: 'fab fa-twitter', url: personalInfo.contact.social.twitter.url },
  ];

  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold gradient-text">DEV</span>
            <p className="text-gray-400 text-sm mt-1">{personalInfo.title}</p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-gray-400 hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow on ${link.name}`}
                tabIndex={0}
              >
                <i className={`${link.icon} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
