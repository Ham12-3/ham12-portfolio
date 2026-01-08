"use client";
import React, { useTransition, useState, ReactNode } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

interface TabDataItem {
  title: string;
  id: string;
  content: ReactNode;
}

const TAB_DATA: TabDataItem[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {[
          "AWS (EC2, S3, Lambda, RDS)",
          "Next.js & React",
          "Python & FastAPI", 
          "Node.js",
          "PostgreSQL & MongoDB",
          "Docker & CI/CD",
          "OpenAI API & Claude API",
          "Langchain & Vector DBs",
          "TypeScript & JavaScript",
          "Stripe API Integration",
          "Vercel & AWS Deployment",
          "Software Engineering"
        ].map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="luxury-card p-3 rounded-lg text-center"
          >
            <span className="text-luxury-platinum text-sm font-medium">{skill}</span>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="luxury-card p-6 rounded-xl"
        >
          <h3 className="text-luxury-gold text-xl font-semibold mb-2">Extended National Diploma in Information Technology</h3>
          <p className="text-luxury-platinum/80 mb-1">Lewisham College</p>
          <p className="text-luxury-platinum/60 text-sm">London, England, UK • Oct 2023 - Jun 2025</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="luxury-card p-6 rounded-xl"
        >
          <h3 className="text-luxury-gold text-xl font-semibold mb-2">Finance Training</h3>
          <p className="text-luxury-platinum/80 mb-1">Barclays Springboard</p>
          <p className="text-luxury-platinum/60 text-sm">Online • May 2024 - Jun 2024</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="luxury-card p-6 rounded-xl"
        >
          <h3 className="text-luxury-gold text-xl font-semibold mb-2">Cloud Computing Training</h3>
          <p className="text-luxury-platinum/80 mb-1">Amazon Springboard</p>
          <p className="text-luxury-platinum/60 text-sm">Online • May 2024 - Jun 2024</p>
        </motion.div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="space-y-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="luxury-card p-6 rounded-xl border border-luxury-gold/30"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-luxury-gradient rounded-full flex items-center justify-center">
              <span className="text-luxury-dark font-bold text-lg">AWS</span>
            </div>
            <div>
              <h3 className="text-luxury-gold text-xl font-semibold">AWS Certified Developer Associate</h3>
              <p className="text-luxury-platinum/60 text-sm">Amazon Web Services • August 2024</p>
            </div>
          </div>
          <p className="text-luxury-platinum/80 text-sm">Certified in developing and maintaining applications on AWS platform</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="luxury-card p-6 rounded-xl"
        >
          <h3 className="text-luxury-gold text-lg font-semibold mb-2">Full-Stack Development Bootcamp</h3>
          <p className="text-luxury-platinum/80 text-sm">Complete web development certification</p>
        </motion.div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white py-16" id="about">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl font-bold font-display mb-4"
        >
          <span className="luxury-text">About</span> <span className="text-luxury-platinum">Me</span>
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="w-24 h-1 bg-luxury-gradient mx-auto mb-6"></div>
          <p className="text-luxury-platinum/60 text-lg max-w-2xl mx-auto">
            Passionate about creating innovative solutions that make a difference
          </p>
        </motion.div>

        <div className="md:grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="luxury-card p-2 rounded-2xl">
              <Image 
                src="/images/about-image.png" 
                width={600} 
                height={600}
                alt="About Abdulhamid Sonaike"
                className="rounded-xl w-full h-auto"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-luxury-gradient rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-luxury-bronze/30 rounded-full animate-bounce"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 md:mt-0"
          >
            <div className="luxury-card p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold luxury-text mb-4">Full Stack Engineer & Cloud Expert</h3>
              <p className="text-luxury-platinum/90 text-lg leading-relaxed mb-6">
                Currently building revolutionary AI applications at <span className="text-luxury-gold font-semibold">LOTUS BPM AI Services</span>, 
                where I&apos;m developing AI DOCS COPILOT - an innovative platform that helps students study 70% faster and 
                improve academic performance by up to 90%.
              </p>
              <p className="text-luxury-platinum/80 leading-relaxed mb-6">
                As an AWS Certified Developer and open-source contributor, I&apos;ve built scalable cloud solutions, 
                contributed to projects like Dottie (AI health app), and created popular developer tools with nearly 
                1,000 downloads. My work spans modern tech stacks including Next.js, FastAPI, AWS services, and AI integrations.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["5K+ Social Following", "AWS Certified", "Open Source Contributor", "20+ Technical Articles"].map((achievement) => (
                  <span key={achievement} className="px-3 py-1 bg-luxury-gold/20 text-luxury-gold text-sm rounded-full border border-luxury-gold/30">
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
              {TAB_DATA.map((tabData) => (
                <TabButton
                  key={tabData.id}
                  selectTab={() => handleTabChange(tabData.id)}
                  active={tab === tabData.id}
                >
                  {tabData.title}
                </TabButton>
              ))}
            </div>
            
            <motion.div 
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="min-h-[300px]"
            >
              {TAB_DATA.find((t) => t.id === tab)?.content}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

