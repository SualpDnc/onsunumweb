"use client";

import { useLang } from "./LanguageContext";

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-slate-500 text-xs">© {new Date().getFullYear()} Sualp Danacı</p>
        <p className="text-slate-600 text-xs">
          {lang === "en" ? "Built with" : "Yapıldı:"} Next.js + Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
