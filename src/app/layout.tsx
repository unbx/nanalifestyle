import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NANA LIFESTYLE | Sean Nana — Creative Enabler, Experience Builder",
  description:
    "Portfolio of Sean Nana — Creative Enabler, Experience Builder, and technologist bridging culture, creativity, and emerging technology. MIKNNA, CR3 Labs, Apple, and beyond.",
  keywords: [
    "Sean Nana",
    "NANA LIFESTYLE",
    "MIKNNA",
    "Creative Enabler",
    "CR3 Labs",
    "OpenPage",
    "Web3",
    "Experience Design",
  ],
  openGraph: {
    title: "NANA LIFESTYLE | Sean Nana",
    description:
      "Creative Enabler. Experience Builder. Culture x Technology.",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
