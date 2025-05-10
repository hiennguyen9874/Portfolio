'use client';

import { motion } from 'framer-motion';

import { ReactNode } from 'react';

type ProjectTag = {
  name: string;
  color: string;
};

type ProjectCardProps = {
  title: string;
  description: string;
  bgColor: string;
  icon: ReactNode;
  tags: ProjectTag[];
};

const ProjectCard = ({ title, description, bgColor, icon, tags }: ProjectCardProps) => {
  const handleViewDetails = () => {
    console.log(`View details for ${title}`);
  };

  return (
    <motion.div
      className="bg-gray-800 rounded-xl overflow-hidden project-card h-full flex flex-col"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={`h-40 ${bgColor} flex items-center justify-center`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-1.5">{title}</h3>
        <p className="text-gray-400 text-sm mb-2">{description}</p>
        <div className="flex flex-wrap gap-1.5 mb-auto">
          {tags.map((tag) => (
            <motion.span
              key={tag.name}
              className={`px-2 py-0.5 ${tag.color} rounded-full text-xs`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              {tag.name}
            </motion.span>
          ))}
        </div>
        <motion.button
          className="text-blue-500 hover:text-blue-400 text-sm font-medium flex items-center mt-2"
          onClick={handleViewDetails}
          aria-label={`View details for ${title}`}
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleViewDetails()}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          View Details <i className="fas fa-arrow-right ml-2"></i>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
