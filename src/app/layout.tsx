import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "NANA LIFESTYLE | Sean Nana — Creative Producer, Experience Builder",
  description:
    "Portfolio of Sean Nana — Creative Producer, Experience Builder, and technologist bridging culture, creativity, and emerging technology. MIKNNA, CR3 Labs, Apple, and beyond.",
  keywords: [
    "Sean Nana",
    "NANA LIFESTYLE",
    "MIKNNA",
    "Creative Producer",
    "CR3 Labs",
    "OpenPage",
    "Web3",
    "Experience Design",
  ],
  openGraph: {
    title: "NANA LIFESTYLE | Sean Nana",
    description:
      "Creative Producer. Experience Builder. Culture x Technology.",
    url: "https://nanalifestyle.com",
    siteName: "NANA LIFESTYLE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="film-grain bg-nana-black text-nana-text font-body antialiased">
        {children}
      </body>
    </html>
  );
}
