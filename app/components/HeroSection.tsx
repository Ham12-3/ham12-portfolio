"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-20 relative">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <div className="mb-6">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-luxury-gold text-lg font-medium tracking-wider uppercase mb-4"
            >
              Full Stack Engineer & AWS Certified Developer
            </motion.p>
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl xl:text-8xl lg:leading-tight font-bold font-display">
              <span className="luxury-text">
                Hello, I&apos;m{" "}
              </span>
              <br></br>
              <TypeAnimation
                sequence={[
                  "Abdulhamid",
                  2000,
                  "Full-Stack Engineer",
                  2000,
                  "Cloud Computing Expert",
                  2000,
                  "Open Source Contributor",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="luxury-text"
              />
            </h1>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-luxury-platinum/80 text-lg sm:text-xl mb-8 lg:text-2xl leading-relaxed max-w-2xl"
          >
            Building revolutionary AI applications and scalable cloud solutions. 
            Currently developing AI DOCS COPILOT to help students study 70% faster 
            and improve academic performance by up to 90%.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="https://calendly.com/mobolaji2309/quick-meeting"
              className="group relative overflow-hidden px-8 py-4 bg-luxury-gradient rounded-full text-luxury-dark font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-luxury-gold/30 text-center"
            >
              <span className="relative z-10">Schedule Meeting</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
            <Link
              download
              href='./abulhamid_sonaike_verified-resume.pdf'
              className="group relative overflow-hidden px-8 py-4 border-2 border-luxury-gold rounded-full text-luxury-gold font-semibold text-lg transition-all duration-300 hover:bg-luxury-gold hover:text-luxury-dark hover:scale-105 text-center"
            >
              <span className="relative z-10">Download Resume</span>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {["AWS Lambda", "Next.js", "FastAPI", "OpenAI API", "Docker"].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-luxury-darkGray/50 border border-luxury-gold/20 rounded-full text-luxury-platinum text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="col-span-4 place-self-center mt-8 lg:mt-0"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-luxury-gradient rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/20 to-luxury-bronze/20 rounded-full animate-glow"></div>
              <Image
                src='/images/abdulhamid-nkan.jpg'
                alt="Abdulhamid Sonaike - Full Stack Engineer"
                className="relative z-10 rounded-full object-cover border-4 border-luxury-gold/30 shadow-2xl"
                width={400}
                height={400}
                style={{ width: '100%', height: '100%' }}
                priority
              />
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-luxury-gold rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-luxury-bronze rounded-full animate-bounce"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

