"use client";

import React from "react";
import { motion } from "framer-motion";

interface ServiceItem { title: string; tags: string; icon: string; }
interface CareerItem {
  duration: string; role: string; company: string;
  location?: string; type?: string; description?: string;
  skills?: string[]; current?: boolean;
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function Experience() {
  const services: ServiceItem[] = [
    { icon: "⚡", title: "Full-Stack Development", tags: "React • Next.js • Node.js • Java • Spring Boot • MySQL" },
    { icon: "📈", title: "SEO & Performance", tags: "Website Audits • Next.js Rendering • Performance Optimization • Indexing" },
    { icon: "📱", title: "Android Engineering", tags: "Java • Kotlin • Real-time Databases • Android SDK • API Integration" },
    { icon: "🎨", title: "UI / UX Implementation", tags: "Framer Motion • Tailwind CSS • Responsive Layouts • Pixel-perfect Designs" },
  ];

  const career: CareerItem[] = [
    {
      duration: "Dec 2024 – Present", role: "Software Developer",
      company: "Maxtron Innovations", type: "Full-time",
      location: "Noida, Uttar Pradesh · On-site", current: true,
      description: "Collaborated with cross-functional teams to build modern UIs and backend systems. Drove key frontend initiatives using Next.js and React in a fast-paced product environment.",
      skills: ["Next.js", "React", "Node.js"],
    },
    {
      duration: "Aug 2022 – Present", role: "Core Team Lead",
      company: "Bizarre Coders", type: "Full-time",
      location: "Jalandhar, Punjab · On-site", current: true,
      description: "Leading a developer community — mentoring peers, running technical workshops, and shipping collaborative open-source projects.",
      skills: ["Leadership", "React", "Next.js"],
    },
    {
      duration: "Sep 2023 – Aug 2024", role: "Android Team Lead",
      company: "GDSC IKGPTU – Jalandhar", type: "Full-time",
      location: "Jalandhar, Punjab · On-site",
      description: "Led the Android vertical of Google Developer Student Club. Organized hackathons, technical sessions, and mentored 30+ developers.",
      skills: ["Java", "Kotlin", "Android SDK"],
    },
    {
      duration: "Jul 2024 – Nov 2024", role: "Full-Stack Developer",
      company: "Jagruti Rehabilitation Center", type: "Internship",
      location: "Remote",
      description: "Built and maintained internal web apps for the center's management workflows. Improved operational efficiency through custom tooling.",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      duration: "Jul 2024 – Sep 2024", role: "Full-Stack Developer",
      company: "Wow Diamond", type: "Internship", location: "Remote",
      description: "Developed product catalog features and checkout flows for an e-commerce platform, improving conversion UX.",
      skills: ["React", "Node.js"],
    },
    {
      duration: "Apr 2024 – Jul 2024", role: "Frontend Developer",
      company: "TheGoodGameTheory", type: "Internship", location: "Remote",
      description: "Built interactive UI components and responsive layouts using React and modern CSS frameworks for a gaming media brand.",
      skills: ["JavaScript", "React.js", "CSS"],
    },
  ];

  return (
    <section id="experience" className="py-32 relative overflow-hidden px-6 sm:px-12">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ─── SERVICES ─────────────────────────────── */}
        <div className="mb-32">
          <motion.div {...fadeUp(0)} className="mb-16">
            <p className="text-accent-light font-mono text-xs tracking-[0.3em] mb-3 uppercase flex items-center gap-3">
              <span className="w-8 h-[1px] bg-accent-light" />
              02 // Services
            </p>
            <h2 className="text-5xl sm:text-7xl font-display font-black tracking-tighter uppercase leading-none">
              WHAT I DO
            </h2>
          </motion.div>

          <div className="divide-y divide-card-border border-t border-card-border">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                {...fadeUp(idx * 0.08)}
                className="flex flex-col md:flex-row md:items-center justify-between py-7 group cursor-default hover:pl-4 transition-all duration-500"
              >
                <div className="flex items-center gap-5">
                  <h3 className="text-xl sm:text-2xl font-black text-foreground group-hover:text-gradient transition-all duration-300">
                    {service.title}
                  </h3>
                </div>
                <span className="text-xs text-muted-text tracking-wider font-mono mt-3 md:mt-0 md:max-w-sm md:text-right">
                  {service.tags}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── EXPERIENCE TIMELINE ─────────────────── */}
        <div>
          <motion.div {...fadeUp(0)} className="mb-16">
            <p className="text-accent-light font-mono text-xs tracking-[0.3em] mb-3 uppercase flex items-center gap-3">
              <span className="w-8 h-[1px] bg-accent-light" />
              03 // Experience
            </p>
            <h2 className="text-5xl sm:text-7xl font-display font-black tracking-tighter uppercase leading-none">
              MY JOURNEY
            </h2>
          </motion.div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Animated vertical line */}
            <motion.div
              className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-accent via-card-border to-transparent hidden sm:block"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ originY: 0 }}
            />

            <div className="space-y-8">
              {career.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.07, ease: "easeOut" }}
                  className="sm:pl-10 relative group"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-0 top-5 w-[15px] h-[15px] rounded-full border-2 hidden sm:flex items-center justify-center transition-colors duration-300 ${item.current ? "border-accent bg-accent/20 group-hover:bg-accent/40" : "border-card-border bg-background group-hover:border-accent/50"}`}>
                    {item.current && <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />}
                  </div>

                  {/* Card */}
                  <div className="glass-panel glass-panel-hover rounded-2xl p-7 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-transparent group-hover:from-accent/4 transition-all duration-500 rounded-2xl pointer-events-none" />

                    <div className="relative z-10">
                      {/* Top row */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <span className="text-[10px] font-mono text-accent-light tracking-widest uppercase block mb-1">
                            {item.duration}
                          </span>
                          <h3 className="text-xl font-black text-foreground">{item.role}</h3>
                          <p className="text-sm font-semibold text-accent-light/70 tracking-wide mt-0.5">{item.company}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 shrink-0">
                          {item.current && (
                            <span className="flex items-center gap-1.5 text-[10px] font-mono text-green-400 bg-green-400/10 border border-green-400/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                              Active
                            </span>
                          )}
                          {item.type && (
                            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${item.type === "Full-time" ? "bg-accent/15 text-accent-light border border-accent/30" : "bg-foreground/5 text-muted-text border border-card-border"}`}>
                              {item.type}
                            </span>
                          )}
                        </div>
                      </div>

                      {item.location && (
                        <p className="text-xs text-muted-text font-mono flex items-center gap-1.5 mb-4">
                          <span className="w-1 h-1 rounded-full bg-muted-text/50 flex-shrink-0" />
                          {item.location}
                        </p>
                      )}

                      {item.description && (
                        <p className="text-sm text-muted-text leading-relaxed mb-5">
                          {item.description}
                        </p>
                      )}

                      {item.skills && item.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill) => (
                            <span key={skill} className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-foreground/5 text-muted-text border border-card-border uppercase tracking-widest">
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
