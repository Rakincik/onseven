"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import { Briefcase, Coffee, Laptop, Globe, Zap, Heart, ArrowRight, Code2 } from "lucide-react";

const benefits = [
  { icon: <Laptop size={24} />, title: "Son Teknoloji Donanım", desc: "En iyi kodu yazman için altına en iyi makineyi (MacBook Pro/M2) veriyoruz." },
  { icon: <Globe size={24} />, title: "Hibrit / Uzaktan Çalışma", desc: "İster Hacettepe Teknokent ofisinden, ister evinden çalış. Önemli olan verim." },
  { icon: <Coffee size={24} />, title: "Sınırsız Kahve & Snack", desc: "Ofiste enerji hiç bitmez. Mutfak her zaman dolu." },
  { icon: <Zap size={24} />, title: "Eğitim Desteği", desc: "Udemy, Coursera veya kitap... Kendini geliştirmek istediğin her şey bizden." },
];

const positions = [
  {
    title: "Senior Frontend Developer",
    type: "Tam Zamanlı",
    location: "Ankara / Hibrit",
    stack: "React, Next.js, Tailwind",
    desc: "Modern web teknolojilerine hakim, pixel-perfect tasarım takıntısı olan arayüz mimarları arıyoruz."
  },
  {
    title: "Backend Developer (Node.js)",
    type: "Tam Zamanlı",
    location: "Uzaktan",
    stack: "Node.js, PostgreSQL, Docker",
    desc: "Ölçeklenebilir API'lar tasarlayacak, veritabanı mimarisine hakim takım arkadaşı."
  },
  {
    title: "UI/UX Designer",
    type: "Yarı Zamanlı / Freelance",
    location: "Uzaktan",
    stack: "Figma, Adobe Suite",
    desc: "Sadece güzel değil, kullanılabilir arayüzler tasarlayan yaratıcı zihinler."
  },
  {
    title: "Stajyer Yazılımcı",
    type: "Staj",
    location: "Ankara",
    stack: "Öğrenmeye Açık",
    desc: "Geleceğin yıldızlarını yetiştirmek üzere, tutkulu ve meraklı stajyerler arıyoruz."
  }
];

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-brand-yellow selection:text-black font-sans">
      <Navbar />

      {/* --- HERO --- */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-yellow/5 rounded-full blur-[120px] -z-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-yellow font-bold tracking-widest text-sm mb-4 block">KARİYER FIRSATLARI</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              Kodun Mimarı <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-yellow to-white">Sen Ol.</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Sıradan bir iş değil, bir kariyer yolculuğu vadediyoruz. ON7 ekibine katıl, geleceği birlikte inşa edelim.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- NEDEN BİZ? (AVANTAJLAR) --- */}
      <section className="py-20 bg-zinc-950 border-y border-white/5">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((item, index) => (
                    <div key={index} className="p-6 bg-black rounded-2xl border border-white/5 hover:border-brand-yellow/30 transition-colors group">
                        <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center text-gray-400 group-hover:text-brand-yellow group-hover:scale-110 transition-all mb-4">
                            {item.icon}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- AÇIK POZİSYONLAR --- */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Açık Pozisyonlar</h2>
            
            <div className="space-y-4">
                {positions.map((pos, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-brand-yellow hover:bg-zinc-900 transition-all cursor-pointer relative overflow-hidden"
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10">
                            <div>
                                <h3 className="text-xl font-bold text-white group-hover:text-brand-yellow transition-colors">{pos.title}</h3>
                                <div className="flex gap-3 text-xs font-mono text-gray-500 mt-2">
                                    <span className="bg-black px-2 py-1 rounded border border-white/10">{pos.type}</span>
                                    <span className="bg-black px-2 py-1 rounded border border-white/10">{pos.location}</span>
                                </div>
                            </div>
                            <div className="text-right hidden md:block">
                                <div className="flex items-center gap-1 text-sm font-bold text-gray-400 mb-1">
                                    <Code2 size={14} className="text-brand-yellow"/> Tech Stack
                                </div>
                                <div className="text-xs text-gray-500">{pos.stack}</div>
                            </div>
                        </div>
                        
                        <p className="mt-4 text-gray-400 text-sm max-w-xl group-hover:text-gray-300 transition-colors">
                            {pos.desc}
                        </p>

                        {/* Başvur Butonu (Hoverda Çıkar) */}
                        <div className="mt-6 flex justify-end md:absolute md:right-6 md:top-1/2 md:-translate-y-1/2 md:opacity-0 md:translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                            <a href="mailto:ik@on7yazilim.com" className="px-6 py-2 bg-brand-yellow text-black font-bold rounded-lg flex items-center gap-2 hover:bg-white transition-colors">
                                Başvur <ArrowRight size={16}/>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* GENEL BAŞVURU */}
            <div className="mt-12 p-8 bg-gradient-to-r from-zinc-900 to-black border border-white/10 rounded-2xl text-center">
                <h3 className="text-xl font-bold text-white mb-2">Kendine Uygun Bir Pozisyon Bulamadın mı?</h3>
                <p className="text-gray-400 text-sm mb-6">Yine de tanışmak isteriz. CV'ni gönder, veritabanımıza ekleyelim.</p>
                <a href="mailto:ik@on7yazilim.com" className="inline-flex items-center gap-2 text-brand-yellow font-bold border-b border-brand-yellow pb-1 hover:text-white hover:border-white transition-all">
                    Genel Başvuru Yap <Heart size={16} />
                </a>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}