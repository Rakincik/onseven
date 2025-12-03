import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description: "Web, Mobil, IoT ve Özel Yazılım çözümlerimizle dijital dönüşümünüzü başlatın.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}