"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const values = [
  { label: "Dürüstlük", desc: "Her adımda şeffaf ve dürüst iletişim" },
  { label: "Güven", desc: "Coldwell Banker Ultra çatısı altında garantili hizmet" },
  { label: "Çözüm Odaklılık", desc: "Sorunlara değil, çözümlere odaklanırım" },
];

export default function About() {
  return (
    <section id="hakkimda" className="py-16 sm:py-24 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Photo — shows second on mobile, first on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center order-2 lg:order-1"
          >
            <div
              className="relative rounded-2xl overflow-hidden border-2 border-[#003087]/15"
              style={{
                boxShadow: "8px 8px 0 0 rgba(0,48,135,0.07), 14px 14px 0 0 rgba(184,150,62,0.12)",
              }}
            >
              <Image
                src="/photo.jpg"
                alt="Sualp Danacı"
                width={944}
                height={1018}
                className="w-[240px] sm:w-[290px] lg:w-[330px] h-auto block"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#003087]/75 to-transparent px-4 py-4 flex justify-center">
                <span className="text-white text-[11px] sm:text-xs font-bold tracking-widest uppercase">
                  Coldwell Banker Ultra
                </span>
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
            <span className="text-[#B8963E] text-xs font-semibold tracking-widest uppercase">
              Hakkımda
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A2E] mt-3 mb-5 sm:mb-6">
              Merhaba, Ben{" "}
              <span className="text-[#003087]">Sualp Danacı</span>
            </h2>

            <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed mb-7 sm:mb-8 text-sm sm:text-base">
              <p>
                Ankara'nın kalbinde,{" "}
                <strong className="text-[#1A1A2E]">Bağlıca</strong>'da faaliyet
                gösteren ve Ankara genelinde hizmet veren bir Coldwell Banker
                Ultra Gayrimenkul Danışmanıyım.
              </p>
              <p>
                Gayrimenkul sektörüne girme kararım, insanlara en önemli
                kararlarından birinde —{" "}
                <strong className="text-[#1A1A2E]">ev sahibi olmak</strong> ya
                da gayrimenkulünü doğru değerlendirmek konusunda — güvenilir bir
                rehber olmak istememden doğdu.
              </p>
              <p>
                <strong className="text-[#1A1A2E]">Coldwell Banker Ultra</strong>
                'nın küresel ağını ve profesyonel altyapısını kullanarak, her
                müşterime kişisel ve özverili bir hizmet sunmayı taahhüt
                ediyorum.
              </p>
            </div>

            <div className="grid gap-3">
              {values.map((v, i) => (
                <motion.div
                  key={v.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3 bg-white rounded-xl px-4 sm:px-5 py-3 sm:py-4 border border-gray-100 shadow-sm"
                >
                  <CheckCircle2 size={19} className="text-[#003087] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#1A1A2E] text-sm sm:text-base">{v.label}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{v.desc}</p>
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
