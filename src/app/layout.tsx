import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import GridProvider from "./GridProvider";
import ScreenWidthProvider from "@/components/providers/ScreenWidthProvider";
import LenisProvider from "@/components/providers/LenisProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GridProvider>
          <ScreenWidthProvider>
            <LenisProvider>{children}</LenisProvider>
          </ScreenWidthProvider>
        </GridProvider>
      </body>
    </html>
  );
}
