import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import LoadingBar from "@/components/loading-bar";

export const metadata: Metadata = {
  title: "STRIVRA - Solutions IT & Transformation Digitale | Togo",
  description:
    "Votre partenaire technologique de confiance au Togo. Développement web/mobile, consultation IT, intégration de systèmes et formation pour transformer votre entreprise.",
  keywords:
    "STRIVRA, IT, développement web, mobile, consultation informatique, Togo, Lomé, transformation digitale",
  authors: [{ name: "STRIVRA" }],
  creator: "STRIVRA",
  publisher: "STRIVRA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://strivra.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "STRIVRA - Solutions IT & Transformation Digitale",
    description:
      "Solutions complètes de consultation informatique, développement web/mobile, intégration de systèmes et formation pour transformer votre entreprise au Togo.",
    url: "https://strivra.com",
    siteName: "STRIVRA",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "STRIVRA - Solutions IT au Togo",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "STRIVRA - Solutions IT & Transformation Digitale",
    description:
      "Votre partenaire technologique de confiance au Togo pour tous vos projets digitaux.",
    images: ["/og-image.jpg"],
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning={true}>
        <LoadingBar />
        {children}
      </body>
    </html>
  );
}
