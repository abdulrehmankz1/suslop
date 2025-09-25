import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "./styles/main.scss";

import Footer from "./components/Footer";
import ConditionalNavbar from "./components/ConditionalNavbar";
// Google font: Albert Sans
const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Local font: Neue Montreal
const neueMontreal = localFont({
  variable: "--font-neue-montreal",
  display: "swap",
  src: [
    {
      path: "../fonts/neue-montreal/NeueMontreal-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/neue-montreal/NeueMontreal-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/neue-montreal/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/neue-montreal/NeueMontreal-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/neue-montreal/NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/neue-montreal/NeueMontreal-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/neue-montreal/NeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/neue-montreal/NeueMontreal-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Suslop - Sustainable Solutions",
  description:
    "Suslop Inc. is a consulting firm located in the Greater Toronto Area. We specialise in sustainability strategy, project management, community development, ...",
  icons: {
    icon: "/vercel.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${albertSans.variable} ${neueMontreal.variable} antialiased`}
      >
        <ConditionalNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
