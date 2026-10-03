import { brands } from "@/app/data/portfolio";

export default function BrandMarquee() {
  // Rendered twice so the -50% keyframe loops seamlessly
  const row = [...brands, ...brands];

  return (
    <section aria-label="Companies and institutions I've worked with" className="py-10 md:py-12">
      <div className="mask-fade-x group overflow-hidden">
        <ul className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
          {row.map((b, i) => (
            <li
              key={i}
              aria-hidden={i >= brands.length}
              className={`select-none px-8 text-[32px] leading-none text-neutral-40 transition-colors duration-300 hover:text-ink md:px-12 md:text-[44px] ${b.className}`}
            >
              {b.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
