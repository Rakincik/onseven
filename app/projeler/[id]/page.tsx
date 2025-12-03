import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { ArrowLeft, Calendar, CheckCircle, Code2, Layers } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Temsili Veritabanı (Normalde bunu ayrı dosyadan veya API'den çekeriz)
const projectsData: Record<string, any> = {
  "e-ticaret-devrimi": {
    title: "E-Ticaret Devrimi",
    category: "Web & Mobil",
    date: "Ekim 2024",
    client: "Global Retail A.Ş.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=1200&q=80",
    desc: "Yapay zeka destekli ürün öneri sistemi ile satışları %40 artıran devrimsel dönüşüm.",
    challenge: "Müşterinin eski altyapısı yavaştı ve mobil uyumluluğu yoktu. Kullanıcılar sepette ürünü terk ediyordu. Binlerce ürünün anlık stok takibi yapılamıyordu.",
    solution: "Next.js ve Node.js kullanarak mikro-servis mimarisine geçtik. Redis ile önbellekleme yaparak sayfa hızlarını 0.8 saniyeye düşürdük. AI destekli öneri motoru entegre ettik.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
    results: ["%250 Sayfa Hızı Artışı", "%40 Satış Dönüşüm Oranı", "Sıfır Kesinti (Uptime)"]
  },
  "akilli-sehir": {
    title: "Akıllı Şehir Paneli",
    category: "IoT Dashboard",
    date: "Ağustos 2024",
    client: "Büyükşehir Belediyesi",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    desc: "Şehir trafiğini ve enerji tüketimini tek ekrandan yöneten merkezi sistem.",
    challenge: "Şehrin farklı noktalarındaki sensörlerden gelen veriler dağınıktı. Anlık müdahale edilemiyordu.",
    solution: "MQTT protokolü ile binlerce sensörü tek bir dashboard'a bağladık. WebSocket ile verileri canlı (real-time) akıttık.",
    stack: ["React", "Python", "MQTT", "Grafana", "MongoDB"],
    results: ["%30 Enerji Tasarrufu", "Anlık Trafik Müdahalesi", "Veri Odaklı Yönetim"]
  }
};

export default function ProjectDetail({ params }: { params: { id: string } }) {
  // URL'deki id'ye göre projeyi bul (yoksa varsayılanı göster veya 404)
  const project = projectsData[params.id] || projectsData["e-ticaret-devrimi"];

  return (
    <main className="bg-background min-h-screen text-white selection:bg-brand-yellow selection:text-black">
      <Navbar />
      
      {/* HEADER GÖRSELİ */}
      <div className="relative h-[60vh] w-full">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 pb-20">
          <div className="container mx-auto">
            <Link href="/#projeler" className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-yellow mb-6 transition-colors">
              <ArrowLeft size={20} /> Projelere Dön
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-brand-yellow text-black text-xs font-bold rounded uppercase tracking-wider">
                {project.category}
              </span>
              <span className="flex items-center gap-2 text-sm text-gray-400">
                <Calendar size={14} /> {project.date}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold max-w-4xl">{project.title}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 grid lg:grid-cols-3 gap-16">
        
        {/* SOL: İÇERİK */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Challenge */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-red-500 rounded-full"></span>
              Problem (Challenge)
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              {project.challenge}
            </p>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-brand-yellow rounded-full"></span>
              Çözümümüz
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg mb-6">
              {project.solution}
            </p>
            
            {/* Tech Stack Grid */}
            <div className="bg-zinc-900 p-6 rounded-xl border border-white/10">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Kullanılan Teknolojiler</h4>
              <div className="flex flex-wrap gap-3">
                {project.stack.map((tech: string, i: number) => (
                  <span key={i} className="flex items-center gap-2 px-4 py-2 bg-black border border-zinc-800 rounded-lg text-sm text-gray-300">
                    <Code2 size={16} className="text-brand-yellow" /> {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Result */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-green-500 rounded-full"></span>
              Sonuçlar
            </h3>
            <ul className="space-y-3">
              {project.results.map((res: string, i: number) => (
                <li key={i} className="flex items-center gap-3 text-lg text-gray-300">
                  <CheckCircle className="text-brand-yellow" /> {res}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* SAĞ: SİDEBAR BİLGİ */}
        <div className="lg:col-span-1">
          <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-8 sticky top-24">
            <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">Proje Özeti</h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Müşteri</p>
                <p className="font-semibold text-white">{project.client}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Hizmet Türü</p>
                <p className="font-semibold text-white">{project.category}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Teslim Tarihi</p>
                <p className="font-semibold text-white">{project.date}</p>
              </div>
            </div>

            <button className="w-full mt-8 bg-white text-black font-bold py-4 rounded hover:bg-brand-yellow transition-colors flex items-center justify-center gap-2">
              Benzer Bir Proje Başlat <Layers size={18} />
            </button>
          </div>
        </div>

      </div>

      <Contact />
      <Footer />
    </main>
  );
}