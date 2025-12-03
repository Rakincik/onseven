"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, ShieldCheck, X } from "lucide-react";
import Link from "next/link";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Daha önce kabul etmediyse 2 saniye sonra göster
    const consent = localStorage.getItem("on7-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("on7-cookie-consent", "true");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="fixed bottom-4 left-4 right-4 md:left-8 md:bottom-8 md:max-w-md z-[9999]"
        >
          <div className="bg-[#0f1115]/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl relative overflow-hidden">
            
            {/* Dekoratif Glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-yellow/10 rounded-full blur-[50px]"></div>

            <div className="flex items-start gap-4 relative z-10">
              <div className="bg-zinc-900 p-3 rounded-xl border border-white/5 text-brand-yellow">
                <Cookie size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                  Çerez Tercihleri <ShieldCheck size={14} className="text-green-500"/>
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  Size daha iyi bir deneyim sunmak (ve biraz da hava atmak) için çerezleri kullanıyoruz. 
                  Detaylar için <Link href="/yasal/gizlilik" className="text-brand-yellow hover:underline">Gizlilik Politikası</Link>'nı inceleyebilirsiniz.
                </p>
                
                <div className="flex gap-3">
                  <button 
                    onClick={handleAccept}
                    className="flex-1 bg-brand-yellow text-black text-xs font-bold py-2.5 rounded-lg hover:bg-white transition-colors shadow-[0_0_15px_rgba(255,215,0,0.2)]"
                  >
                    KABUL ET
                  </button>
                  <button 
                    onClick={() => setShow(false)}
                    className="flex-1 bg-white/5 text-white text-xs font-bold py-2.5 rounded-lg hover:bg-white/10 transition-colors border border-white/5"
                  >
                    REDDET
                  </button>
                </div>
              </div>
              
              <button onClick={() => setShow(false)} className="text-gray-500 hover:text-white absolute -top-2 -right-2 p-2">
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}