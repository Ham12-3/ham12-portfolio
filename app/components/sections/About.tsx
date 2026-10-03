import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "../ui/Reveal";
import { profile, services } from "@/app/data/portfolio";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
          <div>
            <Reveal>
              <h2 className="text-h2 max-w-[1000px]">
                A software engineer focused on building AI products that make a real difference
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-start">
              <span className="relative h-[120px] w-[120px] shrink-0 overflow-hidden rounded-[20px] bg-card">
                <Image src={profile.photo} alt={profile.fullName} fill sizes="120px" className="object-cover" />
              </span>
              <div>
                <p className="text-body-l max-w-[620px] text-neutral-70">
                  Focus on what matters most — growing your business — and leave the technology to me. I build
                  AI-powered platforms, full-stack web apps, and cloud infrastructure that are fast, reliable, and
                  designed to stand out from the competition.
                </p>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-md btn-outline group mt-8"
                >
                  Download CV
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <ul className="flex flex-col gap-4 lg:items-end">
              {services.map((s) => (
                <li key={s} className="text-[14px] font-medium uppercase tracking-[0.04em] text-neutral-70">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
