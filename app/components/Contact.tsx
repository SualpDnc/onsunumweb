"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { useLang } from "./LanguageContext";

const content = {
  en: {
    badge: "Contact",
    title: "Let's talk",
    desc: "Whether you have a role in mind, a project idea, or just want to connect — I'd love to hear from you.",
    cta: "sualpdnc@gmail.com",
    note: "I typically respond within 24 hours.",
  },
  tr: {
    badge: "İletişim",
    title: "Konuşalım",
    desc: "Aklınızda bir pozisyon, proje fikri ya da sadece bağlantı kurmak istiyorsanız — mesaj atmaktan çekinmeyin.",
    cta: "sualpdnc@gmail.com",
    note: "Genellikle 24 saat içinde yanıt veririm.",
  },
};

export default function Contact() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-indigo-400 text-xs font-semibold tracking-widest uppercase">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6">{t.title}</h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            {t.desc}
          </p>

          <a
            href="mailto:sualpdnc@gmail.com"
            className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-indigo-500/25 text-sm sm:text-base group"
          >
            <Mail size={18} />
            {t.cta}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="text-slate-600 text-xs mt-6">{t.note}</p>
        </motion.div>

      </div>
    </section>
  );
}
