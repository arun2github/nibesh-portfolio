'use client';
import React from 'react';
import { achievements } from '@/data/portfolioData';
import { Award, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AchievementCard = ({ achievement, index }: { achievement: (typeof achievements)[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative flex flex-col h-full bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl overflow-hidden transition-all duration-300 hover:border-[#C9A227] hover:shadow-xl hover:-translate-y-2"
    >
      <div className="relative w-full h-48">
        <Image 
          src={achievement.imageUrl}
          alt={achievement.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
        <div className="absolute top-4 right-4 p-2 bg-[#FFF7D6] backdrop-blur-md rounded-full border border-[#C9A227]">
           <Award size={24} className="text-[#C9A227]" />
        </div>
      </div>
      
      <div className="flex-grow p-6 flex flex-col">
        <h3 className="text-xl font-bold text-[#0B1C2D] mb-2">{achievement.title}</h3>
        <p className="text-md font-semibold text-[#C9A227] mb-2">{achievement.issuer}</p>
        <p className="text-sm text-[#6B7280] mb-4 flex items-center">
            <Calendar size={14} className="mr-2" />
            {achievement.date}
        </p>
        <p className="text-[#0B1C2D] leading-relaxed flex-grow">{achievement.description}</p>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  if (!achievements || achievements.length === 0) {
    return null;
  }

  return (
    <section id="achievements" className="py-20 md:py-28 bg-[#F9FAFB]">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "circOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-16 md:mb-20 text-center text-white"
        >
          Awards & <span className="text-cyan-400">Accolades</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <AchievementCard key={index} achievement={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements; 