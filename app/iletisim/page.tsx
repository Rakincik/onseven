"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Copy, Check, Navigation, Clock } from "lucide-react";

export default function ContactPage() {
  const [isCopied, setIsCopied] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  // Mail kopyalama fonksiyonu
  const copyEmail = () => {
    navigator.clipboard.writeText("info@on7yazilim.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Form gönderme simülasyonu
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
        setFormStatus("success");
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-brand-yellow selection:text-black font-sans">
      <Navbar />

      {/* --- HERO KISMI --- */}
      <section className="pt-40 pb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
        <div className="container mx-auto px-6 text-center">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-black mb-6"
            >
                Bize <span className="text-brand-yellow">Ulaşın.</span>
            </motion.h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Bir projeniz mi var? Yoksa sadece tanışıp kahve mi içmek istersiniz?
                Kapımız (ve kodlarımız) her zaman açık.
            </p>
        </div>
      </section>

      <section className="pb-24 relative z-10">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                
                {/* --- SOL TARA: İLETİŞİM KARTLARI --- */}
                <div className="space-y-6">
                    
                    {/* ADRES KARTI */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-zinc-900/50 border border-white/10 p-8 rounded-3xl hover:border-brand-yellow/30 transition-colors group"
                    >
                        <div className="w-12 h-12 bg-brand-yellow/10 rounded-xl flex items-center justify-center text-brand-yellow mb-6 group-hover:scale-110 transition-transform">
                            <MapPin size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Ofisimiz</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Hacettepe Teknokent<br/>
                            Üniversiteler Mah. 1596. Cad. <br/>
                            Çankaya / ANKARA
                        </p>
                        <a href="https://maps.google.com" target="_blank" className="inline-flex items-center gap-2 text-sm font-bold text-white border-b border-white/20 pb-1 hover:text-brand-yellow hover:border-brand-yellow transition-colors">
                            Yol Tarifi Al <Navigation size={14} />
                        </a>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* EMAIL KARTI */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            onClick={copyEmail}
                            className="bg-zinc-900/50 border border-white/10 p-6 rounded-3xl hover:border-brand-yellow/30 transition-colors cursor-pointer group relative overflow-hidden"
                        >
                            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 mb-4">
                                <Mail size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">E-Posta</h3>
                            <p className="text-gray-400 text-sm">info@on7yazilim.com</p>
                            
                            {/* Kopyalandı Bildirimi */}
                            <div className="absolute top-6 right-6 text-gray-500 group-hover:text-white transition-colors">
                                {isCopied ? <Check size={18} className="text-green-500"/> : <Copy size={18}/>}
                            </div>
                        </motion.div>

                        {/* TELEFON KARTI */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-zinc-900/50 border border-white/10 p-6 rounded-3xl hover:border-brand-yellow/30 transition-colors group"
                        >
                            <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center text-green-500 mb-4">
                                <Phone size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">Telefon</h3>
                            <p className="text-gray-400 text-sm">+90 (312) 000 00 00</p>
                        </motion.div>
                    </div>

                    {/* ÇALIŞMA SAATLERİ */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-zinc-900/50 border border-white/10 p-6 rounded-3xl flex items-center gap-4"
                    >
                        <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-500">
                            <Clock size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-sm">Çalışma Saatleri</h3>
                            <p className="text-gray-400 text-xs">Pzt - Cum: 09:00 - 18:00</p>
                        </div>
                    </motion.div>

                </div>

                {/* --- SAĞ TARA: FORM --- */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-[#0a0a0a] border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative"
                >
                    {/* Neon Glow */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-yellow/5 rounded-full blur-[80px] pointer-events-none"></div>

                    <h2 className="text-2xl font-bold text-white mb-6">Mesaj Gönder</h2>
                    
                    {formStatus === "success" ? (
                        <div className="h-[400px] flex flex-col items-center justify-center text-center">
                            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-6">
                                <Check size={40} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Mesajınız İletildi!</h3>
                            <p className="text-gray-400">En kısa sürede sizinle iletişime geçeceğiz.</p>
                            <button 
                                onClick={() => setFormStatus("idle")}
                                className="mt-8 text-brand-yellow font-bold hover:text-white transition-colors"
                            >
                                Yeni Mesaj Gönder
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Ad Soyad</label>
                                    <input required type="text" className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-yellow focus:outline-none transition-colors placeholder-gray-600" placeholder="Ahmet Yılmaz" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">E-Posta</label>
                                    <input required type="email" className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-yellow focus:outline-none transition-colors placeholder-gray-600" placeholder="ornek@sirket.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Konu</label>
                                <select className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-yellow focus:outline-none transition-colors">
                                    <option>Proje Teklifi</option>
                                    <option>Okinar Hakkında</option>
                                    <option>Kariyer / Staj</option>
                                    <option>Diğer</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Mesajınız</label>
                                <textarea required rows={5} className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-yellow focus:outline-none transition-colors placeholder-gray-600 resize-none" placeholder="Projenizden bahsedin..."></textarea>
                            </div>

                            <button 
                                type="submit" 
                                disabled={formStatus === "submitting"}
                                className="w-full bg-brand-yellow text-black font-bold py-4 rounded-xl hover:bg-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-yellow/10"
                            >
                                {formStatus === "submitting" ? "Gönderiliyor..." : <>Gönder <Send size={18} /></>}
                            </button>
                        </form>
                    )}
                </motion.div>

            </div>
        </div>
      </section>

      {/* --- DARK MODE HARİTA (CSS HİLESİ) --- */}
      <section className="w-full h-[400px] bg-zinc-900 relative border-t border-white/10 grayscale invert contrast-[1.1] brightness-[0.8]">
         {/* Hacettepe Teknokent Koordinatları */}
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.356369747793!2d32.7361280765625!3d39.86117897905764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347a3b2b2b2b7%3A0x7b2b2b2b2b2b2b2b!2sHacettepe%20Teknokent!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="opacity-80"
         ></iframe>
      </section>

      <Footer />
    </main>
  );
}