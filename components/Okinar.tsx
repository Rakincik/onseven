"use client";
import { CheckCircle2 } from "lucide-react";

export default function Okinar() {
  return (
    <section id="okinar" className="py-24 bg-black overflow-hidden relative">
      {/* Arkaplan Şekli */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-yellow/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-16">
        
        {/* Sol Taraf: Özellikler */}
        <div className="md:w-1/2">
          <span className="text-brand-yellow font-bold tracking-wider text-sm">AMİRAL GEMİSİ</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">Okinar Uzaktan Eğitim Sistemi</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Eğitimin sınırlarını kaldıran, yüksek kapasiteli ve kesintisiz canlı ders modülü. Okinar ile öğrenme deneyimini yeniden tasarladık.
          </p>

          <ul className="space-y-4">
            {["Canlı Ders Modülü", "Gelişmiş Raporlama", "Mobil Uyumlu Arayüz", "Güvenli Altyapı"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="text-brand-yellow" size={20} />
                {item}
              </li>
            ))}
          </ul>

          <button className="mt-10 px-8 py-3 rounded border border-white/20 hover:bg-white hover:text-black transition-all font-semibold">
            Detaylı İncele
          </button>
        </div>

        {/* Sağ Taraf: Görsel */}
        <div className="md:w-1/2 relative">
          <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
             {/* Buraya Okinar ekran görüntüsü gelecek, şimdilik temsili div */}
             <div className="aspect-video bg-zinc-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <span className="text-zinc-700 font-bold text-6xl opacity-20 group-hover:scale-110 transition-transform duration-700">OKINAR</span>
                
                {/* Floating UI Elements (Süs) */}
                <div className="absolute bottom-6 left-6 z-20 bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/10 w-48">
                    <div className="h-2 w-20 bg-brand-yellow rounded mb-2"></div>
                    <div className="h-2 w-32 bg-gray-600 rounded"></div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}