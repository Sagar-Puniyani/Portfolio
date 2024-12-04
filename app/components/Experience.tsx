import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Developer',
      company: 'Tech Corp',
      period: '2018 - Present',
      responsibilities: [
        'Led development of multiple MERN stack projects',
        'Implemented machine learning algorithms for data analysis',
        'Mentored junior developers and conducted code reviews',
      ],
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Inc',
      period: '2015 - 2018',
      responsibilities: [
        'Developed and maintained React-based web applications',
        'Collaborated with UX designers to implement responsive designs',
        'Optimized application performance and reduced load times',
      ],
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Inc',
      period: '2015 - 2018',
      responsibilities: [
        'Developed and maintained React-based web applications',
        'Collaborated with UX designers to implement responsive designs',
        'Optimized application performance and reduced load times',
      ],
    },
  ]

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-600">
        Professional Experience
      </h2>
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-2">{exp.title} - {exp.company}</h3>
          <p className="text-gray-400 mb-4">{exp.period}</p>
          <ul className="list-disc list-inside space-y-2">
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx} className="text-gray-300">{resp}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  )
}

export default Experience

