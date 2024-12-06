// import { motion } from 'framer-motion'

// const Education = () => {
//   const educationData = [
//     {
//       degree: 'Bachelor of Technology in Computer Science - IIoT',
//       school: 'GGSIPU',
//       period: '2021 - Present',
//       details: 'Specialized in Machine Learning and Artificial Intelligence',
//     },
//     {
//       degree: 'CBSE - 12th Higher Secondary',
//       school: 'KVS secondary school',
//       period: '2019 - 2020',
//       details: 'Domain in Physics, Chemistry, and Mathematics',
//     },
//   ]

//   return (
//     <div className="space-y-8">
//       <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600">
//         Educational Background
//       </h2>
//       {educationData.map((edu, index) => (
//         <motion.div
//           key={index}
//           className="bg-gray-800 p-6 rounded-lg shadow-lg"
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: index * 0.2 }}
//         >
//           <h3 className="text-2xl font-semibold mb-2">{edu.degree}</h3>
//           <p className="text-gray-400 mb-2">{edu.school}, {edu.period}</p>
//           <p className="text-gray-300">{edu.details}</p>
//         </motion.div>
//       ))}
//     </div>
//   )
// }

// export default Education

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Building2, BookOpen } from 'lucide-react';
import { Img } from 'react-image';

interface EducationItem {
  degree: string;
  school: string;
  period: string;
  details: string;
  logo: string;
}

const educationData: EducationItem[] = [
  {
    degree: 'Bachelor of Technology in Computer Science - IIoT',
    school: 'GGSIPU',
    period: '2021 - present',
    details: 'Specialized in Machine Learning and Artificial Intelligence',
    logo: 'https://res.cloudinary.com/dizsgelec/image/upload/v1733469010/share/wsdwbux1jvg8yrnj0ash.jpg'
  },
  {
    degree: 'CBSE - 12th Higher Secondary',
    school: 'KVS secondary school',
    period: '2019 - 2020',
    details: 'Domain in Physics, Chemistry, and Mathematics',
    logo: 'https://res.cloudinary.com/dizsgelec/image/upload/v1733468508/share/sxgxehqkm5tpojr76v2t.png'
  },
  {
    degree: 'CBSE - 10th Higher Secondary',
    school: 'Citizen Model secondary school',
    period: '2017 - 2018',
    details: 'General Science, Humanities and Mathematics',
    logo: 'https://res.cloudinary.com/dizsgelec/image/upload/v1733468508/share/jswbnuvphshf33merpwu.png'
  }
];

const Education = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Educational Background
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3">
                <Img 
                  src={edu.logo} 
                  alt={edu.school}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              
              <div className="w-full md:w-2/3 p-6">
                <div className="flex items-center gap-2 text-green-500 dark:text-green-400 mb-2">
                  <GraduationCap className="w-5 h-5" />
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                </div>
                
                <div className="space-y-2 dark:text-white">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    <p>{edu.school}</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <p>{edu.period}</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <p>{edu.details}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;