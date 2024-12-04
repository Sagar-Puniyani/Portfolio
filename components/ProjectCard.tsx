import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Tag } from '@/components/ui/Tag';
import { Img } from 'react-image';
import { Project } from '@/Types/project';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ( {project} ) => {
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
            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200 hover:scale-110"
            aria-label="View Project"
          >
            <ExternalLink className="w-5 h-5 text-gray-300" />
          </a>
          <a
            href="#"
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
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}