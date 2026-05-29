'use client';

import { motion } from 'framer-motion';
import { FiArrowRight, FiStar } from 'react-icons/fi';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <motion.div
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism mb-8">
            <FiStar className="text-accent-light animate-spin" size={16} />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Welcome to my portfolio
            </span>
          </div>
        </motion.div>

        {/* Avatar */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent via-blue-400 to-purple-500 p-1 shadow-2xl glow-effect"
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary dark:from-secondary to-secondary dark:to-primary flex items-center justify-center text-4xl font-bold bg-clip-text">
              <span className="gradient-text">YOU</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6 tracking-tight"
        >
          <span className="block text-gray-900 dark:text-white mb-2">Hi, I&apos;m</span>
          <span className="block gradient-text text-7xl sm:text-8xl md:text-9xl">Your Name</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-purple-500 mb-4">
            Full Stack Developer | Creative Builder | Tech Enthusiast
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I craft digital experiences with cutting-edge technologies and thoughtful design. 
            Transforming complex problems into elegant, scalable solutions.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.08, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-blue-600 hover:from-accent-light hover:to-accent text-white font-semibold py-4 px-8 rounded-xl transition-all shadow-lg"
          >
            Explore My Work <FiArrowRight size={20} />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 border-2 border-accent text-accent hover:bg-accent hover:text-white font-semibold py-4 px-8 rounded-xl transition-all glassmorphism"
          >
            Let&apos;s Connect
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-center justify-center">
          <motion.div
            className="w-1 h-2 bg-accent rounded-full"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
