'use client';

import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 w-full z-50 group"
    >
      {/* Glassmorphic background */}
      <div className="absolute inset-0 glassmorphism border-b border-white/10 group-hover:border-white/20 transition-colors"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 group/logo"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent via-blue-400 to-purple-500 flex items-center justify-center group-hover/logo:shadow-lg group-hover/logo:shadow-accent/50 transition-all cursor-pointer">
              <span className="text-white font-bold text-lg">Y</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-lg font-bold gradient-text">Your Portfolio</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Developer & Designer</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="group/nav px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 transition-all relative"
              >
                {/* Background on hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent/10 to-blue-400/10 opacity-0 group-hover/nav:opacity-100 transition-all duration-300"></div>
                
                {/* Text */}
                <span className="relative z-10 group-hover/nav:text-accent transition-colors">
                  {item.name}
                </span>

                {/* Animated underline */}
                <div className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-accent to-blue-400 transform scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.a>
            ))}
          </div>

          {/* Right side - Theme toggle and mobile menu */}
          <div className="flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ThemeToggle />
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2 rounded-lg hover:bg-accent/10 text-gray-700 dark:text-gray-300 transition-all"
              onClick={() => setIsOpen(!isOpen)}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={isOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pb-4 space-y-1 border-t border-white/10">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setIsOpen(false)}
                className="group/mobile block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:text-accent transition-all relative"
              >
                {/* Hover background */}
                <div className="absolute inset-0 rounded-lg bg-accent/10 opacity-0 group-hover/mobile:opacity-100 transition-all"></div>
                <span className="relative z-10">{item.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
