"use client";
import Lenis from "@studio-freight/lenis";
import React, { useEffect, useState, createContext, useContext } from "react";

export const LenisContext = createContext<Lenis | null>(null);
const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  useEffect(() => {
    const newLenis = new Lenis({
      lerp: 0.25,
      smoothWheel: true,
    });
    const raf = (time: number) => {
      newLenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    setLenis(newLenis);
    return () => newLenis.destroy();
  }, [setLenis]);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
};

export default LenisProvider;
export const useLenis = () => useContext(LenisContext);
