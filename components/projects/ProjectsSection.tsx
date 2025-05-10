"use client";

import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

type Project = {
  title: string;
  description: string;
  bgColor: string;
  icon: JSX.Element;
  tags: { name: string; color: string }[];
};

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: 'Distributed Event Processing',
      description: 'High-throughput event processing system using Kafka, Go, and Kubernetes handling 50K+ events/sec.',
      bgColor: 'bg-gradient-to-r from-blue-600 to-purple-600',
      icon: <i className="fas fa-server text-white text-6xl"></i>,
      tags: [
        { name: 'Go', color: 'bg-blue-900/20 text-blue-400' },
        { name: 'Kafka', color: 'bg-blue-900/20 text-blue-400' },
        { name: 'Kubernetes', color: 'bg-blue-900/20 text-blue-400' },
        { name: 'PostgreSQL', color: 'bg-blue-900/20 text-blue-400' },
      ]
    },
    {
      title: 'Infrastructure as Code Pipeline',
      description: 'Automated cloud infrastructure provisioning with Terraform, GitHub Actions, and AWS.',
      bgColor: 'bg-gradient-to-r from-purple-600 to-indigo-600',
      icon: <i className="fas fa-code-branch text-white text-6xl"></i>,
      tags: [
        { name: 'Terraform', color: 'bg-purple-900/20 text-purple-400' },
        { name: 'AWS', color: 'bg-purple-900/20 text-purple-400' },
        { name: 'GitHub Actions', color: 'bg-purple-900/20 text-purple-400' },
        { name: 'Docker', color: 'bg-purple-900/20 text-purple-400' },
      ]
    },
    {
      title: 'Real-time Object Detection',
      description: 'Computer vision system for industrial quality control using PyTorch and ONNX runtime.',
      bgColor: 'bg-gradient-to-r from-green-600 to-teal-600',
      icon: <i className="fas fa-brain text-white text-6xl"></i>,
      tags: [
        { name: 'PyTorch', color: 'bg-green-900/20 text-green-400' },
        { name: 'ONNX', color: 'bg-green-900/20 text-green-400' },
        { name: 'FastAPI', color: 'bg-green-900/20 text-green-400' },
        { name: 'Docker', color: 'bg-green-900/20 text-green-400' },
      ]
    },
    {
      title: 'Scalable Analytics Backend',
      description: 'Time-series data processing pipeline with Python, ClickHouse, and Redis.',
      bgColor: 'bg-gradient-to-r from-indigo-600 to-blue-600',
      icon: <i className="fas fa-database text-white text-6xl"></i>,
      tags: [
        { name: 'Python', color: 'bg-blue-900/20 text-blue-400' },
        { name: 'ClickHouse', color: 'bg-blue-900/20 text-blue-400' },
        { name: 'Redis', color: 'bg-blue-900/20 text-blue-400' },
        { name: 'Kubernetes', color: 'bg-blue-900/20 text-blue-400' },
      ]
    },
    {
      title: 'NLP Text Classification',
      description: 'Transformer-based model for document classification deployed as a microservice.',
      bgColor: 'bg-gradient-to-r from-teal-600 to-green-600',
      icon: <i className="fas fa-robot text-white text-6xl"></i>,
      tags: [
        { name: 'PyTorch', color: 'bg-green-900/20 text-green-400' },
        { name: 'Transformers', color: 'bg-green-900/20 text-green-400' },
        { name: 'FastAPI', color: 'bg-green-900/20 text-green-400' },
        { name: 'Docker', color: 'bg-green-900/20 text-green-400' },
      ]
    },
    {
      title: 'Microservices Orchestration',
      description: 'Event-driven architecture with gRPC, Kubernetes, and service mesh.',
      bgColor: 'bg-gradient-to-r from-blue-600 to-indigo-600',
      icon: <i className="fas fa-project-diagram text-white text-6xl"></i>,
      tags: [
        { name: 'Go', color: 'bg-blue-900/20 text-blue-400' },
        { name: 'gRPC', color: 'bg-blue-900/20 text-blue-400' },
        { name: 'Kubernetes', color: 'bg-blue-900/20 text-blue-400' },
        { name: 'Istio', color: 'bg-blue-900/20 text-blue-400' },
      ]
    },
  ];

  const handleViewAllProjects = () => {
    console.log('View all projects on GitHub');
  };

  return (
    <>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {projects.map((project, index) => (
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
              icon={project.icon}
              tags={project.tags}
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