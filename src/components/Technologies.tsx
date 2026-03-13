'use client';

import React from 'react';
import { technologies } from '@/data/portfolioData';
import { motion } from 'framer-motion';

const TechCard: React.FC<{ tech: typeof technologies[0], index: number }> = ({ tech, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, delay: index * 0.05, ease: 'easeOut' }
    }
  };

  const colors = ['#FFE5A0', '#B4E7CE', '#FFB4B4', '#FFDAB9', '#E0BBE4', '#FFF9C4'];
  const rotations = [2, -2, 1, -1, 1.5, -1.5];
  const color = colors[index % colors.length];
  const rotation = rotations[index % rotations.length];

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ rotate: 0, scale: 1.05, y: -8 }}
      className="group flex flex-col items-center justify-center p-6 rounded-lg shadow-xl transition-all h-full relative"
      style={{ 
        backgroundColor: color,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      {/* Pin */}
      <div 
        className="absolute -top-2 right-6 w-5 h-5 rounded-full shadow-md"
        style={{ backgroundColor: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#9B59B6', '#F39C12'][index % 6] }}
      ></div>
      <p 
        className="text-xl md:text-2xl font-bold text-[#0B1C2D] text-center"
        style={{ fontFamily: "'Caveat', cursive" }}
      >
        {tech.name}
      </p>
    </motion.div>
  );
};

const Technologies = () => {
  if (!technologies || technologies.length === 0) {
    return (
      <section id="technologies" className="py-16 md:py-24 bg-[#F9FAFB] text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0B1C2D]">Tech Stack</h2>
        <p className="text-neutral-300">Technology details are not available at the moment.</p>
      </section>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 }
    }
  };

  return (
    <section id="technologies" className="relative py-20 md:py-32 bg-[#1A2820] overflow-hidden">
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
            My Math <span className="text-[#C9A227]">Expertise</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#E8DCC4] max-w-3xl mx-auto" 
             style={{ fontFamily: "'Caveat', cursive", textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            Core Mathematical Domains I Teach
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {technologies.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies; 