'use client';

import React from 'react';
import { experiences } from '@/data/portfolioData';
import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0], index: number }) => {
  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut', delay: index * 0.2 } }
  };

  return (
    <motion.div
      className="relative pl-16 py-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
    >
      {/* Timeline Icon */}
      <motion.div 
        className="absolute left-[-11px] top-[48px] -translate-y-1/2 h-8 w-8 rounded-full bg-[#C9A227] flex items-center justify-center border-4 border-[#1A2820] overflow-hidden shadow-lg"
        whileInView={{ 
          scale: [1, 1.2, 1],
          boxShadow: ["0 0 0px rgba(201, 162, 39, 0)", "0 0 20px rgba(201, 162, 39, 0.6)", "0 0 0px rgba(201, 162, 39, 0)"],
        }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
      >
        {experience.logoUrl ? (
          <Image src={experience.logoUrl} alt={`${experience.companyName} logo`} width={24} height={24} className="object-contain" />
        ) : (
          <Briefcase size={18} className="text-[#1A2820]" />
        )}
      </motion.div>

      {/* Sticky Note Card */}
      <motion.div 
        className="group relative rounded-lg p-6 shadow-xl transition-all duration-300"
        whileHover={{ rotate: 0, scale: 1.02, y: -5 }}
        style={{
          backgroundColor: index % 2 === 0 ? '#FFE5A0' : '#B4E7CE',
          transform: `rotate(${index % 2 === 0 ? '1deg' : '-1deg'})`,
        }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
          <h3 
            className="text-2xl md:text-3xl font-bold text-[#0B1C2D] mb-2"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            {experience.title}
          </h3>
          <div className="flex items-center text-sm text-[#0B1C2D] font-semibold mt-2 sm:mt-0 bg-white/50 px-3 py-1 rounded-full">
            <Calendar size={14} className="mr-2" />
            <span>{experience.date}</span>
          </div>
        </div>
        <div 
          className="text-lg text-[#0B1C2D] mb-4 font-bold"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          {experience.companyName}
        </div>
        
        <ul className="list-none text-[#0B1C2D] space-y-2 pl-0">
          {experience.points.map((point, i) => (
            <li key={i} className="text-base leading-relaxed flex items-start">
              <span className="text-[#C9A227] mr-2 font-bold text-lg">✓</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  if (!experiences || experiences.length === 0) {
    return (
      <section id="experience" className="py-20 md:py-28 bg-black text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">My Journey</h2>
        <p className="text-neutral-300">Experience details are not available at the moment.</p>
      </section>
    );
  }

  return (
    <section id="experience" className="relative py-20 md:py-28 bg-[#1A2820] overflow-hidden">
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
            My Professional <span className="text-[#C9A227]">Journey</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#E8DCC4] max-w-3xl mx-auto" 
             style={{ fontFamily: "'Caveat', cursive", textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            📍 16+ Years of Teaching Excellence
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central timeline line */}
          <div className="absolute left-[3px] top-0 h-full w-1.5 bg-gradient-to-b from-[#C9A227]/50 via-[#C9A227] to-[#C9A227]/50 rounded-full"></div>
          
          <div>
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 