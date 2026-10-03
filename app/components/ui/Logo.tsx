import Link from "next/link";
import { profile } from "@/app/data/portfolio";

export default function Logo({ inverted = false, large = false }: { inverted?: boolean; large?: boolean }) {
  return (
    <Link
      href="#home"
      aria-label={`${profile.fullName} — home`}
      className={`font-semibold tracking-[-0.02em] ${large ? "text-[40px] md:text-[56px]" : "text-[22px]"}`}
    >
      <span className={inverted ? "text-neutral-50" : "text-neutral-40"}>{profile.logo.light}</span>
      <span className={inverted ? "text-white" : "text-ink"}>{profile.logo.bold}</span>
    </Link>
  );
}
