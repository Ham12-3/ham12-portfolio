import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import SelectedWorks from "./components/sections/SelectedWorks";
import About from "./components/sections/About";
import BrandMarquee from "./components/sections/BrandMarquee";
import Impact from "./components/sections/Impact";
import ListSection from "./components/sections/ListSection";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import { education, experience, faqs } from "./data/portfolio";

export default function Home() {
  const experienceItems = experience.map((e) => ({
    title: e.role,
    meta: `${e.period} - ${e.company}`,
    details: (
      <>
        <p>{e.summary}</p>
        <ul className="mt-4 space-y-2">
          {e.achievements.map((a) => (
            <li key={a} className="flex gap-3">
              <span className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-ink" />
              {a}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[14px] uppercase tracking-[0.04em] text-neutral-50">{e.location}</p>
      </>
    ),
  }));

  const faqItems = faqs.map((f) => ({ title: f.question, meta: "", details: <p>{f.answer}</p> }));

  return (
    <main>
      <Navbar />
      <Hero />
      <SelectedWorks />
      <About />
      <BrandMarquee />
      <Impact />
      <ListSection id="experience" heading={<>Experience &amp;<br />Journey</>} items={experienceItems} />
      <ListSection id="education" heading={<>Education &amp;<br />Certifications</>} items={education} />
      <ListSection id="faq" heading={<>Frequently<br />Asked</>} items={faqItems} />
      <Contact />
      <Footer />
    </main>
  );
}
