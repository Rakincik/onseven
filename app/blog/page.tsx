"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Hash } from "lucide-react";

// Temsili Blog Verileri
const posts = [
  {
    slug: "yapay-zeka-ve-gelecek",
    title: "Yapay Zeka: İş Dünyasını Nasıl Değiştiriyor?",
    excerpt: "AI teknolojileri sadece bir trend değil, operasyonel verimliliğin yeni anahtarı. İşletmeler buna nasıl adapte olmalı?",
    category: "Yapay Zeka",
    date: "25 Kasım 2024",
    readTime: "5 dk",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
  },
  {
    slug: "modern-web-teknolojileri",
    title: "Next.js 14 ve Server Actions Devrimi",
    excerpt: "React ekosistemindeki son gelişmeler, web performansını ve SEO skorlarını nasıl zirveye taşıyor?",
    category: "Yazılım",
    date: "20 Kasım 2024",
    readTime: "8 dk",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80"
  },
  {
    slug: "iot-akilli-sehirler",
    title: "Nesnelerin İnterneti (IoT) ile Akıllı Şehirler",
    excerpt: "Şehir trafiğinden enerji yönetimine kadar sensörler hayatımızı nasıl kolaylaştırıyor?",
    category: "IoT / Donanım",
    date: "15 Kasım 2024",
    readTime: "6 dk",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80"
  },
  {
    slug: "siber-guvenlik",
    title: "Kurumsal Veri Güvenliğinde Sıfır Güven (Zero Trust)",
    excerpt: "Artık 'içeridekine güven' devri bitti. Modern güvenlik mimarilerinde Zero Trust yaklaşımı.",
    category: "Siber Güvenlik",
    date: "10 Kasım 2024",
    readTime: "4 dk",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
  }
];

export default function BlogListing() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-brand-yellow selection:text-black font-sans">
      <Navbar />

      {/* HEADER */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-[120px] -z-10"></div>
        <div className="container mx-auto px-6 text-center">
            <span className="text-brand-yellow font-bold tracking-widest text-sm mb-4 block">ON7 BLOG</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6">Teknoloji Günlükleri</h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Yazılım dünyasındaki son trendler, teknik analizler ve ON7 mühendislerinin kaleminden notlar.
            </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10">
                {posts.map((post, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Link href={`/blog/${post.slug}`} className="group block bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-yellow/50 transition-all duration-300 h-full flex flex-col">
                            {/* Görsel Alanı */}
                            <div className="h-64 overflow-hidden relative">
                                <img 
                                    src={post.image} 
                                    alt={post.title} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur px-3 py-1 rounded text-xs font-bold text-brand-yellow border border-white/10">
                                    {post.category}
                                </div>
                            </div>

                            {/* İçerik */}
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-mono">
                                    <span className="flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                                    <span className="flex items-center gap-1"><Clock size={12}/> {post.readTime} Okuma</span>
                                </div>

                                <h2 className="text-2xl font-bold mb-4 group-hover:text-brand-yellow transition-colors leading-tight">
                                    {post.title}
                                </h2>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:translate-x-2 transition-transform">
                                    Makaleyi Oku <ArrowRight size={16} className="text-brand-yellow" />
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}