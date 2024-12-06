// import { motion } from 'framer-motion'

// const Experience = () => {
//   const experiences = [
//     {
//       title: 'Data Science Intern',
//       company: 'Ybi Foundation',
//       period: 'july 2024 - sept 2024',
//       responsibilities: [
//         'Led development of multiple MERN stack projects',
//         'Implemented machine learning algorithms for data analysis',
//         'Mentored junior developers and conducted code reviews',
//       ],
//     },
//     {
//       title: 'Research Assistant',
//       company: 'GGSIPU',
//       period: 'oct 2023 - April 2024',
//       responsibilities: [
//         'Developed and maintained React-based web applications',
//         'Collaborated with UX designers to implement responsive designs',
//         'Optimized application performance and reduced load times',
//       ],
//     },
//     {
//       title: 'MERN Developer Intern', 
//       company: 'BrainMentors Pvt. Ltd.',
//       period: 'Aug 2023 - sep 2023',
//       responsibilities: [
//         'Developed and maintained React-based web applications',
//         'Collaborated with UX designers to implement responsive designs',
//         'Optimized application performance and reduced load times',
//       ],
//     },
//   ]

//   return (
//     <div className="space-y-8">
//       <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-600">
//         Professional Experience
//       </h2>
//       {experiences.map((exp, index) => (
//         <motion.div
//           key={index}
//           className="bg-gray-800 p-6 rounded-lg shadow-lg"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: index * 0.2 }}
//         >
//           <h3 className="text-2xl font-semibold mb-2">{exp.title} - {exp.company}</h3>
//           <p className="text-gray-400 mb-4">{exp.period}</p>
//           <ul className="list-disc list-inside space-y-2">
//             {exp.responsibilities.map((resp, idx) => (
//               <li key={idx} className="text-gray-300">{resp}</li>
//             ))}
//           </ul>
//         </motion.div>
//       ))}
//     </div>
//   )
// }

// export default Experience

import { motion } from 'framer-motion';
import ExperienceCard from '@/components/ExperienceCard';
import { experienceData } from '@/app/User';

const Experience = () => {
  return (
    <div className="space-y-8 max-w-6xl mx-auto px-4 py-8">
      <motion.h2 
        className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Professional Experience
      </motion.h2>
      
      <div className="space-y-6">
        {experienceData.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <ExperienceCard 
            title={experience.title}
            company={experience.company}
            period={experience.period}
            responsibilities={experience.responsibilities}
            image={experience.image} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;