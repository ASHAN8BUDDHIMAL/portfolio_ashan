import React from 'react';
import { FaCode, FaGitAlt, FaJava, FaReact } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiSpringboot, SiMysql, SiTypescript, SiPhp, SiMongodb, SiNextdotjs, SiExpress, SiVercel, SiNetlify } from 'react-icons/si';

const skillCategories = [
  { title: 'Programming Languages', skills: ['JavaScript', 'TypeScript', 'Java', 'PHP'] },
  { title: 'Frameworks & Libraries', skills: ['React.js', 'Next.js', 'Express.js', 'Spring Boot', 'Tailwind CSS'] },
  { title: 'Databases & Version Control', skills: ['MongoDB', 'MySQL', 'Git', 'GitHub'] },
  { title: 'Deployment & Concepts', skills: ['Vercel', 'Netlify', 'OOP Concepts', 'REST APIs', 'JWT / RBAC'] },
];

const Skills: React.FC = () => {
  const getSkillIcon = (skill: string) => {
    const p = { className: 'text-sky-400 text-xl' };
    switch (skill) {
      case 'React.js': return <FaReact {...p} />;
      case 'JavaScript': return <SiJavascript {...p} />;
      case 'TypeScript': return <SiTypescript {...p} />;
      case 'Tailwind CSS': return <SiTailwindcss {...p} />;
      case 'Java': return <FaJava {...p} />;
      case 'Spring Boot': return <SiSpringboot {...p} />;
      case 'PHP': return <SiPhp {...p} />;
      case 'MySQL': return <SiMysql {...p} />;
      case 'MongoDB': return <SiMongodb {...p} />;
      case 'Next.js': return <SiNextdotjs {...p} />;
      case 'Express.js': return <SiExpress {...p} />;
      case 'Git': return <FaGitAlt {...p} />;
      case 'GitHub': return <FaGitAlt {...p} />;
      case 'Vercel': return <SiVercel {...p} />;
      case 'Netlify': return <SiNetlify {...p} />;
      default: return <FaCode {...p} />;
    }
  };

  return (
    <section id="skills" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-700">My Skills</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-2">
            Here's what I work with, from coding to deployment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-sky-50 p-6 rounded-lg shadow-sm border border-sky-100">
              <div className="flex items-center gap-3 mb-4">
                {getSkillIcon(category.skills[0])}
                <h3 className="text-xl font-semibold text-slate-700">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-3">
                    {getSkillIcon(skill)}
                    <span className="text-slate-600">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
