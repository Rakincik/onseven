"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { 
  Search, Home, FileText, MonitorPlay, Zap, 
  MessageSquare, User, ArrowRight, Command 
} from "lucide-react";

const commands = [
  { id: "home", title: "Ana Sayfa", icon: <Home size={18} />, href: "/" },
  { id: "okinar", title: "Okinar LMS", icon: <MonitorPlay size={18} />, href: "/okinar" },
  { id: "quote", title: "Teklif Al", icon: <Zap size={18} />, href: "/teklif-al" },
  { id: "blog", title: "Blog & Makaleler", icon: <FileText size={18} />, href: "/blog" },
  { id: "contact", title: "İletişim", icon: <MessageSquare size={18} />, href: "/#iletisim" },
  { id: "about", title: "Hakkımızda", icon: <User size={18} />, href: "/#hakkimizda" },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const router = useRouter();

  // Klavye Kısayolu (Ctrl+K veya Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Filtreleme
  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase())
  );

  // Yönlendirme
  const handleSelect = (href: string) => {
    router.push(href);
    setIsOpen(false);
    setQuery("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-start justify-center pt-[15vh] px-4">
          
          {/* Arka Plan (Blur) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Kutusu */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="w-full max-w-lg bg-[#0f1115] border border-white/10 rounded-xl shadow-2xl overflow-hidden relative z-10"
          >
            {/* Arama Input */}
            <div className="flex items-center gap-3 px-4 py-4 border-b border-white/5">
              <Search className="text-gray-500" size={20} />
              <input
                autoFocus
                type="text"
                placeholder="Nereye gitmek istersiniz?..."
                className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none h-6"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                    setSelected(0);
                }}
              />
              <div className="text-xs font-mono text-gray-600 border border-white/10 px-2 py-0.5 rounded">
                ESC
              </div>
            </div>

            {/* Sonuç Listesi */}
            <div className="p-2 max-h-[300px] overflow-y-auto">
              {filteredCommands.length > 0 ? (
                filteredCommands.map((cmd, index) => (
                  <button
                    key={cmd.id}
                    onClick={() => handleSelect(cmd.href)}
                    onMouseEnter={() => setSelected(index)}
                    className={`w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm transition-colors ${
                      index === selected ? "bg-brand-yellow text-black" : "text-gray-400 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {cmd.icon}
                      <span className="font-medium">{cmd.title}</span>
                    </div>
                    {index === selected && <ArrowRight size={14} />}
                  </button>
                ))
              ) : (
                <div className="px-4 py-8 text-center text-gray-500 text-sm">
                   Sonuç bulunamadı.
                </div>
              )}
            </div>
            
            {/* Alt Bilgi */}
            <div className="bg-[#0a0a0a] px-4 py-2 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-600">
                <span className="flex items-center gap-1">
                    <Command size={10} /> 
                    <strong>Komut Merkezi</strong>
                </span>
                <span>ON7 YAZILIM v1.0</span>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}