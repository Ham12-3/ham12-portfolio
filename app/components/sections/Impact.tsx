"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "../ui/Reveal";
import { impact } from "@/app/data/portfolio";

// Mirrors Showcasy's testimonial switcher, but tells the story through measurable results
export default function Impact() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % impact.length), 6000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section
      aria-label="Impact"
      className="section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-site">
        <Reveal className="mx-auto max-w-[760px] text-center">
          <div className="grid min-h-[132px] place-items-center md:min-h-[116px]">
            <AnimatePresence mode="wait">
              <motion.p
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="text-body-xl"
                aria-live="polite"
              >
                &ldquo;{impact[active].statement}&rdquo;
              </motion.p>
            </AnimatePresence>
          </div>

          <div role="tablist" aria-label="Impact highlights" className="mt-10 grid grid-cols-3 gap-4 md:mt-12">
            {impact.map((item, i) => {
              const isActive = i === active;
              return (
                <button
                  key={item.label}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(i)}
                  className="group flex flex-col items-center"
                >
                  <span
                    className={`grid h-16 w-16 place-items-center rounded-full text-[18px] font-semibold tracking-[-0.02em] transition-all duration-300 md:h-[72px] md:w-[72px] md:text-[20px] ${
                      isActive ? "bg-ink text-white" : "bg-card text-neutral-50 group-hover:text-ink"
                    }`}
                  >
                    {item.value}
                  </span>
                  <span
                    className={`mt-3 text-[14px] font-semibold transition-colors duration-300 md:text-[16px] ${
                      isActive ? "text-ink" : "text-neutral-40"
                    }`}
                  >
                    {item.label}
                  </span>
                  <span
                    className={`mt-1 text-[12px] transition-colors duration-300 md:text-[14px] ${
                      isActive ? "text-neutral-70" : "text-neutral-30"
                    }`}
                  >
                    {item.context}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
