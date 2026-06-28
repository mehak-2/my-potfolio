"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

/* ── Count-up hook triggered by IntersectionObserver ── */
function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const startTime = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

/* ── Individual animated stat ── */
function AnimatedStat({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const { count, ref } = useCountUp(value);
  return (
    <motion.div ref={ref} {...fadeUp(delay)} className="glass-panel glass-panel-hover rounded-xl p-5 text-center">
      <p className="text-3xl font-black text-gradient">
        {count}{suffix}
      </p>
      <p className="text-xs text-muted-text mt-1 font-mono tracking-wide leading-tight">{label}</p>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden px-6 sm:px-12">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Label */}
        <motion.div {...fadeUp(0)} className="mb-20">
          <p className="text-accent-light font-mono text-xs tracking-[0.3em] mb-3 uppercase flex items-center gap-3">
            <span className="w-8 h-[1px] bg-accent-light" />
            01 // About
          </p>
          <h2 className="text-5xl sm:text-7xl font-display font-black tracking-tighter uppercase leading-none">
            WHO I AM
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">

          {/* Left: Code block + Stats */}
          <motion.div {...fadeUp(0.1)}>
            <div className="glass-panel rounded-2xl overflow-hidden">
              {/* Editor title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-foreground/5 border-b border-card-border">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-[11px] font-mono text-muted-text tracking-wider">mehak.ts</span>
              </div>
              {/* Code */}
              <div className="p-6 font-mono text-sm leading-8">
                <p className="text-accent">const <span className="text-foreground">mehak</span> <span className="text-accent">=</span> {"{"}</p>
                <p className="pl-6"><span className="text-accent-light">role</span>: <span className="text-green-400">&quot;Software Developer&quot;</span>,</p>
                <p className="pl-6"><span className="text-accent-light">company</span>: <span className="text-green-400">&quot;Maxtron Innovations&quot;</span>,</p>
                <p className="pl-6"><span className="text-accent-light">education</span>: <span className="text-green-400">&quot;B.Tech CSE, IKG PTU&quot;</span>,</p>
                <p className="pl-6"><span className="text-accent-light">focus</span>: <span className="text-green-400">&quot;Scalable Web Apps&quot;</span>,</p>
                <p className="pl-6"><span className="text-accent-light">location</span>: <span className="text-green-400">&quot;India&quot;</span>,</p>
                <p className="pl-6"><span className="text-accent-light">available</span>: <span className="text-accent">true</span></p>
                <p className="text-foreground">{"}"}<span className="inline-block w-2.5 h-4 bg-accent/70 ml-1 translate-y-1 animate-blink" /></p>
              </div>
            </div>

            {/* Animated stats */}
            <div className="grid grid-cols-3 gap-4 mt-5">
              <AnimatedStat value={1.5} suffix="+" label="Years of Experience" delay={0.25} />
              <AnimatedStat value={10} suffix="+" label="Projects Shipped" delay={0.35} />
              <AnimatedStat value={6} suffix="+" label="Organizations" delay={0.45} />
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div {...fadeUp(0.2)} className="space-y-6">
            <p className="text-base text-muted-text leading-relaxed">
              I&apos;m a B.Tech Computer Science graduate from IK Gujral Punjab Technical University — a passionate Software Developer who loves turning ideas into production-grade digital products.
            </p>
            <p className="text-base text-muted-text leading-relaxed">
              Currently working as a <span className="text-foreground font-semibold">Software Developer at Maxtron Innovations</span>, where I collaborate with cross-functional teams to build modern UIs and robust backend systems using Next.js, React, and more.
            </p>
            <p className="text-base text-muted-text leading-relaxed">
              Beyond work, I lead the <span className="text-foreground font-semibold">Bizarre Coders</span> team, mentor developers, and constantly push the boundaries of what the web can do.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              {["Next.js", "React", "Node.js", "TypeScript", "Spring Boot", "MySQL"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 text-xs font-mono tracking-widest uppercase glass-panel rounded-full text-accent-light border border-accent/20 hover:border-accent/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Philosophy Block */}
        <motion.div
          {...fadeUp(0.3)}
          className="glass-panel rounded-2xl p-10 sm:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl pointer-events-none" />
          <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed tracking-tight text-muted-text relative z-10">
            <span className="text-foreground font-semibold">Engineering for scale and speed.</span>{" "}
            I craft production-ready applications with clean architecture and modern web technologies — turning complex problems into intuitive digital experiences.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
