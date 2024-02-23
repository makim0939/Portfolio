import { gridAnimationRequestAtom, prevPageAtom } from "@/atoms";
import GridApp from "@/grid";
import { useAtom } from "jotai";
import React, { useState, useEffect, useRef } from "react";

const useGrid = ({ gridApp, page }: { gridApp: GridApp | null; page: 1 | 2 | 3 }) => {
  const [prevPage] = useAtom(prevPageAtom);
  const [gridAnimationRequest, setGridAnimationRequest] = useAtom(gridAnimationRequestAtom);

  useEffect(() => {
    if (!gridApp) return;
    const pathNames = ["/", "/about", "/contact"];
    if (page === prevPage || window.location.pathname !== pathNames[page - 1]) return;
    gridApp.addTicker("none");

    if (!prevPage) gridApp.changeTicker("up");
    else if (page > prevPage) gridApp.changeTicker("left");
    else if (page < prevPage) gridApp.changeTicker("right");
    gridApp.lockTicker();
    window.scrollTo(0, 0);
    if (gridAnimationRequest) {
      gridApp.changeTicker(gridAnimationRequest);
      setGridAnimationRequest(null);
      return;
    }

    const changeToScroll = (e: Event) => {
      if (gridApp.isLocked() && window.scrollY < 30) {
        gridApp.unlockTicker();
        return;
      }
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
      gridApp.unlockTicker();
      gridApp.removeTicker();
    };
  }, [gridApp, page, prevPage, gridAnimationRequest, setGridAnimationRequest]);
  return;
};

export default useGrid;
