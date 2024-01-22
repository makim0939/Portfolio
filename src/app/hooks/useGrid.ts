import { gridAnimationRequestAtom, prevPageAtom } from "@/atoms";
import GridApp from "@/grid";
import { useAtom } from "jotai";
import React, { useState, useEffect, useRef } from "react";

const useGrid = ({ gridApp, page }: { gridApp: GridApp; page: 1 | 2 | 3 }) => {
  const [prevPage] = useAtom(prevPageAtom);
  const [gridAnimationRequest, setGridAnimationRequest] = useAtom(gridAnimationRequestAtom);
  useEffect(() => {
    gridApp.addTicker("none");
    if (!prevPage) gridApp.changeTicker("up");
    else if (page > prevPage) gridApp.changeTicker("left");
    else if (page < prevPage) gridApp.changeTicker("right");
    if (gridAnimationRequest) {
      gridApp.changeTicker(gridAnimationRequest);
      setGridAnimationRequest(null);
      return;
    }

    const scrollable = page === prevPage ? true : false;
    const changeToScroll = (e: Event) => {
      if (!scrollable) return;
      if (gridApp.getCurrentAnimation === "scroll") return;
      gridApp.changeTicker("scroll");
    };
    const resizeCanvas = (e: Event) => {
      gridApp.resize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("scroll", changeToScroll);
    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("scroll", changeToScroll);
      window.removeEventListener("resize", resizeCanvas);
      gridApp.removeTicker();
    };
  }, [gridApp, page, prevPage, gridAnimationRequest, setGridAnimationRequest]);
  return;
};

export default useGrid;
