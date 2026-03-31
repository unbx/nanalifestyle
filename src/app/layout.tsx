import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NANA LIFESTYLE | Sean Nana",
  description:
    "Strategic operator at the intersection of AI, product experience, and creator platforms. Helping teams adopt new tools, skills, and technologies.",
  keywords: [
    "Sean Nana",
    "NANA LIFESTYLE",
    "MIKNNA",
    "CR3 Labs",
    "OpenPage",
    "AI Enablement",
    "Product Development",
    "Learning & Development",
    "Web3",
    "Creative Direction",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "NANA LIFESTYLE | Sean Nana",
    description:
      "Strategic operator at the intersection of AI, product experience, and creator platforms.",
    url: "https://nanalifestyle.com",
    siteName: "NANA LIFESTYLE",
    type: "website",
    images: [
      {
        url: "https://nanalifestyle.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NANA LIFESTYLE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NANA LIFESTYLE | Sean Nana",
    description:
      "Strategic operator at the intersection of AI, product experience, and creator platforms.",
    images: ["https://nanalifestyle.com/og-image.jpg"],
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
