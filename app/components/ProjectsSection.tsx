"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
  featured: boolean;
  technologies: string[];
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "AI DOCS COPILOT",
    description: "Revolutionary AI application helping students study 70% faster and improve academic performance by 90%. Built with Next.js, FastAPI, OpenAI API, and AWS services.",
    image: "./images/projects/1.png",
    tag: ["All", "Web", "AI"],
    gitUrl: "#",
    previewUrl: "#",
    featured: true,
    technologies: ["Next.js", "FastAPI", "OpenAI API", "AWS", "Langchain"]
  },
  {
    id: 2,
    title: "DEEPCODER ASSISTANT",
    description: "VS Code extension with nearly 1,000 downloads that enhances developer productivity through intelligent code assistance and automation.",
    image: "./images/projects/2.png",
    tag: ["All", "Tools"],
    gitUrl: "https://github.com/Ham12-3/deepcoder-assistant",
    previewUrl: "https://marketplace.visualstudio.com/items?itemName=deepcoder-assistant",
    featured: true,
    technologies: ["TypeScript", "VS Code API", "Node.js"]
  },
  {
    id: 3,
    title: "CSSPify",
    description: "Chrome extension that helps developers and designers quickly extract color palettes, images, and typography from any website for inspiration.",
    image: "./images/projects/3.png",
    tag: ["All", "Tools"],
    gitUrl: "https://github.com/Ham12-3/CSSPify",
    previewUrl: "https://chrome.google.com/webstore/detail/csspify",
    featured: true,
    technologies: ["JavaScript", "Chrome APIs", "CSS", "HTML"]
  },
  {
    id: 4,
    title: "Dottie AI Health App",
    description: "Contributed to AI application designed to help adolescent girls understand their menstrual health, improving user experience and accessibility.",
    image: "./images/projects/4.png",
    tag: ["All", "Web", "AI"],
    gitUrl: "https://github.com/Ham12-3/dottie-contribution",
    previewUrl: "#",
    technologies: ["React", "AI Integration", "Health Tech"]
  },
  {
    id: 5,
    title: "Airbnb React Native Clone",
    description: "Full-featured room reservation mobile app with modern UI/UX, real-time booking, and seamless user experience.",
    image: "./images/airbnb-rn-5.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Ham12-3/Airbnb-reactnative-clone.git",
    previewUrl: "/",
    technologies: ["React Native", "Firebase", "Maps API"]
  },
  {
    id: 6,
    title: "E-commerce Platform",
    description: "Scalable clothing e-commerce web application with payment integration, inventory management, and responsive design.",
    image: "./images/ecommerce-6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ham12-3/clothing-ecommerce",
    previewUrl: "/",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"]
  },
  {
    id: 7,
    title: "Social Media Backend API",
    description: "Robust backend API for social media platform with authentication, real-time messaging, and scalable architecture.",
    image: "./images/facebook-clone-12.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/Ham12-3/facebook-clone-django-backend",
    previewUrl: "/",
    technologies: ["Django", "PostgreSQL", "Redis", "WebSockets"]
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl font-bold font-display mb-4"
        >
          <span className="luxury-text">My</span> <span className="text-luxury-platinum">Projects</span>
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <div className="w-24 h-1 bg-luxury-gradient mx-auto mb-6"></div>
          <p className="text-luxury-platinum/60 text-lg max-w-2xl mx-auto">
            Innovative solutions that make a real impact in the tech world
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-3 py-8"
        >
          {["All", "Web", "Mobile", "AI", "Tools", "Backend"].map((tagName) => (
            <ProjectTag
              key={tagName}
              onClick={handleTagChange}
              name={tagName}
              isSelected={tag === tagName}
            />
          ))}
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={project.featured ? "lg:col-span-1" : ""}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                technologies={project.technologies}
                featured={project.featured}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-luxury-platinum/60 mb-6">
            Interested in collaborating on your next project?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-luxury-gradient rounded-full text-luxury-dark font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-luxury-gold/30"
          >
            Let&apos;s Work Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

