import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Clients from "@/components/Clients"; // YENİ: Referanslar Şeridi
import About from "@/components/About"; 
import Services from "@/components/Services";
import Okinar from "@/components/Okinar";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// UX ve Atmosfer Bileşenleri
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
// import WhatsAppBtn from "@/components/WhatsAppBtn"; <-- KALDIRILDI (AiChat Layout'ta var)
import ScrollProgress from "@/components/ScrollProgress";
import GrainEffect from "@/components/GrainEffect";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-brand-yellow selection:text-black cursor-none md:cursor-auto font-sans"> 
      
      {/* --- ATMOSFER VE UX KATMANI --- */}
      <Preloader />       {/* Matrix Açılış */}
      <CustomCursor />    {/* Sarı Takip Eden Mouse */}
      <ScrollProgress />  {/* Tepedeki İlerleme Çubuğu */}
      <GrainEffect />     {/* Sinematik Doku */}
      
      {/* Not: WhatsApp butonu kaldırıldı çünkü Layout.tsx içinde AI Asistan var. */}

      {/* --- SAYFA İÇERİK AKIŞI --- */}
      <Navbar />
      
      <Hero />            {/* Giriş Ekranı */}
      
      <TechStack />       {/* Güven Rozetleri (Teknokent, KVKK vs.) */}

      <Clients />         {/* YENİ: Kayan Referanslar */}
      
      <About />           {/* Biz Kimiz (Özet) */}
      
      <Services />        {/* Hizmetler (Bento Grid) */}
      
      <Okinar />          {/* Amiral Gemisi Ürün */}
      
      <Portfolio />       {/* Projeler Slider'ı */}
      
      <Testimonials />    {/* Müşteri Yorumları */}
      
      <FAQ />             {/* Sık Sorulanlar */}
      
      <Contact />         {/* İletişim Formu */}
      
      <Footer />
      
    </main>
  );
}