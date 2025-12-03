import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teklif Al",
  description: "Projenizi hayata geçirmek için ilk adımı atın. Size özel çözüm ve fiyat teklifi hazırlayalım.",
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}