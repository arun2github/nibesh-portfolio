'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Instagram, UserCheck } from 'lucide-react';
import { socialMediaLinks, profileData } from '@/data/portfolioData';

const socialIconMap: { [key: string]: React.ElementType } = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
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
    <section id="contact" className="relative py-20 md:py-28 bg-[#1A2820] overflow-hidden">
      {/* Blackboard texture */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
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
            style={{ 
              fontFamily: "'Caveat', cursive",
              textShadow: '3px 3px 6px rgba(0,0,0,0.5)'
            }}
          >
            Get In <span className="text-[#C9A227]">Touch</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#E8DCC4] max-w-3xl mx-auto" 
             style={{ fontFamily: "'Caveat', cursive", textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            ✉️ Let&apos;s Start Your Success Journey Together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div 
              className="space-y-5 bg-[#FFE5A0] p-8 rounded-lg shadow-2xl relative"
              style={{ transform: 'rotate(1deg)' }}
              whileHover={{ rotate: 0, scale: 1.02, y: -5 }}
            >
              <div className="absolute -top-3 right-8 w-6 h-6 bg-[#FF6B6B] rounded-full shadow-lg"></div>
              <h3 
                className="text-3xl font-bold text-[#0B1C2D] mb-4"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                📞 Contact Information
              </h3>
              {profileData.email && <ContactInfoItem icon={<Mail size={22} />} text={profileData.email} href={`mailto:${profileData.email}`} />}
              {profileData.phone && <ContactInfoItem icon={<Phone size={22} />} text={profileData.phone} />}
              {/* {profileData.location && <ContactInfoItem icon={<MapPin size={22} />} text={profileData.location} />} */}
            </motion.div>

            {(profileData as any).openTo?.length > 0 && (
              <motion.div
                className="bg-[#B4E7CE] p-8 rounded-lg shadow-2xl relative"
                style={{ transform: 'rotate(-1deg)' }}
                whileHover={{ rotate: 0, scale: 1.02, y: -5 }}
              > 
                <div className="absolute -top-3 right-8 w-6 h-6 bg-[#4ECDC4] rounded-full shadow-lg"></div>
                <h4 
                  className="text-3xl font-bold text-[#0B1C2D] mb-4"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  💼 I&apos;m Open To
                </h4>
                <div className="space-y-3">
                  {(profileData as any).openTo.map((item: any, index: number) => {
                    const iconName = (item.icon || 'default').toLowerCase();
                    const Icon = openToIconMap[iconName] || openToIconMap.default;
                    return (
                      <div key={index} className="flex items-center bg-white/50 p-3 rounded-lg">
                        <Icon size={20} className="mr-3 text-[#0B1C2D] flex-shrink-0" />
                        <span className="text-[#0B1C2D] font-medium">{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            <motion.div
              className="bg-[#FFB4B4] p-8 rounded-lg shadow-2xl relative"
              style={{ transform: 'rotate(1.5deg)' }}
              whileHover={{ rotate: 0, scale: 1.02, y: -5 }}
            >
              <div className="absolute -top-3 right-8 w-6 h-6 bg-[#45B7D1] rounded-full shadow-lg"></div>
              <h4 
                className="text-3xl font-bold text-[#0B1C2D] mb-4"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                🔗 Follow Me
              </h4>
              <div className="flex flex-wrap gap-4">
                {socialMediaLinks.map((link) => {
                  const IconComponent = socialIconMap[link.name.toLowerCase()];
                  return IconComponent ? (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}
                       className="p-3 bg-white/50 hover:bg-white rounded-full text-[#0B1C2D] hover:text-[#C9A227] transition-all duration-300 transform hover:scale-110">
                      <IconComponent size={24} />
                    </a>
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
            className="relative bg-[#FFDAB9] p-8 md:p-10 rounded-lg shadow-2xl"
            style={{ transform: 'rotate(-1deg)' }}
            whileHover={{ rotate: 0, scale: 1.01 }}
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#FFA07A] rounded-full shadow-lg"></div>
            
            <h3 
              className="text-3xl md:text-4xl font-bold text-[#0B1C2D] mb-6 text-center"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              ✉️ Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Your Name"
                     className="w-full px-4 py-3 bg-white/70 border-2 border-[#0B1C2D]/20 rounded-lg focus:ring-2 focus:ring-[#C9A227] focus:border-[#C9A227] outline-none transition-all duration-300 text-[#0B1C2D] placeholder:text-[#0B1C2D]/50 font-medium" />
              <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Your Email"
                     className="w-full px-4 py-3 bg-white/70 border-2 border-[#0B1C2D]/20 rounded-lg focus:ring-2 focus:ring-[#C9A227] focus:border-[#C9A227] outline-none transition-all duration-300 text-[#0B1C2D] placeholder:text-[#0B1C2D]/50 font-medium" />
              <input type="text" name="subject" required value={formData.subject} onChange={handleChange} placeholder="Subject"
                     className="w-full px-4 py-3 bg-white/70 border-2 border-[#0B1C2D]/20 rounded-lg focus:ring-2 focus:ring-[#C9A227] focus:border-[#C9A227] outline-none transition-all duration-300 text-[#0B1C2D] placeholder:text-[#0B1C2D]/50 font-medium" />
              <textarea name="message" required value={formData.message} onChange={handleChange} placeholder="Your Message" rows={5}
                        className="w-full px-4 py-3 bg-white/70 border-2 border-[#0B1C2D]/20 rounded-lg focus:ring-2 focus:ring-[#C9A227] focus:border-[#C9A227] outline-none transition-all duration-300 text-[#0B1C2D] placeholder:text-[#0B1C2D]/50 resize-none font-medium"></textarea>
              <button type="submit" disabled={status.submitting}
                      className="w-full px-8 py-4 bg-[#C9A227] text-[#0B1C2D] font-bold rounded-lg hover:bg-[#B8941F] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                      style={{ fontFamily: "'Caveat', cursive", fontSize: '1.5rem' }}>
                <span className="flex items-center">
                  {status.submitting ? 'Sending...' : 'Send Message'}
                  <Send size={20} className="ml-2" />
                </span>
              </button>
              {status.message && (
                <p className={`text-sm mt-2 text-center ${status.error ? 'text-red-500' : 'text-green-500'}`}>
                  {status.message}
                </p>
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