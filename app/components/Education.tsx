import { motion } from 'framer-motion'

const Education = () => {
  const educationData = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'Stanford University',
      period: '2013 - 2015',
      details: 'Specialized in Machine Learning and Artificial Intelligence',
    },
    {
      degree: 'Bachelor of Science in Computer Engineering',
      school: 'MIT',
      period: '2009 - 2013',
      details: 'Minor in Mathematics',
    },
  ]

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600">
        Educational Background
      </h2>
      {educationData.map((edu, index) => (
        <motion.div
          key={index}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-2">{edu.degree}</h3>
          <p className="text-gray-400 mb-2">{edu.school}, {edu.period}</p>
          <p className="text-gray-300">{edu.details}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default Education

