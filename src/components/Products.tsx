import React, { useEffect, useRef } from "react";
import { headerModeAtom } from "@/atoms";
import { useAtom } from "jotai";
import SoftwareProducts from "./ui/Products/SoftwareProduct";
import ProductsIndex from "./ui/Products/ProductsIndex";
import CgProduct from "./ui/Products/CgProduct";
import { useLenis } from "@/providers/LenisProvider";

const Products = ({ screenWidth }: { screenWidth: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [headerMode, setHeaderMode] = useAtom(headerModeAtom);
  const lenis = useLenis();

  lenis?.on("scroll", () => {
    if (!ref.current) return;
    // console.log(ref.current.getBoundingClientRect().y);
    if (ref.current.getBoundingClientRect().y <= 0) {
      if (headerMode !== "small") setHeaderMode("small");

      return;
    }
    if (ref.current.getBoundingClientRect().y > 0) {
      setHeaderMode("default");
      return;
    }
  });

  useEffect(() => {
    return () => setHeaderMode("default");
  }, [setHeaderMode]);

  return (
    <div ref={ref} className="">
      <ProductsIndex>Software</ProductsIndex>
      <SoftwareProducts productName="compassChat" />
      <SoftwareProducts productName="portfolio" />
      <ProductsIndex>CG Products</ProductsIndex>
      <CgProduct productName="classroom" type="video" />
      <CgProduct productName="cloud" type="video" />
      <CgProduct productName="studio" type="video" />
      <CgProduct productName="prism" type="image" />
    </div>
  );
};

export default Products;
