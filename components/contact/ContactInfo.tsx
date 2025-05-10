import { ReactNode } from 'react';

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
      value: 'contact@developer.com',
      link: 'mailto:contact@developer.com'
    },
    {
      icon: <i className="fab fa-linkedin-in text-blue-500"></i>,
      title: 'LinkedIn',
      value: 'linkedin.com/in/developer',
      link: 'https://linkedin.com/in/developer'
    },
    {
      icon: <i className="fab fa-github text-blue-500"></i>,
      title: 'GitHub',
      value: 'github.com/developer',
      link: 'https://github.com/developer'
    },
    {
      icon: <i className="fas fa-map-marker-alt text-blue-500"></i>,
      title: 'Location',
      value: 'San Francisco, CA'
    }
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