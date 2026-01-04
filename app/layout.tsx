import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"; // Ensures the Navbar appears on every page

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
});

const lato = Lato({ 
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-sans',
});

// SEO METADATA
export const metadata: Metadata = {
  metadataBase: new URL('https://drshellysharma.github.io'),
  title: {
    default: "Dr. Shelly Sharma | Leading Breast Radiologist in Delhi",
    template: "%s | Dr. Shelly Sharma"
  },
  description: "Dr. Shelly Sharma is a pioneer in Breast Oncoradiology at Indraprastha Apollo Hospital, New Delhi. Expert in Mammography, Biopsies, and Early Cancer Detection.",
  keywords: ["Breast Radiologist Delhi", "Dr Shelly Sharma", "Mammography Apollo", "Breast Cancer Doctor India"],
  openGraph: {
    title: "Dr. Shelly Sharma | Leading Breast Radiologist",
    description: "Compassion meets Precision. Early detection saves lives.",
    url: 'https://drshellysharma.github.io',
    siteName: 'Dr. Shelly Sharma',
    images: [
      {
        url: '/images/headshot.jpg', 
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased bg-harvard-parchment/20 text-harvard-black`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}