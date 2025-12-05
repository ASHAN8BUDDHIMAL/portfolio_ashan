import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import Me from '../assets/me.jpg';

// Social link data for easy reuse
const socialLinks = [
  { Icon: Linkedin, href: 'https://linkedin.com/in/ashan-buddhimal-bb6a892b4', label: 'LinkedIn' },
  { Icon: Github, href: 'https://github.com/ASHAN8BUDDHIMAL', label: 'GitHub' },
  { Icon: Mail, href: 'mailto:ashanbuddhimal@gmail.com', label: 'Email' },
];

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-teal-900/95 to-gray-900 text-white pt-16"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-teal-400/10 to-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-teal-400/10 to-teal-50/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('/grid.png')] bg-[size:50px_50px] opacity-5"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Text and CTAs */}
          <div className="text-center lg:text-left space-y-6">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 border border-teal-400/20">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Available for Internship</span>
            </div>

            {/* Name and Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Ashan{' '}
              <span className="block text-transparent bg-gradient-to-r from-teal-400 to-green-600 bg-clip-text">
                Buddhimal
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-teal-50">
              IT Undergraduate
            </h2>
            <p className="text-base sm:text-lg text-teal-50/80">
              University of Moratuwa • 3rd Year BIT
            </p>

            {/* Bio */}
            <p className="text-base sm:text-lg text-white/80 max-w-lg mx-auto lg:mx-0">
              I’m passionate about building cool digital projects and learning new tech. Currently looking for internship opportunities to work on exciting, innovative projects.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-400 to-green-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform shadow-lg shadow-teal-400/25"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
              <a
                href="/assets/2025_Resume_Ashan.pdf"
                download="Ashan_Resume_2025.pdf"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-teal-400/10 border border-teal-400 text-white font-semibold rounded-lg hover:scale-105 transition-transform"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-teal-400/10 border border-teal-400 text-white font-semibold rounded-lg hover:scale-105 transition-transform"
              >
                View Projects
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-lg border border-teal-400/30 hover:scale-110 hover:bg-teal-400/20 transition-all"
                >
                  <Icon className="w-6 h-6 text-teal-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Profile Image (Visible on Large Screens) */}
          <div className="hidden lg:block text-center">
            <img
              src={Me}
              alt="Ashan Buddhimal"
              className="w-80 h-80 mx-auto rounded-full object-cover border-4 border-teal-400 shadow-lg shadow-teal-400/25"
            />
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;