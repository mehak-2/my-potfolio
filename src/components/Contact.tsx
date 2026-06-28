"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/mehak-2",
    handle: "@mehak-2",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.3 5.3 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.4 5 1.8 5 1.8a5.3 5.3 0 0 0-.1 3.8A5.4 5.4 0 0 0 3 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mehak-45a190245/",
    handle: "in/mehak",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://x.com/mehak_codes",
    handle: "@mehak_codes",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [formOpen, setFormOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section
      id="contact"
      className="py-32 relative overflow-hidden px-6 sm:px-12 border-t border-card-border"
    >
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Label */}
        <motion.div {...fadeUp(0)} className="mb-16">
          <p className="text-accent-light font-mono text-xs tracking-[0.3em] mb-3 uppercase flex items-center gap-3">
            <span className="w-8 h-[1px] bg-accent-light" />
            06 // Contact
          </p>
        </motion.div>

        {/* ── EDITORIAL HEADLINE ── */}
        <motion.div {...fadeUp(0.05)} className="mb-16">
          <h2
            className="font-display font-black tracking-tighter leading-[0.88] uppercase text-foreground"
            style={{ fontSize: "clamp(52px, 10vw, 140px)" }}
          >
            Let&apos;s Build
            <br />
            <span className="text-gradient">Something</span>
            <br />
            Amazing.
          </h2>
        </motion.div>

        {/* ── GIANT EMAIL CTA ── */}
        <motion.div {...fadeUp(0.1)} className="mb-20 overflow-hidden">
          <a
            href="mailto:kangmehak167@gmail.com"
            className="group inline-flex items-center gap-5 border-b-2 border-card-border hover:border-accent transition-colors duration-500 pb-4"
          >
            <span
              className="font-black tracking-tight text-muted-text group-hover:text-foreground transition-colors duration-500"
              style={{ fontSize: "clamp(20px, 4vw, 52px)" }}
            >
              kangmehak167@gmail.com
            </span>
            <span className="text-accent opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500 text-3xl shrink-0">
              ↗
            </span>
          </a>
        </motion.div>

        {/* ── BOTTOM ROW: info cards + form toggle ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">

          {/* Availability */}
          <motion.div {...fadeUp(0.15)} className="glass-panel rounded-2xl p-6 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Open to opportunities</p>
              <p className="text-xs text-muted-text font-mono mt-0.5">Full-time & freelance roles</p>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div {...fadeUp(0.2)} className="glass-panel rounded-2xl p-6">
            <p className="text-[10px] font-mono text-muted-text uppercase tracking-[0.2em] mb-2">Based in</p>
            <p className="text-sm font-semibold text-foreground">India 🇮🇳</p>
            <p className="text-xs text-muted-text font-mono mt-1">Available globally · Remote-friendly</p>
          </motion.div>

          {/* Response time */}
          <motion.div {...fadeUp(0.25)} className="glass-panel rounded-2xl p-6">
            <p className="text-[10px] font-mono text-muted-text uppercase tracking-[0.2em] mb-2">Response time</p>
            <p className="text-sm font-semibold text-foreground">Within 24 hours</p>
            <p className="text-xs text-muted-text font-mono mt-1">Usually much faster ⚡</p>
          </motion.div>
        </div>

        {/* ── SOCIAL LINKS ROW ── */}
        <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-3 mb-16">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel glass-panel-hover rounded-full px-5 py-2.5 flex items-center gap-2.5 text-muted-text hover:text-foreground transition-colors group"
            >
              <span className="text-accent group-hover:text-accent-light transition-colors">{s.icon}</span>
              <span className="text-xs font-mono tracking-wide">{s.handle}</span>
              <span className="text-[10px] text-muted-text opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
            </a>
          ))}
        </motion.div>

        {/* ── OPTIONAL FORM ── */}
        <motion.div {...fadeUp(0.3)}>
          <button
            onClick={() => setFormOpen(!formOpen)}
            className="flex items-center gap-3 text-sm font-mono text-muted-text hover:text-foreground transition-colors mb-8 group"
          >
            <span className={`w-5 h-5 rounded-full border border-card-border flex items-center justify-center transition-all duration-300 ${formOpen ? "bg-accent border-accent" : "group-hover:border-accent/50"}`}>
              <span className={`text-xs transition-transform duration-300 ${formOpen ? "rotate-45 text-background" : "text-muted-text"}`}>+</span>
            </span>
            {formOpen ? "Close form" : "Or drop me a message directly"}
          </button>

          {formOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="glass-panel rounded-2xl p-8 sm:p-10 relative overflow-hidden max-w-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/4 to-transparent rounded-2xl pointer-events-none" />
                <form onSubmit={handleSubmit} className="space-y-7 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                    <div>
                      <label htmlFor="name" className="block text-[10px] font-mono text-muted-text mb-2 uppercase tracking-[0.2em]">Name</label>
                      <input
                        type="text" id="name" required
                        className="w-full bg-transparent border-b border-card-border focus:border-accent-light py-2.5 outline-none text-foreground transition-colors text-sm placeholder:text-muted-text/40"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[10px] font-mono text-muted-text mb-2 uppercase tracking-[0.2em]">Email</label>
                      <input
                        type="email" id="email" required
                        className="w-full bg-transparent border-b border-card-border focus:border-accent-light py-2.5 outline-none text-foreground transition-colors text-sm placeholder:text-muted-text/40"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[10px] font-mono text-muted-text mb-2 uppercase tracking-[0.2em]">Message</label>
                    <textarea
                      id="message" required rows={4}
                      className="w-full bg-transparent border-b border-card-border focus:border-accent-light py-2.5 outline-none text-foreground transition-colors resize-none text-sm placeholder:text-muted-text/40"
                      placeholder="Hello Mehak, I'd like to talk about..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending" || status === "success"}
                    className="btn-accent px-8 py-3.5 text-xs font-mono tracking-widest uppercase rounded-full cursor-pointer disabled:opacity-70 flex items-center gap-2"
                  >
                    {status === "sending" && <span className="w-3.5 h-3.5 border-2 border-background/30 border-t-background rounded-full animate-spin" />}
                    {status === "success" ? "✓ Message Sent!" : status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </motion.div>


      </div>
    </section>
  );
}
