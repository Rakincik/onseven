import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Teknoloji Günlükleri",
  description: "Yazılım dünyasından haberler, teknik makaleler ve ON7 ekibinden notlar.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}