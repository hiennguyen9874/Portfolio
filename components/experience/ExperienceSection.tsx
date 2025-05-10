import ExperienceItem from './ExperienceItem';

type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
};

const ExperienceSection = () => {
  const experiences: Experience[] = [
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
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={experience.company}
              title={experience.title}
              company={experience.company}
              period={experience.period}
              description={experience.description}
              achievements={experience.achievements}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
