import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nanalifestyle.com"),
  title: "Selected Work | Sean Nana",
  description:
    "Brand and content systems for digital identity, protocols, and culture at scale.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Selected Work | Sean Nana",
    description:
      "Brand and content systems for digital identity, protocols, and culture at scale.",
    type: "website",
    url: "https://nanalifestyle.com/work",
    images: [
      {
        url: "/studio/NANA work OG.png",
        width: 1200,
        height: 630,
        alt: "Sean Nana — Selected Work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Selected Work | Sean Nana",
    description:
      "Brand and content systems for digital identity, protocols, and culture at scale.",
    images: ["/studio/NANA work OG.png"],
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-nana-black text-nana-text min-h-screen film-grain">{children}</div>;
}
