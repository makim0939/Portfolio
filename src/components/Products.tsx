import { productNames, productsInfo } from "@/info";
import Image from "next/image";
import React, { use, useContext, useEffect, useRef } from "react";
import { motion, useInView, useMotionValueEvent, useScroll } from "framer-motion";
import IndexText from "./animation/IndexText";
import { gridAnimationRequestAtom, headerModeAtom } from "@/atoms";
import { useAtom } from "jotai";
import { EASE } from "@/animationProps";
import { GridAppContext } from "@/app/GridProvider";
import SoftwareProducts from "./ui/Products/SoftwareProduct";
import ProductsIndex from "./ui/Products/ProductsIndex";
import CgProduct from "./ui/Products/CgProduct";
const Products = ({ screenWidth }: { screenWidth: number }) => {
  const gridApp = useContext(GridAppContext);
  const ref = useRef<HTMLDivElement>(null);
  const [, setHeaderMode] = useAtom(headerModeAtom);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!ref.current) return;
    console.log(ref.current.getBoundingClientRect().y);
    if (ref.current.getBoundingClientRect().y < 1) {
      ref.current.className = "";
      setHeaderMode("small");
      return;
    }
    if (ref.current.getBoundingClientRect().y > -10) {
      ref.current.className = "h-[100vh]";
      gridApp.setScroll();
      setHeaderMode("default");
      return;
    }
  });

  useEffect(() => {
    return () => {
      setHeaderMode("default");
    };
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
