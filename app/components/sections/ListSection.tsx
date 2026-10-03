"use client";

import { ReactNode } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ArrowUpRight, Plus } from "lucide-react";
import Reveal from "../ui/Reveal";

export interface ListItem {
  title: string;
  meta: string;
  details?: ReactNode;
}

interface ListSectionProps {
  id?: string;
  heading: ReactNode;
  items: ListItem[];
}

// Showcasy's "Awards & Recognition" layout: sticky heading on the left, divided rows on the right.
// Rows with details expand in place.
export default function ListSection({ id, heading, items }: ListSectionProps) {
  const expandable = items.some((i) => i.details);

  return (
    <section id={id} className="section">
      <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
        <Reveal>
          <h2 className="text-h5 lg:sticky lg:top-32">{heading}</h2>
        </Reveal>

        {expandable ? (
          <Accordion.Root type="single" collapsible defaultValue="item-0" className="border-t border-neutral-20">
            {items.map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <Accordion.Item value={`item-${i}`} className="group border-b border-neutral-20">
                  <Accordion.Header>
                    <Accordion.Trigger className="flex w-full items-center justify-between gap-6 py-6 text-left">
                      <Row item={item} />
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-neutral-15 transition-colors duration-300 group-hover:bg-ink group-hover:text-white group-data-[state=open]:bg-ink group-data-[state=open]:text-white">
                        <Plus className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-45" />
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="text-body-l pb-8 pr-16 text-neutral-70">{item.details}</div>
                  </Accordion.Content>
                </Accordion.Item>
              </Reveal>
            ))}
          </Accordion.Root>
        ) : (
          <ul className="border-t border-neutral-20">
            {items.map((item, i) => (
              <Reveal as="li" key={i} delay={i * 0.05} className="group flex items-center justify-between gap-6 border-b border-neutral-20 py-6">
                <Row item={item} />
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-neutral-15 transition-colors duration-300 group-hover:bg-ink group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Reveal>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function Row({ item }: { item: ListItem }) {
  return (
    <span className="block">
      <span className="text-body-xl block font-semibold">{item.title}</span>
      {item.meta && <span className="text-body-l mt-2 block text-neutral-70">{item.meta}</span>}
    </span>
  );
}
