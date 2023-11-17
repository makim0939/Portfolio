import { prevPageAtom } from "@/atoms";
import GridApp from "@/grid";
import { useAtom } from "jotai";
import React, { useState, useEffect, useRef } from "react";

const useGrid = ({ gridApp, page }: { gridApp: GridApp; page: 1 | 2 | 3 }) => {
  const [prevPage] = useAtom(prevPageAtom);
  useEffect(() => {
    gridApp.addTicker("none");
    if (!prevPage) gridApp.changeTicker("up");
    else if (page > prevPage) gridApp.changeTicker("left");
    else if (page < prevPage) gridApp.changeTicker("right");
    const changeToScroll = (e: Event) => {
      if (page !== prevPage) return;
      if (gridApp.getCurrentAnimation === "scroll") return;
      console.log("scroll");
      gridApp.changeTicker("scroll");
    };

    window.addEventListener("scroll", changeToScroll);
    return () => {
      window.removeEventListener("scroll", changeToScroll);
      gridApp.removeTicker();
    };
  }, [gridApp, page, prevPage]);
  return;
};

export default useGrid;
