'use client';

import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-12 h-12 rounded-lg" />;
  }

  const handleToggle = () => {
    // Add a flash effect when clicking
    const button = document.querySelector('[data-theme-toggle]');
    if (button) {
      button.classList.add('scale-110');
      setTimeout(() => button.classList.remove('scale-110'), 200);
    }
    toggleTheme();
  };

  return (
    <motion.button
      onClick={handleToggle}
      data-theme-toggle
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      className="group relative p-3 rounded-xl transition-all overflow-hidden border-2 border-accent/30 hover:border-accent/70 bg-gradient-to-br from-accent/5 to-blue-400/5 dark:glassmorphism dark:border-white/10 dark:hover:border-accent/50"
      aria-label="Toggle theme"
    >
      {/* Light mode background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/40 to-orange-100/30 opacity-100 dark:opacity-0 rounded-xl transition-all duration-500 ease-out"></div>

      {/* Dark mode glassmorphic background */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-blue-400/10 opacity-0 dark:opacity-100 group-hover:opacity-100 transition-all duration-300 rounded-xl"></div>

      {/* Transition flash effect */}
      <motion.div
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none rounded-xl"
        style={{ display: theme === 'light' ? 'block' : 'none' }}
      ></motion.div>

      {/* Icons container with rotation animation */}
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
        className="relative z-10 flex items-center justify-center"
      >
        {theme === 'dark' ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center"
          >
            <FiSun 
              size={20} 
              className="text-yellow-400 dark:text-yellow-400 group-hover:text-yellow-300 transition-colors drop-shadow-lg"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(250, 204, 21, 0.5))'
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: 180, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -180, scale: 0.5 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center"
          >
            <FiMoon 
              size={20} 
              className="text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors drop-shadow-lg"
              style={{
                filter: 'drop-shadow(0 0 6px rgba(37, 99, 235, 0.4))'
              }}
            />
          </motion.div>
        )}
      </motion.div>

      {/* Glow effect on toggle - light mode */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-300/0 via-yellow-300/20 to-orange-300/0 pointer-events-none dark:hidden"
      ></motion.div>

      {/* Glow effect on toggle - dark mode */}
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/0 via-yellow-400/15 to-blue-400/0 pointer-events-none hidden dark:block"
      ></motion.div>
    </motion.button>
  );
}
