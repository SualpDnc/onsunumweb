import { Mail } from "lucide-react";

function InstagramIcon() {
  return (
    <svg
      width="14"
      height="14"
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

const navLinks = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#hakkimda", label: "Hakkımda" },
  { href: "#neden-ben", label: "Neden Ben?" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* 1 col mobile → 3 col md+, gap compensates */}
        <div className="grid md:grid-cols-3 gap-10 pb-8 border-b border-white/10">

          {/* Brand */}
          <div>
            <p className="font-bold text-xl mb-1">Sualp Danacı</p>
            <p className="text-[#B8963E] text-xs tracking-widest uppercase mb-4">
              Coldwell Banker Ultra
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              Ankara'da güvenilir, profesyonel ve kişisel gayrimenkul danışmanlığı.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-semibold text-xs uppercase tracking-widest mb-4 text-white/50">
              Sayfalar
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#B8963E] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <p className="font-semibold text-xs uppercase tracking-widest mb-4 text-white/50">
              İletişim
            </p>
            <a
              href="mailto:sualp.danaci@cb.com.tr"
              className="flex items-center gap-2 text-sm text-white/60 hover:text-[#B8963E] transition-colors mb-6 break-all"
            >
              <Mail size={13} className="flex-shrink-0" />
              sualp.danaci@cb.com.tr
            </a>

            <p className="font-semibold text-xs uppercase tracking-widest mb-3 text-white/50">
              Sosyal Medya
            </p>
            <a
              href="https://www.instagram.com/cb.sualp.danaci/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#B8963E] transition-colors"
            >
              <InstagramIcon />
              @cb.sualp.danaci
            </a>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/30 text-xs">
          <p>© 2026 Sualp Danacı. Tüm hakları saklıdır.</p>
          <p className="text-center sm:text-right">
            Coldwell Banker Ultra — Bağlıca, Ankara
          </p>
        </div>
      </div>
    </footer>
  );
}
