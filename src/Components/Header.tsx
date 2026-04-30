import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { Icon: FaGithub, href: 'https://github.com/ASHAN8BUDDHIMAL', label: 'GitHub' },
  { Icon: FaLinkedin, href: 'https://linkedin.com/in/ashan-buddhimal-bb6a892b4', label: 'LinkedIn' },
  { Icon: FaTwitter, href: 'mailto:ashanbuddhimal@gmail.com', label: 'Email' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 bg-slate-800/90 text-white py-4 ${isScrolled ? 'shadow-lg shadow-sky-300/10' : ''}`}>
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-sky-300">Ashan.</a>

        <div className="hidden lg:flex items-center gap-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                activeSection === item.href.substring(1)
                  ? 'bg-sky-400 text-white'
                  : 'text-sky-100 hover:bg-sky-400/20'
              }`}
            >
              {item.name}
            </a>
          ))}

          <div className="flex items-center gap-2 ml-4 pl-4 border-l border-sky-300/20">
            {socialLinks.map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-sky-400/20">
                <Icon className="w-5 h-5 text-sky-300" />
              </a>
            ))}
          </div>

          <a
            href="/assets/Ashan_resume_2026.pdf"
            download="Ashan_resume_2026.pdf"
            className="ml-4 px-4 py-2 bg-sky-400 text-white font-semibold rounded-lg hover:bg-sky-300 hover:text-slate-800 transition-all flex items-center gap-2"
          >
            <FaDownload className="w-4 h-4" />
            Resume
          </a>
        </div>

        <button className="lg:hidden p-2 rounded-lg hover:bg-sky-400/20" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden bg-slate-800/95 px-4 py-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`block py-2 px-4 rounded-lg font-semibold text-center mb-1 ${
                activeSection === item.href.substring(1)
                  ? 'bg-sky-400 text-white'
                  : 'text-sky-100 hover:bg-sky-400/20'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}

          <div className="flex justify-center gap-4 py-4 border-t border-sky-300/20">
            {socialLinks.map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-sky-400/20" onClick={() => setIsMenuOpen(false)}>
                <Icon className="w-5 h-5 text-sky-300" />
              </a>
            ))}
          </div>

          <a
            href="/assets/Ashan_resume_2026.pdf"
            download="Ashan_resume_2026.pdf"
            className="block px-4 py-3 bg-sky-400 text-white font-semibold rounded-lg text-center hover:bg-sky-300 hover:text-slate-800 transition-all flex items-center justify-center gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaDownload className="w-4 h-4" />
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
