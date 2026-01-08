"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What types of projects do you handle?",
    answer:
      "I specialize in AI-powered applications, web development, and full-stack solutions. My expertise includes building educational platforms, AI tools, and scalable cloud applications. I work with technologies like Next.js, FastAPI, AWS, and various AI APIs to deliver cutting-edge solutions.",
  },
  {
    question: "How fast can you deliver?",
    answer:
      "Project timelines vary based on complexity. A typical MVP can be delivered in 4-6 weeks, while more complex applications may take 8-12 weeks. I prioritize quality and ensure thorough testing before delivery. Let's discuss your specific timeline requirements.",
  },
  {
    question: "What is your development process?",
    answer:
      "I follow an agile development process starting with discovery calls to understand your vision, followed by planning, design, development, and iterative testing. I maintain clear communication throughout and provide regular updates on progress.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, I offer ongoing maintenance and support packages. This includes bug fixes, updates, performance optimization, and feature enhancements. We can discuss a support plan that fits your needs.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "I work with modern tech stacks including Next.js, React, TypeScript, Python, FastAPI, AWS services, OpenAI API, and various AI/ML frameworks. I stay updated with the latest technologies to deliver the best solutions.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-background-light/10 dark:bg-background-dark/10">
      <div className="container-pattern-aligned">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold mb-16 text-center"
        >
          Got Questions? <span className="text-primary">We&apos;ve Got Answers.</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-2xl border border-border-light dark:border-border-dark px-6"
              >
                <AccordionTrigger className="hover:no-underline text-left">
                  <span className="text-white dark:text-white font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed pt-2">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
