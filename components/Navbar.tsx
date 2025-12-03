"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Search, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext"; // DİL SİSTEMİ

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  // DİL SİSTEMİNİ ÇAĞIRIYORUZ
  const { language, setLanguage, t } = useLanguage();

  // Linkleri artık sözlükten (dictionary) alıyoruz
  const navLinks = [
    { name: t.navbar.about, href: "/hakkimizda" },
    { name: t.navbar.okinar, href: "/okinar" },
    { name: t.navbar.services, href: "/hizmetler" },
    { name: t.navbar.blog, href: "/blog" },
    { name: t.navbar.contact, href: "/iletisim" }, // <--- DÜZELTİLDİ: Artık "/iletisim" sayfasına gidiyor
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // DİL DEĞİŞTİRME FONKSİYONU
  const toggleLanguage = () => {
    setLanguage(language === "tr" ? "en" : "tr");
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-1 group">
            <span className="text-3xl font-black text-white tracking-wide group-hover:text-gray-200 transition-colors" style={{fontFamily: 'var(--font-nunito)'}}>ON</span>
            <span className="text-4xl font-black text-brand-yellow -mt-1 group-hover:scale-110 transition-transform duration-300" style={{fontFamily: 'var(--font-nunito)'}}>7</span>
            <span className="ml-2 text-lg font-light text-gray-300 tracking-[0.2em] self-end mb-1">YAZILIM</span>
        </Link>

        {/* MASAÜSTÜ MENÜ */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="text-gray-400 hover:text-brand-yellow transition-colors text-sm font-bold tracking-wide relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-yellow transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          
          {/* --- DİL DEĞİŞTİRME BUTONU --- */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-xs font-bold text-gray-400 hover:text-white transition-colors border border-white/20 px-2 py-1 rounded hover:border-brand-yellow"
          >
            <Globe size={14} />
            <span>{language === "tr" ? "EN" : "TR"}</span>
          </button>

          {/* Arama Butonu */}
          <button 
            onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'k', 'metaKey': true}))}
            className="p-2 text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
            title="Ara (Ctrl+K)"
          >
            <Search size={20} />
          </button>

          {/* Teklif Al Butonu */}
          <Link 
            href="/teklif-al" 
            className="px-6 py-2 bg-brand-yellow text-black font-bold text-sm rounded hover:bg-white transition-all shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:scale-105 active:scale-95"
          >
            {t.navbar.quote} 
          </Link>
        </div>

        {/* MOBİL MENÜ BUTONU */}
        <div className="flex items-center gap-4 md:hidden">
            {/* Mobilde de dil değişsin */}
            <button onClick={toggleLanguage} className="text-xs font-bold text-gray-400 border border-white/20 px-2 py-1 rounded">
                {language === "tr" ? "EN" : "TR"}
            </button>
            <button className="text-white hover:text-brand-yellow transition-colors" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
        </div>
      </div>

      {/* MOBİL MENÜ AÇILIR ALANI */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950 border-t border-zinc-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  className="text-xl font-bold text-gray-300 hover:text-brand-yellow flex items-center justify-between group"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  <span className="w-2 h-2 rounded-full bg-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Link>
              ))}
              <Link 
                href="/teklif-al"
                onClick={() => setIsOpen(false)}
                className="w-full bg-brand-yellow text-black font-bold py-4 rounded text-center"
              >
                {t.navbar.quote}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}