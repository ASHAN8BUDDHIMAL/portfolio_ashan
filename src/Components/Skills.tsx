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
  const skillIconMap: Record<string, { icon: React.ReactNode; color: string }> = {
    'JavaScript': { icon: <SiJavascript size={20} />, color: '#F7DF1E' },
    'TypeScript': { icon: <SiTypescript size={20} />, color: '#3178C6' },
    'Java':       { icon: <FaJava size={20} />,       color: '#ED8B00' },
    'PHP':        { icon: <SiPhp size={20} />,        color: '#777BB4' },
    'React.js':   { icon: <FaReact size={20} />,      color: '#61DAFB' },
    'Next.js':    { icon: <SiNextdotjs size={20} />,  color: '#000000' },
    'Express.js': { icon: <SiExpress size={20} />,    color: '#000000' },
    'Spring Boot':{ icon: <SiSpringboot size={20} />, color: '#6DB33F' },
    'Tailwind CSS':{ icon: <SiTailwindcss size={20} />,color: '#06B6D4' },
    'MongoDB':    { icon: <SiMongodb size={20} />,    color: '#47A248' },
    'MySQL':      { icon: <SiMysql size={20} />,      color: '#4479A1' },
    'Git':        { icon: <FaGitAlt size={20} />,     color: '#F05032' },
    'GitHub':     { icon: <FaGitAlt size={20} />,     color: '#24292e' },
    'Vercel':     { icon: <SiVercel size={20} />,     color: '#000000' },
    'Netlify':    { icon: <SiNetlify size={20} />,    color: '#00C7B7' },
  };

  const getSkillIcon = (skill: string) => {
    const entry = skillIconMap[skill];
    if (!entry) return <FaCode size={20} style={{ color: '#8894b4' }} />;
    return <span style={{ color: entry.color, display: 'flex' }}>{entry.icon}</span>;
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
