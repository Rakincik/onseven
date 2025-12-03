"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  // 🔧 TS için başlangıç değeri ve null tipleri eklendi
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // --- HD AYARI ---
    const dpr = window.devicePixelRatio || 1;
    const updateSize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      // ölçeklendirmeyi her seferinde sıfırla + uygula (yığılmasın)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    updateSize();

    // --- MATRIX AYARLARI ---
    const chars = "ON7YAZILIM0123456789";
    const fontSize = 16;
    const columns = window.innerWidth / fontSize;
    const drops: number[] = [];

    for (let x = 0; x < columns; x++) drops[x] = Math.random() * -100;

    const draw = () => {
      // Hafif iz bırakma efekti
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      ctx.fillStyle = "#FFD700"; // Kodların rengi Sarı
      ctx.font = `bold ${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > window.innerHeight && Math.random() > 0.98) {
          drops[i] = 0;
        }
        drops[i] += 1;
      }

      animationFrameId.current = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      updateSize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
        >
          {/* KATMAN 1: Matrix Canvas */}
          <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-60" />

          {/* KATMAN 2: LOGO (Maskeleme ve Renklendirme) */}
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            <svg width="100%" height="100%">
              <defs>
                <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* LOGO TEXT - SVG OLARAK ÇİZİYORUZ */}
              <motion.text
                initial={{ opacity: 0, strokeDasharray: 2000, strokeDashoffset: 2000 }}
                animate={{ opacity: 1, strokeDashoffset: 0 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                // YENİ FONT: Uçları yuvarlak (Rounded)
                style={{ fontFamily: "var(--font-nunito), sans-serif", fontWeight: 900 }}
                fontSize="clamp(120px, 25vw, 400px)"
                // İÇ DOLGU: Yarı saydam siyah (Kodlar görünsün diye)
                fill="rgba(0, 0, 0, 0.85)"
                // PARLAMA EFEKTİ
                filter="url(#neon-glow)"
                className="tracking-tighter drop-shadow-2xl"
              >
                {/* ON HARFLERİ: Beyaz/Gri Kontür (Siyah zeminde belli olsun) */}
                <tspan stroke="rgba(255,255,255,0.8)" strokeWidth="3">
                  ON
                </tspan>

                {/* 7 RAKAMI: Logodaki gibi SARI Kontür ve biraz daha kalın */}
                <tspan stroke="#FFD700" strokeWidth="4" dx="-10">
                  7
                </tspan>
              </motion.text>
            </svg>
          </div>

          {/* Alt Yükleme Barı */}
          <motion.div
            className="absolute bottom-12 z-20 flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="h-1 w-64 bg-zinc-900/80 rounded-full overflow-hidden border border-white/10 backdrop-blur-sm">
              <motion.div
                className="h-full bg-brand-yellow shadow-[0_0_15px_#FFD700]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 4.5, ease: "easeInOut" }}
              />
            </div>
            <span className="text-brand-yellow font-bold font-mono text-xs tracking-widest animate-pulse">
              SYSTEM_LOADING
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
