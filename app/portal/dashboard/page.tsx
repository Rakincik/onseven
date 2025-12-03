"use client";
import { useState } from "react";
import type { ChangeEvent, ReactNode } from "react";
import { 
  LayoutDashboard, PenTool, Users, Settings, LogOut, 
  Smartphone, Monitor, Tablet, Save, Wand2, GripVertical, 
  ChevronRight, Globe, Eye, Layers, Palette, Image as ImageIcon, 
  Upload, Search, X, RotateCw 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- TİPLER ---
type ViewMode = "desktop" | "tablet" | "mobile";
type EditTab = "content" | "style" | "seo";

type NavItemProps = {
  icon: ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
  badge?: string;
};

type InputGroupProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  remix?: () => void;
  isRemixing?: boolean;
  textarea?: boolean;
};

export default function Dashboard() {
  // STATE YÖNETİMİ
  const [activeTab, setActiveTab] = useState("builder");
  const [viewMode, setViewMode] = useState<ViewMode>("desktop");
  const [isRotated, setIsRotated] = useState(false);
  const [selectedBlock, setSelectedBlock] = useState("hero"); // Hangi bloğu düzenliyoruz?
  const [editTab, setEditTab] = useState<EditTab>("content");
  const [isSaving, setIsSaving] = useState(false);
  const [showMediaLib, setShowMediaLib] = useState(false);
  const [themeColor, setThemeColor] = useState("yellow");

  // --- SİTE İÇERİK VERİSİ (TÜM SAYFALAR İÇİN) ---
  const [content, setContent] = useState({
    hero: {
      title: "GELECEĞİ KODLUYORUZ.",
      desc: "ON7 Yazılım; Hacettepe Teknokent'te geliştirdiği Okinar altyapısı ve kurumsal çözümlerle teknolojinin sınırlarını zorlar.",
      btn: "Projemi Başlat",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
    },
    about: {
      title: "Hikayemiz & Vizyonumuz",
      mission: "Yapay zeka ve IoT tabanlı çözümlerimizle Türkiye'nin teknoloji ihracatında öncü rol oynamak.",
      stats_1: "50+ Proje",
      stats_2: "10K+ Kullanıcı"
    },
    okinar: {
      headline: "Eğitimin Dijital Dönüşümü",
      subtext: "Zoom gerektirmeyen yerli video konferans sistemi.",
      btn: "Demo İste"
    },
    contact: {
      email: "info@on7yazilim.com",
      phone: "+90 (312) 000 00 00",
      address: "Hacettepe Teknokent, Ankara"
    },
    seo: {
      title: "ON7 Yazılım | Ankara",
      desc: "Hacettepe Teknokent merkezli lider yazılım firması."
    }
  });

  // AI REMIX (SİMÜLASYON)
  const [isRemixing, setIsRemixing] = useState(false);
  const handleAiRemix = (field: string, section: string) => {
    setIsRemixing(true);
    setTimeout(() => {
      // Basit bir remix mantığı
      const newVal =
        "AI Tarafından Optimize Edildi: " + Math.floor(Math.random() * 100);
      // @ts-ignore
      setContent({ ...content, [section]: { ...content[section], [field]: newVal } });
      setIsRemixing(false);
    }, 800);
  };

  // KAYDETME
  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("Tüm değişiklikler canlı siteye gönderildi! 🚀");
    }, 1500);
  };

  // Renkler
  const colors: any = {
    yellow: "text-[#FFD700] border-[#FFD700] bg-[#FFD700]",
    blue: "text-blue-500 border-blue-500 bg-blue-500",
    purple: "text-purple-500 border-purple-500 bg-purple-500",
    green: "text-green-500 border-green-500 bg-green-500",
  };

  return (
    <div className="h-screen bg-[#050505] text-white font-sans flex overflow-hidden">
      
      {/* SOL SIDEBAR */}
      <aside className="w-20 lg:w-64 border-r border-white/10 bg-[#0a0a0a] flex flex-col z-20 flex-shrink-0">
        <div className="h-16 flex items-center justify-center lg:justify-start lg:px-6 border-b border-white/10">
          <span className="text-2xl font-black">
            ON<span className="text-brand-yellow">7</span>
          </span>
          <span className="hidden lg:block ml-2 text-xs text-gray-500 font-bold tracking-widest mt-1">
            STUDIO
          </span>
        </div>
        <nav className="p-4 space-y-2 flex-1">
          <NavItem
            icon={<LayoutDashboard />}
            label="Genel Bakış"
            active={activeTab === "overview"}
            onClick={() => setActiveTab("overview")}
          />
          <NavItem
            icon={<PenTool />}
            label="Site Düzenle"
            active={activeTab === "builder"}
            onClick={() => setActiveTab("builder")}
            badge="Live"
          />
          <NavItem
            icon={<Users />}
            label="Müşteriler (CRM)"
            onClick={() => setActiveTab("crm")}
          />
          <NavItem
            icon={<Settings />}
            label="Ayarlar"
            onClick={() => setActiveTab("settings")}
          />
        </nav>
      </aside>

      {/* ANA ALAN */}
      <main className="flex-1 flex flex-col min-w-0 relative">
        
        {/* HEADER */}
        <header className="h-16 border-b border-white/10 bg-[#0a0a0a] flex items-center justify-between px-6 z-20">
          <div className="flex items-center gap-4">
            <div className="bg-zinc-900 p-1 rounded-lg border border-white/10 flex items-center">
              <button
                onClick={() => setViewMode("desktop")}
                className={`p-2 rounded ${
                  viewMode === "desktop"
                    ? "bg-white/10 text-white"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                <Monitor size={16} />
              </button>
              <button
                onClick={() => setViewMode("tablet")}
                className={`p-2 rounded ${
                  viewMode === "tablet"
                    ? "bg-white/10 text-white"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                <Tablet size={16} />
              </button>
              <button
                onClick={() => setViewMode("mobile")}
                className={`p-2 rounded ${
                  viewMode === "mobile"
                    ? "bg-white/10 text-white"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                <Smartphone size={16} />
              </button>
              <div className="w-px h-4 bg-white/10 mx-1"></div>
              <button
                onClick={() => setIsRotated(!isRotated)}
                className={`p-2 rounded ${
                  isRotated
                    ? "bg-brand-yellow text-black"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                <RotateCw size={16} />
              </button>
            </div>
          </div>
          <button
            onClick={handleSave}
            className={`px-6 py-2 rounded-lg font-bold text-black flex items-center gap-2 transition-all ${
              isSaving ? "bg-gray-500" : colors[themeColor].split(" ")[2]
            }`}
          >
            {isSaving ? (
              "Yayınlanıyor..."
            ) : (
              <>
                <Save size={16} /> Yayına Al
              </>
            )}
          </button>
        </header>

        <div className="flex-1 flex overflow-hidden">
          
          {/* --- SOL PANEL: BLOKLAR --- */}
          <div className="w-72 bg-[#0c0c0e] border-r border-white/10 flex flex-col overflow-y-auto custom-scrollbar">
            <div className="p-4 border-b border-white/10 bg-zinc-900/30">
              <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                <Layers size={12} /> Sayfa Blokları
              </h3>
            </div>
            <div className="p-2 space-y-1">
              {/* GÜNCELLENMİŞ LİSTE */}
              {[
                { id: "hero", label: "Ana Ekran (Hero)" },
                { id: "about", label: "Hakkımızda / Vizyon" },
                { id: "okinar", label: "Okinar Vitrin" },
                { id: "contact", label: "İletişim Bilgileri" },
                { id: "seo", label: "SEO & Metadata" }
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedBlock(item.id)}
                  className={`p-3 rounded-lg text-xs font-medium cursor-pointer flex items-center justify-between group transition-all select-none ${
                    selectedBlock === item.id
                      ? `bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20`
                      : "text-gray-400 hover:bg-white/5 hover:text-white border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <GripVertical
                      size={12}
                      className="text-gray-600 cursor-grab active:cursor-grabbing"
                    />
                    {item.label}
                  </div>
                  {selectedBlock === item.id && (
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Tema */}
            <div className="p-6 mt-auto border-t border-white/10">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Palette size={14} /> Panel Rengi
              </h3>
              <div className="flex gap-3">
                {Object.keys(colors).map((color) => (
                  <button
                    key={color}
                    onClick={() => setThemeColor(color)}
                    className={`w-6 h-6 rounded-full border-2 ${
                      themeColor === color
                        ? "border-white scale-110"
                        : "border-transparent opacity-50"
                    }`}
                    style={{
                      backgroundColor: color === "yellow" ? "#FFD700" : color,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* --- ORTA PANEL: CANLI ÖNİZLEME (MOCKUP) --- */}
          <div className="flex-1 bg-[#050505] relative flex items-center justify-center p-8 overflow-hidden bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:20px_20px]">
            <motion.div
              layout
              className={`relative bg-black border-8 border-zinc-800 shadow-2xl overflow-hidden transition-all duration-500 ${
                viewMode === "mobile"
                  ? isRotated
                    ? "w-[700px] h-[375px] rounded-[2rem]"
                    : "w-[375px] h-[700px] rounded-[3rem]"
                  : viewMode === "tablet"
                  ? isRotated
                    ? "w-[800px] h-[600px] rounded-3xl"
                    : "w-[600px] h-[800px] rounded-3xl"
                  : "w-full h-full max-w-5xl max-h-[90%] rounded-xl"
              }`}
            >
              {/* SİTE İÇERİĞİ (LIVE PREVIEW) */}
              <div className="w-full h-full bg-black overflow-y-auto custom-scrollbar relative group/preview">
                
                {/* Navbar */}
                <div className="h-16 flex items-center justify-between px-6 sticky top-0 bg-black/80 backdrop-blur-md z-50 border-b border-white/10">
                  <div className="font-black text-white">
                    ON<span className="text-brand-yellow">7</span>
                  </div>
                  <div className="hidden md:flex gap-4 text-[10px] text-gray-400">
                    MENÜLER...
                  </div>
                </div>

                {/* 1. HERO PREVIEW */}
                <div
                  id="hero"
                  className={`relative py-20 px-6 text-center border-b border-white/5 ${
                    selectedBlock === "hero" ? "ring-2 ring-brand-yellow inset-0" : ""
                  }`}
                >
                  <div className="absolute inset-0 z-[-1]">
                    <img
                      src={content.hero.image}
                      alt="bg"
                      className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black"></div>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
                    {content.hero.title}
                  </h1>
                  <p className="text-gray-400 max-w-lg mx-auto mb-8">
                    {content.hero.desc}
                  </p>
                  <button className="px-6 py-3 bg-brand-yellow text-black font-bold rounded-lg">
                    {content.hero.btn}
                  </button>
                </div>

                {/* 2. ABOUT PREVIEW */}
                <div
                  id="about"
                  className={`py-16 px-6 bg-zinc-900/30 border-b border-white/5 text-center ${
                    selectedBlock === "about" ? "ring-2 ring-brand-yellow" : ""
                  }`}
                >
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    {content.about.title}
                  </h2>
                  <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-6">
                    {content.about.mission}
                  </p>
                  <div className="flex justify-center gap-8 text-brand-yellow font-bold">
                    <span>{content.about.stats_1}</span>
                    <span>{content.about.stats_2}</span>
                  </div>
                </div>

                {/* 3. OKINAR PREVIEW */}
                <div
                  id="okinar"
                  className={`py-16 px-6 bg-black border-b border-white/5 text-center ${
                    selectedBlock === "okinar" ? "ring-2 ring-brand-yellow" : ""
                  }`}
                >
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                    ÜRÜNLER
                  </span>
                  <h2 className="text-3xl font-black text-white mt-2 mb-2">
                    {content.okinar.headline}
                  </h2>
                  <p className="text-gray-500 text-sm mb-6">
                    {content.okinar.subtext}
                  </p>
                  <button className="px-6 py-2 border border-white/20 text-white rounded-lg text-sm hover:bg-white/10">
                    {content.okinar.btn}
                  </button>
                </div>

                {/* 4. CONTACT PREVIEW */}
                <div
                  id="contact"
                  className={`py-10 px-6 bg-zinc-900 text-center ${
                    selectedBlock === "contact" ? "ring-2 ring-brand-yellow" : ""
                  }`}
                >
                  <h3 className="text-xl font-bold text-white mb-4">İletişim</h3>
                  <div className="text-sm text-gray-400 space-y-1">
                    <p>{content.contact.address}</p>
                    <p>{content.contact.email}</p>
                    <p>{content.contact.phone}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* --- SAĞ PANEL: EDİTÖR (INSPECTOR) --- */}
          <div className="w-80 bg-[#0c0c0e] border-l border-white/10 p-6 overflow-y-auto custom-scrollbar">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-6 flex items-center gap-2">
              <PenTool size={14} /> Düzenle:{" "}
              <span className="text-white">{selectedBlock.toUpperCase()}</span>
            </h3>

            {/* HERO EDİTÖRÜ */}
            {selectedBlock === "hero" && (
              <div className="space-y-6">
                <InputGroup
                  label="Başlık"
                  value={content.hero.title}
                  onChange={(v: string) =>
                    setContent({
                      ...content,
                      hero: { ...content.hero, title: v },
                    })
                  }
                  remix={() => handleAiRemix("title", "hero")}
                  isRemixing={isRemixing}
                />
                <InputGroup
                  label="Açıklama"
                  value={content.hero.desc}
                  onChange={(v: string) =>
                    setContent({
                      ...content,
                      hero: { ...content.hero, desc: v },
                    })
                  }
                  remix={() => handleAiRemix("desc", "hero")}
                  isRemixing={isRemixing}
                  textarea
                />
                <InputGroup
                  label="Buton Metni"
                  value={content.hero.btn}
                  onChange={(v: string) =>
                    setContent({
                      ...content,
                      hero: { ...content.hero, btn: v },
                    })
                  }
                />

                <div className="space-y-2">
                  <label className="text-xs font-bold text-white">Arka Plan</label>
                  <div
                    className="h-20 bg-zinc-900 border border-white/10 rounded-lg flex items-center justify-center cursor-pointer hover:border-brand-yellow transition-colors"
                    onClick={() => setShowMediaLib(true)}
                  >
                    <ImageIcon className="text-gray-500" />
                  </div>
                </div>
              </div>
            )}

            {/* ABOUT EDİTÖRÜ */}
            {selectedBlock === "about" && (
              <div className="space-y-6">
                <InputGroup
                  label="Sayfa Başlığı"
                  value={content.about.title}
                  onChange={(v: string) =>
                    setContent({
                      ...content,
                      about: { ...content.about, title: v },
                    })
                  }
                />
                <InputGroup
                  label="Misyon Metni"
                  value={content.about.mission}
                  onChange={(v: string) =>
                    setContent({
                      ...content,
                      about: { ...content.about, mission: v },
                    })
                  }
                  textarea
                />
                <div className="grid grid-cols-2 gap-2">
                  <InputGroup
                    label="İstatistik 1"
                    value={content.about.stats_1}
                    onChange={(v: string) =>
                      setContent({
                        ...content,
                        about: { ...content.about, stats_1: v },
                      })
                    }
                  />
                  <InputGroup
                    label="İstatistik 2"
                    value={content.about.stats_2}
                    onChange={(v: string) =>
                      setContent({
                        ...content,
                        about: { ...content.about, stats_2: v },
                      })
                    }
                  />
                </div>
              </div>
            )}

            {/* OKINAR EDİTÖRÜ */}
            {selectedBlock === "okinar" && (
              <div className="space-y-6">
                <InputGroup
                  label="Ürün Başlığı"
                  value={content.okinar.headline}
                  onChange={(v: string) =>
                    setContent({
                      ...content,
                      okinar: { ...content.okinar, headline: v },
                    })
                  }
                />
                <InputGroup
                  label="Alt Metin"
                  value={content.okinar.subtext}
                  onChange={(v: string) =>
                    setContent({
                      ...content,
                      okinar: { ...content.okinar, subtext: v },
                    })
                  }
                  textarea
                />
                <InputGroup
                  label="Buton"
                  value={content.okinar.btn}
                  onChange={(v: string) =>
                    setContent({
                      ...content,
                      okinar: { ...content.okinar, btn: v },
                    })
                  }
                />
              </div>
            )}

            {/* CONTACT EDİTÖRÜ */}
            {selectedBlock === "contact" && (
              <div className="space-y-6">
                <InputGroup
                  label="E-Posta"
                  value={content.contact.email}
                  onChange={(v: string) =>
                    setContent({
                      ...content,
                      contact: { ...content.contact, email: v },
                    })
                  }
                />
                <InputGroup
                  label="Telefon"
                  value={content.contact.phone}
                  onChange={(v: string) =>
                    setContent({
                      ...content,
                      contact: { ...content.contact, phone: v },
                    })
                  }
                />
                <InputGroup
                  label="Adres"
                  value={content.contact.address}
                  onChange={(v: string) =>
                    setContent({
                      ...content,
                      contact: { ...content.contact, address: v },
                    })
                  }
                  textarea
                />
              </div>
            )}

            {/* SEO EDİTÖRÜ */}
            {selectedBlock === "seo" && (
              <div className="space-y-6">
                <div className="p-3 bg-[#1a1a1c] rounded-lg border border-white/5 mb-4">
                  <p className="text-xs font-bold text-gray-500 mb-2">
                    Google Önizlemesi
                  </p>
                  <div className="text-[#8ab4f8] text-sm hover:underline truncate">
                    {content.seo.title}
                  </div>
                  <div className="text-[#202124] text-xs flex items-center gap-1">
                    <span className="text-green-500">https://on7yazilim.com</span>
                  </div>
                  <div className="text-gray-400 text-xs mt-1 line-clamp-2">
                    {content.seo.desc}
                  </div>
                </div>
                <InputGroup
                  label="Meta Başlık"
                  value={content.seo.title}
                  onChange={(v: string) =>
                    setContent({
                      ...content,
                      seo: { ...content.seo, title: v },
                    })
                  }
                />
                <InputGroup
                  label="Meta Açıklama"
                  value={content.seo.desc}
                  onChange={(v: string) =>
                    setContent({
                      ...content,
                      seo: { ...content.seo, desc: v },
                    })
                  }
                  textarea
                />
              </div>
            )}
          </div>
        </div>
      </main>

      {/* MEDYA MODALI (Aynı kalabilir, yer tutucu) */}
      <AnimatePresence>
        {showMediaLib && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <div className="bg-[#0c0c0e] border border-white/10 rounded-2xl w-full max-w-3xl h-[600px] flex flex-col p-6 relative">
              <button
                onClick={() => setShowMediaLib(false)}
                className="absolute top-4 right-4 text-white"
              >
                <X />
              </button>
              <h2 className="text-xl font-bold mb-4">Medya Kütüphanesi</h2>
              <div className="flex-1 flex items-center justify-center text-gray-500">
                Görseller burada listelenecek...
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// YARDIMCI BİLEŞENLER
function NavItem({ icon, label, active, onClick, badge }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between p-2.5 rounded-lg transition-all group ${
        active
          ? "bg-white/10 text-white font-bold"
          : "text-gray-400 hover:text-white hover:bg-white/5"
      }`}
    >
      <div className="flex items-center gap-3 text-sm">
        {icon} <span>{label}</span>
      </div>
      {badge && (
        <span className="text-[10px] px-1.5 py-0.5 rounded font-bold bg-brand-yellow text-black">
          {badge}
        </span>
      )}
    </button>
  );
}

function InputGroup({
  label,
  value,
  onChange,
  remix,
  isRemixing,
  textarea,
}: InputGroupProps) {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(e.target.value);
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-xs font-bold text-white">{label}</label>
        {remix && (
          <button
            onClick={remix}
            className="text-[10px] flex items-center gap-1 text-purple-400 hover:text-purple-300"
          >
            {isRemixing ? (
              <span className="animate-pulse">Yazılıyor...</span>
            ) : (
              <>
                <Wand2 size={10} /> AI Remix
              </>
            )}
          </button>
        )}
      </div>
      {textarea ? (
        <textarea
          rows={3}
          value={value}
          onChange={handleChange}
          className="w-full bg-[#121214] border border-white/10 rounded-lg p-3 text-sm text-white focus:border-brand-yellow outline-none resize-none"
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="w-full bg-[#121214] border border-white/10 rounded-lg p-3 text-sm text-white focus:border-brand-yellow outline-none"
        />
      )}
    </div>
  );
}
