"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import SparklingBackground from "@/components/SparklingBackground";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Footer from "./components/Footer";

export default function Page() {
  const [activeTab, setActiveTab] = useState("🏡 home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      <SparklingBackground />

      <div className="px-6 sm:px-8 lg:px-12 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-8 gap-4"
        >
          {/* Developer Info Section */}
          <div className="flex items-center gap-4">
            <Image
              src="/sagarImg.jpeg"
              alt="Developer Image"
              width={40}
              height={40}
              className="rounded-full"
            />
            {/* Hide name on small screens */}
            <h1 className="hidden md:block text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-red-800">
              👋 I&apos;m Sagar Puniyani
            </h1>
          </div>

          {/* Buttons Section */}
          <div className="flex items-center gap-4">
            {/* GitHub Button */}
            <motion.a
              href="https://github.com/sagar-puniyani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-sm shadow-md hover:shadow-lg border border-gray-700 relative overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-gray-800 to-gray-900 opacity-40 pointer-events-none" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-teal-400"
              >
                <path d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.5v-1.8c-3.3.7-4-1.6-4-1.6-.5-1.2-1.3-1.5-1.3-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 2 .7 2.6.1.1-.7.4-1.1.7-1.3-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.3-3.2-.2-.3-.6-1.7.1-3.4 0 0 1-.3 3.4 1.3a12 12 0 0 1 6.2 0c2.3-1.6 3.4-1.3 3.4-1.3.7 1.7.3 3.1.1 3.4.8.8 1.3 1.9 1.3 3.2 0 4.5-2.7 5.5-5.3 5.8.4.3.8.9.8 1.8v2.7c0 .3.2.6.8.5A12 12 0 0 0 12 0z" />
              </svg>
              <span className="text-base font-bold">GitHub</span>
            </motion.a>

            {/* Resume Download Button */}
            <Button variant="premium" asChild>
              <a href="/sagar_resume.pdf" download>
                Download Resume
              </a>
            </Button>

            {/* Hamburger for Mobile Screens */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl md:hidden focus:outline-none"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </motion.div>

        {/* Navbar for Desktop Screens */}
        <nav className="hidden md:flex gap-6 text-lg">
          {[
            "🏡 home",
            "👨‍🏫 experience",
            "🖥️ projects",
            "👨‍🎓 education",
            "📜 certificates",
            "📱 contact",
          ].map((tab) => (
            <span
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`cursor-pointer ${
                activeTab === tab ? "text-teal-400 font-bold" : ""
              }`}
            >
              {tab}
            </span>
          ))}
        </nav>

        {/* Dropdown Menu for Mobile Screens */}
        {menuOpen && (
          <motion.div
            className="bg-gray-800 bg-opacity-80 rounded-lg p-4 z-20 absolute top-20 left-0 w-full md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="space-y-4">
              {[
                "🏡 home",
                "👨‍🏫 experience",
                "🖥️ projects",
                "👨‍🎓 education",
                "📜 certificates",
                "📱 contact",
              ].map((tab) => (
                <li
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className="cursor-pointer"
                >
                  {tab}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        <motion.main
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 mb-8"
        >
          {activeTab === "🏡 home" && <Home />}
          {activeTab === "👨‍🏫 experience" && <Experience />}
          {activeTab === "🖥️ projects" && <Projects />}
          {activeTab === "👨‍🎓 education" && <Education />}
          {activeTab === "📜 certificates" && <Certificates />}
          {activeTab === "📱 contact" && <Contact />}
        </motion.main>
      </div>

      {/* Footer Component */}
      <div className="absolute bottom-0 w-full z-10 pt-6">
        <Footer />
      </div>
    </div>
  );
}
