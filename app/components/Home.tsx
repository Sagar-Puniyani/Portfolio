import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div 
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-600">
        Welcome to My Portfolio
      </h2>
      <p className="text-xl text-gray-300 leading-relaxed">
        I&apos;m a passionate developer with expertise in MERN stack and Machine Learning.
        Explore my projects, experience, and skills to learn more about my work.
      </p>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        initial="hidden"
        animate="show"
      >
        {['React', 'Node.js', 'MongoDB', 'Machine Learning'].map((skill) => (
          <motion.div
            key={skill}
            className="bg-gray-800 p-4 rounded-lg shadow-lg"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
          >
            <h3 className="text-xl font-semibold mb-2">{skill}</h3>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Home

