"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import Image from "next/image";
import { useLang } from "./LanguageContext";

const content = {
  en: {
    badge: "Open to opportunities",
    title1: "Software &",
    title2: "Sales Engineer",
    desc: "Building bridges between technology and business. A software engineering graduate who turns complex technical concepts into real business value.",
    cta1: "Get in touch",
    cta2: "About me",
    scroll: "Scroll",
    uni: "Atılım Uni. '24",
  },
  tr: {
    badge: "İş fırsatlarına açığım",
    title1: "Yazılım &",
    title2: "Satış Mühendisi",
    desc: "Teknoloji ve iş dünyası arasında köprüler kuruyorum. Karmaşık teknik konuları gerçek iş değerine dönüştüren bir yazılım mühendisiyim.",
    cta1: "İletişime geç",
    cta2: "Hakkımda",
    scroll: "Keşfet",
    uni: "Atılım Üni. '24",
  },
};

export default function Hero() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-indigo-950 to-slate-900" />

      {/* Decorative orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-125 h-125 bg-indigo-900/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              {t.title1}
              <br />
              <span className="bg-linear-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                {t.title2}
              </span>
            </h1>

            <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
              {t.desc}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-7 py-3.5 rounded-full transition-all hover:scale-105 shadow-lg shadow-indigo-500/25 text-sm"
              >
                <Mail size={16} />
                {t.cta1}
              </a>
              <a
                href="#about"
                className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-slate-200 font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 hover:border-white/20 transition-all text-sm"
              >
                {t.cta2}
              </a>
            </div>
          </motion.div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative pb-8">
              <div className="absolute inset-0 bg-linear-to-br from-indigo-500/30 to-violet-500/30 rounded-3xl blur-2xl scale-110" />

              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/photo-2026.jpg"
                  alt="Sualp Danacı"
                  width={944}
                  height={1018}
                  priority
                  className="w-55 sm:w-67.5 lg:w-77.5 h-auto block"
                />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-slate-950/70 to-transparent" />
              </div>

              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-800 border border-white/10 rounded-xl px-5 py-2.5 shadow-xl whitespace-nowrap">
                <p className="text-white font-semibold text-sm text-center">Sualp Danacı</p>
                <p className="text-indigo-400 text-xs text-center mt-0.5">{t.uni}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-[10px] tracking-widest uppercase hidden sm:block">{t.scroll}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
