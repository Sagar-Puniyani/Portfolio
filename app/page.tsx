"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import { Button } from "@/components/ui/button";
import SparklingBackground from "@/components/SparklingBackground";
import Image from "next/image"; // Import for handling images

export default function Page() {
  const [activeTab, setActiveTab] = useState("🏡 home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      <SparklingBackground />
      <div className=" px-[30px] sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-8"
        >
          {/* Developer Info Section */}
          <div className="flex items-center">
            {/* Add Developer Image */}
            <Image
              src="/sagarImg.jpeg"
              alt="Developer Image"
              width={40}
              height={40}
              className="rounded-full mr-4"
            />
            <span className="text-3xl">👋</span>

            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-red-800">
              , I&apos;m Sagar Puniyani
            </h1>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            {/* GitHub Button */}
            <motion.a
              href="https://github.com/sagar-puniyani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 m-4 rounded-full bg-black text-white text-sm shadow-md hover:shadow-lg border border-gray-700 relative overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Gradient Border Effect */}
              <span
                className="absolute inset-0  rounded-full bg-gradient-to-r from-blue-400 via-gray-800 to-gray-900 opacity-40 pointer-events-none"
                aria-hidden="true"
              ></span>

              {/* GitHub Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-teal-400"
              >
                <path d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.5v-1.8c-3.3.7-4-1.6-4-1.6-.5-1.2-1.3-1.5-1.3-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 2 .7 2.6.1.1-.7.4-1.1.7-1.3-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.3-3.2-.2-.3-.6-1.7.1-3.4 0 0 1-.3 3.4 1.3a12 12 0 0 1 6.2 0c2.3-1.6 3.4-1.3 3.4-1.3.7 1.7.3 3.1.1 3.4.8.8 1.3 1.9 1.3 3.2 0 4.5-2.7 5.5-5.3 5.8.4.3.8.9.8 1.8v2.7c0 .3.2.6.8.5A12 12 0 0 0 12 0z" />
              </svg>

              {/* Button Text */}
              <span className="text-xl font-bold" >GitHub</span>
            </motion.a>

            {/* Resume Download Button */}
            <Button variant="premium" asChild>
              <a href="/resume.pdf" download>
                Download Resume
              </a>
            </Button>
          </div>
        </motion.div>
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <motion.main
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8"
        >
          {activeTab === "🏡 home" && <Home />}
          {activeTab === "👨‍🏫 experience" && <Experience />}
          {activeTab === "🖥️ projects" && <Projects />}
          {activeTab === "👨‍🎓 education" && <Education />}
          {activeTab === "📜 certificates" && <Certificates />}
          {activeTab === "📱 contact" && <Contact />}
        </motion.main>
      </div>
    </div>
  );
}
