import type { Metadata } from "next";
import { Nunito } from "next/font/google"; 
import "./globals.css";
import CommandPalette from "@/components/CommandPalette";
import CookieConsent from "@/components/CookieConsent";
import { LanguageProvider } from "@/context/LanguageContext";
import AiChat from "@/components/AiChat"; // YENİ: AI Asistanı ekledik

const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  variable: "--font-nunito", 
});

// --- SEO AYARLARI ---
export const metadata: Metadata = {
  title: {
    default: "ON7 Yazılım | Geleceği Kodluyoruz",
    template: "%s | ON7 Yazılım" 
  },
  description: "Hacettepe Teknokent merkezli teknoloji şirketi. Özel yazılım, mobil uygulama, IoT çözümleri ve Okinar LMS sistemleri.",
  keywords: ["Yazılım Firması Ankara", "Okinar", "LMS", "Mobil Uygulama", "Web Tasarım", "Teknokent"],
  authors: [{ name: "ON7 Yazılım Ekibi" }],
  icons: {
    icon: "/favicon.ico", 
  },
  openGraph: {
    title: "ON7 Yazılım | Geleceği Kodluyoruz",
    description: "Projelerinizi dijital gerçekliğe dönüştüren Hacettepe Teknokent merkezli teknoloji üssü.",
    url: "https://on7yazilim.com", 
    siteName: "ON7 Yazılım",
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
    <html lang="tr" className="scroll-smooth">
      <body className={`${nunito.className} ${nunito.variable} font-sans`}>
        
        <LanguageProvider>
            <CommandPalette />  {/* Ctrl+K Komut Merkezi */}
            <CookieConsent />   {/* Çerez Uyarısı */}
            <AiChat />          {/* YENİ: Yapay Zeka Asistanı (Sağ Alt) */}
            {children}
        </LanguageProvider>

      </body>
    </html>
  );
}