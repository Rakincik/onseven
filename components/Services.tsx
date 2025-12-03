"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { 
  Code2, Smartphone, Cpu, Palette, 
  Cloud, Database, ArrowUpRight, Lock 
} from "lucide-react";
import Link from "next/link";

// HİZMET VERİLERİ
const services = [
  {
    id: 1,
    title: "Web & Web App",
    desc: "Sadece bir web sitesi değil, yaşayan dijital platformlar kuruyoruz. Yüksek performanslı, SEO dostu ve ölçeklenebilir mimariler.",
    icon: <Code2 size={32} />,
    tags: ["Next.js", "React", "Kurumsal Site", "Dashboard"],
    colSpan: "md:col-span-2", // Geniş Kutu
    link: "/teklif-al"
  },
  {
    id: 2,
    title: "Mobil Uygulama",
    desc: "iOS ve Android dünyasında yerinizi alın. Kullanıcı deneyimi (UX) odaklı, native performansında çalışan mobil çözümler.",
    icon: <Smartphone size={32} />,
    tags: ["Flutter", "React Native", "iOS", "Android"],
    colSpan: "md:col-span-1", // Kare Kutu
    link: "/teklif-al"
  },
  {
    id: 3,
    title: "IoT & Gömülü Sistem",
    desc: "Yazılımı fiziksel dünyayla buluşturuyoruz. Akıllı sensörler, otomasyon sistemleri ve donanım haberleşmesi.",
    icon: <Cpu size={32} />,
    tags: ["MQTT", "Arduino", "Raspberry Pi", "Python"],
    colSpan: "md:col-span-1",
    link: "/teklif-al"
  },
  {
    id: 4,
    title: "SaaS & E-Ticaret",
    desc: "Ürünlerinizi dijitalde satın. Özel ödeme sistemleri, stok takibi ve gelişmiş admin panelleriyle işinizi büyütün.",
    icon: <Database size={32} />,
    tags: ["Sanal Pos", "Paryaz", "Stok API", "CRM"],
    colSpan: "md:col-span-2",
    link: "/teklif-al"
  },
  {
    id: 5,
    title: "UI/UX Tasarım",
    desc: "Kodlamadan önce tasarlıyoruz. Modern arayüzler ve kusursuz kullanıcı yolculukları (User Flow).",
    icon: <Palette size={32} />,
    tags: ["Figma", "Prototip", "Design System"],
    colSpan: "md:col-span-1",
    link: "/teklif-al"
  },
  {
    id: 6,
    title: "Siber Güvenlik & DevOps",
    desc: "Sistemleriniz kale gibi korunsun. Sunucu optimizasyonu, güvenlik testleri ve bulut mimarisi.",
    icon: <Lock size={32} />,
    tags: ["AWS", "Docker", "Pentest", "SSL"],
    colSpan: "md:col-span-2",
    link: "/teklif-al"
  }
];

export default function Services() {
  return (
    <section id="hizmetler" className="py-24 bg-zinc-950 relative overflow-hidden">
      
      {/* Arka Plan Deseni */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Başlık */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
                <span className="text-brand-yellow font-bold tracking-widest text-sm mb-2 block">HİZMETLERİMİZ</span>
                <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                    Dijitalin Her <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-200">Alanında Varız.</span>
                </h2>
            </div>
            <p className="text-gray-400 max-w-md text-lg leading-relaxed text-right md:text-left">
                Fikirden ürüne giden yolda, ihtiyacınız olan tüm teknoloji yığınlarına (Tech Stack) hakimiz.
            </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        {/* Alt Mesaj */}
        <div className="mt-16 text-center">
            <p className="text-gray-500 mb-4">Aradığınız hizmeti bulamadınız mı?</p>
            <Link 
                href="/iletisim" 
                className="inline-flex items-center gap-2 text-brand-yellow font-bold border-b border-brand-yellow pb-1 hover:text-white hover:border-white transition-all"
            >
                Özel Proje Talebi Oluşturun <ArrowUpRight size={18} />
            </Link>
        </div>

      </div>
    </section>
  );
}

// KART BİLEŞENİ (Spotlight Efektli)
function ServiceCard({ service }: { service: any }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative rounded-3xl border border-white/10 bg-[#0f1115] overflow-hidden group ${service.colSpan}`}
    >
      {/* SPOTLIGHT EFEKTİ (Mouse Takip Eden Işık) */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255, 215, 0, 0.15), transparent 40%)`,
        }}
      />
      
      {/* İÇERİK */}
      <div className="relative h-full p-8 flex flex-col justify-between z-10">
        
        <div>
            {/* İkon Kutusu */}
            <div className="w-14 h-14 bg-zinc-900 rounded-2xl border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-brand-yellow group-hover:border-brand-yellow/50 group-hover:scale-110 transition-all duration-300 mb-6 shadow-lg">
                {service.icon}
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-yellow transition-colors">
                {service.title}
            </h3>
            
            <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                {service.desc}
            </p>
        </div>

        {/* Etiketler ve Link */}
        <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-6">
                {service.tags.map((tag: string, i: number) => (
                    <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-gray-500 border border-white/5 group-hover:border-white/20 group-hover:text-gray-300 transition-colors">
                        {tag}
                    </span>
                ))}
            </div>
            
            <Link 
                href={service.link}
                className="flex items-center gap-2 text-sm font-bold text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
            >
                Detaylı İncele <ArrowUpRight size={16} className="text-brand-yellow" />
            </Link>
        </div>

      </div>
    </motion.div>
  );
}