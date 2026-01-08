import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
  technologies?: string[];
  featured?: boolean;
}

const ProjectCard = ({ 
  imgUrl, 
  title, 
  description, 
  gitUrl, 
  previewUrl, 
  technologies = [], 
  featured = false 
}: ProjectCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className={`luxury-card rounded-2xl overflow-hidden group h-full flex flex-col ${
        featured ? 'ring-2 ring-luxury-gold/30' : ''
      }`}
    >
      <div
        className="h-48 md:h-60 relative overflow-hidden"
        style={{ 
          background: `linear-gradient(45deg, rgba(212, 175, 55, 0.1), rgba(205, 127, 50, 0.1)), url(${imgUrl})`, 
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {featured && (
          <div className="absolute top-4 right-4 bg-luxury-gradient text-luxury-dark px-3 py-1 rounded-full text-xs font-bold z-10">
            Featured
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-transparent to-transparent opacity-60"></div>
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-luxury-dark/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col gap-4">
          <div className="flex gap-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href={gitUrl}
                className="w-12 h-12 border-2 relative rounded-full border-luxury-gold hover:border-luxury-platinum hover:bg-luxury-gold/20 group/link transition-all duration-300 flex items-center justify-center"
              >
                <CodeBracketIcon className="w-6 h-6 text-luxury-gold group-hover/link:text-luxury-platinum transition-colors duration-300" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href={previewUrl}
                className="w-12 h-12 border-2 relative rounded-full border-luxury-gold hover:border-luxury-platinum hover:bg-luxury-gold/20 group/link transition-all duration-300 flex items-center justify-center"
              >
                <EyeIcon className="w-6 h-6 text-luxury-gold group-hover/link:text-luxury-platinum transition-colors duration-300" />
              </Link>
            </motion.div>
          </div>
          <p className="text-luxury-platinum/80 text-center px-4 text-sm">
            Click to view project details
          </p>
        </div>
      </div>
      
      <div className="flex flex-col flex-grow p-6">
        <h5 className="text-xl font-bold text-luxury-gold mb-3 group-hover:text-luxury-platinum transition-colors duration-300">
          {title}
        </h5>
        <p className="text-luxury-platinum/80 mb-4 flex-grow leading-relaxed text-sm">
          {description}
        </p>
        
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {technologies.map((tech, index) => (
              <motion.span 
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-2 py-1 bg-luxury-gold/20 text-luxury-gold text-xs rounded-full border border-luxury-gold/30 font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;

