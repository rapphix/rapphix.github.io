'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <footer className="relative bg-gradient-to-b from-primary to-primary/50 border-t border-white/10 py-12 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-30"></div>
      <div className="absolute top-0 left-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-accent to-transparent blur-lg opacity-50"></div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -8 }}
              whileTap={{ scale: 0.95 }}
              className="group/social relative glassmorphism p-3 rounded-lg border border-white/10 hover:border-accent/50 text-gray-400 hover:text-accent transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-blue-400/10 rounded-lg opacity-0 group-hover/social:opacity-100 transition-all blur-lg group-hover/social:-z-10"></div>
              <FiGithub size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -8 }}
              whileTap={{ scale: 0.95 }}
              className="group/social relative glassmorphism p-3 rounded-lg border border-white/10 hover:border-accent/50 text-gray-400 hover:text-accent transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-blue-400/10 rounded-lg opacity-0 group-hover/social:opacity-100 transition-all blur-lg group-hover/social:-z-10"></div>
              <FiLinkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:your@email.com"
              whileHover={{ scale: 1.2, y: -8 }}
              whileTap={{ scale: 0.95 }}
              className="group/social relative glassmorphism p-3 rounded-lg border border-white/10 hover:border-accent/50 text-gray-400 hover:text-accent transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-blue-400/10 rounded-lg opacity-0 group-hover/social:opacity-100 transition-all blur-lg group-hover/social:-z-10"></div>
              <FiMail size={24} />
            </motion.a>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          ></motion.div>

          {/* Copyright and Info */}
          <motion.div variants={itemVariants} className="space-y-2">
            <p className="text-gray-300 font-medium">
              © {currentYear} Your Name. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Built with <span className="text-accent">Next.js</span>, TypeScript, React & Tailwind CSS
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
