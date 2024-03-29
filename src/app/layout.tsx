import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Uppernav from "@/components/Uppernav/Uppernav";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Doll from "../../public/doll.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <div className=" sticky top-0 z-50 bg-white">
          <Uppernav/>
          <Navbar/>
       
        </div>
        <div className=" bg-yellow-700 z-50 rounded-full  fixed bottom-40 left-3 h-[70px] w-[70px]">
        <Image
  src={Doll}
  height={70}
  width={70}
 className=" overflow-hidden  rounded-full object-cover"
 
  alt="(max-width:200px) 100vw"
/>
</div>
        {children}</body>
    </html>
  );
}
