"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="iletisim" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-[#B8963E] text-xs font-semibold tracking-widest uppercase">
            Ulaşın
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A2E] mt-3 mb-4">
            İletişime Geçin
          </h2>
          <div className="w-16 h-1 bg-[#B8963E] mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-2xl mx-auto text-center space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-gray-500 leading-relaxed text-base sm:text-lg"
          >
            Satmak, almak veya kiralamak istediğiniz bir gayrimenkul için
            sorularınızı bana iletebilirsiniz. En kısa sürede geri dönüş
            sağlıyorum.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4"
          >
            <a
              href="mailto:sualp.danaci@cb.com.tr"
              className="flex items-center justify-center gap-2 bg-[#003087] text-white font-semibold px-6 py-4 rounded-full hover:bg-[#0066CC] transition-all hover:scale-105 shadow-lg shadow-[#003087]/20 text-sm sm:text-base"
            >
              <Mail size={18} />
              sualp.danaci@cb.com.tr
            </a>
            <a
              href="https://www.instagram.com/cb.sualp.danaci/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-white font-semibold px-6 py-4 rounded-full hover:opacity-90 transition-all hover:scale-105 shadow-lg text-sm sm:text-base"
              style={{
                background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
              }}
            >
              <InstagramIcon />
              @cb.sualp.danaci
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-gray-400 text-sm"
          >
            <MapPin size={14} className="flex-shrink-0" />
            <span>Bağlıca, Ankara — Ankara genelinde hizmet</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
