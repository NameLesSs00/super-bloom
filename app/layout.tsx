import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/app/(components)/Nav"; 


export const metadata: Metadata = {
  title: "Super Blooming — The Desert Comes Alive",
  description:
    "Discover the breathtaking phenomenon of Super Blooming — when deserts explode with vibrant colors visible even from space.",
  keywords: ["super bloom", "super blooming", "desert", "flowers", "nature", "phenomenon"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className="text-white bg-gradient-to-b from-[#1A1F16] via-[#2C2C20] to-[#0F1E12]">
        <Nav />
        <main className="pt-16">{children}</main> 
      </body>
    </html>
  );
}
