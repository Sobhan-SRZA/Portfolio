import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://srza.ir"),

  title: {
    default: "Sobhan Rasoulzadeh Asl | Mr.Sinre | Sobhan-SRZA",
    template: "%s | SRZA",
  },

  description:
    "Sobhan Rasoulzadeh Asl, known as Mr.Sinre and Sobhan-SRZA, is a full-stack developer specializing in JavaScript, TypeScript, Node.js, React, Next.js, APIs, Discord and Telegram bots, and open-source projects.",

  keywords: [
    "Sobhan Rasoulzadeh Asl",
    "Sobhan-SRZA",
    "SobhanSRZA",
    "Mr.Sinre",
    "SRZA",
    "Full Stack Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "React Developer",
    "Next.js Developer",
    "Discord Bot Developer",
    "Telegram Bot Developer",
    "Persian Caesar",
  ],

  authors: [
    {
      name: "Sobhan Rasoulzadeh Asl",
      url: "https://srza.ir",
    },
  ],

  creator: "Sobhan Rasoulzadeh Asl",
  publisher: "Sobhan Rasoulzadeh Asl",

  alternates: {
    canonical: "https://srza.ir",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://srza.ir",
    siteName: "SRZA",
    title: "Sobhan Rasoulzadeh Asl | Mr.Sinre | Sobhan-SRZA",
    description:
      "Full-stack developer building modern web applications, backend systems, bots and digital products.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sobhan Rasoulzadeh Asl | SRZA",
    description:
      "Full-stack developer, open-source contributor and builder of digital products.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}