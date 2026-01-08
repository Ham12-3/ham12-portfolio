"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

const metrics = [
  {
    value: "30K+",
    title: "Waitlist Users",
    description: "Across various AI platforms",
    target: 30,
  },
  {
    value: "55%",
    title: "Faster Performance",
    description: "Average improvement in apps",
    target: 55,
  },
  {
    value: "90%",
    title: "Improved Learning",
    description: "Academic performance outcomes",
    target: 90,
  },
];

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const spring = useSpring(0, { stiffness: 50, damping: 30 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toString()
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span>{display}</motion.span>;
}

export default function Metrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" className="py-24 bg-surface-light/10 dark:bg-surface-dark/10 relative overflow-hidden">
      <div className="absolute inset-0 hero-pattern pointer-events-none opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-border-light dark:divide-border-dark"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              className="p-4 group"
            >
              <motion.h3
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 200, damping: 15 }}
                className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-yellow-600 mb-2"
              >
                {metric.value}
              </motion.h3>
              <p className="text-lg font-medium text-text-main-light dark:text-text-main-dark">{metric.title}</p>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark mt-1">{metric.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
