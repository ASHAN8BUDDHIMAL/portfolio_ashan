import React from 'react';
import { FaUniversity, FaUsers, FaGraduationCap, FaAward } from 'react-icons/fa';

// Data for education and leadership sections
const education = {
  title: 'Bachelor of Information Technology',
  institution: 'University of Moratuwa',
  status: 'Currently in 3rd Year',
};

const leadership = [
  {
    role: 'Group Leader',
    description: 'Led a 3-day leadership training camp for school students',
    year: '2015',
  },
  {
    role: 'Student Leader',
    description: 'Served at MR/Rathanapala M.V.',
    year: '2015 - 2016',
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-2">
            I’m an IT student excited about building awesome web projects.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Left: Academic Journey and Education */}
          <div className="space-y-6">
            {/* Academic Journey */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <FaGraduationCap className="text-teal-500 text-2xl" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">My Academic Journey</h3>
                  <p className="text-gray-600 mt-2">
                    I’m a 3rd-year IT student at University of Moratuwa, learning the skills to create cool tech solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <FaUniversity className="text-teal-500 text-2xl" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Education</h3>
                  <div className="mt-2">
                    <h4 className="text-lg font-semibold text-gray-800">{education.title}</h4>
                    <p className="text-gray-600">{education.institution}</p>
                    <p className="text-sm text-teal-500 font-semibold mt-1">{education.status}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Leadership and Career Objective */}
          <div className="space-y-6">
            {/* Leadership */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <FaAward className="text-teal-500 text-2xl" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Leadership & Activities</h3>
                  <div className="space-y-4 mt-2">
                    {leadership.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <FaUsers className="text-teal-500 text-xl" />
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800">{item.role}</h4>
                          <p className="text-gray-600">{item.description}</p>
                          <p className="text-sm text-teal-500 font-semibold mt-1">{item.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Career Objective */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Career Objective</h3>
              <p className="text-gray-600 mt-2">
                I’m eager to join an internship where I can work on real projects, learn from pros, and grow my coding skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;