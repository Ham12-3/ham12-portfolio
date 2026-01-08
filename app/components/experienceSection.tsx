"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaAws, FaPython } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiOpenai } from "react-icons/si";

interface ExperienceData {
  title: string;
  company: string;
  location: string;
  description: string;
  icon: React.ReactElement;
  date: string;
  tags: string[];
}

const experiencesData: ExperienceData[] = [
  {
    title: "Full Stack Engineer",
    company: "LOTUS BPM AI Services",
    location: "Remote",
    description:
      "Developing AI DOCS COPILOT, an AI application revolutionizing education by helping students study 70% faster and improve academic performance by up to 90%. Leveraging Next.js, FastAPI, Python, AWS S3, Stripe API, OpenAI API, Claude API, Langchain, vector databases, and AWS services.",
    icon: React.createElement(SiOpenai),
    date: "Jan 2025 - Present",
    tags: ["Next.js", "FastAPI", "Python", "AWS", "OpenAI API", "Langchain"],
  },
  {
    title: "Open Source Contributor",
    company: "Global Tech Community",
    location: "London, England, UK",
    description:
      "Written 20+ technical articles on software development and cloud computing. Managed 8 cloud instances and databases. Contributed to Dottie AI app and TheTechCommute website, improving responsiveness by 30%. Built a social following of 5,000+ across platforms.",
    icon: React.createElement(FaReact),
    date: "Jan 2024 - Present",
    tags: ["AWS", "Open Source", "Technical Writing", "Community Building"],
  },
  {
    title: "AWS Certified Developer Associate",
    company: "Amazon Web Services",
    location: "London, England, UK",
    description:
      "Achieved AWS Developer Associate certification, demonstrating expertise in developing and maintaining applications on AWS platform with services like EC2, EFS, EBS, and RDS.",
    icon: React.createElement(FaAws),
    date: "Aug 2024",
    tags: ["AWS", "Cloud Computing", "Certification"],
  },
  {
    title: "Finance & Cloud Computing Training",
    company: "Barclays & Amazon Springboard",
    location: "Online",
    description:
      "Completed comprehensive training programs in finance and cloud computing, enhancing business acumen and technical cloud expertise through industry-leading platforms.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2024 - Jun 2024",
    tags: ["Finance", "Cloud Computing", "Professional Development"],
  },
  {
    title: "Full-Stack Development Bootcamp",
    company: "London App Brewery (Udemy)",
    location: "Remote",
    description:
      "Completed comprehensive full-stack development bootcamp, building web applications from scratch including backend services, frontend interfaces, and databases. Improved user engagement by 10% through modern UI development.",
    icon: React.createElement(FaPython),
    date: "2020 - Jun 2022",
    tags: ["Full-Stack", "Web Development", "Backend", "Frontend"],
  },
];

export default function Experience() {
  return (
    <section id="Experience" className="scroll-mt-28 mb-28 sm:mb-40 py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl font-bold font-display mb-4"
        >
          <span className="luxury-text">My</span> <span className="text-luxury-platinum">Experience</span>
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="w-24 h-1 bg-luxury-gradient mx-auto mb-6"></div>
          <p className="text-luxury-platinum/60 text-lg max-w-2xl mx-auto">
            A journey of continuous learning and innovation in technology
          </p>
        </motion.div>

        <VerticalTimeline lineColor="rgba(212, 175, 55, 0.3)">
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background: "linear-gradient(145deg, rgba(26, 26, 26, 0.9), rgba(42, 42, 42, 0.7))",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 20px 40px rgba(212, 175, 55, 0.2)",
                  border: "1px solid rgba(212, 175, 55, 0.3)",
                  textAlign: "left",
                  padding: "2rem",
                  borderRadius: "1rem",
                  color: "white"
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid rgba(212, 175, 55, 0.8)",
                }}
                date={item.date}
                dateClassName="text-luxury-gold font-semibold"
                icon={item.icon}
                iconStyle={{
                  background: "linear-gradient(135deg, #D4AF37, #CD7F32)",
                  fontSize: "1.5rem",
                  color: "#0A0A0A",
                  boxShadow: "0 0 20px rgba(212, 175, 55, 0.5)"
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="font-bold text-xl text-luxury-gold mb-2">{item.title}</h3>
                  <h4 className="font-semibold text-luxury-platinum/90 mb-1">{item.company}</h4>
                  <p className="font-normal text-luxury-platinum/70 mb-3">{item.location}</p>
                  <p className="text-luxury-platinum/80 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-luxury-gold/20 text-luxury-gold text-xs rounded-full border border-luxury-gold/30 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

