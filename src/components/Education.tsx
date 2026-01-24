'use client';

import React from 'react';
import { education } from '@/data/portfolioData';
import { BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type EducationEntry = {
  title: string;
  collegeName: string;
  date: string;
  branch?: string;
  logoUrl?: string;
};

const EducationCard = ({ entry, index }: { entry: EducationEntry, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="bg-[#FFFFFF] p-6 rounded-xl shadow-lg border border-[#E5E7EB] group transition-all duration-300 hover:border-[#C9A227] hover:shadow-xl"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center bg-[#FFF7D6] border-2 border-[#C9A227] overflow-hidden">
          {entry.logoUrl ? (
            <Image src={entry.logoUrl} alt={`${entry.collegeName} logo`} width={48} height={48} className="object-contain p-1" />
          ) : (
            <BookOpen size={32} className="text-cyan-400" />
          )}
        </div>
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-[#0B1C2D] group-hover:text-[#C9A227] transition-colors duration-300">
            {entry.title}
          </h3>
          <p className="text-md font-medium text-[#6B7280] mt-1">{entry.collegeName}</p>
          <p className="text-sm text-[#6B7280] mt-1">{entry.date}</p>
          
          <div className="mt-4 border-t border-[#E5E7EB] pt-4 space-y-2">
            {entry.branch && (
              <p className="text-sm text-[#0B1C2D] flex items-center">
                <BookOpen size={16} className="mr-2 text-[#C9A227]" /> {entry.branch}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  if (!education || education.length === 0) {
    return (
      <section id="education" className="py-20 md:py-28 bg-black text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">My Education</h2>
        <p className="text-neutral-300">Education details are not available at the moment.</p>
      </section>
    );
  }

  return (
    <section id="education" className="py-20 md:py-28 bg-[#F9FAFB]">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "circOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-16 md:mb-20 text-center text-[#0B1C2D]"
        >
          Academic <span className="text-[#C9A227]">Background</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <EducationCard key={index} entry={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 