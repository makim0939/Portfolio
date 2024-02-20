import React, { Children, useEffect, useRef, useState } from "react";
import { headerModeAtom } from "@/atoms";
import { useAtom } from "jotai";
import SoftwareProducts from "./ui/Products/SoftwareProduct";
import ProductsIndex from "./ui/Products/ProductsIndex";
import CgProduct from "./ui/Products/CgProduct";
import { useLenis } from "@/providers/LenisProvider";
import FadeInContainer from "./animation/FadeInContainer";

const Products = ({ screenWidth }: { screenWidth: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [headerMode, setHeaderMode] = useAtom(headerModeAtom);
  const lenis = useLenis();
  const [snap, setSnap] = useState(0);
  const [isTrackpad, setIsTrackpad] = useState(false);

  lenis?.on("scroll", () => {
    if (!ref.current) return;
    const containerPos = ref.current.getBoundingClientRect().y * -1;
    const productsNum = ref.current.children.length;
    if (containerPos >= -1) if (headerMode !== "small") setHeaderMode("small");
    if (containerPos < -1) setHeaderMode("default");
    const pos = ref.current.children[snap].getBoundingClientRect().y * -1;
    const height = window.innerHeight;
    if (-150 < pos && pos < 0 && 10 < lenis.velocity) {
      lenis.scrollTo(ref.current.children[snap], {
        lock: true,
        onComplete: () => {
          if (snap >= productsNum - 1) return;
          setSnap(snap + 1);
        },
      });
    } else if (0 < pos && pos < 150 && lenis.velocity < -10) {
      lenis.scrollTo(ref.current.children[snap], {
        lock: true,
        onComplete: () => {
          if (snap <= 0) return;
          setSnap(snap - 1);
        },
      });
    }
    // トラックパッド対策
    else if (0 < pos && pos < 30 && lenis.velocity && lenis.velocity < 10) {
      lenis.scrollTo(ref.current.children[snap], {
        lock: true,
        immediate: true,
      });
    } else if (-30 < pos && pos < 0 && lenis.velocity && -10 < lenis.velocity && lenis.velocity < 0) {
      lenis.scrollTo(ref.current.children[snap], {
        lock: true,
        immediate: true,
      });
    }
  });

  useEffect(() => {
    return () => {
      setHeaderMode("default");
    };
  }, [setHeaderMode]);

  return (
    <div ref={ref} className=" h-[100vh]">
      <ProductsIndex>Software</ProductsIndex>
      <FadeInContainer fadeInProps={{ distance: 64 }}>
        <SoftwareProducts productName="compassChat" />
      </FadeInContainer>
      <FadeInContainer fadeInProps={{ distance: 64 }}>
        <SoftwareProducts productName="portfolio" />
      </FadeInContainer>

      <ProductsIndex>CG Products</ProductsIndex>
      <CgProduct productName="classroom" type="video" />
      <CgProduct productName="robot" type="video" />
      <CgProduct productName="cloud" type="video" />
      <CgProduct productName="studio" type="video" />
      <CgProduct productName="prism" type="image" />
    </div>
  );
};

export default Products;
