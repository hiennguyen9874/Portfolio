import { ReactNode } from 'react';

import { personalInfo } from '@/config/personal-info';

type ContactItemProps = {
  icon: ReactNode;
  title: string;
  value: string;
  link?: string;
};

const ContactItem = ({ icon, title, value, link }: ContactItemProps) => {
  return (
    <div className="flex items-start">
      <div className="w-10 h-10 rounded-full bg-blue-900/20 flex items-center justify-center mr-4">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-gray-300">{title}</h4>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400"
            tabIndex={0}
            aria-label={`Contact via ${title}: ${value}`}
          >
            {value}
          </a>
        ) : (
          <p className="text-gray-400">{value}</p>
        )}
      </div>
    </div>
  );
};

const ContactInfo = () => {
  const contactItems = [
    {
      icon: <i className="fas fa-envelope text-blue-500"></i>,
      title: 'Email',
      value: personalInfo.contact.email,
      link: `mailto:${personalInfo.contact.email}`,
    },
    {
      icon: <i className="fab fa-linkedin-in text-blue-500"></i>,
      title: 'LinkedIn',
      value: personalInfo.contact.social.linkedin.username,
      link: personalInfo.contact.social.linkedin.url,
    },
    {
      icon: <i className="fab fa-github text-blue-500"></i>,
      title: 'GitHub',
      value: personalInfo.contact.social.github.username,
      link: personalInfo.contact.social.github.url,
    },
    {
      icon: <i className="fas fa-map-marker-alt text-blue-500"></i>,
      title: 'Location',
      value: personalInfo.contact.location,
    },
  ];

  return (
    <div className="bg-gray-800 rounded-xl p-8">
      <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
      <div className="space-y-6">
        {contactItems.map((item) => (
          <ContactItem
            key={item.title}
            icon={item.icon}
            title={item.title}
            value={item.value}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
