"use client";

import { motion } from "framer-motion";
import { useLang } from "./LanguageContext";

const techSkills = [
  { name: "Java / Spring Boot", level: 80 },
  { name: "JavaScript / TypeScript", level: 75 },
  { name: "React / Next.js", level: 70 },
  { name: "Flutter", level: 65 },
  { name: "Swift", level: 60 },
  { name: "C", level: 70 },
  { name: "Unity", level: 60 },
  { name: "SQL", level: 75 },
  { name: "Git", level: 85 },
  { name: "REST APIs", level: 80 },
];

const bizSkills = {
  en: [
    "B2B Sales",
    "Business Development",
    "Technical Presentations",
    "CRM Tools",
    "Client Relations",
    "Negotiation",
    "Market Analysis",
    "Product Demos",
  ],
  tr: [
    "B2B Satış",
    "İş Geliştirme",
    "Teknik Sunumlar",
    "CRM Araçları",
    "Müşteri İlişkileri",
    "Müzakere",
    "Pazar Analizi",
    "Ürün Demoları",
  ],
};

const content = {
  en: {
    badge: "Skills",
    title: "What I bring to the table",
    techTitle: "Technical Skills",
    bizTitle: "Business & Sales Skills",
    langTitle: "Languages",
    langs: [
      { name: "Turkish", level: "Native" },
      { name: "English", level: "Professional" },
    ],
  },
  tr: {
    badge: "Beceriler",
    title: "Masaya ne getiriyorum",
    techTitle: "Teknik Beceriler",
    bizTitle: "İş & Satış Becerileri",
    langTitle: "Diller",
    langs: [
      { name: "Türkçe", level: "Ana Dil" },
      { name: "İngilizce", level: "Profesyonel" },
    ],
  },
};

export default function Skills() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section id="skills" className="py-20 sm:py-28">
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
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Technical skills with progress bars */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-white font-semibold text-lg mb-6">{t.techTitle}</h3>
            <div className="space-y-5">
              {techSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300 text-sm">{skill.name}</span>
                    <span className="text-slate-500 text-xs">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.05 + 0.2 }}
                      className="h-full bg-linear-to-r from-indigo-500 to-violet-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Business & language skills */}
          <div className="flex flex-col gap-8">

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8"
            >
              <h3 className="text-white font-semibold text-lg mb-5">{t.bizTitle}</h3>
              <div className="flex flex-wrap gap-2">
                {bizSkills[lang].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8"
            >
              <h3 className="text-white font-semibold text-lg mb-5">{t.langTitle}</h3>
              <div className="space-y-3">
                {t.langs.map((l) => (
                  <div key={l.name} className="flex items-center justify-between">
                    <span className="text-slate-300 text-sm">{l.name}</span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                      {l.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
