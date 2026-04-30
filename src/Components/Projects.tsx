import React, { useState } from 'react';
import { FaGithub, FaCode, FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const projects = [
  {
    title: 'Worker Discovery and Task Management System (WDTMS)',
    description: 'A web-based platform connecting users with suitable workers for task-based services.',
    details: [
      'Built features for user registration, worker discovery, task assignment, reporting, feedback management, and in-app communication',
      'Implemented a smart worker matching system that filters and recommends workers based on location, task category, and real-time availability',
      'Designed and enforced role-based access control (RBAC) for secure authentication and authorisation across multiple user roles',
      'Integrated Gmail API to send automated email notifications for task updates, assignments, and user communication',
      'Developed a responsive frontend using React.js and Tailwind CSS, and a robust backend using Java and Spring Boot',
      'Used MySQL for structured and efficient data management',
    ],
    technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'Java', 'Spring Boot', 'MySQL', 'Gmail API'],
    githubBackend: 'https://github.com/ASHAN8BUDDHIMAL/FinalProjectWDTMS',
    githubFrontend: 'https://github.com/ASHAN8BUDDHIMAL/Frontend_WDTMS',
    featured: true,
  },
  {
    title: 'Villa Galle - Luxury Villa Booking Website',
    description: 'Full-stack luxury villa booking website with server-side data fetching and dynamic content rendering.',
    details: [
      'Designed and implemented an admin dashboard for managing rooms, gallery, site content, and guest inquiries',
      'Integrated Cloudinary for media management with a custom image upload component',
      'Implemented JWT authentication with HTTP-only cookies for secure admin access',
      'Modelled and managed data using MongoDB + Mongoose with multiple schemas (Room, GalleryPhoto, SiteContent, Inquiry)',
      'Built a fully responsive UI with a custom luxury design system',
      'All homepage text and images are editable via the admin panel without code changes',
      'Deployed with Vercel using optimised server-side rendering and environment-based database connections',
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'JWT', 'Cloudinary', 'Vercel'],
    featured: true,
  },
  {
    title: 'Multi-Tenant HR Management System',
    description: 'Centralized HR platform supporting multiple organisations within a single system.',
    details: [
      'Designed an organisation-based (multi-tenant) architecture, enabling users to manage multiple companies under one account',
      'Implemented JWT-based authentication and RBAC for secure, role-based access across organisations',
      'Developed employee management, role assignment, and organisation-level access control features',
      'Integrated email notifications for onboarding and system updates',
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'MongoDB', 'JWT', 'NodeMailer', 'Cloudinary'],
  },
  {
    title: 'Multi-Tenant Finance Management System',
    description: 'Finance management system integrated with the HR platform for unified operations.',
    details: [
      'Enabled multi-company financial management within a single dashboard',
      'Designed scalable database structures using MongoDB',
      'Implemented document and image handling using Cloudinary',
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'MongoDB', 'JWT', 'NodeMailer', 'Cloudinary'],
  },
  {
    title: 'Pizza Shop Management System',
    description: 'Web app for pizza shop operations, managing customers, staff, orders, feedback, inquiries, and analytics.',
    details: [
      'Built a complete management system for pizza shop operations',
      'Implemented customer and staff management modules',
      'Developed order processing and tracking features',
      'Created feedback and inquiry management system',
      'Added analytics dashboard for business insights',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    github: 'https://github.com/ASHAN8BUDDHIMAL/Pizza-Buddy',
    groupProject: true,
  },
];

const Projects: React.FC = () => {
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);

  const toggleProject = (index: number) => {
    setExpandedProjects(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="projects" className="py-12 relative text-slate-700">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&auto=format&fit=crop')` }}></div>
      <div className="absolute inset-0 bg-white/20"></div>
      <div className="container mx-auto px-4 text-center mb-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white bg-gray-700">My Projects</h2>
        <p className="text-lg text-white max-w-2xl mx-auto mt-2 bg-gray-700">
          Real-world projects solving problems with modern tech stacks.
        </p>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 max-w-5xl relative z-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-white p-6 rounded-lg shadow-sm border border-sky-100 ${project.featured ? 'md:col-span-2' : ''}`}
          >
            {project.featured && (
              <div className="flex items-center gap-2 bg-sky-400 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                <FaStar className="w-4 h-4" /> Featured
              </div>
            )}

            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold text-slate-700">{project.title}</h3>
              {project.groupProject && (
                <span className="bg-sky-100 text-sky-500 px-3 py-1 rounded-full text-sm">Team Project</span>
              )}
            </div>

            <p className="text-slate-500 mb-4">{project.description}</p>

            {expandedProjects.includes(index) && (
              <ul className="mb-4 space-y-2 text-slate-500 text-sm list-disc list-inside">
                {project.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            )}

            <button
              onClick={() => toggleProject(index)}
              className="flex items-center gap-2 text-sky-400 hover:text-sky-500 mb-4 text-sm font-semibold"
            >
              {expandedProjects.includes(index) ? (
                <><FaChevronUp className="w-4 h-4" /> See Less</>
              ) : (
                <><FaChevronDown className="w-4 h-4" /> See More</>
              )}
            </button>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="px-3 py-1 bg-sky-100 text-sky-500 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-sky-400 text-white rounded-lg hover:bg-sky-500 transition-all">
                  <FaGithub className="w-5 h-5" /> View Code
                </a>
              )}
              {project.githubBackend && (
                <a href={project.githubBackend} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-500 rounded-lg hover:bg-sky-200 transition-all">
                  <FaCode className="w-5 h-5" /> Backend
                </a>
              )}
              {project.githubFrontend && (
                <a href={project.githubFrontend} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-500 rounded-lg hover:bg-sky-200 transition-all">
                  <FaCode className="w-5 h-5" /> Frontend
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
