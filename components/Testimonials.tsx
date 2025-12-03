"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  {
    name: "Ahmet Yılmaz",
    role: "Gül Antik Kafe, Kurucu",
    text: "ON7 ile çalışmak vizyonumuzu genişletti. Antik kafe konseptimizi dijitale o kadar iyi yansıttılar ki, online müzayede sistemimiz sorunsuz çalışıyor.",
  },
  {
    name: "Selin Demir",
    role: "Eğitim Kurumu Müdürü",
    text: "Okinar sistemi sayesinde pandemide bile eğitim aksamadı. Teknik destekleri ve sistemin hızı inanılmaz. Teşekkürler ON7 ailesi.",
  },
  {
    name: "Mehmet Öz",
    role: "Lojistik A.Ş. CEO",
    text: "Filo takip yazılımımız için görüştüğümüzde bu kadar detaylı bir çözüm beklemiyordum. Süreç yönetimi ve raporlama ekranları harika.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Mutlu Müşteriler</h2>
          <div className="w-20 h-1 bg-brand-yellow mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 relative hover:border-brand-yellow/30 transition-colors"
            >
              {/* Sarı Tırnak İşareti */}
              <div className="absolute -top-4 -left-4 bg-brand-yellow text-black p-3 rounded-xl shadow-lg">
                <Quote size={24} />
              </div>

              <p className="text-gray-300 italic mb-6 leading-relaxed">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-700 to-gray-500"></div>
                <div>
                  <h4 className="font-bold text-white text-sm">{review.name}</h4>
                  <p className="text-xs text-brand-yellow">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}