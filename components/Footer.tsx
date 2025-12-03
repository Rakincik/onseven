import Link from "next/link";
import { Instagram, Linkedin, Twitter, MapPin, Mail, Phone, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-24 pb-10 relative overflow-hidden">
      
      {/* Arka Plan Işığı */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-yellow/5 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 lg:gap-20 mb-20">

          {/* 1. Sütun: Marka & CTA */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-1 mb-6 group">
                <span className="text-3xl font-black text-white tracking-wide" style={{fontFamily: 'var(--font-nunito)'}}>ON</span>
                <span className="text-4xl font-black text-brand-yellow -mt-1" style={{fontFamily: 'var(--font-nunito)'}}>7</span>
            </Link>
            <h2 className="text-3xl font-bold text-white mb-4">Bir Fikrin mi Var?</h2>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              Teknolojinin sınırlarını zorlayan projeleriniz için Hacettepe Teknokent'te sizi bekliyoruz. Gelin, geleceği birlikte kodlayalım.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/teklif-al" className="px-8 py-3 bg-brand-yellow text-black font-bold rounded-lg hover:bg-white transition-colors flex items-center gap-2 shadow-lg shadow-brand-yellow/10">
                Teklif Al <ArrowRight size={18}/>
              </Link>
              <a href="mailto:info@on7yazilim.com" className="px-8 py-3 border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                Bize Yazın
              </a>
            </div>
          </div>

          {/* 2. Sütun: Hızlı Linkler */}
          <div>
            <h4 className="text-white font-bold mb-6">Hızlı Erişim</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              <li><Link href="/hakkimizda" className="hover:text-brand-yellow transition-colors">Kurumsal</Link></li>
              <li><Link href="/hizmetler" className="hover:text-brand-yellow transition-colors">Hizmetler</Link></li>
              <li><Link href="/okinar" className="hover:text-brand-yellow transition-colors">Okinar LMS</Link></li>
              <li>
                <Link href="/kariyer" className="hover:text-brand-yellow transition-colors flex items-center gap-2">
                    Kariyer <span className="text-[10px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded border border-green-500/20 font-bold">ALIM VAR</span>
                </Link>
              </li>
              <li><Link href="/blog" className="hover:text-brand-yellow transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* 3. Sütun: İletişim */}
          <div>
            <h4 className="text-white font-bold mb-6">İletişim</h4>
            <ul className="space-y-6 text-gray-500 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-yellow shrink-0" size={20} />
                <span>Hacettepe Teknokent<br/>Üniversiteler Mah. 1596. Cad.<br/>Çankaya / ANKARA</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-yellow shrink-0" size={20} />
                <a href="mailto:info@on7yazilim.com" className="hover:text-white transition-colors">info@on7yazilim.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-yellow shrink-0" size={20} />
                <a href="tel:+903120000000" className="hover:text-white transition-colors">+90 (312) 000 00 00</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <p>© 2025 ON7 Yazılım A.Ş. Tüm hakları saklıdır.</p>
            <div className="hidden md:block w-1 h-1 bg-gray-700 rounded-full"></div>
            <Link href="/yasal/gizlilik" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
            <div className="hidden md:block w-1 h-1 bg-gray-700 rounded-full"></div>
            <Link href="/portal" className="hover:text-white transition-colors">Yönetim Paneli</Link>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-yellow hover:text-black transition-all border border-white/5 hover:border-brand-yellow"><Linkedin size={18}/></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-yellow hover:text-black transition-all border border-white/5 hover:border-brand-yellow"><Instagram size={18}/></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-yellow hover:text-black transition-all border border-white/5 hover:border-brand-yellow"><Twitter size={18}/></a>
          </div>
        </div>
      </div>
    </footer>
  );
}