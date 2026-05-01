"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, User } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#003087]">
      {/* Decorative backgrounds — isolated overflow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, #0066CC 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, #B8963E 0%, transparent 40%),
              radial-gradient(circle at 60% 80%, #0066CC 0%, transparent 30%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — Content (order-2 on mobile so photo appears first) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-[11px] sm:text-xs tracking-widest uppercase px-3 sm:px-4 py-2 rounded-full mb-5 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-[#B8963E] flex-shrink-0" />
              <span>Coldwell Banker Ultra Gayrimenkul Danışmanı</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 sm:mb-6">
              Ankara'da Gayrimenkul ve Yatırım{" "}
              <span className="text-[#B8963E]">Danışmanlığının</span>{" "}
              Güvenilir Adresi
            </h1>

            <p className="text-white/70 text-sm sm:text-base lg:text-lg mb-7 sm:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Bağlıca ve Ankara genelinde, hayalinizdeki evi bulmanız veya
              gayrimenkulünüzü en doğru şekilde değerlendirmeniz için buradayım.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#iletisim"
                className="flex items-center justify-center gap-2 bg-[#B8963E] text-white font-semibold px-6 py-4 rounded-full hover:bg-[#D4AF5A] transition-all hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                <Mail size={17} />
                Benimle İletişime Geç
              </a>
              <a
                href="#hakkimda"
                className="flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-6 py-4 rounded-full hover:bg-white/20 transition-all text-sm sm:text-base"
              >
                <User size={17} />
                Hakkımda
              </a>
            </div>

            {/* Trust line — allow wrap, no whitespace-nowrap */}
            <div className="mt-8 sm:mt-10 flex items-center gap-3 justify-center lg:justify-start">
              <div className="h-px w-8 sm:w-10 bg-[#B8963E]/50 flex-shrink-0" />
              <span className="text-white/50 text-[10px] sm:text-xs tracking-widest uppercase text-center">
                Coldwell Banker Ultra Güvencesiyle
              </span>
              <div className="h-px flex-1 bg-[#B8963E]/50" />
            </div>
          </motion.div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            {/* pb-6 compensates for the -bottom-2 Ankara pill */}
            <div className="relative p-3 pb-8">
              <div className="absolute inset-0 border border-[#B8963E]/40 rounded-3xl pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15">
                <Image
                  src="/photo.jpg"
                  alt="Sualp Danacı"
                  width={944}
                  height={1018}
                  priority
                  className="w-[220px] xs:w-[250px] sm:w-[290px] lg:w-[330px] h-auto block"
                />
              </div>

              {/* Ankara pill */}
              <div className="absolute bottom-1 left-2 bg-white rounded-xl shadow-xl px-4 py-2.5">
                <p className="text-[#003087] font-bold text-base sm:text-lg leading-none">Ankara</p>
                <p className="text-gray-500 text-[11px] sm:text-xs mt-0.5">Genelinde Hizmet</p>
              </div>

              {/* CB badge */}
              <div className="absolute -top-2 right-2 bg-[#B8963E] text-white rounded-full w-11 h-11 sm:w-12 sm:h-12 flex flex-col items-center justify-center shadow-lg">
                <span className="text-[9px] sm:text-[10px] font-bold leading-tight">CB</span>
                <span className="text-[9px] sm:text-[10px] leading-tight">Ultra</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[10px] tracking-widest uppercase hidden sm:block">Keşfet</span>
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
