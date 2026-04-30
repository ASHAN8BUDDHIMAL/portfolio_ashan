import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import Me from '../assets/me.jpg';

const socialLinks = [
  { Icon: Linkedin, href: 'https://linkedin.com/in/ashan-buddhimal-bb6a892b4', label: 'LinkedIn' },
  { Icon: Github, href: 'https://github.com/ASHAN8BUDDHIMAL', label: 'GitHub' },
  { Icon: Mail, href: 'mailto:ashanbuddhimal@gmail.com', label: 'Email' },
];

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-white pt-16 relative"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1562774053-701939374585?w=1600&auto=format&fit=crop')` }}
      ></div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-900/75"></div>

      <div className="container mx-auto px-4 py-16 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 bg-sky-100/10 rounded-full px-4 py-2 border border-sky-200/30">
              <div className="w-2 h-2 bg-sky-300 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-sky-100">Available for Internship</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Ashan{' '}
              <span className="block text-transparent bg-gradient-to-r from-sky-300 to-blue-300 bg-clip-text">
                Buddhimal
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-100">IT Undergraduate</h2>
            <p className="text-base sm:text-lg text-sky-100/70">University of Moratuwa • 3rd Year BIT</p>

            <p className="text-base sm:text-lg text-white/70 max-w-lg mx-auto lg:mx-0">
              I'm passionate about building cool digital projects and learning new tech. Currently looking for internship opportunities to work on exciting, innovative projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-sky-400 text-white font-semibold rounded-lg hover:bg-sky-300 hover:text-slate-800 transition-all shadow-lg shadow-sky-400/20"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
              <a
                href="/assets/Ashan_resume_2026.pdf"
                download="Ashan_resume_2026.pdf"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-sky-300/50 text-sky-100 font-semibold rounded-lg hover:bg-sky-300/20 transition-all"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-sky-300/50 text-sky-100 font-semibold rounded-lg hover:bg-sky-300/20 transition-all"
              >
                View Projects
              </a>
            </div>

            <div className="flex justify-center lg:justify-start gap-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-lg border border-sky-300/30 hover:bg-sky-300/20 hover:scale-110 transition-all"
                >
                  <Icon className="w-6 h-6 text-sky-300" />
                </a>
              ))}
            </div>
          </div>

          <div className="hidden lg:block text-center">
            <img
              src={Me}
              alt="Ashan Buddhimal"
              className="w-80 h-80 mx-auto rounded-full object-cover border-4 border-sky-300 shadow-lg shadow-sky-300/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
