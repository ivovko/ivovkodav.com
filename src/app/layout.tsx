import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavigationButtons } from "@/components/NavigationButtons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ihor Vovkodav",
  description: "Personal website-portofolio of Ihor Vovkodav",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"main flex justify-evenly " + inter.className}>
        <div className="bg" />
        <NavigationButtons />
        {children}
      </body>
    </html>
  );
}
