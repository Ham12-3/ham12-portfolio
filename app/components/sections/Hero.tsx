"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { profile } from "@/app/data/portfolio";

const headline: { text: string; muted?: boolean }[] = [
  { text: "Building" },
  { text: "AI" },
  { text: "products" },
  { text: "with" },
  { text: "emphasis" },
  { text: "on" },
  { text: "real-world", muted: true },
  { text: "impact", muted: true },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="pb-14 pt-[136px] md:pb-[72px] md:pt-[176px]">
      <div className="container-site">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mb-5 flex items-center gap-3 md:mb-6"
        >
          <span className="relative h-10 w-10 overflow-hidden rounded-full bg-card">
            <Image src={profile.photo} alt={profile.fullName} fill sizes="40px" className="object-cover" priority />
          </span>
          <p className="text-body-xl font-medium">Hello! I&rsquo;m {profile.firstName}.</p>
        </motion.div>

        <h1 className="text-display max-w-[1100px]">
          {headline.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
              <motion.span
                initial={reduce ? false : { y: "105%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.1 + i * 0.06, ease }}
                className={`inline-block ${word.muted ? "text-neutral-40" : ""}`}
              >
                {word.text}
                {i < headline.length - 1 && " "}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
          className="mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-center md:justify-between"
        >
          <Link href="#contact" className="btn btn-lg btn-dark group self-start">
            Let&rsquo;s Talk
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <p className="text-body-xl max-w-[520px] text-neutral-70">
            A software engineer &amp; AI specialist turning ambitious ideas into fast, scalable products people love to use.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
