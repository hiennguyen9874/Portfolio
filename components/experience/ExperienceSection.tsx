import { personalInfo } from '@/config/personal-info';

const ExperienceSection = () => {
  return (
    <div className="max-w-3xl mx-auto">
      {personalInfo.experience.map((exp, index) => (
        <div key={index} className="relative pl-12 pb-12 timeline-item">
          <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
            <i className="fas fa-briefcase text-white text-sm"></i>
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-blue-400">{exp.company}</p>
              </div>
              <div className="text-gray-400 text-sm mt-2 md:mt-0">{exp.period}</div>
            </div>
            <p className="text-gray-400 mb-4">{exp.description}</p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
