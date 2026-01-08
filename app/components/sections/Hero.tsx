"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

// Text reveal animation
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// Word-by-word animation
const wordVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="home" className="relative pt-40 pb-24 overflow-hidden">
      <div className="absolute inset-0 hero-pattern pointer-events-none"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container-pattern-aligned relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <motion.span
              className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm font-semibold tracking-wide uppercase text-primary">Open to opportunities</span>
        </motion.div>
        
        <div className="mb-8">
          <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tight leading-[1.1] text-text-main-light dark:text-white">
            {["DESIGN WITH", "PURPOSE,", "BUILD WITH PASSION"].map((line, lineIndex) => (
              <motion.span
                key={lineIndex}
                initial="hidden"
                animate="visible"
                className="block"
                custom={lineIndex}
                variants={textVariants}
              >
                {line.split(" ").map((word, wordIndex) => (
                  <motion.span
                    key={wordIndex}
                    className="inline-block mr-2"
                    custom={lineIndex * 10 + wordIndex}
                    variants={wordVariants}
                  >
                    {word === "PURPOSE," ? (
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-300">
                        {word}
                      </span>
                    ) : (
                      word
                    )}
                    {wordIndex < line.split(" ").length - 1 && "\u00A0"}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col items-center justify-center gap-6 mb-20"
        >
          <p className="text-xl md:text-2xl text-text-muted-light dark:text-text-muted-dark max-w-2xl font-light">
            Hi, I&apos;m <span className="font-semibold text-text-main-light dark:text-white">Abdulhamid Sonaike</span>. A Software Engineer & AI Specialist crafting revolutionary digital experiences.
          </p>
          <div className="flex gap-4 mt-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#portfolio"
                className="relative px-8 py-3 bg-text-main-light dark:bg-white text-white dark:text-black rounded-full font-semibold shadow-xl overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <span className="relative z-10">View Work</span>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#about"
                className="relative px-8 py-3 bg-transparent border-2 border-border-light dark:border-border-dark rounded-full font-semibold overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <motion.div
                  className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <span className="relative z-10">About Me</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating profile cards */}
        <div className="relative w-full max-w-5xl mx-auto h-72 md:h-[500px] hidden md:block">
          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -6, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, rotate: -6, scale: 1 }}
            transition={{ 
              duration: 1, 
              delay: 1.2,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            whileHover={{ rotate: 0, scale: 1.1, zIndex: 30 }}
            className="absolute top-10 left-10 transform transition-all duration-500 z-10"
          >
            <motion.div
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(234, 179, 8, 0.5)" }}
              className="w-64 h-64 rounded-2xl overflow-hidden border-8 border-surface-light dark:border-surface-dark shadow-2xl"
            >
              <Image
                src="/images/hero/hero-profile-left.jpg"
                alt="Abdulhamid Sonaike - Software Engineer & AI Specialist"
                width={256}
                height={256}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-96 h-96 bg-gradient-to-tr from-primary to-transparent rounded-full blur-3xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100, rotate: 6, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, rotate: 6, scale: 1 }}
            transition={{ 
              duration: 1, 
              delay: 1.4,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            whileHover={{ rotate: 0, scale: 1.1, zIndex: 30 }}
            className="absolute bottom-10 right-10 transform transition-all duration-500 z-10"
          >
            <motion.div
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(234, 179, 8, 0.5)" }}
              className="w-64 h-64 rounded-2xl overflow-hidden border-8 border-surface-light dark:border-surface-dark shadow-2xl"
            >
              <Image
                src="/images/hero/hero-profile-right.jpg"
                alt="Abdulhamid Sonaike - Software Engineer & AI Specialist"
                width={256}
                height={256}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="md:hidden flex justify-center mb-12 relative"
        >
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform scale-75"></div>
          <div className="w-64 h-64 rounded-2xl overflow-hidden border-4 border-surface-light dark:border-surface-dark shadow-xl relative z-10">
            <Image
              src="/images/hero/hero-profile-left.jpg"
              alt="Abdulhamid Sonaike"
              width={256}
              height={256}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
