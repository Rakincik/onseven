"use client";
import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";

// Şimdilik temsili fotolar
const team = [
  { name: "Ad Soyad", role: "Kurucu & Yazılım Mimarı", img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop" },
  { name: "Ad Soyad", role: "Frontend Geliştirici", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop" },
  { name: "Ad Soyad", role: "UI/UX Tasarımcı", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop" },
  { name: "Ad Soyad", role: "Backend Geliştirici", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
];

export default function Team() {
  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-4">
            <div>
                <span className="text-brand-yellow font-bold tracking-widest text-sm">TAKIM ARKADAŞLARIMIZ</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Bu İşin Mutfağındayız</h2>
            </div>
            <button className="text-gray-400 hover:text-white underline decoration-brand-yellow underline-offset-4 transition-colors">
                Ekibe Katılmak İster misin?
            </button>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl"
            >
              {/* Resim */}
              <div className="aspect-square overflow-hidden bg-zinc-900">
                <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
              </div>
              
              {/* Overlay Bilgi */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-lg">{member.name}</h3>
                <p className="text-brand-yellow text-sm">{member.role}</p>
                <div className="flex gap-3 mt-3">
                    <Linkedin size={18} className="text-gray-300 hover:text-white cursor-pointer" />
                    <Github size={18} className="text-gray-300 hover:text-white cursor-pointer" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}