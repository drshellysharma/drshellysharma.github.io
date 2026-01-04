import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
});

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Dr. Shelly Sharma | Leading Breast Oncoradiologist",
  description: "India's pioneer in breast cancer screening and interventions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        suppressHydrationWarning={true}
        className={cn(
          "min-h-screen bg-harvard-parchment font-sans antialiased",
          inter.variable,
          merriweather.variable
        )}
      >
        <Navbar /> 
        {children}
      </body>
    </html>
  );
}