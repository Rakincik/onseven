"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Smartphone, Server, PenTool, ChevronRight, ChevronLeft, Check, Send, Loader2, PartyPopper, ArrowLeft } from "lucide-react";
import confetti from "canvas-confetti"; // KONFETİ EFEKTİ
import Link from "next/link";

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  
  // YENİ STATE'LER
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form Verileri
  const [formData, setFormData] = useState({
    projectType: "",
    features: [] as string[],
    budget: "",
    name: "",
    email: "",
    message: ""
  });

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  // FORM GÖNDERME FONKSİYONU
  const handleSubmit = async () => {
    // 1. Yükleniyor durumuna geç
    setIsSubmitting(true);

    // 2. Simülasyon (Burada normalde API isteği olur)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // 3. Başarılı durumu
    setIsSubmitting(false);
    setIsSuccess(true);

    // 4. KONFETİ PATLAT! 🎉
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFD700', '#ffffff', '#000000'] // Sarı, Beyaz, Siyah
    });
  };

  const projectTypes = [
    { id: "web", label: "Web Sitesi / Web App", icon: <Globe size={32} /> },
    { id: "mobile", label: "Mobil Uygulama", icon: <Smartphone size={32} /> },
    { id: "software", label: "Özel Yazılım / IoT", icon: <Server size={32} /> },
    { id: "design", label: "UI/UX Tasarım", icon: <PenTool size={32} /> },
  ];

  const featuresList = [
    "Yönetim Paneli (Admin)", "Çoklu Dil Desteği", "Ödeme Sistemi (Sanal Pos)", 
    "Canlı Destek / Chat", "Üyelik Sistemi", "Yapay Zeka Entegrasyonu",
    "SEO Optimizasyonu", "Mobil Uyumlu Tasarım"
  ];

  const toggleFeature = (feature: string) => {
    if (formData.features.includes(feature)) {
      setFormData({ ...formData, features: formData.features.filter(f => f !== feature) });
    } else {
      setFormData({ ...formData, features: [...formData.features, feature] });
    }
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-brand-yellow selection:text-black font-sans">
      <Navbar />

      <section className="pt-40 pb-20 relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Arka Plan Efektleri */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-yellow/5 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] -z-10"></div>

        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          
          {/* Header (Sadece işlem bitmediyse göster) */}
          {!isSuccess && (
              <motion.div initial={{opacity:0}} animate={{opacity:1}} className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-black mb-4">Projenizi <span className="text-brand-yellow">Hayata Geçirelim.</span></h1>
                <p className="text-gray-400">Aşağıdaki adımları takip ederek bize projenizden bahsedin, size özel teklifimizi hazırlayalım.</p>
             </motion.div>
          )}

          {/* Progress Bar (Sadece işlem bitmediyse göster) */}
          {!isSuccess && (
              <div className="mb-12">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                    <span>Proje Türü</span>
                    <span>Detaylar</span>
                    <span>Bütçe</span>
                    <span>İletişim</span>
                </div>
                <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div 
                        className="h-full bg-brand-yellow"
                        initial={{ width: "0%" }}
                        animate={{ width: `${(step / totalSteps) * 100}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
              </div>
          )}

          {/* --- FORM ALANI --- */}
          <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-2xl relative overflow-hidden min-h-[400px] flex flex-col">
            
            <AnimatePresence mode="wait">
                
                {/* BAŞARILI SONUÇ EKRANI 🎉 */}
                {isSuccess ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center text-center h-full py-10"
                    >
                        <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-6 text-green-500">
                            <PartyPopper size={48} />
                        </div>
                        <h2 className="text-3xl font-black text-white mb-4">Mesajınız Alındı!</h2>
                        <p className="text-gray-400 max-w-md mb-8">
                            Proje detaylarınızı başarıyla aldık. Ekibimiz teknik incelemeyi yapıp <span className="text-brand-yellow font-bold">24 saat içinde</span> size dönüş yapacak.
                        </p>
                        <Link href="/" className="px-8 py-4 bg-brand-yellow text-black font-bold rounded-lg hover:bg-white transition-all flex items-center gap-2">
                            <ArrowLeft size={20} /> Ana Sayfaya Dön
                        </Link>
                    </motion.div>
                ) : (
                    <>
                        {/* ADIM 1: PROJE TÜRÜ */}
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className="flex-1"
                            >
                                <h2 className="text-2xl font-bold mb-8 text-center">Nasıl bir projeye ihtiyacınız var?</h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {projectTypes.map((type) => (
                                        <button
                                            key={type.id}
                                            onClick={() => setFormData({ ...formData, projectType: type.id })}
                                            className={`p-6 rounded-xl border flex flex-col items-center gap-4 transition-all hover:scale-[1.02] ${
                                                formData.projectType === type.id 
                                                ? "bg-brand-yellow text-black border-brand-yellow shadow-[0_0_20px_rgba(255,215,0,0.3)]" 
                                                : "bg-black border-white/10 text-gray-400 hover:border-brand-yellow/50 hover:text-white"
                                            }`}
                                        >
                                            {type.icon}
                                            <span className="font-bold text-lg">{type.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* ADIM 2: ÖZELLİKLER */}
                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className="flex-1"
                            >
                                <h2 className="text-2xl font-bold mb-8 text-center">Hangi özellikler olsun?</h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {featuresList.map((feature, index) => (
                                        <button
                                            key={index}
                                            onClick={() => toggleFeature(feature)}
                                            className={`p-4 rounded-lg border text-sm font-medium transition-all text-left flex justify-between items-center ${
                                                formData.features.includes(feature)
                                                ? "bg-brand-yellow/20 border-brand-yellow text-brand-yellow" 
                                                : "bg-black/40 border-white/10 text-gray-400 hover:bg-white/5"
                                            }`}
                                        >
                                            {feature}
                                            {formData.features.includes(feature) && <Check size={16} />}
                                        </button>
                                    ))}
                                </div>
                                <div className="mt-8">
                                    <label className="text-sm text-gray-400 mb-2 block">Ekstra Notlar</label>
                                    <textarea 
                                        className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:border-brand-yellow outline-none h-24 resize-none"
                                        placeholder="Aklınızdaki diğer detayları buraya yazabilirsiniz..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    />
                                </div>
                            </motion.div>
                        )}

                        {/* ADIM 3: BÜTÇE */}
                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className="flex-1 flex flex-col justify-center"
                            >
                                <h2 className="text-2xl font-bold mb-12 text-center">Öngördüğünüz Bütçe Aralığı</h2>
                                <div className="space-y-4">
                                    {["50.000₺ - 100.000₺", "100.000₺ - 250.000₺", "250.000₺ - 500.000₺", "500.000₺ +"].map((range, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setFormData({ ...formData, budget: range })}
                                            className={`w-full p-6 rounded-xl border text-lg font-bold transition-all flex justify-between items-center ${
                                                formData.budget === range
                                                ? "bg-gradient-to-r from-brand-yellow to-yellow-600 text-black border-transparent shadow-lg" 
                                                : "bg-black/40 border-white/10 text-gray-400 hover:bg-white/5 hover:border-white/30"
                                            }`}
                                        >
                                            <span>{range}</span>
                                            {formData.budget === range && <Check size={24} />}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* ADIM 4: İLETİŞİM */}
                        {step === 4 && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className="flex-1 flex flex-col justify-center"
                            >
                                <h2 className="text-2xl font-bold mb-8 text-center">Son Adım: Tanışalım</h2>
                                <div className="space-y-4 max-w-md mx-auto w-full">
                                    <div>
                                        <label className="text-sm text-gray-400 block mb-2">Adınız Soyadınız</label>
                                        <input 
                                            type="text" 
                                            className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:border-brand-yellow outline-none"
                                            placeholder="Örn: Ahmet Yılmaz"
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm text-gray-400 block mb-2">E-posta Adresiniz</label>
                                        <input 
                                            type="email" 
                                            className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:border-brand-yellow outline-none"
                                            placeholder="Örn: ahmet@sirket.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        />
                                    </div>
                                    <div className="pt-4">
                                        <button 
                                            onClick={handleSubmit}
                                            disabled={isSubmitting}
                                            className="w-full bg-brand-yellow text-black font-black py-4 rounded-lg text-lg hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,215,0,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="animate-spin" /> Gönderiliyor...
                                                </>
                                            ) : (
                                                <>
                                                    TEKLİFİ GÖNDER <Send size={20} />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </>
                )}

            </AnimatePresence>

            {/* NAVIGASYON (Başarılı ise gizle) */}
            {!isSuccess && (
                <div className="flex justify-between mt-12 pt-6 border-t border-white/5">
                    <button 
                        onClick={handlePrev} 
                        disabled={step === 1 || isSubmitting}
                        className={`flex items-center gap-2 text-sm font-bold ${step === 1 ? "opacity-0 pointer-events-none" : "text-gray-400 hover:text-white"}`}
                    >
                        <ChevronLeft size={16} /> Geri
                    </button>

                    {step < totalSteps && (
                        <button 
                            onClick={handleNext}
                            className="flex items-center gap-2 text-sm font-bold text-brand-yellow hover:text-white transition-colors"
                        >
                            Devam Et <ChevronRight size={16} />
                        </button>
                    )}
                </div>
            )}

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}