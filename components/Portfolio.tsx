"use client";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowUpRight, Layers } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    slug: "e-ticaret-devrimi", // Detay sayfası için ID
    title: "E-Ticaret Devrimi",
    category: "Web & Mobil",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
    desc: "Yapay zeka destekli ürün öneri sistemi ile %40 satış artışı.",
    year: "2024"
  },
  {
    slug: "akilli-sehir",
    title: "Akıllı Şehir Paneli",
    category: "IoT Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    desc: "Şehir trafiğini anlık izleyen ve yöneten merkezi sistem.",
    year: "2024"
  },
  {
    slug: "finans-cuzdani",
    title: "Finans Cüzdanı",
    category: "Fintech App",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    desc: "Kripto ve borsa takibi için end-to-end şifreli mobil cüzdan.",
    year: "2023"
  },
  {
    slug: "saglik-asistani",
    title: "Sağlık Asistanı",
    category: "Yapay Zeka",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    desc: "Hastaneler için randevu, triyaj ve hasta takip otomasyonu.",
    year: "2023"
  },
  {
    slug: "lojistik-takip",
    title: "Global Lojistik",
    category: "SaaS Platform",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    desc: "Uluslararası kargo takibi için bulut tabanlı yönetim paneli.",
    year: "2022"
  }
];

export default function Portfolio() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section id="projeler" className="py-24 bg-zinc-950 overflow-hidden relative border-t border-white/5">
      
      {/* Arka Plan Süslemesi */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-yellow/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6 relative z-10">
        <div>
           <div className="flex items-center gap-2 mb-3">
             <Layers className="text-brand-yellow" size={20} />
             <span className="text-brand-yellow font-bold tracking-widest text-sm">PORTFOLYO</span>
           </div>
           <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
             Seçilmiş <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">İşler.</span>
           </h2>
        </div>
        <div className="hidden md:flex items-center gap-4 text-gray-500 text-sm font-mono">
           <span>SÜRÜKLE</span>
           <div className="w-16 h-[1px] bg-gray-700"></div>
           <span>KEŞFET</span>
        </div>
      </div>

      <div className="pl-6 md:pl-0 relative z-10">
        <motion.div 
            ref={carousel} 
            className="cursor-grab active:cursor-grabbing overflow-hidden"
            whileTap={{ cursor: "grabbing" }}
        >
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }} 
            className="flex gap-8 w-max px-6 md:px-20 pb-12" // pb artırıldı, gölge kesilmesin diye
          >
            {projects.map((project, index) => (
              <Link 
                href={`/projeler/${project.slug}`} 
                key={index}
                className="block" // Link'i blok yapıyoruz ki sarmalasın
              >
                <motion.div 
                  className="relative min-w-[320px] md:min-w-[500px] h-[450px] rounded-3xl overflow-hidden group border border-white/10 bg-zinc-900"
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  {/* Görsel */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        loading="lazy"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    {/* Görsel Üzeri Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Yıl Rozeti */}
                  <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs text-white font-mono z-20">
                    {project.year}
                  </div>

                  {/* Kategori */}
                  <div className="absolute top-6 left-6 z-20">
                    <span className="px-3 py-1 bg-brand-yellow text-black text-xs font-bold uppercase tracking-wider rounded-sm">
                        {project.category}
                    </span>
                  </div>
                  
                  {/* Alt İçerik Alanı */}
                  <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-brand-yellow transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {project.desc}
                      </p>
                      
                      <div className="flex items-center gap-2 text-white text-sm font-bold border-b border-white/30 pb-1 w-max group-hover:border-brand-yellow group-hover:text-brand-yellow transition-all">
                          İncele <ArrowUpRight size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}