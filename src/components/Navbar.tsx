"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

const sections = [
  { id: "about", num: "01", label: "about" },
  { id: "experience", num: "02", label: "exp" },
  { id: "projects", num: "03", label: "work" },
  { id: "contact", num: "04", label: "contact" },
];

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [active, setActive] = useState("");

  /* Track which section is in view */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0 border-x-0 border-t-0 bg-background/60 text-foreground font-sans"
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-accent to-accent-light origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 sm:px-12">

        {/* Logo */}


        {/* Center: Email */}
        <a
          href="mailto:kangmehak167@gmail.com"
          className="hidden lg:block text-xs text-muted-text hover:text-foreground tracking-widest transition-colors font-mono"
        >
          kangmehak167@gmail.com
        </a>

        {/* Nav Links */}
        <nav className="flex items-center gap-5 sm:gap-7 text-xs tracking-widest font-mono">
          {sections.map(({ id, num, label }) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`transition-colors duration-300 relative hidden sm:block ${isActive ? "text-foreground" : "text-muted-text hover:text-foreground"
                  }`}
              >
                <span
                  className={`mr-1 transition-colors duration-300 ${isActive ? "text-accent-light" : "text-accent"
                    }`}
                >
                  {num} //
                </span>
                {label}
                {/* Active underline */}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-accent-light"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
          {/* Mobile: just contact */}
          <a
            href="#contact"
            className="sm:hidden text-muted-text hover:text-foreground transition-colors"
          >
            <span className="text-accent mr-1">04 //</span>contact
          </a>

          {/* Resume */}
          <a
            href="/Mehak_Developer_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] font-mono tracking-widest uppercase rounded-full border border-accent/40 text-accent-light hover:text-foreground hover:bg-accent/10 hover:border-accent transition-all duration-300 group"
          >
            <svg className="group-hover:translate-y-0.5 transition-transform" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Resume
          </a>
        </nav>
      </div>
    </motion.nav>
  );
}
