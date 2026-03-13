'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, BookOpen, Award, Target, TrendingUp } from 'lucide-react';
import { profileData } from '@/data/portfolioData';
import Link from 'next/link';

const Hero = () => {
  return (
    <motion.section 
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#1A2820] px-4 sm:px-6 py-16 sm:py-20 md:py-24 safe-top safe-bottom"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Blackboard Texture */}
      <div className="absolute inset-0 opacity-[0.15]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      {/* Chalk Dust Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A2820]/30"></div>

      {/* Decorative Grid Lines (like blackboard lines) */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute w-full h-[1px] bg-white" style={{ top: `${i * 5}%` }}></div>
        ))}
      </div>

      <motion.div 
        className="relative z-10 text-center max-w-6xl mx-auto w-full"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Decorative Top Border (chalk line) */}
        <motion.div 
          className="w-20 sm:w-24 md:w-32 h-1 bg-[#C9A227] mx-auto mt-4 sm:mt-6 mb-2 sm:mb-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 128 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        ></motion.div>

        {/* Name - Large Chalk Writing */}
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 sm:mb-6 md:mb-8 text-white relative px-4 leading-tight"
          style={{ 
            fontFamily: "'Caveat', cursive",
            textShadow: '3px 3px 6px rgba(0,0,0,0.5), 0 0 20px rgba(201, 162, 39, 0.2)'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {profileData.name}
          {/* Chalk underline effect */}
          <motion.div
            className="absolute -bottom-1 left-1/2 h-[3px] bg-[#C9A227]"
            initial={{ width: 0, x: '-50%' }}
            animate={{ width: '60%', x: '-50%' }}
            transition={{ delay: 1, duration: 0.8 }}
            style={{ opacity: 0.7 }}
          ></motion.div>
        </motion.h1>

        {/* Title - Handwritten Style */}
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#C9A227] mb-4 sm:mb-6 px-4 leading-relaxed"
          style={{ 
            fontFamily: "'Caveat', cursive",
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {profileData.welcomeTag}
        </motion.h2>

        {/* Description - Chalk Text */}
        <motion.p 
          className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-[#E8DCC4] leading-relaxed max-w-3xl mx-auto px-6 sm:px-4"
          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          {profileData.about}
        </motion.p>

        {/* Decorative Arrow Pointing Down */}
        <motion.div
          className="my-4 md:my-6 flex items-center justify-center gap-4"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <div className="w-12 md:w-16 h-[2px] bg-[#C9A227]/50"></div>
          <span className="text-[#C9A227] text-xl md:text-2xl">★</span>
          <div className="w-12 md:w-16 h-[2px] bg-[#C9A227]/50"></div>
        </motion.div>
        
        {/* CTA Buttons - Chalk Board Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center px-4 sm:px-6"
        >
          <Link
            href="#expertise"
            className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-[#C9A227] text-[#1A2820] font-bold rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl active:scale-95 text-base sm:text-lg text-center touch-manipulation"
            style={{ fontFamily: "'Caveat', cursive", fontSize: '1.3rem' }}
          >
            <span className="relative z-10">Explore My Expertise</span>
          </Link>
          <Link
            href="#contact"
            className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-transparent text-white font-bold rounded-lg border-2 sm:border-3 border-[#E8DCC4] hover:bg-[#E8DCC4]/10 active:scale-95 transition-all duration-300 text-base sm:text-lg text-center touch-manipulation"
            style={{ fontFamily: "'Caveat', cursive", fontSize: '1.3rem' }}
          >
            <span className="relative z-10">Get in Touch</span>
          </Link>
        </motion.div>

        {/* Blackboard Stats - Like Math Problems */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-10 sm:mt-14 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto px-4 sm:px-6"
        >
          {[
            { icon: TrendingUp, value: "16+", label: "Years Teaching", color: "#E8DCC4" },
            { icon: BookOpen, value: "15,000+", label: "Live Sessions", color: "#C9A227" },
            { icon: Award, value: "500+", label: "Video Lectures", color: "#E8DCC4" },
            { icon: Target, value: "2× GATE", label: "Qualifier", color: "#C9A227" }
          ].map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div 
                key={index} 
                className="relative group"
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.3 }}
              >
                {/* Chalk box effect */}
                <div className="relative bg-[#0F1711]/50 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg border-2 border-dashed border-[#E8DCC4]/30 hover:border-[#C9A227]/50 transition-all duration-300 min-h-[120px] sm:min-h-[130px] flex flex-col justify-center">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 mx-auto mb-2 sm:mb-3 text-[#C9A227]" strokeWidth={1.5} />
                  <div 
                    className="text-3xl sm:text-4xl md:text-4xl font-bold mb-1 sm:mb-2" 
                    style={{ 
                      color: metric.color,
                      fontFamily: "'Caveat', cursive",
                      textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                    }}
                  >
                    {metric.value}
                  </div>
                  <div 
                    className="text-[10px] md:text-xs text-[#E8DCC4]/80"
                    style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}
                  >
                    {metric.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator - Chalk Arrow */}
      <motion.div
        className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      >
        <span className="text-[#E8DCC4] text-xs md:text-sm" style={{ fontFamily: "'Caveat', cursive" }}>Scroll Down</span>
        <ArrowDown className="text-[#C9A227]" size={28} strokeWidth={2.5} />
      </motion.div>

      {/* Google Font Import for Caveat (chalk handwriting style) */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&display=swap');
      `}</style>
    </motion.section>
  );
};

export default Hero; 