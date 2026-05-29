'use client';

import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowUpRight } from 'react-icons/fi';
import { projects } from '@/lib/data';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="block text-gray-900 dark:text-white mb-2">Featured</span>
            <span className="block gradient-text">Projects & Work</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            A selection of my recent projects showcasing my expertise in full-stack development, 
            modern UI/UX, and scalable architecture.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* Card container with glassmorphism */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative glassmorphism p-8 h-full border border-white/10 group-hover:border-accent/30 transition-all duration-500 rounded-2xl backdrop-blur-xl">
                {/* Top badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent/20 text-accent border border-accent/30">
                    Project {index + 1}
                  </span>
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors"
                  >
                    <FiArrowUpRight className="text-accent" size={16} />
                  </motion.div>
                </div>

                {/* Project title */}
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>

                {/* Project description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="mb-8">
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.1 }}
                        className="text-xs sm:text-sm px-3 py-1.5 rounded-lg bg-gradient-to-r from-accent/10 to-blue-500/10 text-accent border border-accent/20 hover:border-accent/40 transition-all cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-6 border-t border-white/10">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 text-accent hover:text-white font-semibold transition-colors group/link"
                    >
                      Live Demo
                      <FiExternalLink className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" size={18} />
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 text-accent hover:text-white font-semibold transition-colors group/link"
                    >
                      GitHub
                      <FiGithub className="group-hover/link:-translate-x-1 transition-transform" size={18} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
