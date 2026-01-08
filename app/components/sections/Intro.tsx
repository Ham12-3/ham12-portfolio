"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Sparkles, BookOpen, Headphones, Network } from "lucide-react";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Intro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-surface-light dark:bg-surface-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="sticky top-32">
              <div className="flex items-center gap-2 mb-6 text-primary">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Sparkles className="w-8 h-8" />
                </motion.div>
                <span className="text-sm font-bold tracking-widest uppercase text-text-muted-light dark:text-text-muted-dark">My Philosophy</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8">
                Bridging the Gap Between <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Human Idea</span> & Digital Reality.
              </h2>
              <Link
                href="#experience"
                className="inline-flex items-center gap-2 text-lg font-medium text-text-main-light dark:text-white border-b-2 border-primary pb-1 hover:text-primary transition-colors group"
              >
                See my journey
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-sm"
                >
                  →
                </motion.span>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-12">
            <motion.div
              variants={containerVariants}
              className="text-text-muted-light dark:text-text-muted-dark space-y-6 text-lg leading-relaxed"
            >
              <motion.p
                variants={itemVariants}
                className="first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3"
              >
                I&apos;m Abdulhamid Sonaike, a Software Engineer & AI Specialist passionate about building revolutionary AI applications that transform how people learn and work.
              </motion.p>
              <motion.p variants={itemVariants}>
                My philosophy centers on creating solutions that are not just functional, but transformative. Every project I work on is designed to make a meaningful impact, whether it&apos;s helping students learn 70% faster or improving productivity by 90%.
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 gap-6"
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-card p-6 rounded-2xl border border-border-light dark:border-border-dark shadow-soft hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-lg">Intellectual Curiosity</h3>
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="text-primary bg-primary/10 p-2 rounded-lg group-hover:bg-primary group-hover:text-black transition-colors"
                  >
                    <BookOpen className="w-5 h-5" />
                  </motion.div>
                </div>
                <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                  Currently exploring the depths of AI ethics and Machine Learning architectures. Always reading, always learning.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-card p-6 rounded-2xl border border-border-light dark:border-border-dark shadow-soft hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-lg">Creative Flow</h3>
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="text-primary bg-primary/10 p-2 rounded-lg group-hover:bg-primary group-hover:text-black transition-colors"
                  >
                    <Headphones className="w-5 h-5" />
                  </motion.div>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex gap-1 h-4 items-end">
                    {[2, 4, 3, 2].map((height, i) => (
                      <motion.span
                        key={i}
                        className="w-1 bg-primary"
                        style={{ height: `${height * 4}px` }}
                        animate={{
                          height: [`${height * 4}px`, `${(height + 2) * 4}px`, `${height * 4}px`],
                        }}
                        transition={{
                          duration: 0.8 + i * 0.2,
                          repeat: Infinity,
                          delay: i * 0.1,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-xs font-mono text-text-muted-light">Now Playing: Deep Focus Lo-Fi</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-card p-6 rounded-2xl border border-border-light dark:border-border-dark shadow-soft hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-lg">Structured Process</h3>
                  <motion.div
                    whileHover={{ rotate: [0, 360] }}
                    transition={{ duration: 0.6 }}
                    className="text-primary bg-primary/10 p-2 rounded-lg group-hover:bg-primary group-hover:text-black transition-colors"
                  >
                    <Network className="w-5 h-5" />
                  </motion.div>
                </div>
                <div className="flex gap-2">
                  <motion.span
                    className="h-1.5 flex-1 rounded-full bg-primary"
                    whileHover={{ scaleY: 1.5 }}
                  />
                  <span className="h-1.5 flex-1 rounded-full bg-border-light dark:bg-gray-700"></span>
                  <span className="h-1.5 flex-1 rounded-full bg-border-light dark:bg-gray-700"></span>
                  <span className="h-1.5 flex-1 rounded-full bg-border-light dark:bg-gray-700"></span>
                </div>
                <p className="text-xs mt-3 text-text-muted-light dark:text-text-muted-dark">Discovery → Strategy → Build → Launch</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
