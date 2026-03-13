"use client";
import { credentials } from "@/data/portfolioData";
import { motion } from "framer-motion";

const Credentials = () => {
  return (
    <section id="credentials" className="py-20 px-4 bg-[#1A2820] relative overflow-hidden">
      {/* Blackboard Texture */}
      <div className="absolute inset-0 opacity-[0.15]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
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
            style={{ fontFamily: "'Caveat', cursive", textShadow: '3px 3px 6px rgba(0,0,0,0.5)' }}
          >
            Credentials & <span className="text-[#C9A227]">Certifications</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#E8DCC4] max-w-3xl mx-auto" 
             style={{ fontFamily: "'Caveat', cursive", textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            Academic Excellence & Professional Certifications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-6">
          {credentials.map((credential, index) => {
            const colors = ['#FFE5A0', '#B4E7CE', '#FFB4B4', '#FFDAB9', '#E0BBE4', '#FFF9C4'];
            const rotations = [2, -2, 1, -1, 1.5, -1.5];
            const pinColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#9B59B6', '#F39C12'];
            const colorIndex = index % colors.length;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ rotate: 0, scale: 1.05, y: -8 }}
                className={`relative p-6 rounded-lg shadow-2xl transition-all ${
                  index <= 2 ? 'lg:col-span-2' : ''
                } ${
                  index === 3 ? 'lg:col-span-2 lg:col-start-2' : ''
                } ${
                  index === 4 ? 'lg:col-span-2' : ''
                }`}
                style={{
                  backgroundColor: colors[colorIndex],
                  transform: `rotate(${rotations[colorIndex]}deg)`,
                }}
              >
                {/* Pin */}
                <div 
                  className="absolute -top-3 right-8 w-6 h-6 rounded-full shadow-lg"
                  style={{ backgroundColor: pinColors[colorIndex] }}
                ></div>
                
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-[#0B1C2D]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="text-xl md:text-2xl font-bold text-[#0B1C2D] mb-2"
                      style={{ fontFamily: "'Caveat', cursive" }}
                    >
                      {credential.title}
                    </h3>
                    <p className="text-base font-semibold text-[#0B1C2D]/80 mb-1">
                      📍 {credential.issuer}
                    </p>
                    {credential.date && (
                      <p className="text-sm text-[#0B1C2D]/70 font-medium">📅 {credential.date}</p>
                    )}
                    {credential.certificateId && (
                      <p className="text-xs text-[#0B1C2D]/60 mt-1 font-mono bg-white/40 px-2 py-1 rounded inline-block">
                        ID: {credential.certificateId}
                      </p>
                    )}
                  </div>
                </div>
                <p className="text-sm text-[#0B1C2D] leading-relaxed font-medium">
                  {credential.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Credentials;
