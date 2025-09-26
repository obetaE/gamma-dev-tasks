import { Geist, Geist_Mono } from "next/font/google";
import { Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import MobileNavbar from "@/components/Navbar/MobileNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Eric's Gamma Devs Tasks",
  description: "A website containing all the tasks from Gamma Devs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} antialiased`}
      >
        <Navbar/>
        <MobileNavbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
