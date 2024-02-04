"use client";
import GridApp from "@/grid";
import React, { createContext, useEffect, useRef, useState } from "react";

export const GridAppContext = createContext<GridApp | null>(null);
const GridAppProvider = ({ children }: { children: React.ReactNode }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [gridApp, setGridApp] = useState<GridApp | null>(null);

  useEffect(() => {
    const gridApp = new GridApp();
    if (!gridRef.current) return;
    const target = gridRef.current;
    gridApp.appendGrid(target);
    setGridApp(gridApp);
    return () => {
      target.removeChild(target.firstChild!);
    };
  }, []);

  return (
    <>
      <div ref={gridRef} className="fixed top-0 z-[-1]"></div>
      <GridAppContext.Provider value={gridApp}>{children}</GridAppContext.Provider>
    </>
  );
};

export default GridAppProvider;
