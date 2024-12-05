import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { mernProjects } from '../User';
import { ProjectCard } from '@/components/ProjectCard';

const Projects = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure the code runs only on the client side
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Avoid rendering on the server-side
  }

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-600">
          MERN Stack Projects
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {mernProjects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </motion.div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Machine Learning Projects
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
        >
          {mernProjects.map((project, index) => (
            <ProjectCard key={index} project={{ ...project }} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
