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
    <section id="about" className="py-12 relative">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&auto=format&fit=crop')` }}></div>
      <div className="absolute inset-0 bg-white/20"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-700">About Me</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-2">
            Passionate IT undergraduate with hands-on experience in full-stack web development, eager to apply technical skills in real-world projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sky-100">
              <div className="flex items-start gap-4">
                <FaGraduationCap className="text-sky-400 text-2xl shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-700">Objective</h3>
                  <p className="text-slate-500 mt-2">
                    Skilled in React.js, ExpressJS, Next.js, MongoDB, and Java-based backend development. Eager to apply my technical skills in real-world projects, contribute to team success, and grow as a software engineer.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-sky-100">
              <div className="flex items-start gap-4">
                <FaBriefcase className="text-sky-400 text-2xl shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-700">Experience</h3>
                  <div className="mt-2">
                    <h4 className="text-lg font-semibold text-slate-700">Intern Full Stack System Engineer</h4>
                    <p className="text-sky-500 font-medium">Botcalm (PVT) LTD · On-site</p>
                    <p className="text-sm text-slate-400">September 2025 – Present</p>
                    <ul className="mt-2 space-y-1 text-slate-500 text-sm list-disc list-inside">
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
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sky-100">
              <div className="flex items-start gap-4">
                <FaUniversity className="text-sky-400 text-2xl shrink-0" />
                <div className="w-full">
                  <h3 className="text-xl font-semibold text-slate-700">Education</h3>
                  <div className="space-y-3 mt-2">
                    {education.map((edu, i) => (
                      <div key={i}>
                        <h4 className="font-semibold text-slate-700">{edu.title}</h4>
                        <p className="text-slate-500 text-sm">{edu.institution}</p>
                        <p className="text-sky-400 text-sm font-semibold">{edu.period}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-sky-100">
              <div className="flex items-start gap-4">
                <FaAward className="text-sky-400 text-2xl shrink-0" />
                <div className="w-full">
                  <h3 className="text-xl font-semibold text-slate-700">Certificate Courses</h3>
                  <div className="space-y-3 mt-2">
                    {certificates.map((cert, i) => (
                      <div key={i}>
                        <h4 className="font-semibold text-slate-700 text-sm">{cert.title}</h4>
                        <p className="text-slate-500 text-sm">{cert.institution}</p>
                        <p className="text-sky-400 text-sm font-semibold">{cert.year}</p>
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
