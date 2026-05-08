import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const socialLinks = [
  { Icon: Linkedin, href: 'https://linkedin.com/in/ashan-buddhimal-bb6a892b4', label: 'LinkedIn', color: '#0A66C2' },
  { Icon: Github, href: 'https://github.com/ASHAN8BUDDHIMAL', label: 'GitHub', color: '#ffffff' },
  { Icon: Mail, href: 'mailto:ashanbuddhimal@gmail.com', label: 'Email', color: '#EA4335' },
];

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-white pt-16 relative"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1562774053-701939374585?w=1600&auto=format&fit=crop')` }}
      ></div>
      <div className="absolute inset-0 bg-slate-900/75"></div>

      <div className="container mx-auto px-4 py-16 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="flex lg:hidden justify-center items-center mb-8">
            <img
              src="/assets/ashan.png"
              alt="Ashan Buddhimal"
              className="object-contain"
              style={{ width: 200, height: 'auto', maxHeight: '50vh' }}
            />
          </div>

          <div className="text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 bg-yellow-600/10 rounded-full px-4 py-2 border border-yellow-600/30">
              <div className="w-2 h-2 bg-yellow-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-yellow-100">Available for Internship</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Ashan{' '}
              <span className="block text-transparent bg-gradient-to-r from-yellow-600 to-yellow-600 bg-clip-text">
                Buddhimal
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-yellow-100">IT Undergraduate</h2>
            <p className="text-base sm:text-lg text-yellow-100/70">University of Moratuwa • 3rd Year BIT</p>

            <p className="text-base sm:text-lg text-white/70 max-w-lg mx-auto lg:mx-0">
              I'm passionate about building cool digital projects and learning new tech. Currently looking for internship opportunities to work on exciting, innovative projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-4 py-2 text-sm bg-yellow-600 text-slate-900 font-semibold rounded-lg hover:bg-yellow-600 transition-all shadow-lg shadow-yellow-600/20"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
              <a
                href="/assets/Ashan_resume_2026.pdf"
                download="Ashan_resume_2026.pdf"
                className="flex items-center justify-center gap-2 px-4 py-2 text-sm bg-white/10 border border-yellow-600/50 text-yellow-100 font-semibold rounded-lg hover:bg-yellow-600/20 transition-all"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-4 py-2 text-sm bg-white/10 border border-yellow-600/50 text-yellow-100 font-semibold rounded-lg hover:bg-yellow-600/20 transition-all"
              >
                View Projects
              </a>
            </div>

            <div className="flex justify-center lg:justify-start gap-4">
              {socialLinks.map(({ Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-lg border border-yellow-600/30 hover:bg-yellow-600/20 hover:scale-110 transition-all"
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </a>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-end" style={{ position: 'relative' }}>
            <img
              src="/assets/ashan.png"
              alt="Ashan Buddhimal"
              className="object-contain"
              style={{ width: 280, height: 'auto', maxHeight: '90vh' }}
            />
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{
                height: 80,
                background: 'linear-gradient(to top, rgba(15,23,42,1) 0%, transparent 100%)',
                pointerEvents: 'none',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
