import React from 'react';
import Image from 'next/image';
import { Project } from '@/data/portfolioData';
import { motion } from 'framer-motion';

interface NewProjectCardProps {
  project: Project;
}

const NewProjectCard: React.FC<NewProjectCardProps> = ({ project }) => {
  const colors = ['#FFE5A0', '#B4E7CE', '#FFB4B4', '#FFDAB9', '#E0BBE4', '#FFF9C4'];
  const rotations = [2, -2, 1.5, -1, 1, -1.5];
  const pinColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#9B59B6', '#F39C12'];
  const randomIndex = Math.abs(project.title.charCodeAt(0) % colors.length);
  
  return (
    <motion.div 
      className="group w-full h-full rounded-lg overflow-hidden shadow-2xl transition-all duration-300 relative"
      style={{
        backgroundColor: colors[randomIndex],
        transform: `rotate(${rotations[randomIndex]}deg)`,
      }}
      whileHover={{ rotate: 0, y: -8, scale: 1.02 }}
    >
      {/* Pin at top */}
      <div 
        className="absolute -top-3 right-8 w-7 h-7 rounded-full shadow-xl z-10"
        style={{ backgroundColor: pinColors[randomIndex] }}
      ></div>

      <div className="relative h-48 md:h-56 overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        {/* Title overlay on image */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 
            className="text-2xl md:text-3xl font-bold text-white mb-1 drop-shadow-lg"
            style={{ fontFamily: "'Caveat', cursive", textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
          >
            {project.title}
          </h3>
        </div>
      </div>
      
      <div className="p-5">
        <p className="text-[#0B1C2D] text-base leading-relaxed mb-4 font-medium">
          {project.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-bold text-[#0B1C2D] rounded-full bg-white/60 border-2 border-[#0B1C2D]/20"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              {tag.name}
            </span>
          ))}
        </div>
        
      </div>
    </motion.div>
  );
};

export default NewProjectCard;