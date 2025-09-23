import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GalleryProvider } from "@/app/contexts/GalleryContext";
import GlobalGallery from "@/app/components/GlobalGallery";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gustavo Francisco - Full Stack Developer",
  description: "Portfolio showcasing Full Stack development projects with React, Next.js, Node.js and TypeScript. Specialized in modern web applications and responsive design.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Node.js", "Web Development", "Portfolio"],
  authors: [{ name: "Gustavo Francisco" }],
  creator: "Gustavo Francisco",
  publisher: "Gustavo Francisco",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gustavo-francisco.vercel.app"),
  openGraph: {
    title: "Gustavo Francisco - Full Stack Developer",
    description: "Full Stack Developer portfolio featuring modern web applications built with React, Next.js, and TypeScript",
    url: "https://gustavo-francisco.vercel.app",
    siteName: "Gustavo Francisco Portfolio",
    images: [
      {
        url: "/assets/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Gustavo Francisco - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gustavo Francisco - Full Stack Developer",
    description: "Full Stack Developer portfolio showcasing modern web applications",
    images: ["/assets/profile.jpg"],
    creator: "@gustavofrancisco",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GalleryProvider>
          {children}
          <GlobalGallery />
        </GalleryProvider>
      </body>
    </html>
  );
}
