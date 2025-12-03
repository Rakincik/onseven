"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import { 
  Code2, Smartphone, Cpu, Palette, Database, Lock, 
  CheckCircle2, ArrowRight, Layers, Zap, Globe 
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// DETAYLI HİZMET VERİLERİ
const servicesData = [
  {
    id: "web",
    title: "Web Geliştirme & Web App",
    subtitle: "Modern Web Mimarisi",
    desc: "Standart web sitelerinin ötesine geçiyoruz. React ve Next.js altyapısıyla, uygulama hızında çalışan (SPA), SEO uyumlu ve yüksek dönüşüm odaklı dijital platformlar inşa ediyoruz.",
    features: ["Kurumsal Web Siteleri", "Özel Web Uygulamaları (Dashboard)", "PWA (Progressive Web Apps)", "API Entegrasyonları"],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind"],
    icon: <Globe size={40} />,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80"
  },
  {
    id: "mobile",
    title: "Mobil Uygulama",
    subtitle: "iOS & Android Dünyası",
    desc: "Fikriniz cebinizde olsun. Flutter teknolojisi ile hem iOS hem de Android için tek kod tabanından, native performansında çalışan, akıcı ve şık mobil uygulamalar geliştiriyoruz.",
    features: ["iOS & Android (Cross-Platform)", "Native Modül Geliştirme", "Uygulama İçi Satın Alma", "Harita ve Konum Servisleri"],
    stack: ["Flutter", "Dart", "Firebase", "RevenueCat", "Google Maps API"],
    icon: <Smartphone size={40} />,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80"
  },
  {
    id: "iot",
    title: "IoT & Gömülü Sistemler",
    subtitle: "Donanım ve Yazılımın Dansı",
    desc: "Yazılımı fiziksel dünyaya taşıyoruz. Sensörlerden veri okuyan, uzaktan kontrol edilebilen akıllı cihazlar ve endüstriyel otomasyon sistemleri kuruyoruz.",
    features: ["MQTT Haberleşme Protokolleri", "Sensör Veri Analizi", "Uzaktan Kontrol Panelleri", "Gömülü Linux Sistemleri"],
    stack: ["Python", "C++", "Raspberry Pi", "Arduino", "MQTT"],
    icon: <Cpu size={40} />,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80"
  },
  {
    id: "design",
    title: "UI/UX Tasarım",
    subtitle: "Kullanıcı Deneyimi Mühendisliği",
    desc: "Kod yazmadan önce kalem oynatıyoruz. Kullanıcıların uygulamanızda kaybolmadan, hedeflerine en kısa yoldan ulaşmasını sağlayan sezgisel arayüzler tasarlıyoruz.",
    features: ["Wireframing & Prototip", "Kullanıcı Testleri", "Design System Oluşturma", "Mobile-First Tasarım"],
    stack: ["Figma", "Adobe XD", "Protopie", "Illustrator"],
    icon: <Palette size={40} />,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80"
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-brand-yellow selection:text-black font-sans">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Arka Plan */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-yellow/5 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-yellow font-bold tracking-widest text-sm mb-4 block">ON7 SOLUTIONS</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              Teknoloji, Sanat ve <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-yellow to-white">Mühendislik.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              İhtiyacınız olan sadece kod yazmak değil; işinizi büyütecek, ölçeklenebilir ve sürdürülebilir dijital sistemler kurmaktır.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- DETAYLI HİZMET LİSTESİ (ZİKZAK YAPI) --- */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-6">
          {servicesData.map((service, index) => (
            <div 
                key={service.id} 
                className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-32 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
                {/* Metin Alanı */}
                <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="md:w-1/2"
                >
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="p-3 bg-brand-yellow/10 rounded-xl text-brand-yellow border border-brand-yellow/20">
                            {service.icon}
                        </div>
                        <span className="text-gray-500 font-mono text-sm uppercase tracking-wider">{service.subtitle}</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black mb-6">{service.title}</h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        {service.desc}
                    </p>

                    <div className="mb-8">
                        <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                            <Layers size={18} className="text-brand-yellow"/> Neler Yapıyoruz?
                        </h4>
                        <ul className="space-y-3">
                            {service.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-6 bg-zinc-900 rounded-xl border border-white/5">
                        <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider">Teknoloji Yığını</h4>
                        <div className="flex flex-wrap gap-2">
                            {service.stack.map((tech, i) => (
                                <span key={i} className="px-3 py-1 bg-black border border-white/10 rounded text-xs font-mono text-gray-400 hover:text-brand-yellow hover:border-brand-yellow/50 transition-colors cursor-default">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Görsel Alanı */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="md:w-1/2 relative group"
                >
                    <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                        {/* Görsel */}
                        <Image 
                            src={service.image} 
                            alt={service.title} 
                            fill 
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        
                        {/* Dekoratif Kod Bloğu */}
                        <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10 font-mono text-xs text-gray-400 hidden md:block transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="flex gap-1.5 mb-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                            </div>
                            <p><span className="text-purple-400">const</span> <span className="text-blue-400">solution</span> = <span className="text-yellow-400">new</span> {service.title.split(" ")[0]}();</p>
                            <p><span className="text-blue-400">solution</span>.<span className="text-yellow-200">init</span>(<span className="text-green-400">"Perfect"</span>);</p>
                        </div>
                    </div>
                    {/* Arka Glow */}
                    <div className={`absolute -inset-4 bg-brand-yellow/5 rounded-3xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SÜREÇ (NASIL ÇALIŞIYORUZ) --- */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black mb-6">Çalışma Metodolojimiz</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Şeffaf, planlı ve sonuç odaklı. Projenizin her aşamasında sizi bilgilendiriyor, sürprizlere yer bırakmıyoruz.
                </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
                {[
                    { title: "1. Analiz & Keşif", desc: "İhtiyaçlarınızı dinler, pazar araştırması yapar ve yol haritasını çizeriz." },
                    { title: "2. UI/UX Tasarım", desc: "Prototip aşamasıyla projenin son halini kodlamadan önce görürsünüz." },
                    { title: "3. Kodlama (Dev)", desc: "En son teknolojilerle, temiz ve ölçeklenebilir kod yazarız." },
                    { title: "4. Test & Canlı", desc: "Tüm testleri tamamlar ve projenizi dünyaya açarız." }
                ].map((step, i) => (
                    <div key={i} className="relative p-6 bg-zinc-900 rounded-xl border border-white/5 group hover:border-brand-yellow/50 transition-colors">
                        <div className="text-5xl font-black text-white/5 absolute top-2 right-4 group-hover:text-brand-yellow/10 transition-colors">0{i+1}</div>
                        <h3 className="text-xl font-bold text-white mb-3 relative z-10">{step.title}</h3>
                        <p className="text-gray-400 text-sm relative z-10">{step.desc}</p>
                        
                        {/* Çizgi Bağlantısı (Mobilde Gizli) */}
                        {i < 3 && (
                            <div className="hidden md:block absolute top-1/2 -right-6 w-4 h-0.5 bg-zinc-800"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 bg-brand-yellow text-black text-center">
        <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Hazır Mısınız?</h2>
            <p className="mb-10 text-xl font-medium opacity-80">
                Aklınızdaki projeyi gerçeğe dönüştürmek için ihtiyacınız olan ekip burada.
            </p>
            <Link href="/teklif-al" className="inline-flex items-center gap-2 px-10 py-4 bg-black text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all shadow-xl">
                Projeyi Başlat <Zap size={20} />
            </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}