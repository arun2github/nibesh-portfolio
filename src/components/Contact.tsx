'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Instagram, UserCheck, MessageCircle, Facebook, Twitter, Youtube } from 'lucide-react';
import { socialMediaLinks, profileData } from '@/data/portfolioData';

// WhatsApp Icon Component
const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// AtoPlay Icon Component
const AtoPlayIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="currentColor"
    className={className}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M10 8.5L16 12L10 15.5V8.5Z" fill="currentColor"/>
  </svg>
);

const socialIconMap: { [key: string]: React.ElementType } = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  youtube: Youtube,
};

const openToIconMap: { [key: string]: React.ElementType } = {
  briefcase: UserCheck, // Defaulting to UserCheck, can be customized
  dollarsign: UserCheck,
  messagesquare: UserCheck,
  github: Github,
  code: UserCheck,
  default: UserCheck,
};

const ContactInfoItem: React.FC<{icon: React.ReactNode, text: string, href?: string}> = ({ icon, text, href }) => {
  const content = (
    <div className="flex items-start group text-base md:text-lg">
      <div className="mr-3 text-[#0B1C2D] mt-1">{icon}</div>
      <div className="text-[#0B1C2D] group-hover:text-[#C9A227] transition-colors font-medium">
        {text.split(',').map((item, index) => (
          <span key={index} className="block">{item.trim()}</span>
        ))}
      </div>
    </div>
  );
  return href ? <a href={href} className="transition-transform hover:scale-105 inline-block">{content}</a> : <div className="inline-block">{content}</div>;
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, success: false, error: false, message: '' });
  const [isMounted, setIsMounted] = useState(false);

  // Fix hydration mismatch by only rendering particles on client
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false, message: '' });
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setStatus({ submitting: false, success: true, error: false, message: data.message || 'Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.error || 'Something went wrong.');
      }
    } catch (error: unknown) {
        if (error instanceof Error) {
            setStatus({ submitting: false, success: false, error: true, message: error.message || 'Failed to send message.' });
        } else {
            setStatus({ submitting: false, success: false, error: true, message: 'An unknown error occurred.' });
        }
    }
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#1A2820] via-[#1F2D25] to-[#1A2820] overflow-hidden">
      {/* Enhanced Blackboard texture with overlay */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isMounted && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#C9A227] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          {/* Glowing decorative line */}
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-[#C9A227] via-[#FFD93D] to-[#C9A227] mx-auto mb-6 rounded-full relative"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 128, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#C9A227] via-[#FFD93D] to-[#C9A227] blur-md opacity-50 rounded-full"></div>
          </motion.div>
          
          {/* Animated heading with glow effect */}
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-4 px-4 relative"
            style={{ 
              fontFamily: "'Caveat', cursive",
              textShadow: '3px 3px 6px rgba(0,0,0,0.5), 0 0 30px rgba(201, 162, 39, 0.3)'
            }}
            animate={{
              textShadow: [
                '3px 3px 6px rgba(0,0,0,0.5), 0 0 30px rgba(201, 162, 39, 0.3)',
                '3px 3px 6px rgba(0,0,0,0.5), 0 0 40px rgba(201, 162, 39, 0.5)',
                '3px 3px 6px rgba(0,0,0,0.5), 0 0 30px rgba(201, 162, 39, 0.3)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Get In <span className="text-[#C9A227] relative inline-block">
              Touch
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-[#C9A227] rounded-full"
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ transformOrigin: 'left' }}
              />
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-[#E8DCC4] max-w-3xl mx-auto px-6" 
            style={{ 
              fontFamily: "'Caveat', cursive", 
              textShadow: '1px 1px 2px rgba(0,0,0,0.3), 0 0 20px rgba(232, 220, 196, 0.2)' 
            }}
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ✉️ Let&apos;s Start Your Success Journey Together 🚀
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 sm:space-y-7 md:space-y-8 flex flex-col h-full"
          >
            <motion.div 
              className="relative bg-gradient-to-br from-[#FFE5A0] to-[#FFD580] p-8 sm:p-9 md:p-10 rounded-2xl shadow-2xl overflow-hidden touch-manipulation"
              style={{ transform: 'rotate(1deg)' }}
              whileHover={{ rotate: 0, scale: 1.05, y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A227]/10 rounded-bl-full"></div>
              
              <motion.div 
                className="absolute -top-3 right-8 w-8 h-8 bg-gradient-to-br from-[#FF6B6B] to-[#FF4444] rounded-full shadow-xl"
                animate={{ 
                  rotate: [0, 10, -10, 0], 
                  scale: [1, 1.15, 1],
                  boxShadow: [
                    '0 4px 6px rgba(255, 107, 107, 0.3)',
                    '0 8px 12px rgba(255, 107, 107, 0.5)',
                    '0 4px 6px rgba(255, 107, 107, 0.3)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              />
              
              <motion.h3 
                className="text-3xl sm:text-4xl font-bold text-[#0B1C2D] mb-6 flex items-center gap-3"
                style={{ fontFamily: "'Caveat', cursive" }}
                whileHover={{ scale: 1.05, color: "#C9A227" }}
              >
                <span className="text-4xl">📞</span>
                <span>Let&apos;s Connect!</span>
              </motion.h3>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.2 } }
                }}
                className="space-y-4"
              >
                {/* Email */}
                {profileData.email && (
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                  >
                    <a 
                      href={`mailto:${profileData.email}`}
                      className="group flex items-start gap-4 p-4 bg-white/60 hover:bg-white rounded-xl transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:border-[#C9A227]/30"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#C9A227] to-[#B8941F] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mail size={22} className="text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-[#0B1C2D]/60 uppercase tracking-wide mb-1">Email Address</p>
                        <p className="text-base sm:text-lg font-bold text-[#0B1C2D] group-hover:text-[#C9A227] transition-colors break-all">
                          {profileData.email}
                        </p>
                      </div>
                    </a>
                  </motion.div>
                )}
                
                {/* WhatsApp */}
                {profileData.phone && (
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                  >
                    <a 
                      href={`https://wa.me/${(profileData as any).whatsapp || profileData.phone.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 p-4 bg-white/60 hover:bg-white rounded-xl transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:border-[#25D366]/30"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <WhatsAppIcon size={24} className="text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-[#0B1C2D]/60 uppercase tracking-wide mb-1">WhatsApp (Click to Chat)</p>
                        <p className="text-base sm:text-lg font-bold text-[#0B1C2D] group-hover:text-[#25D366] transition-colors">
                          {profileData.phone}
                        </p>
                      </div>
                    </a>
                  </motion.div>
                )}
              </motion.div>
              
              {/* Decorative bottom accent */}
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#C9A227]/10 rounded-tr-full"></div>
            </motion.div>

            {(profileData as any).openTo?.length > 0 && (
              <motion.div
                className="bg-[#B4E7CE] p-6 sm:p-7 md:p-8 rounded-lg shadow-2xl relative touch-manipulation"
                style={{ transform: 'rotate(-1deg)' }}
                whileHover={{ rotate: 0, scale: 1.02, y: -5 }}
              > 
                <div className="absolute -top-3 right-8 w-7 h-7 sm:w-8 sm:h-8 bg-[#4ECDC4] rounded-full shadow-lg"></div>
                <h4 
                  className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#0B1C2D] mb-3 sm:mb-4"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  💼 I&apos;m Open To
                </h4>
                <div className="space-y-2 sm:space-y-3">
                  {(profileData as any).openTo.map((item: any, index: number) => {
                    const iconName = (item.icon || 'default').toLowerCase();
                    const Icon = openToIconMap[iconName] || openToIconMap.default;
                    return (
                      <div key={index} className="flex items-center bg-white/50 p-3 sm:p-4 rounded-lg touch-manipulation">
                        <Icon size={20} className="mr-3 text-[#0B1C2D] flex-shrink-0" />
                        <span className="text-[#0B1C2D] font-medium text-sm sm:text-base">{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            <motion.div
              className="bg-[#FFB4B4] p-8 rounded-lg shadow-2xl relative"
              style={{ transform: 'rotate(1.5deg)' }}
              whileHover={{ rotate: 0, scale: 1.05, y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div 
                className="absolute -top-3 right-8 w-6 h-6 bg-[#45B7D1] rounded-full shadow-lg"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <motion.h4 
                className="text-3xl font-bold text-[#0B1C2D] mb-4"
                style={{ fontFamily: "'Caveat', cursive" }}
                whileHover={{ scale: 1.05, color: "#C9A227" }}
              >
                🔗 Follow Me
              </motion.h4>
              <div className="flex flex-wrap gap-4">
                {socialMediaLinks.map((link, index) => {
                  const linkNameLower = link.name.toLowerCase();
                  let IconComponent = socialIconMap[linkNameLower];
                  
                  // Handle custom icons
                  if (linkNameLower === 'atoplay') {
                    return (
                      <motion.a 
                        key={link.name} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label={link.name}
                        className="p-3 bg-white/50 hover:bg-white rounded-full text-[#0B1C2D] hover:text-[#C9A227] transition-all duration-300"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, type: "spring" }}
                      >
                        <AtoPlayIcon size={24} />
                      </motion.a>
                    );
                  }
                  
                  return IconComponent ? (
                    <motion.a 
                      key={link.name} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={link.name}
                      className="p-3 bg-white/50 hover:bg-white rounded-full text-[#0B1C2D] hover:text-[#C9A227] transition-all duration-300"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, type: "spring" }}
                    >
                      <IconComponent size={24} />
                    </motion.a>
                  ) : null;
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative bg-[#FFDAB9] p-6 sm:p-7 md:p-9 lg:p-10 rounded-lg shadow-2xl touch-manipulation flex flex-col h-full"
            style={{ transform: 'rotate(-1deg)' }}
            whileHover={{ rotate: 0, scale: 1.02, y: -5 }}
          >
            <motion.div 
              className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-7 h-7 sm:w-8 sm:h-8 bg-[#FFA07A] rounded-full shadow-lg"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.h3 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1C2D] mb-5 sm:mb-6 text-center"
              style={{ fontFamily: "'Caveat', cursive" }}
              whileHover={{ scale: 1.05, color: "#C9A227" }}
            >
              Send Me a Message
            </motion.h3>
            
            <form onSubmit={handleSubmit} className="space-y-3 flex-1 flex flex-col">
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <input 
                  type="text" 
                  name="name" 
                  required 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="Your Name"
                  className="w-full px-4 py-2.5 sm:py-3 bg-white/70 border-2 border-[#0B1C2D]/20 rounded-lg focus:ring-2 focus:ring-[#C9A227] focus:border-[#C9A227] focus:bg-white outline-none transition-all duration-300 text-[#0B1C2D] placeholder:text-[#0B1C2D]/50 font-medium text-base sm:text-lg touch-manipulation hover:border-[#C9A227]/50 hover:shadow-md" 
                />
              </motion.div>
              
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <input 
                  type="email" 
                  name="email" 
                  required 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="Your Email"
                  className="w-full px-4 py-2.5 sm:py-3 bg-white/70 border-2 border-[#0B1C2D]/20 rounded-lg focus:ring-2 focus:ring-[#C9A227] focus:border-[#C9A227] focus:bg-white outline-none transition-all duration-300 text-[#0B1C2D] placeholder:text-[#0B1C2D]/50 font-medium text-base sm:text-lg touch-manipulation hover:border-[#C9A227]/50 hover:shadow-md" 
                />
              </motion.div>
              
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <input 
                  type="text" 
                  name="subject" 
                  required 
                  value={formData.subject} 
                  onChange={handleChange} 
                  placeholder="Subject"
                  className="w-full px-4 py-2.5 sm:py-3 bg-white/70 border-2 border-[#0B1C2D]/20 rounded-lg focus:ring-2 focus:ring-[#C9A227] focus:border-[#C9A227] focus:bg-white outline-none transition-all duration-300 text-[#0B1C2D] placeholder:text-[#0B1C2D]/50 font-medium text-base sm:text-lg touch-manipulation hover:border-[#C9A227]/50 hover:shadow-md" 
                />
              </motion.div>
              
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="relative flex-1"
              >
                <textarea 
                  name="message" 
                  required 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Your Message" 
                  rows={5}
                  className="w-full h-full min-h-[100px] px-4 py-2.5 sm:py-3 bg-white/70 border-2 border-[#0B1C2D]/20 rounded-lg focus:ring-2 focus:ring-[#C9A227] focus:border-[#C9A227] focus:bg-white outline-none transition-all duration-300 text-[#0B1C2D] placeholder:text-[#0B1C2D]/50 resize-none font-medium text-base sm:text-lg touch-manipulation hover:border-[#C9A227]/50 hover:shadow-md"
                />
                <div className="absolute bottom-2 right-3 text-xs text-[#0B1C2D]/50">
                  {formData.message.length} characters
                </div>
              </motion.div>
              
              <motion.button 
                type="submit" 
                disabled={status.submitting}
                className="w-full px-8 py-4 sm:py-5 bg-[#C9A227] text-[#0B1C2D] font-bold rounded-lg hover:bg-[#B8941F] active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center touch-manipulation text-lg sm:text-xl"
                style={{ fontFamily: "'Caveat', cursive", fontSize: '1.5rem' }}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(201, 162, 39, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span 
                  className="flex items-center gap-2 sm:gap-3"
                  animate={status.submitting ? { opacity: [1, 0.5, 1] } : {}}
                  transition={{ duration: 1, repeat: status.submitting ? Infinity : 0 }}
                >
                  {status.submitting ? 'Sending...' : 'Send Message'}
                  <motion.div
                    animate={status.submitting ? { rotate: 360 } : { x: [0, 5, 0] }}
                    transition={status.submitting ? { duration: 1, repeat: Infinity, ease: "linear" } : { duration: 1.5, repeat: Infinity }}
                  >
                    <Send size={22} className="sm:w-6 sm:h-6" />
                  </motion.div>
                </motion.span>
              </motion.button>
              
              {status.message && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-sm mt-2 text-center font-bold ${status.error ? 'text-red-600' : 'text-green-600'}`}
                >
                  {status.error ? '❌ ' : '✅ '}{status.message}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
        
        {/* Footer - Unique Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 relative"
        >
          {/* Decorative chalk line */}
          <div className="relative mb-8">
            <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-4xl h-[2px] bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-30"></div>
            <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-20 -mt-1"></div>
          </div>

          {/* Footer content */}
          <div className="relative text-center py-8">
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl">
              <div className="absolute -top-2 left-4 w-8 h-8 border-l-2 border-t-2 border-[#C9A227]/40 rounded-tl-lg"></div>
              <div className="absolute -top-2 right-4 w-8 h-8 border-r-2 border-t-2 border-[#C9A227]/40 rounded-tr-lg"></div>
            </div>

            {/* Main footer text */}
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-block bg-[#0B1C2D]/30 backdrop-blur-sm px-8 py-5 rounded-2xl border-2 border-[#C9A227]/20 shadow-xl"
            >
              <p 
                className="text-[#E8DCC4] text-lg md:text-xl mb-2"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                ✨ Crafted with passion by
              </p>
              <a
                href="http://arundevfolio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-2xl md:text-3xl font-bold text-[#C9A227] hover:text-[#FFF7D6] transition-all duration-300"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                <span className="inline-block group-hover:scale-110 transition-transform duration-300">🎨</span>
                <span className="relative">
                  Arun Kumar
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#C9A227] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>
                <span className="inline-block group-hover:rotate-12 transition-transform duration-300">✨</span>
              </a>
              <p className="text-[#E8DCC4]/60 text-sm mt-2 italic">
                Full Stack Developer & Creative Designer
              </p>
            </motion.div>

            {/* Decorative bottom corner elements */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl">
              <div className="absolute -bottom-2 left-4 w-8 h-8 border-l-2 border-b-2 border-[#C9A227]/40 rounded-bl-lg"></div>
              <div className="absolute -bottom-2 right-4 w-8 h-8 border-r-2 border-b-2 border-[#C9A227]/40 rounded-br-lg"></div>
            </div>
          </div>

          {/* Decorative dots */}
          <div className="flex justify-center gap-2 mt-6">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                className="w-2 h-2 bg-[#C9A227] rounded-full"
              ></motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 