import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Logo from "../ui/Logo";
import { navLinks, profile, socials } from "@/app/data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-ink pb-12 pt-[72px] text-white">
      <div className="container-site">
        <Logo inverted large />
        <p className="text-body-xl mt-4 text-neutral-20">{profile.tagline}</p>

        <ul className="mt-10 grid grid-cols-2 gap-3 md:mt-12 md:grid-cols-4 md:gap-6">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center rounded-full border border-white/30 text-[14px] font-medium tracking-[0.02em] transition-colors duration-300 hover:border-white hover:bg-white hover:text-ink"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-body-xl font-semibold text-neutral-50">Navigation</p>
            <ul className="mt-6 grid grid-cols-2 gap-x-10 gap-y-4 sm:grid-cols-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[14px] font-medium text-white transition-colors hover:text-neutral-40">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-full md:max-w-md md:justify-self-end">
            <p className="text-body-xl font-semibold text-neutral-50">Stay connected w/ me.</p>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-between border-b border-white/30 pb-3 text-[14px] text-neutral-30 transition-colors hover:text-white"
            >
              Download my CV (PDF)
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <p className="mt-16 text-center text-[14px] text-neutral-50">
          ©{new Date().getFullYear()}. Designed &amp; built by{" "}
          <span className="font-semibold text-neutral-30">{profile.fullName}</span>
        </p>
      </div>
    </footer>
  );
}
