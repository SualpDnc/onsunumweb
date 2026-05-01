import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sualp Danacı | Coldwell Banker Ultra Gayrimenkul Danışmanı — Ankara",
  description:
    "Ankara Bağlıca ve çevresi başta olmak üzere tüm Ankara'da satış, alım ve kiralama konularında profesyonel gayrimenkul danışmanlığı. Sualp Danacı | Coldwell Banker Ultra.",
  keywords: ["gayrimenkul", "ankara", "bağlıca", "coldwell banker ultra", "emlak", "danışman"],
  openGraph: {
    title: "Sualp Danacı | Coldwell Banker Ultra Gayrimenkul Danışmanı",
    description: "Ankara'da güvenilir gayrimenkul danışmanlığı.",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
