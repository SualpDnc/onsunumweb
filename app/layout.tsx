import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LangProvider } from "./components/LanguageContext";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sualp Danacı — Software & Sales Engineer",
  description:
    "Software Engineering graduate from Atılım University. Passionate about building solutions at the intersection of technology and business.",
  keywords: [
    "software engineer",
    "sales engineer",
    "business development",
    "Atılım University",
    "Sualp Danacı",
  ],
  openGraph: {
    title: "Sualp Danacı — Software & Sales Engineer",
    description: "Building bridges between technology and business.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
