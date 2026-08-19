"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";
import { useLang } from "./LanguageContext";

const projects = {
  en: [
    {
      title: "Personal Portfolio Website",
      desc: "This very site — built with Next.js 16, TypeScript, and Tailwind CSS v4. Features smooth animations, bilingual content, and a dark gradient design.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "#",
      live: null,
    },
    {
      title: "Project 2",
      desc: "Coming soon — details about a key project from my software engineering studies at Atılım University.",
      tags: ["Python", "React", "REST API"],
      github: "#",
      live: null,
    },
    {
      title: "Project 3",
      desc: "Coming soon — another project showcasing problem-solving and system design skills.",
      tags: ["Java", "SQL", "Spring Boot"],
      github: "#",
      live: null,
    },
  ],
  tr: [
    {
      title: "Kişisel Portfolyo Sitesi",
      desc: "Bu site — Next.js 16, TypeScript ve Tailwind CSS v4 ile geliştirildi. Akıcı animasyonlar, çift dilli içerik ve koyu gradient tasarım.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "#",
      live: null,
    },
    {
      title: "Proje 2",
      desc: "Yakında — Atılım Üniversitesi'ndeki yazılım mühendisliği çalışmalarımdan önemli bir projenin detayları.",
      tags: ["Python", "React", "REST API"],
      github: "#",
      live: null,
    },
    {
      title: "Proje 3",
      desc: "Yakında — problem çözme ve sistem tasarımı becerilerimi gösteren başka bir proje.",
      tags: ["Java", "SQL", "Spring Boot"],
      github: "#",
      live: null,
    },
  ],
};

const content = {
  en: {
    badge: "Projects",
    title: "Things I've built",
    subtitle: "A selection of projects from my studies and personal work.",
  },
  tr: {
    badge: "Projeler",
    title: "Geliştirdiğim şeyler",
    subtitle: "Öğrenim sürecimden ve kişisel çalışmalarımdan bazı projeler.",
  },
};

export default function Projects() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section id="projects" className="py-20 sm:py-28 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-xs font-semibold tracking-widest uppercase">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">{t.title}</h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base max-w-lg mx-auto">{t.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects[lang].map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col hover:bg-white/8 hover:border-white/20 transition-all group"
            >
              <h3 className="text-white font-semibold text-base mb-3 group-hover:text-indigo-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 grow">{project.desc}</p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs bg-slate-700/80 text-slate-300 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-1.5 text-slate-400 hover:text-white text-xs font-medium transition-colors"
                >
                  <GitBranch size={14} />
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    className="flex items-center gap-1.5 text-slate-400 hover:text-indigo-400 text-xs font-medium transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
