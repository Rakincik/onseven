"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import { 
  Video, BookOpen, BarChart3, ShieldCheck, PenTool, Users, 
  MonitorPlay, CheckCircle2, Play, Lock, Calendar, FileText, 
  MessageCircle, Clock, Layers 
} from "lucide-react";
import { useState } from "react";

export default function OkinarPage() {
  // Video Sekmeleri için State (Ekran görüntüsündeki Accordion yapısı yerine Tab)
  const [activeVideo, setActiveVideo] = useState("intro");

  // Ekran görüntüsündeki 12 Maddelik Özellik Listesi
  const featuresList = [
    { id: 1, label: "Kullanıcı Kaydı", icon: <Users size={16} /> },
    { id: 2, label: "Kullanıcı Yetkilendirme", icon: <Lock size={16} /> },
    { id: 3, label: "Grup Oluşturma", icon: <Layers size={16} /> },
    { id: 4, label: "Canlı Ders Modülü", icon: <Video size={16} /> },
    { id: 5, label: "Ders Kayıtları (Arşiv)", icon: <MonitorPlay size={16} /> },
    { id: 6, label: "Soru-Cevap Sistemi", icon: <MessageCircle size={16} /> },
    { id: 7, label: "Ödev Yönetimi", icon: <FileText size={16} /> },
    { id: 8, label: "Doküman Paylaşımı", icon: <BookOpen size={16} /> },
    { id: 9, label: "Online Sınav", icon: <PenTool size={16} /> },
    { id: 10, label: "Yoklama & Devamsızlık", icon: <Clock size={16} /> },
    { id: 11, label: "Akademik Takvim", icon: <Calendar size={16} /> },
    { id: 12, label: "Güvenlik Logları", icon: <ShieldCheck size={16} /> },
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-brand-yellow selection:text-black font-sans">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-yellow/5 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-zinc-900/80 backdrop-blur-md mb-8">
               <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-yellow"></span>
               </span>
               <span className="text-xs font-bold text-gray-300 tracking-widest uppercase">Eğitim Yönetim Sistemi</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight leading-none">
              OKINAR <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-200">LMS</span>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
               Kurumunuzun tüm eğitim süreçlerini tek ekrandan yönetin. <br/>
               <span className="text-white font-bold">Video Konferans + Sınav + Yönetim</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- FEATURE HIGHLIGHT (EKRAN GÖRÜNTÜSÜNDEKİ BÖLÜM - REVİZE EDİLDİ) --- */}
      <section className="py-20 bg-zinc-950 border-y border-white/5 relative overflow-hidden">
        {/* Arka Plan Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-12">
                
                {/* SOL TARA: VIDEO PLAYER (MODERNİZE EDİLDİ) */}
                <div className="lg:w-3/5">
                    <div className="flex items-center gap-4 mb-6">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                            <MonitorPlay className="text-brand-yellow" />
                            Sistem Demosu
                        </h3>
                        <div className="h-px flex-1 bg-white/10"></div>
                    </div>

                    {/* Video Container */}
                    <div className="rounded-2xl overflow-hidden border border-white/10 bg-black relative aspect-video group shadow-2xl shadow-brand-yellow/5">
                        {/* Fake Video Player UI */}
                        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 z-10 group-hover:bg-zinc-900/80 transition-colors cursor-pointer">
                            <div className="w-20 h-20 rounded-full bg-brand-yellow/10 border border-brand-yellow/50 flex items-center justify-center text-brand-yellow group-hover:scale-110 transition-transform">
                                <Play fill="currentColor" size={32} className="ml-1" />
                            </div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="flex justify-between text-xs text-gray-400 mb-2 font-mono">
                                    <span>00:00</span>
                                    <span>04:20</span>
                                </div>
                                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                    <div className="w-1/3 h-full bg-brand-yellow"></div>
                                </div>
                            </div>
                        </div>
                        {/* Temsili Video Başlığı */}
                        <div className="absolute top-0 left-0 w-full p-4 bg-gradient-to-b from-black/80 to-transparent z-20 flex justify-between items-start">
                            <span className="text-white font-bold tracking-wide">
                                {activeVideo === "intro" ? "Okinar LMS Tanıtım Filmi" : "Örnek Canlı Ders Kaydı"}
                            </span>
                            <div className="px-2 py-1 bg-red-600 rounded text-[10px] font-bold text-white animate-pulse">
                                HD
                            </div>
                        </div>
                    </div>

                    {/* Video Seçim Sekmeleri (Accordion Yerine) */}
                    <div className="flex gap-4 mt-6">
                        <button 
                            onClick={() => setActiveVideo("intro")}
                            className={`flex-1 p-4 rounded-xl border transition-all text-left flex items-center gap-3 ${activeVideo === "intro" ? "bg-white/10 border-brand-yellow text-white" : "bg-transparent border-white/5 text-gray-500 hover:bg-white/5"}`}
                        >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeVideo === "intro" ? "bg-brand-yellow text-black" : "bg-zinc-800"}`}>1</div>
                            <span className="font-bold text-sm">Okinar LMS Intro</span>
                        </button>
                        <button 
                            onClick={() => setActiveVideo("lesson")}
                            className={`flex-1 p-4 rounded-xl border transition-all text-left flex items-center gap-3 ${activeVideo === "lesson" ? "bg-white/10 border-brand-yellow text-white" : "bg-transparent border-white/5 text-gray-500 hover:bg-white/5"}`}
                        >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeVideo === "lesson" ? "bg-brand-yellow text-black" : "bg-zinc-800"}`}>2</div>
                            <span className="font-bold text-sm">Örnek Canlı Ders</span>
                        </button>
                    </div>
                </div>

                {/* SAĞ TARAF: ÖZELLİKLER LİSTESİ (SİSTEM DURUMU) */}
                <div className="lg:w-2/5 flex flex-col">
                     <div className="flex items-center gap-4 mb-6">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                            <Layers className="text-green-500" />
                            Sistem Yetenekleri
                        </h3>
                        <div className="h-px flex-1 bg-white/10"></div>
                    </div>

                    {/* Liste Container */}
                    <div className="bg-[#0f1115] border border-white/10 rounded-2xl p-6 flex-1 flex flex-col relative overflow-hidden">
                        {/* Dekoratif Header */}
                        <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5 font-mono text-xs text-gray-500">
                            <span>MODULE_LIST</span>
                            <span className="text-green-500">ALL SYSTEMS OPERATIONAL</span>
                        </div>

                        {/* Scrollable List */}
                        <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar flex-1">
                            {featuresList.map((feature) => (
                                <motion.div 
                                    key={feature.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: feature.id * 0.05 }}
                                    className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-transparent hover:border-brand-yellow/30 transition-all group"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="text-gray-500 group-hover:text-brand-yellow transition-colors">
                                            {feature.icon}
                                        </div>
                                        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                                            {feature.label}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-bold text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">AKTİF</span>
                                        <CheckCircle2 size={18} className="text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                         {/* Alt Bilgi */}
                         <div className="mt-4 pt-4 border-t border-white/5 text-center">
                            <p className="text-xs text-gray-500">
                                * Tüm özellikler standart pakete dahildir.
                            </p>
                         </div>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* --- DETAYLI MODÜLLER (Bento Grid) --- */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Hepsi Bir Arada Platform</h2>
                <div className="w-20 h-1 bg-brand-yellow mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {/* CANLI DERS */}
                <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 hover:border-brand-yellow/30 transition-all group">
                    <Video className="w-12 h-12 text-brand-yellow mb-6 bg-brand-yellow/10 p-3 rounded-lg" />
                    <h3 className="text-xl font-bold mb-2 text-white">Canlı Ders</h3>
                    <p className="text-gray-400 text-sm">Zoom'a gerek yok. Tarayıcı üzerinden HD video, ekran paylaşımı ve beyaz tahta.</p>
                </div>
                {/* ONLINE SINAV */}
                <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all group">
                    <PenTool className="w-12 h-12 text-blue-500 mb-6 bg-blue-500/10 p-3 rounded-lg" />
                    <h3 className="text-xl font-bold mb-2 text-white">Online Sınav</h3>
                    <p className="text-gray-400 text-sm">Soru bankası havuzu, güvenli tarayıcı modu ve otomatik değerlendirme.</p>
                </div>
                {/* RAPORLAMA */}
                <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all group">
                    <BarChart3 className="w-12 h-12 text-purple-500 mb-6 bg-purple-500/10 p-3 rounded-lg" />
                    <h3 className="text-xl font-bold mb-2 text-white">Detaylı Rapor</h3>
                    <p className="text-gray-400 text-sm">Öğrenci bazlı gelişim analizleri, katılım grafikleri ve müfredat takibi.</p>
                </div>
                 {/* GÜVENLİK */}
                 <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 hover:border-green-500/30 transition-all group">
                    <ShieldCheck className="w-12 h-12 text-green-500 mb-6 bg-green-500/10 p-3 rounded-lg" />
                    <h3 className="text-xl font-bold mb-2 text-white">Log & Güvenlik</h3>
                    <p className="text-gray-400 text-sm">Kim ne zaman girdi, hangi IP'den bağlandı? Tüm veriler KVKK uyumlu loglanır.</p>
                </div>
                 {/* YOKLAMA */}
                 <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-all group">
                    <Clock className="w-12 h-12 text-orange-500 mb-6 bg-orange-500/10 p-3 rounded-lg" />
                    <h3 className="text-xl font-bold mb-2 text-white">Yoklama Takibi</h3>
                    <p className="text-gray-400 text-sm">Canlı derste öğrencinin kalma süresine göre otomatik yoklama alınır.</p>
                </div>
                 {/* DOKÜMAN */}
                 <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 hover:border-pink-500/30 transition-all group">
                    <BookOpen className="w-12 h-12 text-pink-500 mb-6 bg-pink-500/10 p-3 rounded-lg" />
                    <h3 className="text-xl font-bold mb-2 text-white">İçerik Yönetimi</h3>
                    <p className="text-gray-400 text-sm">Video, PDF, Word ve sunum dosyalarınızı ders bazlı klasörleyin.</p>
                </div>
            </div>
        </div>
      </section>

      {/* --- TEKNİK SPECS (ALTTA BANT) --- */}
      <section className="py-12 bg-zinc-900 border-t border-white/5">
        <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-8 md:gap-20 opacity-70">
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-brand-yellow"/> <span className="font-bold">Web & Mobil Uyumlu</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-brand-yellow"/> <span className="font-bold">KVKK Uyumlu</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-brand-yellow"/> <span className="font-bold">TR Lokasyon</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-brand-yellow"/> <span className="font-bold">7/24 Destek</span>
                </div>
            </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 bg-brand-yellow text-black text-center">
        <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Kurumunuzu Dijitalleştirin.</h2>
            <p className="mb-10 text-xl font-medium opacity-80">
                Okinar LMS ve VC altyapısı ile tanışmak için hemen demo talep edin.
            </p>
            <div className="flex justify-center gap-4">
                <button className="px-10 py-4 bg-black text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all">
                    Demo Sunumu İste
                </button>
            </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}