"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden text-white selection:bg-red-500 selection:text-white">
      
      {/* Arka Plan Gürültüsü (Noise) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      
      {/* Glitch Efekti İçin CSS (Inline) */}
      <style jsx>{`
        @keyframes glitch {
          2%, 64% { transform: translate(2px,0) skew(0deg); }
          4%, 60% { transform: translate(-2px,0) skew(0deg); }
          62% { transform: translate(0,0) skew(5deg); }
        }
        .glitch-text {
          animation: glitch 1s linear infinite;
        }
      `}</style>

      <div className="relative z-10 text-center px-6">
        
        {/* Uyarı İkonu */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="w-24 h-24 bg-red-500/10 border border-red-500/50 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <AlertTriangle size={48} className="text-red-500" />
        </motion.div>

        {/* Hata Kodu */}
        <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-800 tracking-tighter glitch-text">
          404
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold mt-4 mb-6 text-red-500 uppercase tracking-widest">
          Sistem Hatası
        </h2>

        <p className="text-gray-400 max-w-md mx-auto mb-10 leading-relaxed">
          Aradığınız veri bloğu uzay boşluğunda kaybolmuş veya silinmiş olabilir. Koordinatlarınızı kontrol edin.
        </p>

        {/* Ana Sayfaya Dön Butonu */}
        <Link 
          href="/" 
          className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-black transition-all duration-200 bg-brand-yellow font-pj rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        >
          <div className="absolute -inset-3 transition-all duration-1000 opacity-30 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <span className="relative flex items-center gap-2">
             <Home size={20} /> Ana Üsse Dön
          </span>
        </Link>

      </div>

      {/* Alt Dekorasyon */}
      <div className="absolute bottom-10 text-[10px] font-mono text-gray-600 uppercase tracking-[0.5em]">
        Error_Code: PAGE_NOT_FOUND_EXCEPTION
      </div>

    </main>
  );
}