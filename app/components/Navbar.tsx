"use client";

import { useEffect, useState } from "react";
import { Menu, X, Mail } from "lucide-react";

const navLinks = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#hakkimda", label: "Hakkımda" },
  { href: "#neden-ben", label: "Neden Ben?" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">

          {/* Logo */}
          <a href="#" className="flex flex-col leading-tight flex-shrink-0">
            <span
              className={`font-bold text-base sm:text-lg tracking-tight transition-colors ${
                scrolled ? "text-[#003087]" : "text-white"
              }`}
            >
              Sualp Danacı
            </span>
            <span className="text-[10px] tracking-widest uppercase text-[#B8963E]">
              Coldwell Banker Ultra
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-5 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#B8963E] ${
                  scrolled ? "text-[#1A1A2E]" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:sualp.danaci@cb.com.tr"
              className="flex items-center gap-2 bg-[#003087] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#0066CC] transition-all hover:scale-105 flex-shrink-0"
            >
              <Mail size={14} />
              İletişim
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-1 flex-shrink-0 transition-colors ${
              scrolled ? "text-[#003087]" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#1A1A2E] font-medium py-2.5 px-2 rounded-lg hover:bg-gray-50 hover:text-[#003087] transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:sualp.danaci@cb.com.tr"
                className="flex items-center justify-center gap-2 bg-[#003087] text-white font-semibold px-4 py-3 rounded-full mt-2 text-sm"
              >
                <Mail size={15} />
                Mail Gönder
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Floating CTA */}
      <a
        href="mailto:sualp.danaci@cb.com.tr"
        aria-label="Mail Gönder"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-[#003087] text-white font-semibold px-4 py-3 rounded-full shadow-lg hover:bg-[#0066CC] transition-all hover:scale-105 hover:shadow-xl text-sm"
      >
        <Mail size={17} />
        <span>Mail Gönder</span>
      </a>
    </>
  );
}
