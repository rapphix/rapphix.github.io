'use client';

import { motion } from 'framer-motion';

export default function About() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-20"></div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text">
            About <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent to-blue-400 rounded-full mt-4"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6 z-10">
            <p className="text-gray-400 text-lg leading-relaxed hover:text-gray-300 transition-colors">
              I&apos;m a passionate full-stack developer with a love for creating clean, intuitive user experiences and robust backend solutions. With over 5 years of experience in web development, I&apos;ve worked with startups and established companies to deliver high-quality digital products.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed hover:text-gray-300 transition-colors">
              My journey in tech started with curiosity and has evolved into a professional career focused on solving real-world problems through elegant code and innovative design.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed hover:text-gray-300 transition-colors">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative z-10"
          >
            {/* Animated background blob */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 bg-gradient-to-br from-accent/30 via-blue-400/20 to-purple-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
            ></motion.div>

            <div className="relative glassmorphism p-8 rounded-2xl border border-white/10 hover:border-accent/50 transition-all">
              <ul className="space-y-4">
                <li className="flex items-center gap-3 group/item">
                  <motion.span
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    className="text-accent font-bold text-lg"
                  >
                    ✓
                  </motion.span>
                  <span className="text-gray-300 group-hover/item:text-gray-100 transition-colors">5+ Years of Web Development</span>
                </li>
                <li className="flex items-center gap-3 group/item">
                  <motion.span
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    className="text-accent font-bold text-lg"
                  >
                    ✓
                  </motion.span>
                  <span className="text-gray-300 group-hover/item:text-gray-100 transition-colors">Full Stack Developer</span>
                </li>
                <li className="flex items-center gap-3 group/item">
                  <motion.span
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    className="text-accent font-bold text-lg"
                  >
                    ✓
                  </motion.span>
                  <span className="text-gray-300 group-hover/item:text-gray-100 transition-colors">Open Source Contributor</span>
                </li>
                <li className="flex items-center gap-3 group/item">
                  <motion.span
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    className="text-accent font-bold text-lg"
                  >
                    ✓
                  </motion.span>
                  <span className="text-gray-300 group-hover/item:text-gray-100 transition-colors">Performance Optimization</span>
                </li>
                <li className="flex items-center gap-3 group/item">
                  <motion.span
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    className="text-accent font-bold text-lg"
                  >
                    ✓
                  </motion.span>
                  <span className="text-gray-300 group-hover/item:text-gray-100 transition-colors">Mentoring Junior Developers</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
