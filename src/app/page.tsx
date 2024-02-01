"use client";

import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import { useAtom } from "jotai";
import { useContext, useEffect } from "react";
import { GridAppContext } from "./GridProvider";
import useGrid from "./hooks/useGrid";
import { ScreenWidthContext } from "@/providers/ScreenWidthProvider";
import IndexText from "@/components/animation/IndexText";
import Products from "@/components/Products";
import FadeInContainer from "@/components/animation/FadeInContainer";

export default function Home() {
  const gridApp = useContext(GridAppContext);
  const screenWidth = useContext(ScreenWidthContext);
  useGrid({ gridApp, page: 1 });

  if (screenWidth < 768) return <>🚧モバイル端末用のサイトは現在製作中です🙇‍♀️</>;
  return (
    <>
      <Header page={1} />
      <main className="absolute flex flex-col items-center w-full top-[20vh] ">
        <div className="mb-[16vh] w-[36.4vw] max-w-[637px]  min-w-[364px] aspect-[91/ 55]">
          <ProfileCard page={1} />
        </div>
        <div className="w-full">
          <Products screenWidth={screenWidth} />
        </div>
      </main>
    </>
  );
}
