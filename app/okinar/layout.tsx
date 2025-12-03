import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Okinar LMS - Eğitim Yönetim Sistemi",
  description: "Yerli video konferans, online sınav ve gelişmiş raporlama modülleriyle eğitim kurumunuzu dijitalleştirin.",
};

export default function OkinarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}