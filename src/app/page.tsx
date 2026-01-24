"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Technologies from "@/components/Technologies";
import ExpertisePillars from "@/components/ExpertisePillars";
import LearningLibrary from "@/components/LearningLibrary";
import Credentials from "@/components/Credentials";
import VideoShowcase from "@/components/VideoShowcase";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-transparent">
        <Hero />
        <div className="relative w-full">
          <About />
          <ExpertisePillars />
          <LearningLibrary />
          <VideoShowcase />
          <Technologies />
          <Experience />
          {/* <Projects /> */}
          <Credentials />
          {/* <Achievements /> */}
          {/* <Education /> */}
          <Contact />
        </div>
    </main>
  );
}
