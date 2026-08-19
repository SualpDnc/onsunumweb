"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { Mail } from "lucide-react";
import { useLang } from "./LanguageContext";

function LinkedInIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

const content = {
  en: {
    title: "Software Engineer & Entrepreneur",
    bio: "Software engineer with strong business roots. I build software and drive technical projects — and alongside that, I serve as Business Operations Specialist at Camcı Orhan İnşaat, my family's company operating in contracting, construction materials trading, and real estate. Always open to new partnerships and collaborations at the intersection of tech and business.",
    tagline: "Open to partnerships, collaborations & new ventures",
    cta: "Get in touch",
  },
  tr: {
    title: "Yazılım Mühendisi & Girişimci",
    bio: "Güçlü bir iş dünyası kökenine sahip yazılım mühendisiyim. Yazılım geliştiriyor ve teknik projeleri yönetirken; aynı zamanda aile şirketimiz Camcı Orhan İnşaat'ta İş Operasyonları Uzmanı olarak müteahitlik, inşaat malzemeleri ticareti ve emlak alanlarında aktif rol üstleniyorum. Teknoloji ve iş dünyasının kesiştiği her alanda yeni ortaklıklara ve iş birliklerine açığım.",
    tagline: "Ortaklıklar, iş birlikleri ve yeni girişimler için açığım",
    cta: "Mesaj Gönder",
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.5 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Landing() {
  const { lang, toggle } = useLang();
  const t = content[lang];

  return (
    <div
      className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden"
      style={{ background: "#07070e" }}
    >
      {/* ── GLOBAL BACKGROUND ORBS ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-48 right-1/4 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.35) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 8 }}
          className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)" }}
        />
      </div>

      {/* Dot grid — full page */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* ── LEFT: PHOTO PANEL ── */}
      <div className="relative w-full lg:w-[42%] flex items-center justify-center py-16 lg:py-0 shrink-0">

        {/* Spotlight glow behind photo */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)" }}
        />

        {/* Photo frame */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          {/* Outer glow ring */}
          <div
            className="absolute -inset-[1px] rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(99,102,241,0.4), rgba(139,92,246,0.2), rgba(99,102,241,0.1))",
              filter: "blur(1px)",
            }}
          />

          {/* Photo container */}
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{
              width: "clamp(200px, 22vw, 290px)",
              aspectRatio: "2/3",
              boxShadow: "0 0 60px rgba(99,102,241,0.18), 0 30px 80px rgba(0,0,0,0.7)",
            }}
          >
            <Image
              src="/photo-2026.jpg"
              alt="Sualp Danacı"
              fill
              priority
              sizes="290px"
              className="object-cover object-top"
            />
            {/* Subtle bottom vignette */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1/4"
              style={{ background: "linear-gradient(to top, rgba(7,7,14,0.5), transparent)" }}
            />
          </div>
        </motion.div>

        {/* Vertical separator — desktop only */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-48"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(99,102,241,0.25), transparent)" }}
        />
      </div>

      {/* ── RIGHT: CONTENT PANEL ── */}
      <div className="relative flex-1 flex flex-col justify-center px-8 sm:px-14 lg:px-14 xl:px-18 py-10 lg:py-0">

        {/* Language toggle */}
        <button
          onClick={toggle}
          className="absolute top-6 right-6 z-10 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10 text-slate-500 hover:text-white hover:border-white/30 transition-all"
        >
          {lang === "en" ? "TR" : "EN"}
        </button>

        {/* Main content */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative max-w-lg"
        >
          {/* Accent line */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-7">
            <div className="w-6 h-px" style={{ background: "linear-gradient(to right, #818cf8, #a78bfa)" }} />
            <span className="text-[10px] tracking-[0.2em] uppercase text-indigo-400/60 font-medium">
              Sualp Danacı
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="font-bold text-white leading-[1.06] tracking-tight mb-4"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            Software
            <br />
            <span style={{ background: "linear-gradient(135deg, #a5b4fc, #818cf8, #c4b5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Engineer.
            </span>
          </motion.h1>

          {/* Title pill */}
          <motion.div variants={fadeUp} className="mb-8">
            <span
              className="inline-block text-xs font-medium tracking-widest uppercase px-3 py-1.5 rounded-full border"
              style={{
                color: "rgba(165,180,252,0.8)",
                borderColor: "rgba(99,102,241,0.25)",
                background: "rgba(99,102,241,0.06)",
              }}
            >
              {t.title}
            </span>
          </motion.div>

          {/* Thin divider */}
          <motion.div
            variants={fadeUp}
            className="mb-7"
            style={{ height: "1px", background: "linear-gradient(to right, rgba(99,102,241,0.15), transparent)" }}
          />

          {/* Bio */}
          <motion.p
            variants={fadeUp}
            className="leading-relaxed mb-7"
            style={{ color: "rgba(148,163,184,0.85)", fontSize: "clamp(0.82rem, 1.1vw, 0.95rem)" }}
          >
            {t.bio}
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="text-xs italic mb-9"
            style={{ color: "rgba(100,116,139,0.7)" }}
          >
            {t.tagline}
          </motion.p>

          {/* Contact links */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.linkedin.com/in/sualp-danac%C4%B1-43a7ab227/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200"
              style={{
                color: "rgba(203,213,225,0.8)",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.1)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.35)";
                (e.currentTarget as HTMLElement).style.color = "white";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.color = "rgba(203,213,225,0.8)";
              }}
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <a
              href="https://github.com/SualpDnc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200"
              style={{
                color: "rgba(203,213,225,0.8)",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.1)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.35)";
                (e.currentTarget as HTMLElement).style.color = "white";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.color = "rgba(203,213,225,0.8)";
              }}
            >
              <GitHubIcon />
              GitHub
            </a>
            <a
              href="mailto:sualpdnc@gmail.com"
              className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full text-white transition-all duration-200 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
                boxShadow: "0 0 24px rgba(99,102,241,0.35), 0 4px 16px rgba(0,0,0,0.4)",
              }}
            >
              <Mail size={15} />
              {t.cta}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
