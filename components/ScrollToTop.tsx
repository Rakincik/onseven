"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useAnimation } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const controls = useAnimation();

  useEffect(() => {
    // Scroll event listener
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({ scale: 1, opacity: 1 });
    } else {
      controls.start({ scale: 0, opacity: 0 });
    }
  }, [isVisible, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      animate={controls}
      initial={{ scale: 0, opacity: 0 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-8 z-[9980]"
    >
      <button
        onClick={scrollToTop}
        className="relative w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,215,0,0.3)] group"
      >
        {/* İlerleme Halkası (SVG) */}
        <svg className="absolute top-0 left-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="#333"
            strokeWidth="4"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="#FFD700"
            strokeWidth="4"
            style={{ pathLength: scrollYProgress }}
          />
        </svg>

        {/* Ok İkonu */}
        <ArrowUp 
            size={20} 
            className="text-brand-yellow group-hover:-translate-y-1 transition-transform" 
        />
      </button>
    </motion.div>
  );
}