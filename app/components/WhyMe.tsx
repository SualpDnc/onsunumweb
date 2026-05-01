"use client";

import { motion } from "framer-motion";
import { Shield, MapPin, HeartHandshake, Clock } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Coldwell Banker Ultra Güvencesi",
    desc: "Coldwell Banker Ultra çatısı altında, dünyanın en büyük gayrimenkul markasının profesyonel standartları ve etik değerleriyle hizmet veriyorum.",
  },
  {
    icon: MapPin,
    title: "Ankara Piyasası Bilgisi",
    desc: "Bağlıca başta olmak üzere Ankara'nın tüm ilçelerinde güncel piyasa bilgisi ve yerel deneyimle yanınızdayım.",
  },
  {
    icon: HeartHandshake,
    title: "Kişisel ve Özverili Hizmet",
    desc: "Her müşterime sanki tek müşterimmiş gibi davranıyorum. Sizi dinliyor, anlıyor ve ihtiyacınıza özel çözümler sunuyorum.",
  },
  {
    icon: Clock,
    title: "Süreç Boyunca Yanınızdayım",
    desc: "İlk görüşmeden tapu teslimine kadar tüm süreçte aktif olarak yer alıyor, sizi bilgilendiriyor ve yönlendiriyorum.",
  },
];

export default function WhyMe() {
  return (
    <section id="neden-ben" className="py-16 sm:py-24 bg-[#003087] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 10% 90%, #B8963E 0%, transparent 40%),
                             radial-gradient(circle at 90% 10%, #0066CC 0%, transparent 40%)`,
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-[#B8963E] text-xs font-semibold tracking-widest uppercase">
            Fark Yaratan
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Neden Benimle Çalışmalısınız?
          </h2>
          <div className="w-16 h-1 bg-[#B8963E] mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl p-5 sm:p-6 border border-white/15 bg-white/5 hover:bg-white/10 hover:border-[#B8963E]/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-11 h-11 rounded-xl bg-[#B8963E]/20 flex items-center justify-center mb-4 group-hover:bg-[#B8963E]/35 transition-colors flex-shrink-0">
                  <Icon size={22} className="text-[#B8963E]" />
                </div>
                <h3 className="text-white font-bold text-base sm:text-lg mb-2 leading-snug">
                  {reason.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
