"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Airbnb react native clone",
    description: "A room reservation app for your holiday",
    image: "./images/airbnb-rn-5.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Ham12-3/Airbnb-reactnative-clone.git",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Anglaar Blog website",
    description: "A website that allows you to write blogs",
    image: "./images/next-blog-3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ham12-3/next-blog",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Clothing E-commerce Application",
    description: "web-app where you can order clothes",
    image: "./images/ecommerce-6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ham12-3/clothing-ecommerce",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Mobile app similar to Delivroo",
    image: "./images/delivroo-7.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Ham12-3/delivroo-clone-react-native",
    previewUrl: "/",
  },
 
 
  {
    id: 7,
    title: "Ive-book social media app backend API",
    description: "the backend of the Ive-book social media web app",
    image: "./images/facebook-clone-12.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ham12-3/facebook-clone-django-backend",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
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
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
