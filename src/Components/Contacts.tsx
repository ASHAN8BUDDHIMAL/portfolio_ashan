import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const contactInfo = [
  { icon: FaPhone, label: 'Phone', value: '071 0474331 / 072 5268605', href: 'tel:+94710474331' },
  { icon: FaEnvelope, label: 'Email', value: 'ashanbuddhimal@gmail.com', href: 'mailto:ashanbuddhimal@gmail.com' },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/ashan-buddhimal', href: 'https://linkedin.com/in/ashan-buddhimal-bb6a892b4' },
  { icon: FaGithub, label: 'GitHub', value: 'github.com/ASHAN8BUDDHIMAL', href: 'https://github.com/ASHAN8BUDDHIMAL' },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert('Thanks for your message! I\'ll reply soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-12 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Get in Touch</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mt-2">
            Want to chat about a project or opportunity? Drop me a message!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white">Let's Talk</h3>
              <p className="text-slate-300 mt-2">
                I'm looking for internship opportunities and would love to connect about projects or ideas.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-4 p-4 bg-slate-700 border border-slate-600 rounded-lg hover:bg-slate-600 transition-all"
                  target={contact.href.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <contact.icon className="text-sky-400 text-xl" />
                  <div>
                    <p className="text-slate-400 text-sm">{contact.label}</p>
                    <p className="text-white font-semibold">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-4 bg-slate-700 border border-slate-600 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
                <span className="text-sky-500 font-semibold">Open to Opportunities</span>
              </div>
              <p className="text-slate-300 text-sm">Ready for internships and projects. I'll reply within a day!</p>
            </div>
          </div>

          <div className="bg-slate-700 border border-slate-600 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-white mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-slate-300 text-sm font-semibold mb-1">Name *</label>
                  <input
                    type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full px-4 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-slate-300 text-sm font-semibold mb-1">Email *</label>
                  <input
                    type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full px-4 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-slate-300 text-sm font-semibold mb-1">Subject *</label>
                <input
                  type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required
                  className="w-full px-4 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-slate-300 text-sm font-semibold mb-1">Message *</label>
                <textarea
                  id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required
                  className="w-full px-4 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit" disabled={isSubmitting}
                className="w-full px-4 py-2 bg-sky-400 text-white font-semibold rounded-lg hover:bg-sky-500 disabled:opacity-50 flex items-center justify-center gap-2 transition-all"
              >
                {isSubmitting ? (
                  <><div className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin"></div>Sending...</>
                ) : (
                  <><FaPaperPlane className="w-4 h-4" />Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
