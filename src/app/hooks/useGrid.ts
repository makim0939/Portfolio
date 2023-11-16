import { prevPageAtom } from "@/atoms";
import GridApp from "@/grid";
import { useAtom } from "jotai";
import React, { useState, useEffect, useRef } from "react";

const useGrid = ({ gridApp, page }: { gridApp: GridApp; page: 1 | 2 | 3 }) => {
  const [prevPage] = useAtom(prevPageAtom);
  useEffect(() => {
    if (page === prevPage) return;
    if (!prevPage) {
      gridApp.addTicker("up");
    } else if (page > prevPage) gridApp.changeTicker("left");
    else if (page < prevPage) gridApp.changeTicker("right");

    // const test = new Test();
    // test.greeting();
    return () => {
      //   gridApp.removeTicker();
      //   console.log(gridApp.getTickersNum());
    };
  }, [gridApp, page, prevPage]);
  return;
};

export default useGrid;
