"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, TrendingUp, HardHat } from "lucide-react";
import Image from "next/image";
import { useLang } from "./LanguageContext";

const content = {
  en: {
    badge: "About me",
    title: "Who am I?",
    bio: [
      "I'm a 2024 Software Engineering graduate from Atılım University, passionate about building solutions at the intersection of technology and business.",
      "My technical foundation lets me deeply understand products and systems — while my drive for business development and sales engineering helps me connect those solutions to real customer needs.",
      "I thrive in roles that call for both technical depth and strong communication: building software, supporting complex technical sales, or driving business growth.",
    ],
    cards: [
      {
        Icon: GraduationCap,
        title: "Education",
        desc: "B.Sc. Software Engineering\nAtılım University, 2024",
      },
      {
        Icon: Code2,
        title: "Technical Focus",
        desc: "Full-stack development, APIs, system design, mobile & game development",
      },
      {
        Icon: TrendingUp,
        title: "Business Focus",
        desc: "Sales engineering, business development, client success",
      },
      {
        Icon: HardHat,
        title: "Family Business",
        desc: "Contracting, construction materials trading & real estate — hands-on experience running multi-sided operations",
      },
    ],
  },
  tr: {
    badge: "Hakkımda",
    title: "Ben kimim?",
    bio: [
      "2024 yılında Atılım Üniversitesi Yazılım Mühendisliği bölümünden mezun oldum. Teknoloji ve iş dünyasının kesişiminde çözümler üretmeye tutkuluyum.",
      "Güçlü teknik altyapım, ürünleri ve sistemleri derinlemesine anlamama olanak tanıyor. İş geliştirme ve satış mühendisliğine olan ilgim ise bu çözümleri gerçek müşteri ihtiyaçlarıyla buluşturmamı sağlıyor.",
      "Hem teknik derinlik hem de güçlü iletişim becerileri gerektiren rollerde başarılıyım: yazılım geliştirmek, karmaşık teknik satışları desteklemek ya da iş büyümesini yönetmek.",
    ],
    cards: [
      {
        Icon: GraduationCap,
        title: "Eğitim",
        desc: "Lisans — Yazılım Mühendisliği\nAtılım Üniversitesi, 2024",
      },
      {
        Icon: Code2,
        title: "Teknik Odak",
        desc: "Full-stack geliştirme, API'lar, sistem tasarımı, mobil & oyun geliştirme",
      },
      {
        Icon: TrendingUp,
        title: "İş Odağı",
        desc: "Satış mühendisliği, iş geliştirme, müşteri başarısı",
      },
      {
        Icon: HardHat,
        title: "Aile Şirketi",
        desc: "Müteahitlik, inşaat malzemeleri ticareti ve emlak — çok taraflı operasyonları yönetme deneyimi",
      },
    ],
  },
};

export default function About() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-900/50">
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

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-indigo-500/20 to-violet-500/20 rounded-2xl blur-xl scale-105" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/photo-2026.jpg"
                  alt="Sualp Danacı"
                  width={944}
                  height={1018}
                  className="w-60 sm:w-72 lg:w-80 h-auto block"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base mb-8">
              {t.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="grid gap-3">
              {t.cards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:bg-white/8 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <card.Icon size={18} className="text-indigo-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{card.title}</p>
                    <p className="text-slate-400 text-xs mt-0.5 whitespace-pre-line">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
