import type { Metadata } from "next";
import { Wix_Madefor_Text  } from "next/font/google";
import { Montez } from "next/font/google";

// styling
import "slick-carousel/slick/slick.css";
import "./globals.css";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollButton from "@/components/ScrollButton";

const Wix_Madefor_Text_init = Wix_Madefor_Text({
  subsets: ['latin'],
  variable: '--font-wix',
});

const Montez_init = Montez({
  subsets: ['latin'],
  variable: '--font-montez',
  weight: "400"
});

export const metadata: Metadata = {
  title: "Reyansh Travels",
  description: "Tour and Travel app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-primary text-tertiary overflow-x-hidden ${Wix_Madefor_Text_init.variable} ${Montez_init.variable}`}>
        <Header />
        {children}
        <ScrollButton/>
        <Footer />
      </body>
    </html>
  );
}
