"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "../ui/Logo";
import { navLinks, profile, socials } from "@/app/data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Hide the bar while scrolling down, bring it back on scroll up
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > prev && y > 200);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.header
        animate={{ y: hidden && !open ? "-100%" : "0%" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          scrolled ? "bg-white/85 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container-site flex h-[88px] items-center justify-between">
          <Logo />
          <div className="flex items-center gap-3">
            <Link href="#contact" className="btn btn-sm btn-outline group hidden sm:inline-flex">
              Let&rsquo;s Talk
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="inline-flex h-[50px] w-[56px] items-center justify-center rounded-full border border-ink transition-colors duration-300 hover:bg-ink hover:text-white"
            >
              <Menu className="h-5 w-5" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 overflow-y-auto bg-ink text-white"
          >
            <div className="container-site flex min-h-full flex-col">
              <div className="flex h-[88px] items-center justify-between border-b border-white/15">
                <span onClick={() => setOpen(false)}>
                  <Logo inverted />
                </span>
                <div className="flex items-center gap-3">
                  <Link href="#contact" onClick={() => setOpen(false)} className="btn btn-sm btn-outline-light group hidden sm:inline-flex">
                    Let&rsquo;s Talk
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                    className="inline-flex h-[50px] w-[56px] items-center justify-center rounded-full border border-white/40 transition-colors duration-300 hover:bg-white hover:text-ink"
                  >
                    <X className="h-5 w-5" strokeWidth={1.75} />
                  </button>
                </div>
              </div>

              <nav className="flex-1 border-b border-white/15 py-6 md:py-10">
                <ul>
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-center justify-between py-2 md:py-3"
                      >
                        <span className="flex items-baseline gap-3">
                          <span className="text-[44px] font-semibold leading-[1] tracking-[-0.02em] transition-colors duration-300 group-hover:text-neutral-40 md:text-[72px]">
                            {link.label}
                          </span>
                          <span className="text-[16px] text-neutral-50 md:text-[22px]">
                            ({String(i + 1).padStart(2, "0")})
                          </span>
                        </span>
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/40 transition-colors duration-300 group-hover:bg-white group-hover:text-ink md:h-[50px] md:w-[72px]">
                          <ArrowRight className="h-5 w-5" />
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="grid gap-10 py-10 md:grid-cols-2">
                <div>
                  <p className="text-body-xl font-semibold text-neutral-50">Follow me.</p>
                  <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
                    {socials.map((s) => (
                      <li key={s.label}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[14px] font-medium uppercase tracking-[0.02em] hover:text-neutral-40"
                        >
                          {s.label}
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:max-w-md md:justify-self-end md:w-full">
                  <p className="text-body-xl font-semibold text-neutral-50">Grab my résumé.</p>
                  <a
                    href={profile.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-center justify-between border-b border-white/30 pb-3 text-[14px] text-neutral-30 hover:text-white"
                  >
                    Download CV (PDF)
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
