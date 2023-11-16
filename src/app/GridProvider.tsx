"use client";
import { gridAppAtom } from "@/atoms";
import GridApp from "@/grid";
import { useAtom } from "jotai";
import React, { createContext, useEffect, useRef } from "react";
const gridApp = new GridApp();
export const GridAppContext = createContext<GridApp>(gridApp);

const GridProvider = ({ children }: { children: React.ReactNode }) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(gridRef.current);
    if (!gridRef.current) return;
    gridApp.appendGrid(gridRef.current);
  }, []);
  return (
    <>
      <div ref={gridRef} className="fixed top-0 z-[-1]"></div>
      <GridAppContext.Provider value={gridApp}>{children}</GridAppContext.Provider>
    </>
  );
};

export default GridProvider;
