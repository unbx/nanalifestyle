import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nanalifestyle.com"),
  title: "AI Work | Sean Nana",
  description:
    "Creative direction made with AI tools — Fuser Studio, Kling, Nano Banana, Midjourney, ChatGPT, ElevenLabs, Final Cut Pro.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "AI Work | Sean Nana",
    description:
      "Creative direction made with AI tools — Fuser Studio, Kling, Nano Banana, Midjourney, ChatGPT, ElevenLabs, Final Cut Pro.",
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
      "Creative direction made with AI tools — Fuser Studio, Kling, Nano Banana, Midjourney, ChatGPT, ElevenLabs, Final Cut Pro.",
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
