"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Terminal, Cpu } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext"; // DİL BAĞLANTISI

export default function Hero() {
  const { t, language } = useLanguage(); // Dil verilerini çekiyoruz

  // İstatistikleri de dile göre güncelliyoruz
  const stats = [
    { id: 1, value: "50+", label: t.hero.stats.projects, icon: <Code2 size={20} /> },
    { id: 2, value: "%99.9", label: t.hero.stats.uptime, icon: <Terminal size={20} /> },
    { id: 3, value: "10K+", label: t.hero.stats.users, icon: <Cpu size={20} /> },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden bg-[#050505]">
      
      {/* Arka Plan Efektleri */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* --- SOL TARA (Başlık - Dinamik) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-8 tracking-tighter">
              {t.hero.title_Start} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-yellow-200 to-brand-yellow">
                {t.hero.title_End}
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed font-medium">
              {t.hero.desc}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
                <Link href="/teklif-al" className="px-8 py-4 bg-brand-yellow text-black font-bold text-lg rounded-sm hover:bg-white transition-all flex items-center gap-2 shadow-[4px_4px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                    {t.hero.btn_project} <ArrowRight size={20} />
                </Link>
                <Link href="/okinar" className="px-8 py-4 border-2 border-zinc-800 text-white font-bold text-lg rounded-sm hover:border-brand-yellow hover:text-brand-yellow transition-all">
                    {t.hero.btn_products}
                </Link>
            </div>

            {/* İstatistikler */}
            <div className="grid grid-cols-3 gap-6 border-t border-zinc-800 pt-8">
                {stats.map((stat) => (
                    <div key={stat.id}>
                        <div className="text-zinc-500 mb-2">{stat.icon}</div>
                        <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                        <div className="text-xs text-zinc-400 font-bold uppercase tracking-wider">{stat.label}</div>
                    </div>
                ))}
            </div>
          </motion.div>

          {/* --- SAĞ TARA: KONFİGÜRASYON EKRANI (Dile Göre Değişir) --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 w-full"
          >
            <div className="bg-[#1E1E1E] rounded-xl shadow-2xl border border-[#333] overflow-hidden relative font-mono text-sm group transform transition-all hover:-translate-y-2 hover:shadow-brand-yellow/10">
                
                {/* Üst Bar */}
                <div className="bg-[#252526] px-4 py-3 flex items-center gap-2 border-b border-[#333]">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                    </div>
                    <span className="ml-4 text-gray-400 text-xs flex items-center gap-1">
                        <Code2 size={12} className="text-blue-400"/> 
                        {language === 'tr' ? 'on7_profil.ts' : 'on7_config.ts'}
                    </span>
                </div>

                {/* Kod Alanı */}
                <div className="p-6 md:p-8 text-[#D4D4D4] leading-relaxed overflow-x-auto relative">
                    
                    {/* Satır Numaraları */}
                    <div className="absolute left-4 top-8 bottom-8 w-6 text-right text-[#858585] select-none flex flex-col gap-1 text-xs">
                        {Array.from({length: 16}, (_, i) => <span key={i}>{i + 1}</span>)}
                    </div>

                    {/* Dinamik Kod İçeriği */}
                    <div className="ml-8 text-xs md:text-sm">
                        <p>
                            <span className="text-[#C586C0]">export</span> <span className="text-[#569CD6]">const</span> <span className="text-[#4EC9B0]">
                                {language === 'tr' ? 'ON7_Yazilim' : 'ON7_Software'}
                            </span> = <span className="text-[#FFD700]">{`{`}</span>
                        </p>
                        
                        <div className="pl-4 flex flex-col gap-1">
                            <p>
                                <span className="text-[#9CDCFE]">{language === 'tr' ? 'firma' : 'company'}</span>: <span className="text-[#CE9178]">&quot;ON7 Yazılım A.Ş.&quot;</span>,
                            </p>
                            <p>
                                <span className="text-[#9CDCFE]">{language === 'tr' ? 'konum' : 'location'}</span>: <span className="text-[#CE9178]">&quot;Hacettepe Teknokent / Ankara&quot;</span>,
                            </p>
                            <p>
                                <span className="text-[#9CDCFE]">{language === 'tr' ? 'kurulus' : 'established'}</span>: <span className="text-[#B5CEA8]">2021</span>,
                            </p>
                            <p>
                                <span className="text-[#9CDCFE]">{language === 'tr' ? 'ekip' : 'team'}</span>: <span className="text-[#CE9178]">&quot;{language === 'tr' ? 'Genç & Dinamik Uzman Kadro' : 'Young & Dynamic Experts'}&quot;</span>,
                            </p>
                            
                            <p className="mt-2">
                                <span className="text-[#9CDCFE]">{language === 'tr' ? 'hizmetler' : 'services'}</span>: [
                            </p>
                            <div className="pl-4 text-[#CE9178]">
                                <p>&quot;{language === 'tr' ? 'Özel Yazılım Geliştirme' : 'Custom Software Development'}&quot;,</p>
                                <p>&quot;{language === 'tr' ? 'Donanım & IoT Çözümleri' : 'Hardware & IoT Solutions'}&quot;,</p>
                                <p>&quot;{language === 'tr' ? 'Teknoloji Danışmanlığı' : 'Tech Consultancy'}&quot;</p>
                            </div>
                            <p>],</p>

                            <p className="mt-2">
                                <span className="text-[#9CDCFE]">{language === 'tr' ? 'misyon' : 'mission'}</span>: <span className="text-[#CE9178]">&quot;{language === 'tr' ? 'Geleceği Kodluyoruz' : 'Coding The Future'}&quot;</span>,
                            </p>
                            <p>
                                <span className="text-[#9CDCFE]">{language === 'tr' ? 'durum' : 'status'}</span>: <span className="text-[#CE9178]">&quot;PROJEYE_HAZIR&quot;</span>
                            </p>
                        </div>

                        <p><span className="text-[#FFD700]">{`};`}</span></p>
                    </div>

                    {/* Yanıp Sönen İmleç */}
                    <div className="w-2 h-4 bg-brand-yellow animate-pulse mt-1 ml-8"></div>
                </div>

                {/* Sağ Alt Köşe: Dil Bilgisi */}
                <div className="bg-[#007ACC] text-white text-[10px] px-3 py-1 absolute bottom-0 right-0 flex items-center gap-1 rounded-tl">
                    <span>TypeScript</span>
                </div>
            </div>

            {/* Dekoratif Arka Glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-yellow/20 blur-[80px] -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}