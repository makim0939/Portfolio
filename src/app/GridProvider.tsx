"use client";
import GridApp from "@/grid";
import React, { createContext, useEffect, useRef } from "react";

const gridApp = new GridApp();
export const GridAppContext = createContext<GridApp>(gridApp);
const GridProvider = ({ children }: { children: React.ReactNode }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!gridRef.current) return;
    const div = gridRef.current;
    gridApp.appendGrid(div);
    return () => {
      div.removeChild(div.firstChild!);
    };
  }, []);
  return (
    <>
      <div ref={gridRef} className="fixed top-0 z-[-1]"></div>
      <GridAppContext.Provider value={gridApp}>{children}</GridAppContext.Provider>
    </>
  );
};

export default GridProvider;
