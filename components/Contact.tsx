"use client";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="iletisim" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800">
          
          {/* Sol: İletişim Bilgileri */}
          <div className="p-10 bg-brand-yellow text-black flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-6">Tanışalım!</h3>
              <p className="font-medium mb-12 opacity-80">
                Projelerinizi dinlemek ve en uygun çözümü sunmak için sabırsızlanıyoruz.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <MapPin className="shrink-0" />
                    <p>Hacettepe Teknokent, Üniversiteler Mah. 1596. Cad. Çankaya / ANKARA</p>
                </div>
                <div className="flex items-center gap-4">
                    <Mail className="shrink-0" />
                    <p>info@on7yazilim.com</p>
                </div>
                <div className="flex items-center gap-4">
                    <Phone className="shrink-0" />
                    <p>+90 (555) 000 00 00</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
                <p className="text-sm font-bold uppercase tracking-widest opacity-60">ON7 YAZILIM A.Ş.</p>
            </div>
          </div>

          {/* Sağ: Form */}
          <div className="p-10">
            <h3 className="text-2xl font-bold text-white mb-6">Bize Yazın</h3>
            <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400">Adınız</label>
                        <input type="text" className="w-full bg-black/50 border border-zinc-700 rounded p-3 text-white focus:border-brand-yellow focus:outline-none transition-colors" placeholder="Ahmet Yılmaz" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400">E-posta</label>
                        <input type="email" className="w-full bg-black/50 border border-zinc-700 rounded p-3 text-white focus:border-brand-yellow focus:outline-none transition-colors" placeholder="ornek@sirket.com" />
                    </div>
                </div>
                
                <div className="space-y-2">
                    <label className="text-sm text-gray-400">Konu</label>
                    <select className="w-full bg-black/50 border border-zinc-700 rounded p-3 text-white focus:border-brand-yellow focus:outline-none transition-colors">
                        <option>Web Sitesi Projesi</option>
                        <option>Okinar Hakkında</option>
                        <option>Mobil Uygulama</option>
                        <option>Diğer</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-gray-400">Mesajınız</label>
                    <textarea rows={4} className="w-full bg-black/50 border border-zinc-700 rounded p-3 text-white focus:border-brand-yellow focus:outline-none transition-colors" placeholder="Projenizden bahsedin..."></textarea>
                </div>

                <button className="w-full bg-white text-black font-bold py-4 rounded hover:bg-brand-yellow transition-colors">
                    GÖNDER
                </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}