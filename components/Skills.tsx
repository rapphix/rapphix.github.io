'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';

export default function Skills() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary"></div>
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20"></div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text">
            My <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent to-blue-400 rounded-full mt-4"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 z-10"
        >
          {skills.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              variants={itemVariants}
              className="group relative glassmorphism rounded-xl p-6 border border-white/10 hover:border-accent/50 overflow-hidden transition-all"
              whileHover={{ y: -5 }}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

              <div className="relative z-10">
                <h3 className="text-lg font-bold bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent mb-4 group-hover:from-accent-light group-hover:to-blue-300 transition-all">
                  {skillGroup.category}
                </h3>

                <ul className="space-y-3">
                  {skillGroup.items.map((item) => (
                    <motion.li
                      key={item}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-gray-100 flex items-center gap-3 transition-colors"
                    >
                      <span className="w-2 h-2 bg-gradient-to-r from-accent to-blue-400 rounded-full glow-effect"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
