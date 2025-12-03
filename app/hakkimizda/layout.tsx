import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda & Vizyonumuz",
  description: "ON7 Yazılım'ın kuruluş hikayesi, misyonu, vizyonu ve uzman ekibiyle tanışın.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}