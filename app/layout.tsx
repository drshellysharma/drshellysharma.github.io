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
  metadataBase: new URL('https://drshellysharma.github.io'),
  title: {
    default: "Dr. Shelly Sharma | Best Breast Radiologist in Delhi | Apollo Hospital",
    template: "%s | Dr. Shelly Sharma"
  },
  description: "Dr. Shelly Sharma is a pioneer in Breast Oncoradiology at Apollo Hospital, Delhi. Expert in Mammography, Cryoablation, and Biopsies.",
  keywords: ["Breast Cancer Doctor India", "Best Radiologist Delhi", "Dr Shelly Sharma", "Mammography Apollo"],
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
