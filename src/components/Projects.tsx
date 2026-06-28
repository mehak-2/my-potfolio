"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown } from "lucide-react";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.3 5.3 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.4 5 1.8 5 1.8a5.3 5.3 0 0 0-.1 3.8A5.4 5.4 0 0 0 3 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const featured = {
    id: "01",
    title: "Volunteer-Hub",
    tag: "Featured Project",
    tech: ["Node.js", "Express", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
    desc: "A full-stack volunteer management platform with Node.js, Express, and Next.js. Features role-based access, streamlined onboarding, document uploads, and responsive dashboards. Built with TypeScript, Redux Toolkit, and Tailwind CSS for scalable, modern UI/UX.",
    github: "https://github.com/mehak-2",
    demo: "https://volunteer-fe.vercel.app/auth",
    image: "/13pro.jpeg",
  };

  const grid = [
    {
      id: "02",
      title: "FaHub",
      tech: ["React JS", "Context API", "Firebase Auth", "Responsive Design"],
      desc: "An immersive e-commerce shopping website offering a wide range of fashion products. Built with a focus on user experience and modern design trends.",
      github: "https://github.com/mehak-2/react_shop",
      demo: "https://react-shop-plum-seven.vercel.app/",
      image: "/1pro.jpeg",
    },
    {
      id: "03",
      title: "Chat App",
      tech: ["React JS", "API Integration", "Real-time", "Firebase"],
      desc: "A real-time chat application built with React JS and an API backend, enabling seamless communication and dynamic message updates.",
      github: "https://github.com/mehak-2/react-chatapp",
      demo: "https://luxury-squirrel-100f11.netlify.app/",
      image: "/2pro.jpeg",
    },
  ];

  const moreProjects = [
    { id: "04", title: "Grocery Store", tech: ["React JS", "Redux", "E-commerce", "JavaScript"], desc: "A fully functional e-commerce website for grocery shopping, featuring product listings, cart functionality, and a clean user interface.", image: "/3pro.jpeg", demo: "https://ecommerceweb-kappa.vercel.app/", github: "https://github.com/mehak-2/ecommerceweb" },
    { id: "05", title: "School Management System", tech: ["Java", "MySQL", "J2EE", "Backend", "Spring"], desc: "A comprehensive system for managing school operations, built with Java, MySQL, and J2EE technologies. Streamlines administrative tasks.", image: "/4pro.jpeg", demo: "#", github: "https://github.com/mehak-2/school-management-web-app" },
    { id: "06", title: "Keyframes App", tech: ["React JS", "CSS Animations", "API", "JSON", "Frontend"], desc: "An innovative application for creating and visualizing CSS keyframe animations, leveraging React JS, APIs, and JSON for dynamic control.", image: "/5pro.jpeg", demo: "https://keyframes-app.vercel.app/", github: "https://github.com/mehak-2/keyframes_app" },
    { id: "08", title: "Quiz App", tech: ["Next.js", "Tailwind CSS", "TypeScript", "Full-stack"], desc: "An interactive quiz application developed with Next.js, Tailwind CSS, and TypeScript, offering a fun and engaging user experience.", image: "/7pro.jpeg", demo: "https://quizassign.vercel.app/", github: "https://github.com/mehak-2/quizassign" },
    { id: "09", title: "Pokemon App", tech: ["React JS", "CSS", "API", "Frontend"], desc: "A vibrant application showcasing Pokemon data, built with React JS, CSS, and utilizing a Pokemon API for dynamic content.", image: "/8pro.jpeg", demo: "https://pokemon-app1-iota.vercel.app/", github: "#" },
    { id: "10", title: "Canva Clone", tech: ["HTML", "CSS", "Frontend Basics", "UI Design"], desc: "A simplified clone of Canva's design interface, built with HTML and CSS to practice fundamental web development skills.", image: "/9pro.jpeg", demo: "https://canva-task-1.vercel.app/", github: "https://github.com/mehak-2/canva-task-1" },
    { id: "11", title: "Weather App", tech: ["React JS", "API", "JavaScript", "CSS"], desc: "A real-time weather application providing current weather conditions, built with React JS, CSS, JavaScript, and integrating a weather API.", image: "/10pro.jpeg", demo: "https://react-weatherapp-mehak-2.vercel.app/", github: "https://github.com/mehak-2/react-weatherapp" },
    { id: "12", title: "Shopping Web", tech: ["React JS", "Firebase", "E-commerce", "Frontend"], desc: "Another stylish e-commerce platform featuring a curated collection of clothing. Developed with React JS, JavaScript, CSS, and Firebase.", image: "/11pro.jpeg", demo: "https://fabricfashionapp-hcyc.vercel.app/", github: "https://github.com/mehak-2/fabricfashion" },
    { id: "13", title: "Packpal", tech: ["Next JS", "Node JS", "Sendgrid", "Tailwind CSS", "API", "Express"], desc: "Packpal is a smart platform that helps plan your trips by suggesting destinations, activities, and personalized itineraries. It creates packing lists tailored to the weather, duration, and your travel plans. Collaborate with friends and family to effortlessly plan and share your travel experiences.", image: "/14pro.jpeg", demo: "https://packpal-app-fe.vercel.app/", github: "https://github.com/mehak-2/packpal-app-fe" },
  ];

  return (
    <section
      id="projects"
      className="py-32 relative overflow-hidden px-6 sm:px-12 border-t border-card-border"
    >
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-16">
          <p className="text-accent-light font-mono text-xs tracking-[0.3em] mb-3 uppercase flex items-center gap-3">
            <span className="w-8 h-[1px] bg-accent-light" />
            05 // Work
          </p>
          <h2 className="text-5xl sm:text-7xl font-display font-black tracking-tighter uppercase leading-none">
            SELECTED PROJECTS
          </h2>
        </motion.div>

        {/* ── BENTO GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">

          {/* Featured — spans 2 cols & 2 rows */}
          <motion.div
            {...fadeUp(0.05)}
            className="lg:col-span-2 glass-panel rounded-3xl flex flex-col md:flex-row group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
            <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-accent/20 transition-all duration-500 pointer-events-none" />

            {/* Content Left */}
            <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-between p-8 sm:p-10 h-full">
              <div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full uppercase tracking-widest mb-6">
                  ★ {featured.tag}
                </span>
                <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground leading-tight mb-5">
                  {featured.title}
                </h3>
                <p className="text-muted-text text-sm sm:text-base leading-relaxed mb-8">
                  {featured.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-8 md:mb-0">
                  {featured.tech.map((t) => (
                    <span key={t} className="px-3 py-1.5 text-[10px] font-mono tracking-widest uppercase bg-foreground/5 border border-card-border text-muted-text rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 opacity-60 group-hover:opacity-100 transition-opacity mt-auto">
                <a href={featured.github} target="_blank" rel="noreferrer" className="text-muted-text hover:text-foreground transition-colors p-2 glass-panel rounded-lg hover:border-accent/30">
                  <GithubIcon />
                </a>
                <a href={featured.demo} target="_blank" rel="noreferrer" className="text-muted-text hover:text-foreground transition-colors p-2 glass-panel rounded-lg hover:border-accent/30">
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

            {/* Image Right (Bleeding off bottom-right) */}
            <div className="relative z-10 w-full md:w-1/2 bg-foreground/[0.02] border-t md:border-t-0 md:border-l border-card-border overflow-hidden flex items-end justify-end pt-10 pl-10 md:min-h-[380px]">
              <div className="w-full h-[90%] rounded-tl-xl overflow-hidden border-t border-l border-card-border shadow-2xl group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-500 bg-background">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </motion.div>

          {/* Right column — 2 smaller cards stacked */}
          <div className="flex flex-col gap-5">
            {grid.map((project, idx) => (
              <motion.div
                key={project.id}
                {...fadeUp(0.1 + idx * 0.08)}
                className="glass-panel glass-panel-hover rounded-3xl flex flex-col group relative overflow-hidden flex-1"
              >
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-accent/20 transition-all duration-500 pointer-events-none" />

                <div className="relative z-10 flex-grow flex flex-col p-7 pb-0">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-[10px] font-mono text-muted-text tracking-widest mb-1 block">{project.id}</span>
                      <h3 className="text-xl font-black tracking-wide uppercase text-foreground group-hover:text-gradient transition-all duration-300">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-2 opacity-30 group-hover:opacity-100 transition-opacity">
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-muted-text hover:text-foreground transition-colors">
                        <GithubIcon size={15} />
                      </a>
                      <a href={project.demo} target="_blank" rel="noreferrer" className="text-muted-text hover:text-foreground transition-colors">
                        <ExternalLink size={15} />
                      </a>
                    </div>
                  </div>
                  <p className="text-muted-text text-xs leading-relaxed mb-5">{project.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-[9px] font-mono tracking-widest uppercase bg-foreground/5 border border-card-border text-muted-text rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image Box (Bleeding off bottom) */}
                <div className="relative z-10 w-full h-40 pt-4 px-6 flex items-end justify-center overflow-hidden">
                  <div className="w-full h-full rounded-t-xl overflow-hidden border-t border-x border-card-border shadow-xl group-hover:-translate-y-2 transition-transform duration-500 bg-background">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All toggle */}
        <div className="flex justify-center my-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-3 px-8 py-3.5 glass-panel glass-panel-hover rounded-full text-sm font-mono tracking-widest uppercase cursor-pointer text-muted-text hover:text-foreground transition-all"
          >
            <span>{showAll ? "Show Less" : "View All Projects"}</span>
            <motion.span animate={{ rotate: showAll ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown size={15} />
            </motion.span>
          </button>
        </div>

        {/* Collapsible more projects */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-4">
                {moreProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col group relative overflow-hidden"
                  >
                    {/* Image Box */}
                    <div className="relative z-10 w-full aspect-video rounded-xl overflow-hidden border border-card-border mb-5 group-hover:scale-[1.02] transition-transform duration-500 bg-background/50">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" />
                    </div>

                    <div className="relative z-10 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <span className="text-[10px] font-mono text-muted-text tracking-widest block mb-1">{project.id}</span>
                          <h4 className="text-sm font-black text-foreground uppercase tracking-wide group-hover:text-gradient transition-all duration-300">
                            {project.title}
                          </h4>
                        </div>
                        <div className="flex gap-2 opacity-30 group-hover:opacity-100 transition-opacity">
                          {project.github && project.github !== "#" && (
                            <a href={project.github} target="_blank" rel="noreferrer" className="text-muted-text hover:text-foreground transition-colors p-1 bg-foreground/5 rounded-md">
                              <GithubIcon size={14} />
                            </a>
                          )}
                          {project.demo && project.demo !== "#" && (
                            <a href={project.demo} target="_blank" rel="noreferrer" className="text-muted-text hover:text-foreground transition-colors p-1 bg-foreground/5 rounded-md">
                              <ExternalLink size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                      <p className="text-muted-text text-xs leading-relaxed mb-4 flex-grow">{project.desc}</p>
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {project.tech.map((t) => (
                          <span key={t} className="text-[9px] font-mono text-accent-light/60 uppercase tracking-widest">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
