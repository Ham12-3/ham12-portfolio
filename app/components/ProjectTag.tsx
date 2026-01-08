import React from "react";
import { motion } from "framer-motion";

interface ProjectTagProps {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

const ProjectTag = ({ name, onClick, isSelected }: ProjectTagProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
        isSelected 
          ? "bg-luxury-gradient text-luxury-dark shadow-lg shadow-luxury-gold/30" 
          : "bg-luxury-darkGray/50 text-luxury-platinum/70 hover:text-luxury-gold hover:bg-luxury-gold/10 border border-luxury-gold/20"
      }`}
      onClick={() => onClick(name)}
    >
      <span className="relative z-10">{name}</span>
      {isSelected && (
        <motion.div
          layoutId="activeProjectTag"
          className="absolute inset-0 bg-luxury-gradient rounded-full"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </motion.button>
  );
};

export default ProjectTag;

