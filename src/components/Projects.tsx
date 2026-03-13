'use client';
import React from 'react';
import NewProjectCard from './ui/NewProjectCard';
import { projects as projectsData } from '@/data/portfolioData';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  if (!projectsData || projectsData.length === 0) {
    return (
      <section id="projects" className="py-20 md:py-28 bg-black text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">My Creative Portfolio</h2>
        <p className="text-neutral-300">No projects to display at the moment.</p>
      </section>
    );
  }

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      },
    },
  };

  return (
    <section id="projects" className="relative py-20 md:py-28 bg-[#1A2820] overflow-hidden">
      {/* Blackboard texture */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="w-32 h-1 bg-[#C9A227] mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 0.8 }}
          ></motion.div>
          <h2 
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            style={{ 
              fontFamily: "'Caveat', cursive",
              textShadow: '3px 3px 6px rgba(0,0,0,0.5)'
            }}
          >
            My Creative <span className="text-[#C9A227]">Portfolio</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#E8DCC4] max-w-3xl mx-auto" 
             style={{ fontFamily: "'Caveat', cursive", textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            Teaching Programs & Educational Frameworks
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsData.map((project, index) => (
            <motion.div key={project.id || index} variants={itemVariants}>
              <NewProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;