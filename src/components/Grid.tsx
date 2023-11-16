"use client";
import React, { useEffect, useState, useRef } from "react";
import { useAtom } from "jotai";
import { prevPageAtom } from "@/atoms";
import GridAnimation from "@/grid";
import Test from "../../Test";
import { init } from "next/dist/compiled/webpack/webpack";

const Grid = ({ page, grid }: { page: 1 | 2 | 3; grid: GridAnimation }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [prevPage] = useAtom(prevPageAtom);
  const [isInitial, setIsInitial] = useState(true);

  useEffect(() => {
    if (!gridRef.current || page === prevPage) return;
    if (isInitial) {
      if (!prevPage) grid.addTicker("up");
      else if (page < prevPage) grid.addTicker("left");
      else if (page > prevPage) grid.addTicker("right");
    }

    // const test = new Test();
    // test.greeting();
    return () => {};
  }, [grid, page, prevPage, isInitial, setIsInitial]);
  return <div ref={gridRef} className="fixed top-0 z-[-1]"></div>;
};

export default Grid;
