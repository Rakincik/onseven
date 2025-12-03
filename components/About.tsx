"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "4+", label: "Yıl Deneyim" },
  { value: "20+", label: "Tamamlanan Proje" },
  { value: "%100", label: "Müşteri Memnuniyeti" },
  { value: "7/24", label: "Teknik Destek" },
];

export default function About() {
  return (
    <section id="hakkimizda" className="py-24 bg-zinc-950 relative overflow-hidden">
        {/* Dekoratif Çizgiler */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Sol: Hikaye */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-yellow font-mono text-sm tracking-widest mb-2">ON7 HİKAYESİ</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              2021'den Beri <br />
              <span className="border-b-4 border-brand-yellow">Dijital Dönüşüm.</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Ankara Hacettepe Teknokent'te kurulan ON7 Yazılım, sadece kod yazan bir ekip değil; iş fikirlerini dijital gerçekliğe dönüştüren bir teknoloji ortağıdır.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Genç ve dinamik kadromuzla, Okinar uzaktan eğitim sisteminden kurumsal web çözümlerine kadar geniş bir yelpazede hizmet veriyoruz. Hedefimiz standartları yakalamak değil, belirlemek.
            </p>
            
            <div className="p-4 bg-zinc-900 border-l-4 border-brand-yellow">
                <p className="text-white italic">"Yaratıcı ve akılcı çözümlerle kullanıcı deneyimini en üst seviyeye çıkarıyoruz."</p>
            </div>
          </motion.div>

          {/* Sağ: İstatistikler Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-900/50 border border-white/5 p-8 text-center rounded-xl hover:border-brand-yellow/50 transition-colors group"
              >
                <h4 className="text-4xl font-bold text-white mb-2 group-hover:text-brand-yellow transition-colors">{stat.value}</h4>
                <p className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}