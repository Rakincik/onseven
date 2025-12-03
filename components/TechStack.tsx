"use client";
import { Award, ShieldCheck, Zap, Headphones } from "lucide-react";

const features = [
  {
    icon: <Award size={24} />,
    title: "Hacettepe Teknokent",
    desc: "AR-GE ve İnovasyon Merkezi"
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "KVKK Uyumlu",
    desc: "Yüksek Veri Güvenliği"
  },
  {
    icon: <Zap size={24} />,
    title: "%100 Yerli Yazılım",
    desc: "Milli Teknoloji Hamlesi"
  },
  {
    icon: <Headphones size={24} />,
    title: "7/24 Teknik Destek",
    desc: "Kesintisiz Hizmet"
  }
];

export default function TechStack() {
  return (
    <section className="bg-black border-y border-white/10 relative z-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="group p-8 flex flex-col items-center text-center hover:bg-white/5 transition-colors duration-300"
            >
              <div className="mb-4 p-3 rounded-full bg-zinc-900 border border-white/10 text-gray-400 group-hover:text-brand-yellow group-hover:border-brand-yellow/50 transition-all duration-300 shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-1 tracking-wide">
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs uppercase tracking-widest font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}