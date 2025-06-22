import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "100%" },
};

const TabButton = ({ active, selectTab, children }) => {
  return (
    <motion.button 
      onClick={selectTab}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
        active 
          ? "bg-luxury-gradient text-luxury-dark shadow-lg shadow-luxury-gold/30" 
          : "bg-luxury-darkGray/50 text-luxury-platinum/70 hover:text-luxury-gold hover:bg-luxury-gold/10 border border-luxury-gold/20"
      }`}
    >
      <span className="relative z-10">{children}</span>
      {active && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 bg-luxury-gradient rounded-full"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      {!active && (
        <motion.div
          animate={active ? "active" : "default"}
          variants={variants}
          className="absolute bottom-0 left-0 h-0.5 bg-luxury-gradient rounded-full"
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );
};

export default TabButton;
