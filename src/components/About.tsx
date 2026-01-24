'use client';
import React from 'react';
import { Download, Heart, Star, Zap, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const whyChooseMe = [
    {
      icon: Trophy,
      title: "Proven Results",
      description: "My students don't just pass—they excel! 2× GATE Qualifier myself, I've mentored 100+ students to top 100 ranks. Your success is my mission.",
      color: "#FFD93D"
    },
    {
      icon: Heart,
      title: "Student-First Teaching",
      description: "Every child is unique. I take time to understand your learning style, pace, and challenges. No student left behind—ever!",
      color: "#FF6B9D"
    },
    {
      icon: Zap,
      title: "Concept Clarity Guaranteed",
      description: "Forget rote learning! I build deep understanding through real-world examples, interactive sessions, and doubt-clearing that actually works.",
      color: "#95E1D3"
    },
    {
      icon: Zap,
      title: "Parents Stay Connected",
      description: "Monthly progress reports, open communication, and scheduled parent-teacher meetings. You'll always know how your child is doing.",
      color: "#F38181"
    }
  ];

  const testimonialHighlights = [
    { icon: Star, text: "My daughter improved from 40% to 92% in just 6 months!", author: "- Parent, Class XII" },
    { icon: Trophy, text: "Cleared GATE with AIR 47! Best decision to join Sir's classes", author: "- Rahul M., GATE 2024" },
    { icon: Heart, text: "Patient, caring, and incredibly knowledgeable. Math is fun now!", author: "- Student, Class X" }
  ];

  const successMetrics = [
    { value: "16+", label: "Years Teaching" },
    { value: "2,420+", label: "Live Classes" },
    { value: "1000+", label: "Students Mentored" },
    { value: "98%", label: "Success Rate" }
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#1A2820] overflow-hidden">
      {/* Blackboard texture */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header - Chalk Style */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div 
            className="w-32 h-1 bg-[#C9A227] mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 0.8 }}
          ></motion.div>
          <h2 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
            style={{ 
              fontFamily: "'Caveat', cursive",
              textShadow: '3px 3px 6px rgba(0,0,0,0.5)'
            }}
          >
            About <span className="text-[#C9A227]">Your Educator</span>
          </h2>
          <p className="text-2xl md:text-3xl text-[#E8DCC4] max-w-4xl mx-auto leading-relaxed" 
             style={{ fontFamily: "'Caveat', cursive", textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            More Than a Teacher — Your Child&apos;s Academic Partner & Success Architect
          </p>
        </motion.div>

        {/* Main Story Section - Large Sticky Note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <motion.div 
            className="relative bg-[#FFE5A0] p-10 md:p-16 rounded-lg shadow-2xl transform rotate-[-0.5deg]"
            whileHover={{ rotate: 0, scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            {/* Pin at top */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-500 rounded-full shadow-xl border-4 border-red-600"></div>
            
            <div className="text-[#1A2820]">
              <h3 
                className="text-4xl md:text-5xl font-bold mb-8 text-center"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                📚 My Promise to You
              </h3>
              
              <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                <p className="font-medium">
                  <strong className="text-2xl">Dear Parents & Students,</strong>
                </p>
                <p>
                  I understand the anxiety of competitive exams, the pressure of board results, and the dream of securing a bright future. With <span className="font-bold text-[#C9A227]">16+ years of dedicated teaching</span> and having mentored <span className="font-bold text-[#C9A227]">1000+ students</span> to success, I don&apos;t just teach mathematics—I transform how students think about it.
                </p>
                <p>
                  As a <span className="font-bold text-[#C9A227]">2× GATE Qualifier</span> myself, I&apos;ve walked the path your child is on. I know every struggle, every doubt, every moment of confusion. That&apos;s why my teaching isn&apos;t just about formulas—it&apos;s about building <span className="font-bold">confidence, clarity, and capability</span>.
                </p>
                <p className="text-xl md:text-2xl font-bold text-center py-4 border-t-2 border-b-2 border-dashed border-[#1A2820]/30">
                  &quot;I don&apos;t just prepare students for exams—I prepare them for success in life.&quot;
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Why Choose Me - Sticky Notes Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-20"
        >
          <h3 
            className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
            style={{ fontFamily: "'Caveat', cursive", textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
          >
            ⭐ Why Parents Trust Me
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {whyChooseMe.map((item, index) => {
              const Icon = item.icon;
              const rotations = ['-2deg', '1deg', '-1.5deg', '2deg'];
              return (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ rotate: 0, scale: 1.05, y: -8 }}
                  className="relative p-6 rounded-lg shadow-xl transform"
                  style={{ 
                    backgroundColor: item.color,
                    rotate: rotations[index % 4]
                  }}
                >
                  {/* Pin */}
                  <div className="absolute -top-3 left-6 w-6 h-6 bg-red-500 rounded-full shadow-lg"></div>
                  
                  <Icon className="w-12 h-12 text-[#0B1C2D] mb-4" strokeWidth={2} />
                  <h4 className="text-2xl font-bold text-[#0B1C2D] mb-3" style={{ fontFamily: "'Caveat', cursive" }}>
                    {item.title}
                  </h4>
                  <p className="text-[#1A2820] font-medium leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Success Metrics - Chalk Board Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 
            className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
            style={{ fontFamily: "'Caveat', cursive", textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
          >
            📊 Success by Numbers
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="relative bg-[#0F1711]/50 backdrop-blur-sm p-8 rounded-lg border-2 border-dashed border-[#E8DCC4]/30 text-center"
                whileHover={{ scale: 1.05, borderColor: 'rgba(201, 162, 39, 0.5)' }}
              >
                <div 
                  className="text-5xl md:text-6xl font-bold mb-2 text-[#C9A227]"
                  style={{ fontFamily: "'Caveat', cursive", textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
                >
                  {metric.value}
                </div>
                <div className="text-sm md:text-base text-[#E8DCC4]">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Student Testimonials - Sticky Notes */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
        >
          <h3 
            className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
            style={{ fontFamily: "'Caveat', cursive", textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
          >
            💬 What Students & Parents Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonialHighlights.map((testimonial, index) => {
              const Icon = testimonial.icon;
              const colors = ['#B4E7CE', '#FFB4B4', '#FFDAB9'];
              const rotations = ['1.5deg', '-1deg', '2deg'];
              return (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ rotate: 0, scale: 1.05 }}
                  className="relative p-6 rounded-lg shadow-xl transform"
                  style={{
                    backgroundColor: colors[index],
                    rotate: rotations[index]
                  }}
                >
                  <div className="absolute -top-3 right-6 w-6 h-6 bg-blue-500 rounded-full shadow-lg"></div>
                  <Icon className="w-8 h-8 text-[#0B1C2D] mb-3" />
                  <p className="text-[#0B1C2D] font-medium text-lg mb-3 italic">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <p className="text-[#1A2820] text-sm font-semibold">
                    {testimonial.author}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            className="bg-[#FFF7D6] p-10 rounded-2xl shadow-2xl transform rotate-[-0.5deg]"
            whileHover={{ rotate: 0, scale: 1.02 }}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-500 rounded-full shadow-xl"></div>
            
            <h3 
              className="text-3xl md:text-4xl font-bold text-[#0B1C2D] mb-6"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              🎯 Ready to Transform Your Child&apos;s Academic Journey?
            </h3>
            <p className="text-lg text-[#1A2820] mb-8 font-medium">
              Let&apos;s discuss how I can help your child achieve their dreams. Book a FREE consultation call today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/nibhesh-edu/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-[#C9A227] text-[#1A2820] font-bold rounded-lg hover:bg-[#B8941F] transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                style={{ fontFamily: "'Caveat', cursive", fontSize: '1.5rem' }}
              >
                📞 Book Free Consultation
              </a>
              <a
                href="/NIBHESH_KUMAR_DAS_CV.pdf"
                download
                className="px-10 py-4 bg-white border-3 border-[#0B1C2D] text-[#0B1C2D] font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 text-lg flex items-center justify-center gap-2"
                style={{ fontFamily: "'Caveat', cursive", fontSize: '1.5rem', borderWidth: '3px' }}
              >
                <Download size={24} />
                Download Resume
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Google Font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&display=swap');
      `}</style>
    </section>
  );
};

export default About; 