import { motion } from 'framer-motion'

const Projects = () => {
  const mernProjects = [
    { title: 'E-commerce Platform', description: 'Full-stack MERN application with user authentication and payment integration.' },
    { title: 'Task Management System', description: 'Real-time collaborative task management tool built with MERN stack and Socket.io.' },
  ]

  const mlProjects = [
    { title: 'Image Classification Model', description: 'Convolutional Neural Network for classifying images using TensorFlow and Keras.' },
    { title: 'Natural Language Processing Tool', description: 'Sentiment analysis and text classification using NLTK and scikit-learn.' },
  ]

  const ProjectCard = ({ title, description } : { title: string, description: string }) => (
    <motion.div
      className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-600">
          MERN Stack Projects
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {mernProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Machine Learning Projects
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
        >
          {mlProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Projects

