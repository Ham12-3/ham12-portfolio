"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  date: string;
  coursework?: string;
  grade?: string;
}

const education: EducationItem[] = [
  {
    institution: "Lewisham College",
    degree: "Extended National Diploma in Information Technology",
    location: "London, England, UK",
    date: "June 2025",
    coursework: "Software Development, Cloud Computing, Database Management",
    grade: "Distinction (equivalent of A* A* A in A levels)",
  },
  {
    institution: "Stanford University",
    degree: "Machine Learning and Artificial Intelligence",
    location: "Online",
    date: "Completed",
    grade: "Distinction",
  },
  {
    institution: "Aston University",
    degree: "Bachelor of Science (BSc) in Computer Science",
    location: "United Kingdom",
    date: "Ongoing",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-surface-light/10 dark:bg-surface-dark/10">
      <div className="container-pattern-aligned">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold mb-16 text-center"
        >
          Education & <span className="text-primary">Certifications</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-border-light dark:border-border-dark shadow-soft hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-white dark:text-white font-bold text-lg">{edu.institution}</h3>
                  <p className="text-primary/80 text-sm">{edu.date}</p>
                </div>
              </div>
              <p className="text-white dark:text-white font-semibold mb-3">{edu.degree}</p>
              <p className="text-text-muted-light dark:text-text-muted-dark text-sm mb-3">{edu.location}</p>
              {edu.coursework && (
                <p className="text-text-muted-light dark:text-text-muted-dark text-xs mb-2">
                  <span className="font-semibold">Relevant Coursework:</span> {edu.coursework}
                </p>
              )}
              {edu.grade && (
                <p className="text-primary/80 text-xs font-semibold">{edu.grade}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 glass-card p-8 rounded-2xl border border-border-light dark:border-border-dark"
        >
          <h3 className="text-white dark:text-white font-bold text-2xl mb-6">Certifications & Training</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-primary/10 rounded-lg p-4 border border-primary/30">
              <p className="text-primary font-semibold mb-1">AWS Certified Developer Associate</p>
              <p className="text-text-muted-light dark:text-text-muted-dark text-sm">Amazon Web Services</p>
            </div>
            <div className="bg-primary/10 rounded-lg p-4 border border-primary/30">
              <p className="text-primary font-semibold mb-1">Cloud Computing Specialist</p>
              <p className="text-text-muted-light dark:text-text-muted-dark text-sm">AWS Training</p>
            </div>
            <div className="bg-primary/10 rounded-lg p-4 border border-primary/30">
              <p className="text-primary font-semibold mb-1">Finance Technology Programme</p>
              <p className="text-text-muted-light dark:text-text-muted-dark text-sm">Barclays Springboard</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
