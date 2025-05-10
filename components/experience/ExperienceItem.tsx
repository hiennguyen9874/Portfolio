type ExperienceItemProps = {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  isLast?: boolean;
};

const ExperienceItem = ({
  title,
  company,
  period,
  description,
  achievements,
  isLast = false,
}: ExperienceItemProps) => {
  return (
    <div className={`relative pl-12 ${isLast ? '' : 'pb-12'} timeline-item`}>
      <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
        <i className="fas fa-briefcase text-white text-sm"></i>
      </div>
      <div className="bg-gray-800 rounded-xl p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-blue-400">{company}</p>
          </div>
          <div className="text-gray-400 text-sm mt-2 md:mt-0">{period}</div>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center mr-4">
            <div className="rounded-full overflow-hidden w-full h-full flex items-center justify-center">
              <i className="fas fa-building text-gray-500"></i>
            </div>
          </div>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
