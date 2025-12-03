"use client";
import { motion } from "framer-motion";
import { Building2, Coffee, Zap, ShoppingBag, Dumbbell, Briefcase } from "lucide-react";

// Temsili Müşteriler (Senin projelerinden esinlendim)
const clients = [
  { name: "Gül Antik Kafe", icon: <Coffee size={24} /> },
  { name: "4T Akademi", icon: <Building2 size={24} /> },
  { name: "Meetzy App", icon: <Zap size={24} /> },
  { name: "Budi Fresh", icon: <ShoppingBag size={24} /> },
  { name: "Ice Sopranos", icon: <Dumbbell size={24} /> },
  { name: "Tech Ankara", icon: <Briefcase size={24} /> },
  // Döngü pürüzsüz olsun diye tekrar ekliyoruz
  { name: "Gül Antik Kafe", icon: <Coffee size={24} /> },
  { name: "4T Akademi", icon: <Building2 size={24} /> },
  { name: "Meetzy App", icon: <Zap size={24} /> },
  { name: "Budi Fresh", icon: <ShoppingBag size={24} /> },
];

export default function Clients() {
  return (
    <section className="py-10 bg-black border-b border-white/5 overflow-hidden relative z-20">
      
      <div className="container mx-auto px-6 mb-6 text-center">
        <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">
            GÜVENİLEN İŞ ORTAKLARIMIZ
        </p>
      </div>

      {/* Kenarlarda Yumuşak Geçiş (Fade) */}
      <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-black to-transparent z-10"></div>

      <div className="flex relative">
        <motion.div 
          className="flex gap-12 md:gap-24 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
        >
          {/* LOGOLAR (Sonsuz döngü için listeyi 2 kere map ediyoruz) */}
          {[...clients, ...clients].map((client, index) => (
            <div 
                key={index} 
                className="flex items-center gap-3 text-gray-600 hover:text-white transition-colors duration-300 group cursor-pointer grayscale hover:grayscale-0"
            >
              {/* İkon Logosu */}
              <div className="p-3 rounded-xl bg-zinc-900/50 border border-white/5 group-hover:border-brand-yellow/50 group-hover:bg-brand-yellow/10 group-hover:text-brand-yellow transition-all">
                {client.icon}
              </div>
              
              {/* İsim */}
              <span className="text-xl font-black tracking-tight group-hover:text-white">
                {client.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}