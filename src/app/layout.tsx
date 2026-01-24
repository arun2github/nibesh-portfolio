import type { Metadata } from "next";
import { Poppins, Caveat } from "next/font/google";
import "./globals.css";
import ParallaxWrapper from "@/components/ParallaxWrapper";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const caveat = Caveat({
  weight: ['400', '600', '700'],
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Nibhesh Kumar Das - Senior Mathematics Architect & Digital Educator",
  description: "Premium mathematics education for IIT-JEE, GATE, and Olympiads. 16+ years expertise, 2,420+ live sessions, 500+ video lectures. Expert in competitive exam preparation.",
  keywords: "JEE coaching, GATE preparation, mathematics tutor, IIT-JEE expert, online education",
  openGraph: {
    title: "Nibhesh Kumar Das - Senior Mathematics Architect",
    description: "Premium mathematics education for competitive exams with 16+ years of expertise",
    type: "website",
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: 'cover', // For notched devices
  },
  themeColor: '#1A2820',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Nibhesh Kumar Das',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${caveat.variable} antialiased bg-[#F9FAFB] min-h-screen font-sans`}
        style={{ fontFamily: 'var(--font-poppins)' }}
      >
        <ParallaxWrapper>{children}</ParallaxWrapper>
      </body>
    </html>
  );
}
