import React from 'react';
import { FaUniversity, FaBriefcase, FaGraduationCap, FaAward } from 'react-icons/fa';

const education = [
  { title: 'Bachelor of Information Technology (BIT)', institution: 'University of Moratuwa', period: '2022 - 2026' },
  { title: 'G.C.E A/L Exam', institution: 'MR/ Narandeniya National School', period: '2021' },
];

const certificates = [
  { title: 'Higher Diploma – Bachelor of Information Technology', institution: 'University of Moratuwa', year: '2022 - 2024' },
  { title: 'Spoken English for Professional Excellence', institution: 'Aquinas College of Higher Studies', year: '2025' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 relative" style={{ background: '#f1f5f9' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: '#1e293b' }}>About Me</h2>
          <p className="text-lg max-w-2xl mx-auto mt-2" style={{ color: '#64748b' }}>
            Passionate IT undergraduate with hands-on experience in full-stack web development, eager to apply technical skills in real-world projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="p-6 rounded-lg" style={{ background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
              <div className="flex items-start gap-4">
                <FaGraduationCap className="text-2xl shrink-0" style={{ color: '#1e293b' }} />
                <div>
                  <h3 className="text-xl font-semibold" style={{ color: '#1e293b' }}>Objective</h3>
                  <p className="mt-2" style={{ color: '#64748b' }}>
                    Skilled in React.js, ExpressJS, Next.js, MongoDB, and Java-based backend development. Eager to apply my technical skills in real-world projects, contribute to team success, and grow as a software engineer.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg" style={{ background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
              <div className="flex items-start gap-4">
                <FaBriefcase className="text-2xl shrink-0" style={{ color: '#92400e' }} />
                <div>
                  <h3 className="text-xl font-semibold" style={{ color: '#1e293b' }}>Experience</h3>
                  <div className="mt-2">
                    <h4 className="text-lg font-semibold" style={{ color: '#1e293b' }}>Intern Full Stack System Engineer</h4>
                    <p className="font-medium" style={{ color: '#7c6ef7' }}>Botcalm (PVT) LTD · On-site</p>
                    <p className="text-sm" style={{ color: '#94a3b8' }}>September 2025 – Present</p>
                    <ul className="mt-2 space-y-1 text-sm list-disc list-inside" style={{ color: '#64748b' }}>
                      <li>Built responsive UIs using React.js / Next.js, Tailwind CSS, and Framer Motion</li>
                      <li>Developed and integrated RESTful APIs with MongoDB</li>
                      <li>Implemented JWT authentication and role-based access control (RBAC)</li>
                      <li>Integrated NodeMailer for emails and Cloudinary for image management</li>
                      <li>Deployed applications using Netlify and Vercel</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-lg" style={{ background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
              <div className="flex items-start gap-4">
                <FaUniversity className="text-2xl shrink-0" style={{ color: '#64748b' }} />
                <div className="w-full">
                  <h3 className="text-xl font-semibold" style={{ color: '#1e293b' }}>Education</h3>
                  <div className="space-y-3 mt-2">
                    {education.map((edu, i) => (
                      <div key={i}>
                        <h4 className="font-semibold" style={{ color: '#1e293b' }}>{edu.title}</h4>
                        <p className="text-sm" style={{ color: '#64748b' }}>{edu.institution}</p>
                        <p className="text-sm font-semibold" style={{ color: '#7c6ef7' }}>{edu.period}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg" style={{ background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
              <div className="flex items-start gap-4">
                <FaAward className="text-2xl shrink-0" style={{ color: '#F59E0B' }} />
                <div className="w-full">
                  <h3 className="text-xl font-semibold" style={{ color: '#1e293b' }}>Certificate Courses</h3>
                  <div className="space-y-3 mt-2">
                    {certificates.map((cert, i) => (
                      <div key={i}>
                        <h4 className="font-semibold text-sm" style={{ color: '#1e293b' }}>{cert.title}</h4>
                        <p className="text-sm" style={{ color: '#64748b' }}>{cert.institution}</p>
                        <p className="text-sm font-semibold" style={{ color: '#5ba3f5' }}>{cert.year}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
