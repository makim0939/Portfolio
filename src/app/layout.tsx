import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import GridAppProvider from "../providers/GridAppProvider";
import ScreenWidthProvider from "@/providers/ScreenWidthProvider";
import LenisProvider from "@/providers/LenisProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Makimura Portfolio",
  description: "まきむらのポートフォリオ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <GridAppProvider>
          <ScreenWidthProvider>
            <LenisProvider>{children}</LenisProvider>
          </ScreenWidthProvider>
        </GridAppProvider>
      </body>
    </html>
  );
}
