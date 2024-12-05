import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Img } from 'react-image';
import { Project } from '@/Types/project';
import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa'; // Example icons
import {  SiGoogleauthenticator, SiMongodb, SiTailwindcss, SiTypescript } from 'react-icons/si'; // Additional icons

interface ProjectCardProps {
  project: Project;
}

// Map tags to corresponding icons
const tagIcons: Record<string, React.ReactNode> = {
  React: <FaReact className="text-blue-400" />,
  NodeJS: <FaNodeJs className="text-green-500" />,
  MongoDB: <SiMongodb className="text-green-400" />,
  Python: <FaPython className="text-yellow-400" />,
  Database: <FaDatabase className="text-purple-500" />,
  Tailwind: <SiTailwindcss className="text-teal-400" />,
  TypeScript: <SiTypescript className="text-blue-800" />,
  oAuth: <SiGoogleauthenticator className="text-gray-500" />,
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-800">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <Img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200 hover:scale-110"
            aria-label="View Project"
          >
            <ExternalLink className="w-5 h-5 text-gray-300" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200 hover:scale-110"
            aria-label="View Source Code"
          >
            <Github className="w-5 h-5 text-gray-300" />
          </a>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-100 mb-2 group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags Container */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <div
              key={tag}
              className="flex items-center gap-2 px-3 py-1 bg-gray-800 rounded-full text-gray-100 text-lg"
            >
              {tagIcons[tag] || <span className="text-gray-400">?</span>} {/* Show icon or fallback */}
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
