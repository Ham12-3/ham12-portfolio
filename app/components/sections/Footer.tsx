"use client";

import { motion, useInView } from "framer-motion";
import { Twitter, Instagram, Linkedin, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useRef, useState, FormEvent } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 5000);
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <section id="contact" className="py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-7xl font-display font-bold leading-none mb-8 tracking-tight">
                LET&apos;S WORK <br />
                <span className="text-primary">TOGETHER.</span>
              </h2>
              <p className="text-xl text-text-muted-light dark:text-text-muted-dark mb-12 max-w-md">
                Have a project in mind? Let&apos;s turn your idea into a digital reality. Reach out and I&apos;ll get back to you within 24 hours.
              </p>
              <div className="flex gap-4">
                {[
                  { href: "https://x.com/AbdulSonaike", icon: Twitter, label: "X (Twitter)" },
                  { href: "https://www.instagram.com/sonaike.ai/", icon: Instagram, label: "Instagram" },
                  { href: "https://www.linkedin.com/in/abdulhamid-sonaike/", icon: Linkedin, label: "LinkedIn" },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="w-14 h-14 rounded-full border border-border-light dark:border-border-dark flex items-center justify-center hover:bg-black hover:border-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-surface-light dark:bg-surface-dark p-8 md:p-10 rounded-3xl border border-border-light dark:border-border-dark shadow-2xl relative"
            >
              <motion.div
                animate={{
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-400 rounded-3xl blur -z-10"
              />
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { id: "name", name: "name", label: "Name", placeholder: "John Doe", type: "text" },
                  { id: "email", name: "email", label: "Email address", placeholder: "john@example.com", type: "email" },
                ].map((field, index) => (
                  <motion.div
                    key={field.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <label
                      className={`block text-sm font-semibold mb-2 transition-colors ${
                        focusedField === field.id
                          ? "text-primary"
                          : "text-text-muted-light dark:text-text-muted-dark"
                      }`}
                    >
                      {field.label}
                    </label>
                    <motion.input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field.id)}
                      onBlur={() => setFocusedField(null)}
                      whileFocus={{ scale: 1.02 }}
                      required
                      disabled={isSubmitting}
                      className="w-full bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-xl px-4 py-4 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder={field.placeholder}
                    />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="group"
                >
                  <label
                    className={`block text-sm font-semibold mb-2 transition-colors ${
                      focusedField === "message"
                        ? "text-primary"
                        : "text-text-muted-light dark:text-text-muted-dark"
                    }`}
                  >
                    Tell me about your project
                  </label>
                  <motion.textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    whileFocus={{ scale: 1.02 }}
                    required
                    disabled={isSubmitting}
                    className="w-full bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-xl px-4 py-4 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="I need a new website for..."
                  />
                </motion.div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-500 bg-green-500/10 border border-green-500/20 rounded-xl p-3"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm font-medium">Message sent successfully! I&apos;ll get back to you soon.</span>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-500 bg-red-500/10 border border-red-500/20 rounded-xl p-3"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">{errorMessage}</span>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className="relative w-full bg-primary text-black font-bold py-4 rounded-xl overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </span>
                  {/* Ripple effect */}
                  {!isSubmitting && (
                    <motion.span
                      className="absolute inset-0 bg-white/30 rounded-full"
                      initial={{ scale: 0, opacity: 1 }}
                      whileTap={{ scale: 4, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    />
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 bg-surface-light dark:bg-surface-dark border-t border-border-light dark:border-border-dark mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="font-display font-bold text-2xl tracking-wider"
            >
              ABDULHAMID<span className="text-primary">.</span>
            </motion.div>
            <div className="flex gap-8 text-sm font-medium text-text-muted-light dark:text-text-muted-dark">
              {["Home", "About", "Portfolio", "Services", "Contact"].map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ scale: 1.1, color: "#EAB308" }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:text-primary transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
            <div className="text-sm text-text-muted-light dark:text-text-muted-dark opacity-75">
              © 2024 Abdulhamid Sonaike. All rights reserved.
            </div>
          </div>
        </div>
      </motion.footer>
    </>
  );
}
