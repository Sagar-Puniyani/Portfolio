import { motion } from 'framer-motion';
import { Img } from 'react-image';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  image: string;
}

const ExperienceCard = ( experienceData : ExperienceCardProps) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="md:flex">
        {/* Image container */}
        <div className="md:w-1/4">
          <Img
            src={experienceData.image}
            alt={`${experienceData.company} experience`}
            className="w-full h-64 md:h-full object-cover"

          />
        </div>

        {/* Content container */}
        <div className="md:w-2/3 p-6">
          <h3 className="text-2xl font-semibold mb-2">
            {experienceData.title} - {experienceData.company}
          </h3>
          <p className="text-gray-400 mb-4">{experienceData.period}</p>
          <ul className="list-disc list-inside space-y-2">
            {experienceData.responsibilities.map((responsibility, idx) => (
              <li key={idx} className="text-gray-300">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;