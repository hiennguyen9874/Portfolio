'use client';

import { motion } from 'framer-motion';

import { personalInfo } from '@/config/personal-info';

import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const handleViewAllProjects = () => {
    window.open(personalInfo.contact.social.github.url, '_blank');
  };

  return (
    <>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {personalInfo.projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              bgColor={project.bgColor}
              icon={<i className={`${project.icon} text-white text-6xl`}></i>}
              tags={[...project.tags]}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <button
          className="inline-flex items-center px-6 py-3 border border-gray-700 hover:bg-gray-800 text-white font-medium rounded-lg transition duration-300"
          onClick={handleViewAllProjects}
          aria-label="View all projects on GitHub"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleViewAllProjects()}
        >
          <i className="fab fa-github mr-2"></i> View All Projects on GitHub
        </button>
      </motion.div>
    </>
  );
};

export default ProjectsSection;
