"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Yönlendirme için

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // 1. Simüle edilmiş giriş süresi (1.5 saniye bekle)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSuccess(true);

    // 2. Başarılı olduktan 1 saniye sonra Dashboard'a fırlat
    setTimeout(() => {
        router.push("/portal/dashboard"); 
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-black text-white font-sans flex overflow-hidden selection:bg-brand-yellow selection:text-black">
      
      {/* --- SOL TARA: FORM ALANI --- */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between p-8 md:p-16 relative z-10">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 group w-max">
            <span className="text-2xl font-black text-white tracking-wide" style={{fontFamily: 'var(--font-nunito)'}}>ON</span>
            <span className="text-3xl font-black text-brand-yellow -mt-1" style={{fontFamily: 'var(--font-nunito)'}}>7</span>
        </Link>

        {/* Form Container */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-sm w-full mx-auto"
        >
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Yönetim Paneli</h1>
                <p className="text-gray-400">Devam etmek için kurumsal hesabınızla giriş yapın.</p>
            </div>

            {isSuccess ? (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-500/10 border border-green-500/20 p-6 rounded-xl flex flex-col items-center text-center"
                >
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-black mb-4">
                        <CheckCircle2 size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-green-500 mb-1">Giriş Başarılı</h3>
                    <p className="text-sm text-green-400/70">Panele yönlendiriliyorsunuz...</p>
                </motion.div>
            ) : (
                <form onSubmit={handleLogin} className="space-y-5">
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">E-Posta</label>
                        <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-brand-yellow transition-colors" size={18} />
                            <input 
                                type="email" 
                                required
                                className="w-full bg-zinc-900/50 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-brand-yellow focus:bg-zinc-900 transition-all"
                                placeholder="ad.soyad@on7yazilim.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Şifre</label>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-brand-yellow transition-colors" size={18} />
                            <input 
                                type="password" 
                                required
                                className="w-full bg-zinc-900/50 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-brand-yellow focus:bg-zinc-900 transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                        <label className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" className="accent-brand-yellow w-4 h-4 rounded border-white/20 bg-zinc-900" />
                            <span className="text-gray-400 group-hover:text-white transition-colors">Beni Hatırla</span>
                        </label>
                        <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">Şifremi Unuttum?</a>
                    </div>

                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-brand-yellow transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isLoading ? <Loader2 className="animate-spin" /> : <>Giriş Yap <ArrowRight size={18} /></>}
                    </button>
                </form>
            )}
        </motion.div>

        {/* Footer */}
        <div className="text-xs text-gray-600">
            © 2025 ON7 Yazılım A.Ş. <span className="mx-2">•</span> <Link href="/yasal/gizlilik" className="hover:text-white transition-colors">Gizlilik</Link>
        </div>
      </div>

      {/* --- SAĞ TARA: GÖRSEL ALANI --- */}
      <div className="hidden lg:block w-1/2 relative bg-[#050505]">
        <div className="absolute inset-0">
            <Image 
                src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=2832&auto=format&fit=crop" 
                alt="Abstract Technology"
                fill
                className="object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-[2s]"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black"></div>
        </div>

        <div className="absolute bottom-16 right-16 max-w-md text-right">
            <h2 className="text-4xl font-black text-white mb-4 leading-tight">
                Geleceği <br/> <span className="text-brand-yellow">Kodluyoruz.</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed border-r-2 border-brand-yellow pr-4">
                ON7 Yönetim Paneli üzerinden tüm projelerinizi, müşteri ilişkilerinizi ve Okinar sistem verilerini tek noktadan yönetin.
            </p>
        </div>
      </div>

    </main>
  );
}