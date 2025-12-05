import React from 'react';
import { FaGithub, FaCode, FaStar } from 'react-icons/fa';

// Project data for easy reuse
const projects = [
  {
    title: 'Worker Discovery and Task Management System',
    description: 'A web app that connects local workers with users. It has user registration, task assignment, reports, feedback, and real-time chat.',
    technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'Java', 'Spring Boot', 'MySQL'],
    githubBackend: 'https://github.com/ASHAN8BUDDHIMAL/FinalProjectWDTMS',
    githubFrontend: 'https://github.com/ASHAN8BUDDHIMAL/Frontend_WDTMS',
    featured: true,
    groupProject: false,
  },
  {
    title: 'Pizza Shop Management System',
    description: 'A web app for pizza shop operations, managing customers, staff, orders, feedback, inquiries, and analytics.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    github: 'https://github.com/ASHAN8BUDDHIMAL/Pizza-Buddy',
    groupProject: true,
  },
  {
    title: 'Library Management System',
    description: 'A system for library operations, including staff and user management, book booking, returns, and fine calculations.',
    technologies: ['C#', 'MySQL'],
    groupProject: false,
  },
  {
    title: 'Weather Application',
    description: 'A mobile app showing real-time weather info like temperature, precipitation, and humidity with a nice UI.',
    technologies: ['Java', 'Android Studio'],
    groupProject: false,
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-12 bg-gray-900 text-white">
      {/* Section Header */}
      <div className="container mx-auto px-4 text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold">
          My Projects
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-2">
          Here are some cool projects I’ve built to solve real-world problems.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 max-w-5xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-gray-800 p-6 rounded-lg shadow-md ${
              project.featured ? 'md:col-span-2' : ''
            }`}
          >
            {/* Featured Badge */}
            {project.featured && (
              <div className="flex items-center gap-2 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                <FaStar className="w-4 h-4" />
                Featured
              </div>
            )}

            {/* Project Title and Group Badge */}
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              {project.groupProject && (
                <span className="bg-teal-500/20 text-teal-200 px-3 py-1 rounded-full text-sm">
                  Team Project
                </span>
              )}
            </div>

            {/* Project Description */}
            <p className="text-gray-300 mb-4">{project.description}</p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-teal-500/20 text-teal-200 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub Links */}
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
                >
                  <FaGithub className="w-5 h-5" />
                  View Code
                </a>
              )}
              {project.githubBackend && (
                <a
                  href={project.githubBackend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-teal-500/20 text-teal-200 rounded-lg hover:bg-teal-500/30"
                >
                  <FaCode className="w-5 h-5" />
                  Backend
                </a>
              )}
              {project.githubFrontend && (
                <a
                  href={project.githubFrontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-teal-500/20 text-teal-200 rounded-lg hover:bg-teal-500/30"
                >
                  <FaCode className="w-5 h-5" />
                  Frontend
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;