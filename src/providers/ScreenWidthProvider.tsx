"use client";
import React, { createContext, useEffect, useState } from "react";

export const ScreenWidthContext = createContext(0);

const ScreenWidthProvider = ({ children }: { children: React.ReactNode }) => {
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    const resize = () => {
      setScreenWidth(window.innerWidth);
    };
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  return <ScreenWidthContext.Provider value={screenWidth}>{children}</ScreenWidthContext.Provider>;
};

export default ScreenWidthProvider;
