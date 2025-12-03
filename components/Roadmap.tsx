"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Flag, Code2, Building2, Globe, Rocket } from "lucide-react";

const milestones = [
  {
    year: "2021",
    title: "Merhaba Dünya",
    desc: "Ankara'da, bir garaj ofiste 3 kişilik dev bir kadroyla yola çıktık. İlk satır kodumuzu yazdık.",
    icon: <Flag size={20} />,
  },
  {
    year: "2022",
    title: "İlk Kurumsal İmza",
    desc: "Sektörün önde gelen lojistik firmalarından biri için ilk büyük ölçekli ERP yazılımımızı teslim ettik.",
    icon: <Code2 size={20} />,
  },
  {
    year: "2023",
    title: "Okinar'ın Doğuşu",
    desc: "Uzaktan eğitimdeki açığı fark ettik. %100 yerli video konferans altyapısı için Ar-Ge çalışmalarını başlattık.",
    icon: <Rocket size={20} />,
  },
  {
    year: "2024",
    title: "Teknokent & Büyüme",
    desc: "Hacettepe Teknokent bünyesine kabul edildik. Okinar, 50+ kurumda aktif kullanılmaya başlandı.",
    icon: <Building2 size={20} />,
  },
  {
    year: "2025",
    title: "Global Vizyon",
    desc: "SaaS ürünlerimizi Avrupa pazarına açmak için İngiltere ofis çalışmalarına start verdik. Geleceği kodlamaya devam ediyoruz.",
    icon: <Globe size={20} />,
  },
];

export default function Roadmap() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Çizginin dolma efekti
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Yolculuğumuz</h2>
            <p className="text-gray-400">Dünden bugüne, bugünden yarına.</p>
        </div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          
          {/* ORTA ÇİZGİ (YOL) */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-zinc-800 rounded-full md:-translate-x-1/2">
            {/* DOLAN NEON ÇİZGİ */}
            <motion.div 
                style={{ height: lineHeight }}
                className="w-full bg-brand-yellow shadow-[0_0_15px_#FFD700] rounded-full origin-top"
            />
          </div>

          {/* MILESTONES */}
          <div className="space-y-12 md:space-y-24">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                
                {/* İÇERİK KUTUSU */}
                <div className="flex-1 pl-12 md:pl-0 md:text-right">
                    {index % 2 === 0 ? ( // SAĞDAKİLER (Masaüstünde)
                        <div className="md:text-left">
                            <span className="text-brand-yellow font-black text-5xl md:text-6xl opacity-20 absolute -top-4 -left-4 md:left-auto md:-right-4 z-0">{item.year}</span>
                            <div className="relative z-10 bg-zinc-900/50 border border-white/5 p-6 rounded-2xl hover:border-brand-yellow/30 transition-colors">
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ) : ( // SOLDAKİLER (Masaüstünde)
                        <div>
                            <span className="text-brand-yellow font-black text-5xl md:text-6xl opacity-20 absolute -top-4 -left-4 z-0">{item.year}</span>
                            <div className="relative z-10 bg-zinc-900/50 border border-white/5 p-6 rounded-2xl hover:border-brand-yellow/30 transition-colors">
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* ORTA NOKTA (İKON) */}
                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 bg-black border-2 border-zinc-700 rounded-full flex items-center justify-center text-gray-500 z-20 group hover:border-brand-yellow hover:text-brand-yellow hover:scale-110 transition-all shadow-[0_0_0_4px_#050505]">
                    {item.icon}
                </div>

                {/* BOŞLUK (Dengelemek için) */}
                <div className="flex-1 hidden md:block"></div>

              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}