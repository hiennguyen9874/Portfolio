import { motion } from 'framer-motion';

import { personalInfo } from '@/config/personal-info';

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  gpa?: string;
}

const EducationCard = ({ education }: { education: Education }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all"
      itemScope
      itemType="http://schema.org/EducationalCredential"
    >
      <div className="flex flex-col space-y-2">
        <h3 className="text-xl font-semibold text-white" itemProp="name">
          {education.degree}
        </h3>
        <p className="text-blue-400" itemProp="educationalCredentialAwarded">
          {education.institution}
        </p>
        <time
          className="text-gray-400 text-sm"
          itemProp="dateRange"
          dateTime={`${education.period.split(' - ')[0]}/${education.period.split(' - ')[1]}`}
        >
          {education.period}
        </time>
        <p className="text-gray-300 mt-2" itemProp="description">
          {education.description}
        </p>
        {education.gpa && (
          <p className="text-sm text-gray-400 mt-2" itemProp="grade">
            GPA: {education.gpa}
          </p>
        )}
      </div>
    </motion.article>
  );
};

const EducationSection = () => {
  return (
    <section aria-label="Education History" className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {personalInfo.education.map((education, index) => (
        <EducationCard key={`education-${index}`} education={education} />
      ))}
    </section>
  );
};

export default EducationSection;
