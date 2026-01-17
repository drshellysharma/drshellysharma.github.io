import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/navbar"; 

// Fonts are defined OUTSIDE the component
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
});

const lato = Lato({ 
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://drshellysharma.github.io'),
  title: {
    default: "Dr. Shelly Sharma | Leading Breast Radiologist in Delhi",
    template: "%s | Dr. Shelly Sharma"
  },
  description: "Dr. Shelly Sharma is a pioneer in Breast Oncoradiology at Indraprastha Apollo Hospital, New Delhi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${playfair.variable} ${lato.variable} font-sans antialiased bg-harvard-parchment/20 text-harvard-black`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}