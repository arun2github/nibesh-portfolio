"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Youtube, Play } from "lucide-react";
import Image from "next/image";

interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  channelUrl: string;
  platform: "youtube" | "instagram" | "facebook";
  description: string;
}

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
    title: "GATE Mathematics Strategy",
    thumbnail: "https://img.youtube.com/vi/Duh7r9EXHLE/maxresdefault.jpg",
    channelUrl: "https://www.youtube.com/watch?v=Duh7r9EXHLE&list=PLBgCHjybu2yQ41iMCZ-eeo76OfxWBlENy&index=3",
    platform: "youtube",
    description: "Winning strategies for GATE preparation"
  },
 
];

const VideoShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentVideo = videos[currentIndex];

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "youtube":
        return <Youtube className="w-5 h-5" />;
      case "instagram":
        return <div className="w-5 h-5 text-pink-500">IG</div>;
      case "facebook":
        return <div className="w-5 h-5 text-blue-600">FB</div>;
      default:
        return <Play className="w-5 h-5" />;
    }
  };

  return (
    <section id="videos" className="py-20 px-4 bg-[#1A2820] relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Caveat', cursive", textShadow: '3px 3px 6px rgba(0,0,0,0.5)' }}>
            Video <span className="text-[#C9A227]">Library</span>
          </h2>
          <p className="text-lg text-[#E8DCC4] max-w-3xl mx-auto" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            Explore our comprehensive video content across multiple platforms
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Video Display */}
          <div className="relative aspect-video bg-[#FFFFFF] rounded-2xl overflow-hidden border-2 border-[#E5E7EB] shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.a
                key={currentIndex}
                href={currentVideo.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative w-full h-full group cursor-pointer"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                {/* Thumbnail */}
                <div className="relative w-full h-full bg-[#FFF7D6]">
                  <Image
                    src={currentVideo.thumbnail}
                    alt={currentVideo.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Play className="w-20 h-20 mx-auto mb-4" />
                      <p className="text-xl font-semibold">Visit Channel</p>
                    </div>
                  </div>

                  {/* Platform Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-2">
                    {getPlatformIcon(currentVideo.platform)}
                    <span className="text-sm font-medium text-[#2C3E50] capitalize">
                      {currentVideo.platform}
                    </span>
                  </div>
                </div>

                {/* Video Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {currentVideo.title}
                  </h3>
                  <p className="text-gray-200">
                    {currentVideo.description}
                  </p>
                </div>
              </motion.a>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110"
            aria-label="Previous video"
          >
            <ChevronLeft className="w-6 h-6 text-[#C9A227]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110"
            aria-label="Next video"
          >
            <ChevronRight className="w-6 h-6 text-[#C9A227]" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-12 h-3 bg-[#C9A227]"
                    : "w-3 h-3 bg-[#E5E7EB] hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12 max-w-5xl mx-auto">
          {videos.map((video, index) => (
            <motion.button
              key={video.id}
              onClick={() => goToSlide(index)}
              className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? "border-[#C9A227] shadow-lg scale-105"
                  : "border-[#E5E7EB] hover:border-[#C9A227]"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-full h-full bg-[#FFF7D6] relative">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  {getPlatformIcon(video.platform)}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.youtube.com/@takeinmaths"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A227] text-[#0B1C2D] font-semibold rounded-lg hover:bg-[#B8941F] transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{ fontFamily: "'Caveat', cursive", fontSize: '1.25rem' }}
          >
            <Youtube className="w-5 h-5" />
            Subscribe to Channel
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcase;
