import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

// Contact information data
const contactInfo = [
  {
    icon: FaPhone,
    label: 'Phone',
    value: '071 0474331 / 072 5268605',
    href: 'tel:+94710474331',
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'ashanbuddhimal@gmail.com',
    href: 'mailto:ashanbuddhimal@gmail.com',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ashan-buddhimal',
    href: 'https://linkedin.com/in/ashan-buddhimal-bb6a892b4',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/ASHAN8BUDDHIMAL',
    href: 'https://github.com/ASHAN8BUDDHIMAL',
  },
];

const Contact: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update form data on input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate submission
    console.log('Form submitted:', formData);
    alert('Thanks for your message! I’ll reply soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-2">
            Want to chat about a project or opportunity? Drop me a message!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Let’s Talk
              </h3>
              <p className="text-gray-300 mt-2">
                I’m looking for internship opportunities and would love to connect about projects or ideas.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-teal-500/20"
                  target={contact.href.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <contact.icon className="text-teal-500 text-xl" />
                  <div>
                    <p className="text-gray-400 text-sm">{contact.label}</p>
                    <p className="text-white font-semibold">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability Status */}
            <div className="p-4 bg-gray-800 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span className="text-teal-500 font-semibold">Open to Opportunities</span>
              </div>
              <p className="text-gray-300 text-sm">
                Ready for internships and projects. I’ll reply within a day!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-white mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-white text-sm font-semibold mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white text-sm font-semibold mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-white text-sm font-semibold mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="What’s this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white text-sm font-semibold mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-4 h-4" />
                    Send Message
                  </>
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