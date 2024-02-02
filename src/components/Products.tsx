import React, { Children, useEffect, useRef, useState } from "react";
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
  const [snap, setSnap] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  lenis?.on("scroll", () => {
    if (!ref.current) return;
    const containerPos = ref.current.getBoundingClientRect().y * -1;
    const productsNum = ref.current.children.length;
    if (containerPos >= -1) if (headerMode !== "small") setHeaderMode("small");
    if (containerPos < -1) setHeaderMode("default");

    const pos = ref.current.children[snap].getBoundingClientRect().y * -1;
    if (-100 < pos && pos < 0 && 5 < lenis.velocity) {
      lenis.scrollTo(ref.current.children[snap], {
        lock: true,
        onComplete: () => {
          if (snap >= productsNum - 1) return;
          setSnap(snap + 1);
        },
      });
    } else if (0 < pos && pos < 100 && lenis.velocity < -5) {
      lenis.scrollTo(ref.current.children[snap], {
        lock: true,
        onComplete: () => {
          if (snap <= 0) return;
          setSnap(snap - 1);
        },
      });
    }

    //一番にスナップ
    //スクロール方向が下で、ref.current.getBoundingClientRect().
    // yが-100以下の時次の要素にスナップ
  });

  useEffect(() => {
    return () => {
      setHeaderMode("default");
    };
  }, [setHeaderMode]);
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const scrollTop = ref.current.getBoundingClientRect().y;
      setIsSticky(scrollTop > 200); // 200pxを超えたら吸着させる
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={ref} className=" h-[100vh]">
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
