"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Video, Users, PlayCircle, Eye, ThumbsUp, Clock, ChevronLeft, ChevronRight, Youtube, Play } from "lucide-react";
import Image from "next/image";

interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  channelUrl: string;
  platform: "youtube" | "autoplay";
  description: string;
}

const youtubeMetrics = [
  { icon: Video, metric: "500+", value: "JEE Videos", description: "Comprehensive video library covering all topics" },
  { icon: Eye, metric: "50K+", value: "Total Views", description: "Students learning from our content" },
  { icon: ThumbsUp, metric: "95%", value: "Like Ratio", description: "Highly appreciated by students" },
  { icon: Users, metric: "2K+", value: "Subscribers", description: "Growing community of learners" }
];

const autoplayMetrics = [
  { icon: PlayCircle, metric: "100+", value: "Series", description: "Structured autoplay series for systematic learning" },
  { icon: Clock, metric: "15,000+", value: "Live Sessions", description: "Interactive sessions on Vedantu platform" },
  { icon: Video, metric: "200+", value: "Hours", description: "Of curated educational content" },
  { icon: Users, metric: "1,000+", value: "Students", description: "Benefited from autoplay series" }
];

const videos: VideoItem[] = [
  {
    id: "1",
    title: "Advanced Calculus - GATE Mathematics",
    thumbnail: "https://img.youtube.com/vi/cg2tgLR-6Q4/maxresdefault.jpg",
    channelUrl: "https://www.youtube.com/watch?v=cg2tgLR-6Q4",
    platform: "youtube",
    description: "Complete calculus series for competitive exams"
  },
  {
    id: "2",
    title: "Linear Algebra Master Class",
    thumbnail: "https://img.youtube.com/vi/E7fCiDlWgiI/maxresdefault.jpg",
    channelUrl: "https://www.youtube.com/watch?v=E7fCiDlWgiI",
    platform: "youtube",
    description: "Comprehensive linear algebra tutorials"
  },
  {
    id: "3",
    title: "Differential Equations Simplified",
    thumbnail: "https://img.youtube.com/vi/JuQC0pnZwxg/maxresdefault.jpg",
    channelUrl: "https://www.youtube.com/watch?v=JuQC0pnZwxg&list=PLBgCHjybu2yQnxD_erB_EXfKsxI0tSMxv",
    platform: "youtube",
    description: "Step-by-step differential equations guide"
  },
  {
    id: "4",
    title: "GATE Mathematics Strategy",
    thumbnail: "https://img.youtube.com/vi/Duh7r9EXHLE/maxresdefault.jpg",
    channelUrl: "https://www.youtube.com/watch?v=Duh7r9EXHLE&list=PLBgCHjybu2yQ41iMCZ-eeo76OfxWBlENy&index=3",
    platform: "youtube",
    description: "Winning strategies for GATE preparation"
  },
  {
    id: "5",
    title: "Advanced Mathematics Series - Part 1",
    thumbnail: "/images/atoplay_winner.jpeg",
    channelUrl: "https://atoplay.com/video/c1637ad6-1a46-4125-b3ce-bd64b678a73e",
    platform: "autoplay",
    description: "Comprehensive mathematics course on AtoPlay"
  },
  {
    id: "6",
    title: "Advanced Mathematics Series - Part 2",
    thumbnail: "/images/atoplay_winner.jpeg",
    channelUrl: "https://atoplay.com/video/ee0c7eb4-e43f-41fa-88e6-7a1cb62c8325",
    platform: "autoplay",
    description: "Continuing advanced mathematics concepts"
  },
  {
    id: "7",
    title: "Advanced Mathematics Series - Part 3",
    thumbnail: "/images/atoplay_winner.jpeg",
    channelUrl: "https://atoplay.com/video/c55b23a3-a523-45b3-9dda-4db0e99c5376",
    platform: "autoplay",
    description: "Deep dive into complex mathematics topics"
  },
  {
    id: "8",
    title: "Advanced Mathematics Series - Part 4",
    thumbnail: "/images/atoplay_winner.jpeg",
    channelUrl: "https://atoplay.com/video/0f562787-e1df-4c6e-bbdc-429916f72038",
    platform: "autoplay",
    description: "Advanced problem solving techniques"
  },
  {
    id: "9",
    title: "Advanced Mathematics Series - Part 5",
    thumbnail: "/images/atoplay_winner.jpeg",
    channelUrl: "https://atoplay.com/video/5ccfa7f7-1256-4bf6-9c27-1bd02d11ebab",
    platform: "autoplay",
    description: "Complete mathematics mastery series"
  }
];

const LearningLibrary = () => {
  const [activeTab, setActiveTab] = useState<'youtube' | 'autoplay'>('youtube');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Filter videos based on active tab
  const filteredVideos = videos.filter(video => video.platform === activeTab);
  
  // Get metrics based on active tab
  const currentMetrics = activeTab === 'youtube' ? youtubeMetrics : autoplayMetrics;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredVideos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredVideos.length) % filteredVideos.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "youtube":
        return <Youtube className="w-5 h-5" />;
      case "autoplay":
        return <Play className="w-5 h-5 text-[#C9A227]" />;
      default:
        return <Play className="w-5 h-5" />;
    }
  };

  // Reset carousel index when tab changes
  const handleTabChange = (tab: 'youtube' | 'autoplay') => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  const currentVideo = filteredVideos[currentIndex];

  return (
    <section id="learning-library" className="py-20 px-4 bg-[#1A2820] relative overflow-hidden">
      {/* Blackboard Texture */}
      <div className="absolute inset-0 opacity-[0.15]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
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

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => handleTabChange('youtube')}
            className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
              activeTab === 'youtube'
                ? 'bg-[#C9A227] text-[#1A2820] shadow-xl scale-105'
                : 'bg-[#0F1711]/50 text-[#E8DCC4] border-2 border-[#E8DCC4]/30 hover:border-[#C9A227]/50'
            }`}
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            YouTube Channel
          </button>
          <button
            onClick={() => handleTabChange('autoplay')}
            className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
              activeTab === 'autoplay'
                ? 'bg-[#C9A227] text-[#1A2820] shadow-xl scale-105'
                : 'bg-[#0F1711]/50 text-[#E8DCC4] border-2 border-[#E8DCC4]/30 hover:border-[#C9A227]/50'
            }`}
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Autoplay Series
          </button>
        </div>

        {/* Dynamic Content Section */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, rotate: -2 }}
                  className="group relative bg-[#0F1711]/50 backdrop-blur-sm p-8 rounded-lg border-2 border-dashed border-[#E8DCC4]/30 hover:border-[#C9A227]/50 transition-all duration-300 text-center overflow-hidden"
                >
                  <motion.div 
                    className="relative mx-auto w-16 h-16 mb-4 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-[#C9A227]" strokeWidth={2} />
                  </motion.div>
                  <div className="relative text-5xl font-bold text-[#C9A227] mb-2" style={{ fontFamily: "'Caveat', cursive", textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                    {metric.metric}
                  </div>
                  <div className="relative text-xl font-semibold text-white mb-3" style={{ fontFamily: "'Caveat', cursive", textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                    {metric.value}
                  </div>
                  <p className="relative text-sm text-[#E8DCC4]/90 leading-relaxed" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
                    {metric.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Video Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-8" style={{ fontFamily: "'Caveat', cursive", textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            {activeTab === 'youtube' ? 'Featured YouTube Videos' : 'AtoPlay Series'}
          </h3>

          <div className="relative max-w-5xl mx-auto">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-[#C9A227] hover:bg-[#D4B13A] text-[#1A2820] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Previous video"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-[#C9A227] hover:bg-[#D4B13A] text-[#1A2820] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Next video"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Video Card */}
            <AnimatePresence mode="wait">
              {currentVideo && (
                <motion.div
                  key={`${activeTab}-${currentIndex}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#0F1711]/50 backdrop-blur-sm rounded-lg border-2 border-[#E8DCC4]/30 overflow-hidden"
                >
                  <div className="grid md:grid-cols-2 gap-6 p-6">
                    {/* Video Thumbnail/Embed */}
                    <div className="relative aspect-video bg-black rounded-lg overflow-hidden group">
                      <a
                        href={currentVideo.channelUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full"
                      >
                        <Image
                          src={currentVideo.thumbnail}
                          alt={currentVideo.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <div className="bg-[#C9A227] rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                            {getPlatformIcon(currentVideo.platform)}
                          </div>
                        </div>
                      </a>
                    </div>

                    {/* Video Info */}
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-3">
                        {getPlatformIcon(currentVideo.platform)}
                      <span className="text-[#C9A227] text-sm font-semibold uppercase">
                        {currentVideo.platform === 'youtube' ? 'YouTube' : 'AtoPlay'}
                      </span>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Caveat', cursive", textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                      {currentVideo.title}
                    </h4>
                    <p className="text-[#E8DCC4] mb-6 leading-relaxed">
                      {currentVideo.description}
                    </p>
                    <a
                      href={currentVideo.channelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A227] hover:bg-[#D4B13A] text-[#1A2820] font-bold rounded-lg transition-all duration-300 hover:scale-105 w-fit"
                      style={{ fontFamily: "'Caveat', cursive" }}
                    >
                      <PlayCircle className="w-5 h-5" />
                      Watch Now
                    </a>
                  </div>
                </div>
              </motion.div>
              )}
            </AnimatePresence>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {filteredVideos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-[#C9A227] w-8'
                      : 'bg-[#E8DCC4]/30 hover:bg-[#E8DCC4]/50'
                  }`}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

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

      {/* Google Font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&display=swap');
      `}</style>
    </section>
  );
};

export default LearningLibrary;
