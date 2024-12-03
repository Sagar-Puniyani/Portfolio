import { motion } from 'framer-motion';
import IconCloud from '@/components/ui/icon-cloud';
import { techSlugs } from '../User';
// import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaGithub } from 'react-icons/fa'; // Import icons
// import { SiMongodb, SiTailwindcss, SiPostman, SiJupyter } from 'react-icons/si'; // Import more icons
// import { TbBrandVite, TbBrandNextjs } from 'react-icons/tb';


const Home = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row justify-center  h-screen bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left Circular Tech Stack Icons */}
      <div className="relative w-[50%] items-center h-64 flex-shrink-0">
        <IconCloud iconSlugs={techSlugs} />
      </div>

      {/* Right Developer Description */}
      <motion.div
        className="md:w-2/3 p-6 text-center md:text-left space-y-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-pink-600 to-green-600">
        Building sleek and effective digital experiences
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          I am a highly motivated and enthusiastic developer with expertise in MERN Stack, Data Science, and Deep Learning. My skills span a diverse tech stack including frontend, backend, cloud solutions, and AI/ML tools. I am passionate about building scalable, robust applications that make a difference.
        </p>
        <ul className="space-y-1">
          <li>⚡ MERN Stack Development</li>
          <li>⚡ Deep Learning and Data Science</li>
          <li>⚡ Cloud Platforms: AWS, Azure, GCP</li>
          <li>⚡ DevOps and Containerization: Docker, Redis</li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Home;

