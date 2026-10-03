"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "../ui/Reveal";
import { socials, works, type Work } from "@/app/data/portfolio";

const github = socials.find((s) => s.label === "GitHub")?.href ?? "#";

function WorkCard({ work }: { work: Work }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // Gentle parallax on the mockup as the card passes through the viewport
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-4%"]);

  return (
    <Reveal>
      <a
        ref={ref}
        href={work.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
        aria-label={`${work.title} — visit ${work.domain}`}
      >
        <div className="relative aspect-[16/9] overflow-hidden rounded-[20px] bg-card md:aspect-[1281/615] md:rounded-[24px]">
          <motion.div
            style={{ y }}
            className="absolute inset-x-[5%] top-[12%] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] md:inset-x-[11%] md:top-[10%]"
          >
            {/* Browser-window mockup; runs off the bottom of the card */}
            <div className="overflow-hidden rounded-t-xl bg-white shadow-[0_30px_80px_-20px_rgba(3,7,18,0.35)] md:rounded-t-2xl">
              <div className="flex h-7 items-center gap-1.5 border-b border-neutral-20 bg-neutral-10 px-3 md:h-9 md:px-4">
                <span className="h-2 w-2 rounded-full bg-neutral-30 md:h-2.5 md:w-2.5" />
                <span className="h-2 w-2 rounded-full bg-neutral-30 md:h-2.5 md:w-2.5" />
                <span className="h-2 w-2 rounded-full bg-neutral-30 md:h-2.5 md:w-2.5" />
                <span className="mx-auto hidden rounded-full bg-white px-6 py-0.5 text-[11px] text-neutral-50 sm:block">
                  {work.domain}
                </span>
              </div>
              <div className="relative aspect-[2/1]">
                <Image
                  src={work.image}
                  alt={`${work.title} website`}
                  fill
                  sizes="(max-width: 768px) 90vw, 72vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-6">
          <div>
            <h3 className="text-body-xl font-semibold">{work.title}</h3>
            <p className="text-body-l mt-1 text-neutral-70">{work.category}</p>
          </div>
          <span className="inline-flex h-12 w-[72px] shrink-0 items-center justify-center rounded-full border border-ink transition-colors duration-300 group-hover:bg-ink group-hover:text-white">
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </a>
    </Reveal>
  );
}

export default function SelectedWorks() {
  return (
    <section id="works" className="section">
      <div className="container-site">
        <Reveal className="mb-10 flex items-center justify-between gap-6 md:mb-12">
          <h2 className="text-h5">Selected works</h2>
          <Link href={github} target="_blank" rel="noopener noreferrer" className="btn btn-md btn-outline group">
            <span className="hidden sm:inline">View All Works</span>
            <span className="sm:hidden">All Works</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        <div className="flex flex-col gap-14 md:gap-16">
          {works.map((work) => (
            <WorkCard key={work.title} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}
