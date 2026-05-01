"use client";

import { motion } from "framer-motion";
import { TrendingUp, Home, Key } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Satış Danışmanlığı",
    desc: "Gayrimenkulünüzü doğru fiyat stratejisi ve geniş alıcı ağımla en hızlı ve en karlı şekilde satıyorum.",
    features: ["Piyasa değer analizi", "Profesyonel ilan yönetimi", "Alıcı eşleştirme"],
  },
  {
    icon: Home,
    title: "Alım Danışmanlığı",
    desc: "Bütçenize, lokasyon tercihlerinize ve yaşam beklentilerinize tam uyan evi birlikte buluyoruz.",
    features: ["Kişisel ihtiyaç analizi", "Portföy taraması", "Müzakere desteği"],
    highlighted: true,
  },
  {
    icon: Key,
    title: "Kiralama Hizmetleri",
    desc: "Ankara genelinde kiralık gayrimenkul için kiracı veya kiralık mülk arayanları güvenle buluşturuyorum.",
    features: ["Kiracı/mal sahibi eşleştirme", "Sözleşme desteği", "Hızlı süreç yönetimi"],
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-[#B8963E] text-xs font-semibold tracking-widest uppercase">
            Ne Yapıyorum
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A2E] mt-3 mb-4">
            Hizmetlerim
          </h2>
          <div className="w-16 h-1 bg-[#B8963E] mx-auto rounded-full" />
        </motion.div>

        {/* Always 1 col on mobile, 3 col on lg — avoids broken 2-col intermediate */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative rounded-2xl p-6 sm:p-8 border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  service.highlighted
                    ? "bg-[#003087] border-[#003087] text-white shadow-lg shadow-[#003087]/20"
                    : "bg-white border-gray-100 hover:border-[#B8963E]/50"
                }`}
              >
                {service.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#B8963E] text-white text-xs font-bold px-4 py-1 rounded-full tracking-wide uppercase">
                    En Çok Tercih
                  </div>
                )}

                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors ${
                    service.highlighted
                      ? "bg-white/15"
                      : "bg-[#003087]/8 group-hover:bg-[#B8963E]/15"
                  }`}
                >
                  <Icon
                    size={22}
                    className={service.highlighted ? "text-[#B8963E]" : "text-[#003087]"}
                  />
                </div>

                <h3
                  className={`text-lg sm:text-xl font-bold mb-3 ${
                    service.highlighted ? "text-white" : "text-[#1A1A2E]"
                  }`}
                >
                  {service.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed mb-5 ${
                    service.highlighted ? "text-white/75" : "text-gray-500"
                  }`}
                >
                  {service.desc}
                </p>

                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-center gap-2 text-sm ${
                        service.highlighted ? "text-white/80" : "text-gray-600"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          service.highlighted ? "bg-[#B8963E]" : "bg-[#003087]"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
