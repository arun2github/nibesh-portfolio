"use client";
import { learningLibraryMetrics } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { BookOpen, Video, Users, PlayCircle } from "lucide-react";

const icons = [Video, PlayCircle, BookOpen, Users];

const LearningLibrary = () => {
  return (
    <section id="learning-library" className="py-20 px-4 bg-[#1A2820] relative overflow-hidden">
      {/* Blackboard Texture */}
      <div className="absolute inset-0 opacity-[0.15]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div className="w-32 h-1 bg-[#C9A227] mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          ></motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Caveat', cursive", textShadow: '3px 3px 6px rgba(0,0,0,0.5)' }}>
            Digital Learning <span className="text-[#C9A227]">Library</span>
          </h2>
          <p className="text-lg text-[#E8DCC4] max-w-3xl mx-auto" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            Comprehensive resources designed for competitive exam excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningLibraryMetrics.map((metric, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, rotate: -2 }}
                className="group relative bg-[#0F1711]/50 backdrop-blur-sm p-8 rounded-lg border-2 border-dashed border-[#E8DCC4]/30 hover:border-[#C9A227]/50 transition-all duration-300 text-center overflow-hidden"
              >
                {/* Icon */}
                <motion.div 
                  className="relative mx-auto w-16 h-16 mb-4 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-8 h-8 text-[#C9A227]" strokeWidth={2} />
                </motion.div>

                {/* Metric Number */}
                <div className="relative text-5xl font-bold text-[#C9A227] mb-2" style={{ fontFamily: "'Caveat', cursive", textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                  {metric.metric}
                </div>

                {/* Value */}
                <div className="relative text-xl font-semibold text-white mb-3" style={{ fontFamily: "'Caveat', cursive", textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                  {metric.value}
                </div>

                {/* Description */}
                <p className="relative text-sm text-[#E8DCC4]/90 leading-relaxed" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 flex items-center justify-center gap-4"
        >
          <div className="w-16 h-[2px] bg-[#C9A227]/50"></div>
          <p className="text-[#E8DCC4] text-lg" style={{ fontFamily: "'Caveat', cursive" }}>
            Building excellence through <span className="font-semibold text-[#C9A227]">comprehensive education</span>
          </p>
          <div className="w-16 h-[2px] bg-[#C9A227]/50"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningLibrary;
