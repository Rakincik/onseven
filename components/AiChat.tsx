"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link"; // <--- İŞTE BU EKSİKTİ, EKLENDİ! ✅

// --- TİPLER ---
type Sender = "bot" | "user";
type MessageType = "text" | "options" | "card"; 

interface Message {
  id: number;
  type: MessageType;
  content: string | any; 
  sender: Sender;
}

// --- BOTUN HAFIZASI VE DURUMU ---
type ChatState = "IDLE" | "ASKING_NAME" | "ASKING_PROJECT_TYPE" | "ASKING_BUDGET" | "COMPLETED";

export default function AiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  
  // Botun Beyni (State)
  const [chatState, setChatState] = useState<ChatState>("IDLE");
  const [userName, setUserName] = useState("");
  
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, type: "text", content: "Merhaba! Ben ON7 Navigator. 🤖 Size daha iyi yardımcı olabilmem için isminizi öğrenebilir miyim?", sender: "bot" }
  ]);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // İLK AÇILIŞTA STATE AYARLA
  useEffect(() => {
    if (messages.length === 1) {
        setChatState("ASKING_NAME");
    }
  }, []);

  // OTOMATİK SCROLL
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  // --- MESAJ EKLEME YARDIMCISI ---
  const addMessage = (type: MessageType, content: any, sender: Sender) => {
    setMessages(prev => [...prev, { id: Date.now(), type, content, sender }]);
  };

  // --- BOT CEVAP MANTIĞI (BEYİN) ---
  const processBotResponse = (userText: string) => {
    setIsTyping(true);
    const text = userText.toLowerCase();
    let delay = 1000;

    setTimeout(() => {
      // 1. İSİM ALMA AŞAMASI
      if (chatState === "ASKING_NAME") {
        const name = userText.split(" ")[0]; // Sadece ilk ismi al
        setUserName(name);
        addMessage("text", `Memnun oldum ${name}! 👋 Sana nasıl yardımcı olabilirim?`, "bot");
        // Seçenekleri sun
        setTimeout(() => {
            addMessage("options", [
                { label: "Okinar Nedir?", value: "okinar" },
                { label: "Fiyat Almak İstiyorum", value: "price" },
                { label: "Sizi Tanımak İstiyorum", value: "about" },
                { label: "Sadece Geziyorum", value: "browse" }
            ], "bot");
        }, 500);
        setChatState("IDLE");
      }

      // 2. NAVIGATOR KOMUTLARI (HER ZAMAN AKTİF)
      else if (text.includes("okinar")) {
        addMessage("text", "Okinar bizim amiral gemimiz! 🚢 Hemen incelemeniz için sizi özel sayfasına götürüyorum...", "bot");
        setTimeout(() => router.push("/okinar"), 1500);
      }
      
      else if (text.includes("fiyat") || text.includes("teklif") || text.includes("price")) {
        addMessage("text", `${userName ? userName + ', ' : ''}Fiyatlarımız projeye göre değişir ama şeffafız.`, "bot");
        addMessage("card", {
            title: "Teklif Sihirbazı",
            desc: "30 saniyede projenizin tahmini bütçesini hesaplayın.",
            link: "/teklif-al",
            btn: "Hesapla 💰"
        }, "bot");
      }

      else if (text.includes("hizmet") || text.includes("neler") || text.includes("yapıyorsunuz")) {
        addMessage("text", "Uçtan uca dijital çözümler üretiyoruz. İşte uzmanlık alanlarımız:", "bot");
        addMessage("options", [
            { label: "Web Geliştirme", value: "web" },
            { label: "Mobil Uygulama", value: "mobile" },
            { label: "IoT & Donanım", value: "iot" }
        ], "bot");
      }

      // 3. NORMAL SOHBET (YAPAY ZEKA SİMÜLASYONU)
      else {
        // Basit Regex Cevapları
        if (text.includes("merhaba") || text.includes("selam")) {
            addMessage("text", `Selam ${userName}! Nasıl gidiyor?`, "bot");
        } else if (text.includes("kimsin") || text.includes("ekip")) {
            addMessage("text", "Biz Hacettepe Teknokent'te kod yazan tutkulu bir ekibiz. Detaylar için 'Kurumsal' sayfasına bakabilirsin.", "bot");
        } else if (text.includes("iletişim") || text.includes("yer") || text.includes("adres")) {
            addMessage("card", {
                title: "Bize Ulaşın",
                desc: "Hacettepe Teknokent / Ankara",
                link: "/#iletisim",
                btn: "Haritada Gör 📍"
            }, "bot");
        } else {
            addMessage("text", "Bunu tam anlayamadım 🤔 Ama aşağıdaki hızlı menüden istediğin konuyu seçebilirsin.", "bot");
            addMessage("options", [
                { label: "Okinar'a Git", value: "okinar" },
                { label: "Fiyat Al", value: "price" },
                { label: "Blog Oku", value: "blog" }
            ], "bot");
        }
      }

      setIsTyping(false);
    }, delay);
  };

  const handleSend = (text: string = inputValue) => {
    if (!text.trim()) return;
    addMessage("text", text, "user");
    setInputValue("");
    processBotResponse(text);
  };

  const handleOptionClick = (value: string, label: string) => {
    // Seçeneği kullanıcı yazmış gibi göster
    addMessage("text", label, "user");
    // Botun cevabını tetikle
    if(value === "okinar") processBotResponse("okinar");
    else if(value === "price") processBotResponse("fiyat");
    else if(value === "about") processBotResponse("kimsin");
    else if(value === "blog") router.push("/blog");
    else processBotResponse(label);
  };

  return (
    <>
      {/* AÇMA BUTONU */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 left-6 z-[9990] group"
      >
        <div className="w-14 h-14 bg-black border-2 border-brand-yellow rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,215,0,0.3)] relative">
            <Bot size={24} className="text-brand-yellow" />
            {!isOpen && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center font-bold animate-bounce">1</span>
            )}
        </div>
      </motion.button>

      {/* CHAT PENCERESİ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 left-4 md:left-6 z-[9991] w-[calc(100vw-32px)] md:w-[380px] h-[550px] bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            
            {/* HEADER */}
            <div className="bg-zinc-900 px-4 py-3 border-b border-white/5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative">
                    <div className="w-9 h-9 bg-brand-yellow rounded-full flex items-center justify-center text-black font-bold border-2 border-black">ON7</div>
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-zinc-900 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">ON7 Navigator</h3>
                  <p className="text-[10px] text-gray-400">Site Asistanı • {userName ? userName : 'Ziyaretçi'}</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white"><X size={18} /></button>
            </div>

            {/* MESAJ ALANI */}
            <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto custom-scrollbar space-y-4 bg-black/50">
              
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  
                  {/* MESAJ TİPİNE GÖRE RENDER */}
                  {msg.type === "text" && (
                      <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                          msg.sender === "user" ? "bg-brand-yellow text-black rounded-br-none" : "bg-[#1e1e1e] text-gray-200 rounded-bl-none border border-white/5"
                      }`}>
                          {msg.content}
                      </div>
                  )}

                  {/* SEÇENEK BUTONLARI */}
                  {msg.type === "options" && (
                      <div className="flex flex-wrap gap-2 max-w-[90%]">
                          {msg.content.map((opt: any, i: number) => (
                              <button 
                                key={i} 
                                onClick={() => handleOptionClick(opt.value, opt.label)}
                                className="text-xs bg-white/5 hover:bg-brand-yellow hover:text-black border border-brand-yellow/30 text-brand-yellow px-3 py-2 rounded-lg transition-all"
                              >
                                  {opt.label}
                              </button>
                          ))}
                      </div>
                  )}

                  {/* KART (Rich Content) */}
                  {msg.type === "card" && (
                      <div className="max-w-[85%] bg-zinc-900 border border-white/10 rounded-xl overflow-hidden">
                          <div className="p-4">
                              <h4 className="font-bold text-white text-sm mb-1 flex items-center gap-2">
                                  <Sparkles size={14} className="text-brand-yellow"/> {msg.content.title}
                              </h4>
                              <p className="text-xs text-gray-400 mb-3">{msg.content.desc}</p>
                              <Link href={msg.content.link} className="block w-full bg-white text-black text-center text-xs font-bold py-2 rounded hover:bg-gray-200 transition-colors">
                                  {msg.content.btn}
                              </Link>
                          </div>
                      </div>
                  )}

                </motion.div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[#1e1e1e] px-3 py-2 rounded-xl rounded-bl-none border border-white/5 flex gap-1">
                    <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: "0.2s"}}></div>
                    <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: "0.4s"}}></div>
                  </div>
                </div>
              )}
            </div>

            {/* INPUT */}
            <div className="p-3 bg-zinc-900 border-t border-white/10">
                <form 
                    onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                    className="flex items-center gap-2 bg-black border border-white/10 rounded-xl px-3 py-2 focus-within:border-brand-yellow/50 transition-colors"
                >
                    <input 
                        type="text" 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder={chatState === "ASKING_NAME" ? "Adınız nedir?" : "Bir mesaj yazın..."}
                        className="flex-1 bg-transparent text-white text-sm outline-none placeholder-gray-600"
                        autoFocus={isOpen}
                    />
                    <button 
                        type="submit" 
                        disabled={!inputValue.trim() || isTyping}
                        className="text-brand-yellow hover:scale-110 transition-transform disabled:opacity-30"
                    >
                        <Send size={18} />
                    </button>
                </form>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}