"use client";

import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

interface Experience {
  number: string;
  years: string;
  position: string;
  company: string;
  location: string;
  tags: string[];
  description?: string;
  achievements?: string[];
}

const experiences: Experience[] = [
  {
    number: "01",
    years: "September 2025 – Present",
    position: "Software Engineer",
    company: "GENIE AI",
    location: "Toronto, Canada",
    tags: ["Remote", "AI Application Development"],
    description: "Leading development of enterprise-grade AI applications that transform how businesses interact with intelligent systems.",
    achievements: [
      "Made the app faster: response time went from 420 ms to 190 ms (55% quicker)",
      "Reduced crashes to 0.3% by using async code and better database indexes",
      "Built scalable solutions using Next.js, FastAPI, and AWS services",
    ],
  },
  {
    number: "02",
    years: "July 2025 – September 2025",
    position: "Software Engineer",
    company: "OPSIS AI",
    location: "Remote, United States of America",
    tags: ["Remote", "AI Development"],
    description: "Lead development of an AI assistant helping 2D and 3D animators create beautiful storyboards.",
    achievements: [
      "Built a platform saving animators 4-5 hours per project; resulted in thousands of pounds saved",
      "Grew waitlist to 30,000+ users through social media campaigns I created and managed",
      "Developed AI-powered storyboard generation using advanced machine learning models",
    ],
  },
  {
    number: "03",
    years: "January 2025 – August 2025",
    position: "Full Stack Engineer",
    company: "LOTUS BPM AI Services",
    location: "Remote, United States of America",
    tags: ["Remote", "AI Application Development"],
    description: "Built AI DOCS COPILOT application helping students learn 70% faster and improve grades by 90%.",
    achievements: [
      "Integrated multiple APIs including OpenAI, Claude, Stripe for payments, and Langchain for AI functionality",
      "Developed scalable cloud infrastructure using AWS services (S3, EC2, RDS, Lambda)",
      "Created intuitive user interface with Next.js and React for seamless document interaction",
    ],
  },
  {
    number: "04",
    years: "January 2024 – December 2024",
    position: "Software Engineer",
    company: "Open Source Technology Community",
    location: "London, England, UK",
    tags: ["London, UK", "Community Building"],
    description: "Contributed to open source projects and built an engaged community through technical writing and development.",
    achievements: [
      "Wrote 20+ technical articles about software development and cloud computing best practices",
      "Built an engaged community of nearly 5,000 followers across LinkedIn, Instagram, and Twitter",
      "Improved Dottie AI application and enhanced TheTechCommute website performance by 30%",
    ],
  },
  {
    number: "05",
    years: "May 2024 – June 2024",
    position: "Professional Development Programmes",
    company: "Amazon Web Services & Barclays Training",
    location: "London, England, UK",
    tags: ["London, UK", "Training"],
    description: "Completed comprehensive training programs in cloud computing and finance technology.",
    achievements: [
      "Completed AWS Developer training and earned AWS Certified Developer Associate certification",
      "Participated in Barclays Finance Technology programme through Springboard; gained fintech expertise",
      "Acquired deep knowledge of AWS services, cloud architecture, and financial technology systems",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function YearlySnapshot() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-background-light/10 dark:bg-background-dark/10 relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border-light dark:via-border-dark to-transparent hidden lg:block"></div>
      <div className="container-pattern-aligned max-w-4xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-center mb-16"
        >
          A Journey of <span className="border-b-4 border-primary/40">Growth</span>
        </motion.h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-8 relative"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-border-light dark:border-border-dark shadow-sm hover:shadow-glow transition-all duration-300 relative overflow-hidden"
            >
              <motion.div
                className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.5 }}
              />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <motion.span
                      className="text-primary font-bold font-display text-2xl"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                      {exp.number}
                    </motion.span>
                    {index < experiences.length - 1 && (
                      <motion.div
                        className="h-full w-px bg-border-light dark:bg-border-dark mt-2"
                        initial={{ scaleY: 0 }}
                        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                        transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
                        whileHover={{ backgroundColor: "#EAB308" }}
                      />
                    )}
                  </div>
                  <div>
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="inline-block px-3 py-1 rounded-full bg-background-light dark:bg-background-dark text-xs font-mono mb-2 border border-border-light dark:border-border-dark"
                    >
                      {exp.years}
                    </motion.span>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{exp.position}</h3>
                    <p className="text-lg font-medium text-text-muted-light dark:text-text-muted-dark mt-1">{exp.company}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.tags.map((tag, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(234, 179, 8, 0.1)" }}
                          className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-text-muted-light cursor-default"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                    {exp.description && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        whileInView={{ opacity: 1, height: "auto" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-text-muted-light dark:text-text-muted-dark mt-4 leading-relaxed"
                      >
                        {exp.description}
                      </motion.p>
                    )}
                    {exp.achievements && (
                      <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-4 space-y-2"
                      >
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                            className="text-sm text-text-muted-light dark:text-text-muted-dark flex items-start gap-2"
                          >
                            <span className="text-primary mt-1">•</span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 45 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center justify-center w-12 h-12 rounded-full border border-border-light dark:border-border-dark group-hover:bg-primary group-hover:border-primary transition-all cursor-pointer"
                >
                  <ArrowUpRight className="w-5 h-5 text-text-muted-light dark:text-text-muted-dark group-hover:text-black transition-colors" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
