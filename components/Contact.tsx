'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a server or email service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary"></div>
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-accent/15 rounded-full blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl opacity-20"></div>
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold gradient-text mb-4">
            Let&apos;s <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out! I&apos;d love to hear from you.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-6 glassmorphism rounded-2xl p-8 border border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-accent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all placeholder-gray-500"
                placeholder="Your name"
              />
            </motion.div>

            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-accent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all placeholder-gray-500"
                placeholder="your@email.com"
              />
            </motion.div>
          </div>

          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-3">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-accent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all placeholder-gray-500"
              placeholder="Project inquiry"
            />
          </motion.div>

          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-accent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all resize-none placeholder-gray-500"
              placeholder="Tell me about your project..."
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-accent to-blue-400 hover:from-accent-light hover:to-blue-300 text-white font-semibold py-3 px-8 rounded-lg transition-all glow-effect"
          >
            Send Message
          </motion.button>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-green-400 text-center font-medium bg-green-400/10 border border-green-400/30 rounded-lg py-3"
            >
              ✓ Message sent successfully!
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
