import React from 'react';
import { FaCode, FaTools, FaGitAlt, FaJava, FaReact } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiSpringboot, SiMysql, SiTypescript, SiAndroid, SiSharp, SiPhp } from 'react-icons/si';

// Skill categories data
const skillCategories = [
  {
    title: 'Frontend Development',
    skills: ['React.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    title: 'Backend Development',
    skills: ['Java', 'Spring Boot', 'PHP', 'C#', 'REST APIs', 'Microservices'],
  },
  {
    title: 'Database & Tools',
    skills: ['MySQL', 'Git', 'GitHub', 'Android Studio', 'VS Code', 'Postman'],
  },
  {
    title: 'Core Competencies',
    skills: ['Object-Oriented Programming', 'Automation Testing', 'Project Documentation', 'Agile Methodology', 'Problem Solving'],
  },
];

// Proficiency data
const technicalSkills = [
  { skill: 'React.js & JavaScript', level: 85 },
  { skill: 'Java & Spring Boot', level: 80 },
  { skill: 'HTML/CSS & Tailwind', level: 90 },
  { skill: 'MySQL Database', level: 75 },
  { skill: 'PHP Development', level: 70 },
];

const professionalSkills = [
  { skill: 'Problem Solving', level: 90 },
  { skill: 'Project Documentation', level: 85 },
  { skill: 'Team Collaboration', level: 88 },
  { skill: 'Agile Methodology', level: 75 },
  { skill: 'Communication', level: 82 },
];

const Skills: React.FC = () => {
  // Function to get icons for skills
  const getSkillIcon = (skill: string) => {
    const iconProps = { className: 'text-teal-500 text-xl' };
    switch (skill) {
      case 'React.js': return <FaReact {...iconProps} />;
      case 'JavaScript': return <SiJavascript {...iconProps} />;
      case 'TypeScript': return <SiTypescript {...iconProps} />;
      case 'Tailwind CSS': return <SiTailwindcss {...iconProps} />;
      case 'Java': return <FaJava {...iconProps} />;
      case 'Spring Boot': return <SiSpringboot {...iconProps} />;
      case 'PHP': return <SiPhp {...iconProps} />;
      case 'C#': return <SiSharp {...iconProps} />;
      case 'MySQL': return <SiMysql {...iconProps} />;
      case 'Git': return <FaGitAlt {...iconProps} />;
      case 'GitHub': return <FaGitAlt {...iconProps} />;
      case 'Android Studio': return <SiAndroid {...iconProps} />;
      default: return <FaCode {...iconProps} />;
    }
  };

  return (
    <section id="skills" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            My Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-2">
            Here’s what I’m good at, from coding to teamwork.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                {getSkillIcon(category.skills[0])}
                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-3">
                    {getSkillIcon(skill)}
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Meter */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            Skill Levels
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Technical Skills */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <FaCode className="text-teal-500" />
                Technical Skills
              </h4>
              {technicalSkills.map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-700">{item.skill}</span>
                    <span className="text-sm text-teal-500 font-semibold">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-teal-500 h-2 rounded-full"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Professional Skills */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <FaTools className="text-teal-500" />
                Professional Skills
              </h4>
              {professionalSkills.map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-700">{item.skill}</span>
                    <span className="text-sm text-teal-500 font-semibold">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-teal-500 h-2 rounded-full"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;