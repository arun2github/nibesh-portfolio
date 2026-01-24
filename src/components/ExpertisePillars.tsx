"use client";
import { expertisePillars } from "@/data/portfolioData";
import { motion } from "framer-motion";

const ExpertisePillars = () => {
  return (
    <section id="expertise" className="py-20 px-4 bg-[#1A2820] relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: "'Caveat', cursive", textShadow: '3px 3px 6px rgba(0,0,0,0.5)' }}>
            Expertise <span className="text-[#C9A227]">Pillars</span>
          </h2>
          <p className="text-lg text-[#E8DCC4] max-w-3xl mx-auto" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            Three decades of mathematics education, distilled into specialized excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertisePillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, rotate: -1 }}
              className="bg-[#0F1711]/50 backdrop-blur-sm p-8 rounded-lg border-2 border-dashed border-[#E8DCC4]/30 hover:border-[#C9A227]/50 transition-all"
            >
              <h3 className="text-2xl font-bold text-[#C9A227] mb-2" style={{ fontFamily: "'Caveat', cursive", textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>{pillar.title}</h3>
              <p className="text-[#E8DCC4]/80 text-sm mb-4" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>{pillar.subtitle}</p>
              <p className="text-[#E8DCC4] mb-6" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>{pillar.description}</p>
              <ul className="space-y-2">
                {pillar.keyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#E8DCC4]/90" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
                    <span className="text-[#C9A227] mt-1">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertisePillars;
