"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

const row1 = ["Next.js", "React", "TypeScript", "Node.js", "Java", "Spring Boot", "MySQL", "Firebase", "Tailwind CSS", "Redux"];
const row2 = ["Kotlin", "Android SDK", "Git", "Python", "MongoDB", "REST APIs", "Framer Motion", "PostgreSQL", "C++", "Linux"];

const Dot = () => <span className="text-accent mx-8 flex-shrink-0 text-xs">✦</span>;

const fadeUp = (delay = 0): HTMLMotionProps<"div"> => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

export default function TechStack() {
  const expertise = [
    {
      icon: "🛠",
      number: "01",
      title: "Software Development",
      description: "Building robust, scalable applications with clean architecture and modern development practices.",
      techs: ["Java", "C++", "Python", "Git", "REST APIs"],
    },
    {
      icon: "🖥",
      number: "02",
      title: "Frontend Dev",
      description: "Crafting beautiful, responsive, and highly interactive user interfaces focused on performance and UX.",
      techs: ["React", "Next.js", "Tailwind", "TypeScript", "Framer Motion"],
    },
    {
      icon: "⚙️",
      number: "03",
      title: "Backend & Database",
      description: "Designing secure APIs, authentication flows, and managing scalable database architectures.",
      techs: ["Node.js", "Spring Boot", "MySQL", "Firebase", "MongoDB"],
    },
  ];

  return (
    <section
      id="expertise"
      className="py-32 relative overflow-hidden border-t border-card-border"
    >
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Section header + cards */}
      <div className="max-w-7xl mx-auto relative z-10 px-6 sm:px-12">
        <motion.div {...fadeUp(0)} className="mb-20">
          <p className="text-accent-light font-mono text-xs tracking-[0.3em] mb-3 uppercase flex items-center gap-3">
            <span className="w-8 h-[1px] bg-accent-light" />
            04 // Expertise
          </p>
          <h2 className="text-5xl sm:text-7xl font-display font-black tracking-tighter uppercase leading-none">
            MY STACK
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {expertise.map((item, idx) => (
            <motion.div
              key={item.title}
              {...fadeUp(idx * 0.1)}
              className="glass-panel glass-panel-hover rounded-2xl p-8 flex flex-col relative overflow-hidden group"
            >
              <span className="absolute -top-4 -right-2 text-8xl font-black text-foreground/[0.03] select-none pointer-events-none">
                {item.number}
              </span>

              <h3 className="text-xl font-black tracking-tight uppercase text-foreground mb-4 group-hover:text-gradient transition-all duration-300">
                {item.title}
              </h3>
              <p className="text-muted-text text-sm leading-relaxed mb-8 flex-grow">
                {item.description}
              </p>
              <div className="pt-5 border-t border-card-border flex flex-wrap gap-2">
                {item.techs.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-accent/10 text-accent-light border border-accent/20 uppercase tracking-widest"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── INFINITE MARQUEE ── full width */}
      <div className="space-y-5">
        {/* Row 1: left direction */}
        <div className="overflow-hidden border-y border-card-border/40 py-4 bg-foreground/[0.015]">
          <div className="animate-marquee items-center">
            {[...row1, ...row1].map((tech, i) => (
              <React.Fragment key={i}>
                <span className="text-sm font-mono font-medium text-muted-text tracking-[0.15em] uppercase whitespace-nowrap flex-shrink-0 hover:text-accent-light transition-colors duration-200 cursor-default px-2">
                  {tech}
                </span>
                <Dot />
              </React.Fragment>
            ))}
          </div>
        </div>
        {/* Row 2: right direction */}
        <div className="overflow-hidden border-b border-card-border/40 py-4 bg-foreground/[0.015]">
          <div className="animate-marquee-reverse items-center">
            {[...row2, ...row2].map((tech, i) => (
              <React.Fragment key={i}>
                <span className="text-sm font-mono font-medium text-muted-text tracking-[0.15em] uppercase whitespace-nowrap flex-shrink-0 hover:text-accent-light transition-colors duration-200 cursor-default px-2">
                  {tech}
                </span>
                <Dot />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
