"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Experience", 
    path: "#Experience",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Skills",
    path: "#skills"
  },
  {
    title: "Contact",
    path: "#contact",
  },
  {
    title: "Blog",
    path: "https://abdulk.hashnode.dev/"
  }
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed mx-auto top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-luxury-dark/90 backdrop-blur-xl border-b border-luxury-gold/20 shadow-2xl shadow-luxury-gold/10' 
        : 'bg-transparent'
    }`}>
      <div className="flex container lg:py-6 flex-wrap items-center justify-between mx-auto px-6 py-4">
        <Link
          href={"/"}
          className="group relative"
        >
          <div className="text-2xl md:text-4xl font-bold font-display">
            <span className="luxury-text">Abdul</span>
            <span className="text-luxury-platinum">Codes</span>
          </div>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-luxury-gradient group-hover:w-full transition-all duration-300"></div>
        </Link>
        
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border-2 rounded-lg border-luxury-gold/50 text-luxury-gold hover:text-luxury-platinum hover:border-luxury-platinum transition-all duration-300 hover:bg-luxury-gold/10"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border-2 rounded-lg border-luxury-gold/50 text-luxury-gold hover:text-luxury-platinum hover:border-luxury-platinum transition-all duration-300 hover:bg-luxury-gold/10"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          )}
        </div>
        
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-0 md:flex-row md:space-x-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
