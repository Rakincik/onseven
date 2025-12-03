"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Proje geliştirme süreciniz nasıl işliyor?",
    answer: "Önce sizi dinliyor ve ihtiyaç analizi yapıyoruz. Ardından prototipleme, tasarım, kodlama ve test aşamalarıyla ilerliyoruz. Her aşamada size rapor sunuyoruz.",
  },
  {
    question: "Okinar sistemi hangi kurumlar için uygun?",
    answer: "Okinar; üniversiteler, özel okullar, kurs merkezleri ve kurumsal şirket içi eğitimler için ölçeklenebilir şekilde tasarlanmıştır.",
  },
  {
    question: "Proje sonrası teknik destek veriyor musunuz?",
    answer: "Evet, geliştirdiğimiz tüm yazılımlar için 1 yıl boyunca ücretsiz teknik bakım ve hata giderme desteği sunuyoruz. Sonrasında bakım anlaşmalarıyla devam ediyoruz.",
  },
  {
    question: "Web sitesi fiyatlandırmanız neye göre belirleniyor?",
    answer: "Projenin kapsamı, istenen özellikler (admin paneli, e-ticaret, çoklu dil vb.) ve tasarım detaylarına göre bütçe oluşturuyoruz.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Sıkça Sorulan Sorular</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
                key={index} 
                className="border border-white/10 rounded-lg overflow-hidden bg-zinc-900/30 hover:border-brand-yellow/30 transition-colors"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`font-medium ${activeIndex === index ? 'text-brand-yellow' : 'text-gray-200'}`}>
                    {faq.question}
                </span>
                {activeIndex === index ? (
                  <Minus className="text-brand-yellow shrink-0" />
                ) : (
                  <Plus className="text-gray-500 shrink-0" />
                )}
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}