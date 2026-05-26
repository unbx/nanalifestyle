import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nanalifestyle.com"),
  title: "AI Work | Sean Nana",
  description:
    "AI-native creative direction. A practice of fusing models into pipelines, brand systems, and voice work.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "AI Work | Sean Nana",
    description:
      "AI-native creative direction. A practice of fusing models into pipelines, brand systems, and voice work.",
    type: "website",
    url: "https://nanalifestyle.com/ai",
    images: [
      {
        url: "/studio/NANA work OG.png",
        width: 1200,
        height: 630,
        alt: "Sean Nana — AI Work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Work | Sean Nana",
    description:
      "AI-native creative direction. A practice of fusing models into pipelines, brand systems, and voice work.",
    images: ["/studio/NANA work OG.png"],
  },
};

export default function AiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-nana-black text-nana-text min-h-screen film-grain">{children}</div>;
}
