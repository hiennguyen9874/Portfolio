'use client';

import { motion } from 'framer-motion';
import { FaBrain, FaCloud, FaServer } from 'react-icons/fa';

const SkillsSection = () => {
  const backendSkills = [
    { name: 'Python', color: 'bg-blue-900/20 text-blue-400' },
    { name: 'Go', color: 'bg-blue-900/20 text-blue-400' },
    { name: 'Node.js', color: 'bg-blue-900/20 text-blue-400' },
    { name: 'PostgreSQL', color: 'bg-blue-900/20 text-blue-400' },
    { name: 'Kafka', color: 'bg-blue-900/20 text-blue-400' },
    { name: 'REST APIs', color: 'bg-blue-900/20 text-blue-400' },
    { name: 'gRPC', color: 'bg-blue-900/20 text-blue-400' },
    { name: 'Redis', color: 'bg-blue-900/20 text-blue-400' },
  ];

  const devopsSkills = [
    { name: 'Docker', color: 'bg-purple-900/20 text-purple-400' },
    { name: 'Kubernetes', color: 'bg-purple-900/20 text-purple-400' },
    { name: 'Terraform', color: 'bg-purple-900/20 text-purple-400' },
    { name: 'CI/CD', color: 'bg-purple-900/20 text-purple-400' },
    { name: 'AWS', color: 'bg-purple-900/20 text-purple-400' },
    { name: 'GitHub Actions', color: 'bg-purple-900/20 text-purple-400' },
    { name: 'Prometheus', color: 'bg-purple-900/20 text-purple-400' },
    { name: 'Grafana', color: 'bg-purple-900/20 text-purple-400' },
  ];

  const mlSkills = [
    { name: 'PyTorch', color: 'bg-green-900/20 text-green-400' },
    { name: 'TensorFlow', color: 'bg-green-900/20 text-green-400' },
    { name: 'MLOps', color: 'bg-green-900/20 text-green-400' },
    { name: 'Computer Vision', color: 'bg-green-900/20 text-green-400' },
    { name: 'NLP', color: 'bg-green-900/20 text-green-400' },
    { name: 'Transformers', color: 'bg-green-900/20 text-green-400' },
    { name: 'ONNX', color: 'bg-green-900/20 text-green-400' },
    { name: 'MLflow', color: 'bg-green-900/20 text-green-400' },
  ];

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-gray-800 rounded-xl p-5 transition duration-300 hover:-translate-y-[5px] hover:shadow-[0_10px_25px_rgba(59,130,246,0.2)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center mr-4">
            <FaServer className="text-blue-500 text-xl" />
          </div>
          <h3 className="text-xl font-semibold">Backend Development</h3>
        </div>
        <p className="text-gray-400 mb-6">
          Building high-performance, scalable backend systems and APIs.
        </p>
        <div className="flex flex-wrap gap-2">
          {backendSkills.map((skill, index) => (
            <motion.span
              key={skill.name}
              className={`px-3 py-1 ${skill.color} rounded-full text-sm`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="bg-gray-800 rounded-xl p-5 transition duration-300 hover:-translate-y-[5px] hover:shadow-[0_10px_25px_rgba(147,51,234,0.2)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center mr-4">
            <FaCloud className="text-purple-500 text-xl" />
          </div>
          <h3 className="text-xl font-semibold">DevOps & Cloud</h3>
        </div>
        <p className="text-gray-400 mb-6">
          Implementing robust cloud infrastructure and automation pipelines.
        </p>
        <div className="flex flex-wrap gap-2">
          {devopsSkills.map((skill, index) => (
            <motion.span
              key={skill.name}
              className={`px-3 py-1 ${skill.color} rounded-full text-sm`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="bg-gray-800 rounded-xl p-5 transition duration-300 hover:-translate-y-[5px] hover:shadow-[0_10px_25px_rgba(34,197,94,0.2)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-green-900/30 flex items-center justify-center mr-4">
            <FaBrain className="text-green-500 text-xl" />
          </div>
          <h3 className="text-xl font-semibold">Deep Learning</h3>
        </div>
        <p className="text-gray-400 mb-6">
          Developing and deploying advanced machine learning solutions.
        </p>
        <div className="flex flex-wrap gap-2">
          {mlSkills.map((skill, index) => (
            <motion.span
              key={skill.name}
              className={`px-3 py-1 ${skill.color} rounded-full text-sm`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillsSection;
