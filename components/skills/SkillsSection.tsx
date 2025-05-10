'use client';

import { motion } from 'framer-motion';
import { FaBrain, FaCloud, FaServer } from 'react-icons/fa';

import { personalInfo } from '@/config/personal-info';

const iconMap = {
  server: FaServer,
  cloud: FaCloud,
  brain: FaBrain,
} as const;

const SkillsSection = () => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {personalInfo.skills.categories.map((category, categoryIndex) => {
        const Icon = iconMap[category.icon as keyof typeof iconMap];
        return (
          <motion.div
            key={category.title}
            className="bg-gray-800 rounded-xl p-5 transition duration-300 hover:-translate-y-[5px] hover:shadow-[0_10px_25px_rgba(59,130,246,0.2)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * categoryIndex, duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <div
                className={`w-10 h-10 rounded-full ${category.iconBg} flex items-center justify-center mr-4`}
              >
                <Icon className={`${category.iconColor} text-xl`} />
              </div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
            <p className="text-gray-400 mb-6">{category.description}</p>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, index) => (
                <motion.span
                  key={skill.name}
                  className={`px-3 py-1 ${skill.color} rounded-full text-sm`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * categoryIndex + index * 0.05, duration: 0.3 }}
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default SkillsSection;
