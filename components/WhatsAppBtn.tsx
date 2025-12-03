"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppBtn() {
  return (
    <a
      href="https://wa.me/905550000000" // Buraya gerçek numaranı yazarsın
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[9000] bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
    >
      <MessageCircle size={32} fill="white" className="text-white" />
      
      {/* Hoverda çıkan yazı */}
      <span className="absolute right-16 bg-white text-black px-3 py-1 rounded text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
        Bize Yazın!
      </span>
      
      {/* Ping animasyonu */}
      <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping"></span>
    </a>
  );
}