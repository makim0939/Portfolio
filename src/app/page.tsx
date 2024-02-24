"use client";
import { useContext } from "react";
import useGrid from "./hooks/useGrid";
import { GridAppContext } from "../providers/GridAppProvider";
import { ScreenWidthContext } from "@/providers/ScreenWidthProvider";
import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import Products from "@/components/Products";
import ProductsMobile from "@/components/ProductsMobile";

export default function Home() {
  const gridApp = useContext(GridAppContext);
  const screenWidth = useContext(ScreenWidthContext);
  useGrid({ gridApp, page: 1 });
  const isMobile = screenWidth !== 0 && screenWidth < 768;

  return (
    <>
      <Header page={1} />
      <main className={isMobile ? "" : "absolute flex flex-col items-center w-full top-[20vh] "}>
        <div
          className={
            " aspect-[91/ 55] " +
            (isMobile
              ? " w-[364px] mx-auto my-16 aspect-[91/ 55]"
              : " mb-[16vh] w-[36.4vw] max-w-[637px] min-w-[400px] ")
          }
        >
          <ProfileCard page={1} isMobile={isMobile} />
        </div>

        <div className="w-full">{isMobile ? <ProductsMobile /> : <Products />}</div>
      </main>
    </>
  );
}
