"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Reveal from "../ui/Reveal";

type Status = "idle" | "sending" | "success" | "error";

const fields = [
  { name: "name", label: "Your name", type: "text", placeholder: "John Doe" },
  { name: "email", label: "Email address", type: "email", placeholder: "john@example.com" },
] as const;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send message. Please try again.");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Network error. Please try again.");
    }
  };

  const inputClass =
    "w-full border-0 border-b border-neutral-30 bg-transparent px-0 py-4 text-[18px] text-ink placeholder:text-neutral-40 focus:border-ink focus:outline-none focus:ring-0 transition-colors disabled:opacity-50";

  return (
    <section id="contact" className="border-t border-neutral-20 pt-20 md:pt-28">
      <div className="container-site">
        <Reveal className="text-center">
          <p className="text-body-xl font-medium text-neutral-90">Have an idea?</p>
          <h2 className="mt-4 text-[52px] font-bold leading-[1] tracking-[-0.03em] sm:text-[80px] lg:text-[120px] xl:text-[144px]">
            Let&rsquo;s build <span className="text-neutral-40">together</span>
          </h2>
          <nav className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-4">
            <a href="#about" className="link-underline">About me</a>
            <a href="#works" className="link-underline">Works</a>
            <a href="#experience" className="link-underline">Experience</a>
          </nav>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-16 max-w-[880px] pb-20 md:mt-24 md:pb-28">
          <form onSubmit={onSubmit} className="grid gap-x-10 gap-y-6 md:grid-cols-2">
            {fields.map((f) => (
              <label key={f.name} className="block">
                <span className="text-[14px] font-semibold uppercase tracking-[0.04em] text-neutral-50">{f.label}</span>
                <input
                  name={f.name}
                  type={f.type}
                  value={form[f.name]}
                  onChange={onChange}
                  placeholder={f.placeholder}
                  required
                  disabled={status === "sending"}
                  className={inputClass}
                />
              </label>
            ))}
            <label className="block md:col-span-2">
              <span className="text-[14px] font-semibold uppercase tracking-[0.04em] text-neutral-50">
                Tell me about your project
              </span>
              <textarea
                name="message"
                rows={3}
                value={form.message}
                onChange={onChange}
                placeholder="I need an AI-powered app that…"
                required
                disabled={status === "sending"}
                className={`${inputClass} resize-none`}
              />
            </label>

            <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:justify-between">
              <div aria-live="polite" className="min-h-6 text-[14px]">
                {status === "success" && (
                  <span className="inline-flex items-center gap-2 text-emerald-700">
                    <CheckCircle2 className="h-4 w-4" /> Message sent — I&rsquo;ll get back to you within 24 hours.
                  </span>
                )}
                {status === "error" && (
                  <span className="inline-flex items-center gap-2 text-red-700">
                    <AlertCircle className="h-4 w-4" /> {error}
                  </span>
                )}
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn btn-lg btn-dark group self-start disabled:cursor-not-allowed disabled:opacity-60 md:self-auto"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" /> Sending
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
