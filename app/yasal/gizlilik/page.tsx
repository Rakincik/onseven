import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-brand-yellow selection:text-black font-sans">
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-6 max-w-4xl">
        
        {/* Başlık Alanı */}
        <div className="mb-12 border-b border-white/10 pb-8">
            <div className="flex items-center gap-2 text-brand-yellow mb-4 font-mono text-sm">
                <Shield size={16} />
                <span>LEGAL_DOCUMENT_V1.0</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">Gizlilik Politikası ve KVKK</h1>
            <p className="text-gray-400">Son Güncelleme: 27 Kasım 2025</p>
        </div>

        {/* İçerik Alanı */}
        <div className="prose prose-invert prose-lg max-w-none">
            <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5 mb-8 flex gap-4 items-start">
                <Lock className="text-green-500 shrink-0 mt-1" size={24} />
                <div>
                    <h4 className="text-white font-bold text-lg m-0">Veri Güvenliği Taahhüdü</h4>
                    <p className="text-gray-400 text-sm m-0 mt-2">
                        ON7 Yazılım olarak, verilerinizi kendi verilerimiz gibi koruyoruz. Üçüncü taraflarla izniniz olmadan asla paylaşım yapmıyoruz.
                    </p>
                </div>
            </div>

            <h3 className="text-white font-bold text-2xl mt-8 mb-4 flex items-center gap-2">
                <span className="w-2 h-8 bg-brand-yellow rounded-full"></span>
                1. Hangi Verileri Topluyoruz?
            </h3>
            <p className="text-gray-400 leading-relaxed">
                Web sitemizi ziyaret ettiğinizde IP adresi, tarayıcı bilgileri ve gezinti verileri gibi anonim bilgiler toplanabilir. İletişim formlarını doldurduğunuzda ise ad, soyad ve e-posta gibi bilgiler rızanızla alınır.
            </p>

            <h3 className="text-white font-bold text-2xl mt-8 mb-4 flex items-center gap-2">
                <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                2. Çerezler (Cookies)
            </h3>
            <p className="text-gray-400 leading-relaxed">
                Sitemizin düzgün çalışması ve kullanıcı deneyimini iyileştirmek için çerezler kullanıyoruz. Google Analytics gibi araçlarla site trafiğini analiz ediyoruz.
            </p>

            <h3 className="text-white font-bold text-2xl mt-8 mb-4 flex items-center gap-2">
                <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
                3. Haklarınız
            </h3>
            <p className="text-gray-400 leading-relaxed">
                KVKK kapsamında verilerinizin silinmesini, değiştirilmesini veya ne amaçla kullanıldığını öğrenmeyi talep etme hakkına sahipsiniz. Bunun için <a href="mailto:info@on7yazilim.com" className="text-brand-yellow underline">info@on7yazilim.com</a> adresine mail atmanız yeterlidir.
            </p>
        </div>

      </div>

      <Footer />
    </main>
  );
}