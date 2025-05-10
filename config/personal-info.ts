export const personalInfo = {
  domain: 'hiennguyen9874-portfolio.vercel.app',
  name: 'Hien Nguyen',
  title: 'Senior Software Developer',
  description:
    'Architecting scalable backend systems, automating infrastructure, and implementing deep learning solutions to solve complex problems.',
  contact: {
    email: 'hiennguyen9874@gmail.com',
    location: 'Ho Chi Minh, Vietnam',
    social: {
      github: {
        url: 'https://github.com/hiennguyen9874',
        username: 'hiennguyen9874',
      },
      linkedin: {
        url: 'https://linkedin.com/in/hiennguyen9874',
        username: 'hiennguyen9874',
      },
      twitter: {
        url: 'https://twitter.com/hiennguyen9874',
        username: 'hiennguyen9874',
      },
    },
  },
  education: [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'University of Technology',
      period: '2020 - 2022',
      description:
        'Specialized in Artificial Intelligence and Machine Learning. Completed thesis on Deep Learning applications in Computer Vision.',
      gpa: '3.9/4.0',
    },
    {
      degree: 'Bachelor of Science in Computer Engineering',
      institution: 'State University',
      period: '2016 - 2020',
      description:
        'Focused on Software Engineering and Systems Design. Participated in multiple hackathons and coding competitions.',
      gpa: '3.8/4.0',
    },
  ],
  experience: [
    {
      title: 'Senior Software Engineer',
      company: 'TechCorp Inc.',
      period: 'Jan 2021 - Present',
      description: 'Leading backend and infrastructure initiatives for enterprise SaaS platform.',
      achievements: [
        'Architected and implemented a distributed event processing system handling 50K+ events/sec',
        'Led migration from monolithic to microservices architecture, reducing deployment times by 70%',
        'Implemented Kubernetes-based CI/CD pipelines reducing production incidents by 60%',
        'Mentored 3 junior developers, improving team velocity by 40%',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'DataSystems Ltd.',
      period: 'Mar 2018 - Dec 2020',
      description: 'Developed data-intensive applications and machine learning pipelines.',
      achievements: [
        'Built real-time data processing pipelines using Python, Kafka, and Spark',
        'Designed and implemented a computer vision system reducing defect detection time by 90%',
        'Containerized ML models using Docker and deployed with Kubernetes',
        'Automated infrastructure provisioning with Terraform, reducing setup time by 80%',
      ],
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Innovations',
      period: 'Jun 2016 - Feb 2018',
      description: 'Full-stack development with focus on backend systems and APIs.',
      achievements: [
        'Developed REST APIs and backend services for web applications',
        'Implemented automated testing framework reducing bugs by 50%',
        'Optimized database queries improving response times by 40%',
        'Assisted in migration to cloud infrastructure (AWS)',
      ],
    },
  ],
  projects: [
    {
      title: 'Distributed Event Processing',
      description:
        'High-throughput event processing system using Kafka, Go, and Kubernetes handling 50K+ events/sec.',
      bgColor: 'bg-gradient-to-r from-blue-600 to-purple-600',
      icon: 'fas fa-server',
      tags: [
        { name: 'Go', color: 'bg-blue-900/20 text-blue-400' },
        { name: 'Kafka', color: 'bg-blue-900/20 text-blue-400' },
        { name: 'Kubernetes', color: 'bg-blue-900/20 text-blue-400' },
        { name: 'PostgreSQL', color: 'bg-blue-900/20 text-blue-400' },
      ],
    },
    {
      title: 'Infrastructure as Code Pipeline',
      description:
        'Automated cloud infrastructure provisioning with Terraform, GitHub Actions, and AWS.',
      bgColor: 'bg-gradient-to-r from-purple-600 to-indigo-600',
      icon: 'fas fa-code-branch',
      tags: [
        { name: 'Terraform', color: 'bg-purple-900/20 text-purple-400' },
        { name: 'AWS', color: 'bg-purple-900/20 text-purple-400' },
        { name: 'GitHub Actions', color: 'bg-purple-900/20 text-purple-400' },
        { name: 'Docker', color: 'bg-purple-900/20 text-purple-400' },
      ],
    },
    {
      title: 'Real-time Object Detection',
      description:
        'Computer vision system for industrial quality control using PyTorch and ONNX runtime.',
      bgColor: 'bg-gradient-to-r from-green-600 to-teal-600',
      icon: 'fas fa-brain',
      tags: [
        { name: 'PyTorch', color: 'bg-green-900/20 text-green-400' },
        { name: 'ONNX', color: 'bg-green-900/20 text-green-400' },
        { name: 'FastAPI', color: 'bg-green-900/20 text-green-400' },
        { name: 'Docker', color: 'bg-green-900/20 text-green-400' },
      ],
    },
    {
      title: 'Scalable Analytics Backend',
      description: 'Time-series data processing pipeline with Python, ClickHouse, and Redis.',
      bgColor: 'bg-gradient-to-r from-indigo-600 to-blue-600',
      icon: 'fas fa-database',
      tags: [
        { name: 'Python', color: 'bg-blue-900/20 text-blue-400' },
        { name: 'ClickHouse', color: 'bg-blue-900/20 text-blue-400' },
        { name: 'Redis', color: 'bg-blue-900/20 text-blue-400' },
        { name: 'Kubernetes', color: 'bg-blue-900/20 text-blue-400' },
      ],
    },
    {
      title: 'NLP Text Classification',
      description:
        'Transformer-based model for document classification deployed as a microservice.',
      bgColor: 'bg-gradient-to-r from-teal-600 to-green-600',
      icon: 'fas fa-robot',
      tags: [
        { name: 'PyTorch', color: 'bg-green-900/20 text-green-400' },
        { name: 'Transformers', color: 'bg-green-900/20 text-green-400' },
        { name: 'FastAPI', color: 'bg-green-900/20 text-green-400' },
        { name: 'Docker', color: 'bg-green-900/20 text-green-400' },
      ],
    },
    {
      title: 'Microservices Orchestration',
      description: 'Event-driven architecture with gRPC, Kubernetes, and service mesh.',
      bgColor: 'bg-gradient-to-r from-blue-600 to-indigo-600',
      icon: 'fas fa-project-diagram',
      tags: [
        { name: 'Go', color: 'bg-blue-900/20 text-blue-400' },
        { name: 'gRPC', color: 'bg-blue-900/20 text-blue-400' },
        { name: 'Kubernetes', color: 'bg-blue-900/20 text-blue-400' },
        { name: 'Istio', color: 'bg-blue-900/20 text-blue-400' },
      ],
    },
  ],
  skills: {
    categories: [
      {
        title: 'Backend Development',
        description: 'Building high-performance, scalable backend systems and APIs.',
        icon: 'server',
        iconBg: 'bg-blue-900/30',
        iconColor: 'text-blue-500',
        skills: [
          { name: 'Python', color: 'bg-blue-900/20 text-blue-400' },
          { name: 'Go', color: 'bg-blue-900/20 text-blue-400' },
          { name: 'Node.js', color: 'bg-blue-900/20 text-blue-400' },
          { name: 'PostgreSQL', color: 'bg-blue-900/20 text-blue-400' },
          { name: 'Kafka', color: 'bg-blue-900/20 text-blue-400' },
          { name: 'REST APIs', color: 'bg-blue-900/20 text-blue-400' },
          { name: 'gRPC', color: 'bg-blue-900/20 text-blue-400' },
          { name: 'Redis', color: 'bg-blue-900/20 text-blue-400' },
        ],
      },
      {
        title: 'DevOps & Cloud',
        description: 'Implementing robust cloud infrastructure and automation pipelines.',
        icon: 'cloud',
        iconBg: 'bg-purple-900/30',
        iconColor: 'text-purple-500',
        skills: [
          { name: 'Docker', color: 'bg-purple-900/20 text-purple-400' },
          { name: 'Kubernetes', color: 'bg-purple-900/20 text-purple-400' },
          { name: 'Terraform', color: 'bg-purple-900/20 text-purple-400' },
          { name: 'CI/CD', color: 'bg-purple-900/20 text-purple-400' },
          { name: 'AWS', color: 'bg-purple-900/20 text-purple-400' },
          { name: 'GitHub Actions', color: 'bg-purple-900/20 text-purple-400' },
          { name: 'Prometheus', color: 'bg-purple-900/20 text-purple-400' },
          { name: 'Grafana', color: 'bg-purple-900/20 text-purple-400' },
        ],
      },
      {
        title: 'Deep Learning',
        description: 'Developing and deploying advanced machine learning solutions.',
        icon: 'brain',
        iconBg: 'bg-green-900/30',
        iconColor: 'text-green-500',
        skills: [
          { name: 'PyTorch', color: 'bg-green-900/20 text-green-400' },
          { name: 'TensorFlow', color: 'bg-green-900/20 text-green-400' },
          { name: 'MLOps', color: 'bg-green-900/20 text-green-400' },
          { name: 'Computer Vision', color: 'bg-green-900/20 text-green-400' },
          { name: 'NLP', color: 'bg-green-900/20 text-green-400' },
          { name: 'Transformers', color: 'bg-green-900/20 text-green-400' },
          { name: 'ONNX', color: 'bg-green-900/20 text-green-400' },
          { name: 'MLflow', color: 'bg-green-900/20 text-green-400' },
        ],
      },
    ],
  },
  blog: {
    posts: [
      {
        category: 'Backend Development',
        date: 'Jun 2023',
        title: 'Designing High-Performance APIs in Go',
        description:
          'Architectural patterns and optimization techniques for building low-latency APIs.',
        bgColor: 'bg-gradient-to-r from-blue-600 to-indigo-600',
        icon: 'fas fa-book-open',
        accentColor: 'text-blue-500',
      },
      {
        category: 'DevOps',
        date: 'Apr 2023',
        title: 'Kubernetes Multi-Cluster Management',
        description: 'Strategies for managing multiple Kubernetes clusters with GitOps workflows.',
        bgColor: 'bg-gradient-to-r from-purple-600 to-pink-600',
        icon: 'fas fa-cloud',
        accentColor: 'text-purple-500',
      },
      {
        category: 'Deep Learning',
        date: 'Feb 2023',
        title: 'Optimizing PyTorch Models for Production',
        description: 'Techniques for reducing latency and memory usage in deep learning models.',
        bgColor: 'bg-gradient-to-r from-green-600 to-teal-600',
        icon: 'fas fa-brain',
        accentColor: 'text-green-500',
      },
    ],
  },
  website: {
    url: 'https://hiennguyen9874-portfolio.vercel.app',
    title: 'Senior Software Developer | Backend, DevOps & Deep Learning',
    description:
      'Portfolio of a Senior Software Developer specializing in Backend Development, DevOps Automation, and Deep Learning solutions. Expert in Python, Go, and Cloud Technologies.',
  },
} as const;
