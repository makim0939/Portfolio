import { prevPageAtom } from "@/atoms";
import GridApp from "@/grid";
import { useAtom } from "jotai";
import React, { useState, useEffect } from "react";

const useGrid = ({ grid, page }: { grid: GridApp; page: 1 | 2 | 3 }) => {
  const [prevPage] = useAtom(prevPageAtom);
  const [isInitial, setIsInitial] = useState(true);
  useEffect(() => {
    console.log(prevPage, page);
    if (page === prevPage) return;
    if (!prevPage) grid.addTicker("up");
    else if (page > prevPage) grid.changeTicker("left");
    else if (page < prevPage) grid.changeTicker("right");

    // const test = new Test();
    // test.greeting();
    return () => {};
  }, [grid, page, prevPage, isInitial, setIsInitial]);
  return;
};

export default useGrid;
