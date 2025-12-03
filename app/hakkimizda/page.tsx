"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import About from "@/components/About";     // Mevcut bileşen
import Roadmap from "@/components/Roadmap"; // Mevcut bileşen
import Team from "@/components/Team";       // Mevcut bileşen
import { motion } from "framer-motion";
import { Target, Lightbulb } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-brand-yellow selection:text-black font-sans">
      <Navbar />

      {/* --- HEADER --- */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-yellow/5 rounded-full blur-[120px] -z-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-yellow font-bold tracking-widest text-sm mb-4 block">KURUMSAL</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              Hikayemiz & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-yellow to-white">Gelecek Vizyonumuz.</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Ankara'da başlayan teknoloji yolculuğumuz, bugün Hacettepe Teknokent'te geliştirdiğimiz global çözümlerle devam ediyor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- 1. BİZ KİMİZ (Mevcut About Bileşeni) --- */}
      <About />

      {/* --- 2. MİSYON & VİZYON (Yeni Özel Alan) --- */}
      <section className="py-20 bg-zinc-900 border-y border-white/5">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
            {/* Misyon */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-10 bg-black rounded-3xl border border-white/5 hover:border-brand-yellow/30 transition-all group"
            >
                <div className="w-14 h-14 bg-zinc-900 rounded-xl flex items-center justify-center text-brand-yellow mb-6 group-hover:scale-110 transition-transform">
                    <Target size={32} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">Misyonumuz</h3>
                <p className="text-gray-400 leading-relaxed">
                    İşletmelerin dijital dönüşüm süreçlerini hızlandırmak; yerli ve milli yazılım çözümleriyle (Okinar VC/LMS) eğitim teknolojilerinde dışa bağımlılığı azaltmak ve global standartlarda, sürdürülebilir mühendislik hizmeti sunmak.
                </p>
            </motion.div>

            {/* Vizyon */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-10 bg-black rounded-3xl border border-white/5 hover:border-brand-yellow/30 transition-all group"
            >
                <div className="w-14 h-14 bg-zinc-900 rounded-xl flex items-center justify-center text-brand-yellow mb-6 group-hover:scale-110 transition-transform">
                    <Lightbulb size={32} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">Vizyonumuz</h3>
                <p className="text-gray-400 leading-relaxed">
                    Yapay zeka ve IoT tabanlı inovatif çözümlerimizle Türkiye'nin teknoloji ihracatında öncü rol oynamak; Hacettepe Teknokent ekosisteminden çıkan bir "Unicorn" teknoloji girişimi olarak dünya markası haline gelmek.
                </p>
            </motion.div>
        </div>
      </section>

      {/* --- 3. YOL HARİTASI (Roadmap Bileşeni) --- */}
      {/* Ana sayfadan buraya taşıdık */}
      <Roadmap />

      {/* --- 4. EKİP (Team Bileşeni) --- */}
      {/* Ana sayfadan buraya taşıdık */}
      <Team />

      <Contact />
      <Footer />
    </main>
  );
}