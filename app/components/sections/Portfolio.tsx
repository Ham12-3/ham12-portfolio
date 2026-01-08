"use client";

import { useState } from "react";
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { useRef } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string;
  image: string;
  url: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Genie AI",
    description: "Revolutionary AI platform transforming how users interact with intelligent systems. Built with cutting-edge machine learning.",
    tags: ["AI", "Next.js"],
    category: "AI",
    image: "/images/projects/genie-ai.png",
    url: "https://genieai.io/",
  },
  {
    id: 2,
    title: "LotusBPM",
    description: "Helping students study 70% faster. An innovative educational AI tool with 30,000+ waitlist users eager for launch.",
    tags: ["EdTech", "FastAPI"],
    category: "AI",
    image: "/images/projects/lotusbpm-ai.png",
    url: "https://lotusbpm.ai/",
    featured: true,
  },
  {
    id: 3,
    title: "Opsis AI",
    description: "Advanced AI solution for business intelligence and analytics. Delivering 55% faster processing outcomes.",
    tags: ["Analytics", "Cloud"],
    category: "AI",
    image: "/images/projects/opsis-ai.png",
    url: "https://www.opsislabs.com/",
  },
];

const categories = ["All Projects", "AI / ML", "Web App", "Mobile"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
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

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group bg-background-light dark:bg-background-dark border rounded-2xl overflow-hidden hover:border-primary hover:shadow-xl transition-all duration-500 flex flex-col h-full ${
        project.featured
          ? "border-2 border-primary shadow-glow transform md:-translate-y-6 z-10"
          : "border-border-light dark:border-border-dark"
      }`}
    >
      <div className="h-56 overflow-hidden relative">
        <motion.div
          className={`absolute inset-0 z-10 transition-opacity duration-300 ${
            project.featured ? "bg-black/40" : "bg-primary/20"
          }`}
          animate={{ opacity: isHovered ? 1 : 0 }}
        />
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
            x: isHovered ? (mousePosition.x - 128) * 0.05 : 0,
            y: isHovered ? (mousePosition.y - 112) * 0.05 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 z-20 flex items-center justify-center"
        >
          {project.featured ? (
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg"
            >
              <Play className="w-8 h-8 text-black" />
            </motion.a>
          ) : (
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-black text-black dark:text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg"
            >
              View Details
            </motion.span>
          )}
        </motion.div>
      </div>
      <div className={`p-8 flex flex-col flex-grow ${project.featured ? "bg-gradient-to-b from-primary/5 to-transparent" : ""}`}>
        <div className="flex justify-between items-start mb-2">
          <motion.h3
            whileHover={{ x: 5 }}
            className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors"
          >
            {project.title}
          </motion.h3>
          {project.featured && (
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-primary text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider"
            >
              Featured
            </motion.span>
          )}
        </div>
        <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-6 leading-relaxed line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(234, 179, 8, 0.1)" }}
              className="px-3 py-1 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-full text-xs font-medium cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = projects.filter((p) => {
    if (selectedCategory === "All Projects") return true;
    return p.category === selectedCategory.split(" / ")[0];
  });

  return (
    <section id="portfolio" className="py-24 bg-surface-light/10 dark:bg-surface-dark/10">
      <div className="container-pattern-aligned">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Featured <span className="text-primary">Masterpieces</span>
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark text-lg">
            A selection of projects where AI meets intuitive design to solve real-world problems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-black shadow-md"
                  : "border border-border-light dark:border-border-dark hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
