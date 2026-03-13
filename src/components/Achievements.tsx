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
    <section id="achievements" className="relative py-20 md:py-28 bg-[#1A2820] overflow-hidden">
      {/* Blackboard texture */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "circOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-16 md:mb-20 text-center text-white"
          style={{ 
            fontFamily: "'Caveat', cursive",
            textShadow: '3px 3px 6px rgba(0,0,0,0.5)'
          }}
        >
          Awards & <span className="text-[#C9A227]">Accolades</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <AchievementCard key={index} achievement={item} index={index} />
          ))}
        </div>
      </div>

      {/* Google Font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&display=swap');
      `}</style>
    </section>
  );
};

export default Achievements; 