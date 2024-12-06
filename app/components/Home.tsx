import { motion } from "framer-motion";
import IconCloud from "@/components/ui/icon-cloud";
import { techSlugs } from "../User";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row justify-center items-center h-screen bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left Circular Tech Stack Icons */}
      <div className="relative w-full md:w-1/2 h-64 flex items-center justify-center mb-6 md:mb-0">
        <IconCloud iconSlugs={techSlugs} />
      </div>

      {/* Right Developer Description */}
      <motion.div
        className="w-full md:w-1/2 px-2 text-center md:text-left space-y-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-pink-600 to-green-600">
          Building sleek and effective digital experiences
        </h2>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
          I am a highly motivated and enthusiastic developer with expertise in
          MERN Stack, Data Science, and Deep Learning. My skills span a diverse
          tech stack including frontend, backend, cloud solutions, and AI/ML
          tools. I am passionate about building scalable, robust applications
          that make a difference.
        </p>
        <ul className="text-sm md:text-base space-y-1">
          <li>⚡ MERN Stack Development</li>
          <li>⚡ Deep Learning and Data Science</li>
          <li>⚡ Cloud Platforms: AWS, Azure, Vercel, etc</li>
          <li>⚡ DevOps and Containerization: Docker, Redis</li>
        </ul>
        <div className="text-lg md:text-base text-gray-300 ">
          Do visit Project Section. 🧐
        </div>

       {/* Social Links Section */}
       <div className="flex flex-wrap justify-center md:justify-start space-x-4">
          <a
            href="https://linkedin.com/in/sagar-puniyani"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-lg font-medium transition-all duration-200 space-x-2"
          >
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://twitter.com/sagarpuniyani"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-blue-400 hover:bg-blue-500 text-white rounded-md shadow-lg font-medium transition-all duration-200 space-x-2"
          >
            <FaTwitter size={20} />
            <span>Twitter</span>
          </a>
          <a
            href="https://github.com/sagar-puniyani"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-md shadow-lg font-medium transition-all duration-200 space-x-2"
          >
            <FaGithub size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="mailto:sagarpuniyani@gmail.com"
            onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=sagarpuniyani@gmail.com', '_blank')}
            className="flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md shadow-lg font-medium transition-all duration-200 space-x-2"
          >
            <FaEnvelope size={20} />
            <span>Gmail</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
