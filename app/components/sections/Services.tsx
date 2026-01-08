"use client";

import { motion, useInView } from "framer-motion";
import { Globe, Palette, Code, Sparkles } from "lucide-react";
import { useRef } from "react";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Web Design",
    description: "Creating beautiful, responsive web experiences that engage and convert users. Focusing on accessibility and performance.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive interfaces that users love. From wireframing to high-fidelity prototypes and user testing.",
    icon: <Palette className="w-6 h-6" />,
  },
  {
    title: "Front-End Development",
    description: "Building fast, scalable front-end applications with modern frameworks like React, Vue, and Tailwind CSS.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: "AI Application Development",
    description: "Building revolutionary AI applications using OpenAI, Claude, and Langchain APIs. Specialized in educational technology.",
    icon: <Sparkles className="w-6 h-6" />,
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
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-background-light/10 dark:bg-background-dark/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pr-8"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6 sticky top-32">
              My Toolkit For Your <br />
              <span className="text-primary">Next Big Idea</span>
            </h2>
            <p className="text-text-muted-light dark:text-text-muted-dark mb-8 lg:sticky lg:top-[280px]">
              I combine technical expertise with design thinking to deliver comprehensive solutions.
            </p>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -4, borderColor: "rgba(234, 179, 8, 0.5)" }}
                className="p-8 bg-surface-light dark:bg-surface-dark rounded-2xl border border-border-light dark:border-border-dark hover:shadow-lg transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: index % 2 === 0 ? 5 : -5,
                  }}
                  className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-black transition-colors"
                >
                  {service.icon}
                </motion.div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
