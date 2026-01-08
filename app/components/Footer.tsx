import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-luxury-gold/30 bg-luxury-darkGray/50">
      <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/5 via-transparent to-luxury-bronze/5"></div>
      <div className="container relative z-10 mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold font-display">
              <span className="luxury-text">Abdul</span>
              <span className="text-luxury-platinum">Codes</span>
            </div>
            <div className="w-px h-6 bg-luxury-gold/30"></div>
            <span className="text-luxury-platinum/60 text-sm">
              Full Stack Engineer & Cloud Expert
            </span>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-luxury-platinum/60 text-sm">
              © {currentYear} AbdulCodes. All rights reserved.
            </p>
            <p className="text-luxury-gold/80 text-xs">
              Built with Next.js & ❤️ in London
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-luxury-gold/20 text-center">
          <p className="text-luxury-platinum/50 text-xs">
            Crafting digital experiences that make a difference • 
            <span className="text-luxury-gold"> AWS Certified Developer</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

