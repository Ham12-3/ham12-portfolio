"use client";

import { motion } from "framer-motion";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Intro from "./components/sections/Intro";
import YearlySnapshot from "./components/sections/YearlySnapshot";
import Portfolio from "./components/sections/Portfolio";
import Services from "./components/sections/Services";
import Education from "./components/sections/Education";
import FAQ from "./components/sections/FAQ";
import Metrics from "./components/sections/Metrics";
import Footer from "./components/sections/Footer";
import BackgroundPattern from "./components/BackgroundPattern";

export default function Home() {
  return (
    <main className="min-h-screen text-text-main-light dark:text-text-main-dark font-sans transition-colors duration-300 relative selection:bg-primary selection:text-black">
      {/* Background Pattern SVG - Behind everything but visible */}
      <BackgroundPattern />
      
      {/* Background gradient blobs with subtle animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.7, 0.6],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.5, 0.4],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[20%] right-[-5%] w-[30rem] h-[30rem] bg-blue-500/5 rounded-full blur-[100px] dark:bg-blue-500/10"
        />
      </div>

      {/* Content wrapper with relative positioning */}
      <div className="relative z-20">
        <Navbar />
        <Hero />
        <Intro />
        <YearlySnapshot />
        <Portfolio />
        <Services />
        <Education />
        <FAQ />
        <Metrics />
        <Footer />
      </div>
    </main>
  );
}
