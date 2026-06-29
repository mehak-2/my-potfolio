"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "Software Developer",
  "Full Stack Engineer",
  "Open Source Contributor",
  "Android Developer",
];

const letters = ["M", "E", "H", "A", "K"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden px-6 sm:px-12 pt-28 pb-14"
    >
      {/* Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
      {/* Olive glow blob */}
      <div className="absolute top-1/3 -left-24 w-[700px] h-[700px] bg-accent/8 rounded-full blur-[180px] pointer-events-none -z-10" />

      {/* ── TOP ROW ── */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 border border-card-border px-4 py-2 rounded-full glass-panel"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-mono text-muted-text tracking-[0.15em] uppercase">
            Available for new opportunities
          </span>
        </motion.div>
      </div>

      {/* ── GIANT NAME ── */}
      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto py-10">
        <div className="flex items-end leading-none">
          {letters.map((letter, i) => (
            <div key={i} className="overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.15 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block font-display font-black tracking-tighter text-foreground"
                style={{ fontSize: "clamp(80px, 18vw, 220px)", lineHeight: 0.85 }}
              >
                {letter}
              </motion.span>
            </div>
          ))}
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
          className="border-t border-card-border pt-7 grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          {/* Rotating role */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-mono text-accent tracking-[0.3em] uppercase">◆ Current Role</span>
            <div className="h-7 overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute text-sm font-semibold text-foreground tracking-wide whitespace-nowrap"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Descriptor */}
          <p className="text-sm text-muted-text leading-relaxed font-light">
            Building scalable web products with clean architecture and meaningful UX — from concept to production.
          </p>

          {/* CTAs */}
          <div className="flex gap-3 md:justify-end flex-wrap">
            <a
              href="#projects"
              className="btn-accent px-7 py-3 text-xs tracking-widest uppercase rounded-full inline-flex items-center gap-2 group"
            >
              View Work
              <svg
                className="group-hover:translate-x-0.5 transition-transform"
                width="13"
                height="13"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href="#contact"
              className="px-7 py-3 text-xs tracking-widest uppercase rounded-full inline-flex items-center gap-2 border border-card-border text-muted-text hover:text-foreground hover:border-accent/50 transition-all duration-300"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator — rotated text right side */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-14 right-10 hidden md:flex items-center gap-3"
        style={{ writingMode: "vertical-rl" }}
      >
        <span className="text-[10px] font-mono text-muted-text tracking-[0.3em] uppercase">Scroll Down</span>
        <motion.div
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-transparent via-muted-text to-transparent origin-top"
        />
      </motion.div>
    </section>
  );
}
