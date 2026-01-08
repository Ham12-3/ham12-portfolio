"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Contact Me", href: "#contact", cta: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-surface-light/10 dark:bg-surface-dark/10 border-b border-border-light/20 dark:border-border-dark/20 transition-all duration-300">
      <div className="container-pattern-aligned">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0 font-display font-bold text-2xl tracking-tight hover:text-primary transition-colors cursor-pointer">
            ABDULHAMID<span className="text-primary">.</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    link.cta
                      ? "bg-primary text-black px-5 py-2 font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 ml-4"
                      : "text-text-muted-light dark:text-text-muted-dark hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
