import React, { Children, useEffect, useRef, useState } from "react";
import { headerModeAtom } from "@/atoms";
import { useAtom } from "jotai";
import SoftwareProducts from "./ui/Products/SoftwareProduct";
import ProductsIndex from "./ui/Products/ProductsIndex";
import CgProduct from "./ui/Products/CgProduct";
import { useLenis } from "@/providers/LenisProvider";
import FadeInContainer from "./animation/FadeInContainer";
import { motion } from "framer-motion";

const Products = ({ screenWidth }: { screenWidth: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [headerMode, setHeaderMode] = useAtom(headerModeAtom);
  const lenis = useLenis();
  const [currentView, setCurrentView] = useState<number | undefined>(undefined);
  const [snap, setSnap] = useState(0);
  const productsNum = ref.current?.children.length;

  lenis?.on("scroll", () => {
    if (!productsNum || !ref.current) return;
    const containerPos = ref.current.getBoundingClientRect().y * -1;
    if (containerPos >= -1) if (headerMode !== "small") setHeaderMode("small");
    if (containerPos < -1) setHeaderMode("default");
    const pos = ref.current.children[snap].getBoundingClientRect().y * -1;
    const height = window.innerHeight;
    const currentView =
      1 <= ref.current!.getBoundingClientRect().y
        ? -1
        : Math.round(Math.abs(ref.current!.getBoundingClientRect().y) / window.innerHeight);
    setCurrentView(currentView);
    console.log(ref.current!.getBoundingClientRect().y, window.innerHeight);

    if (-150 < pos && pos < 0 && 10 < lenis.velocity) {
      lenis.scrollTo(ref.current.children[snap], {
        lock: true,
        onComplete: () => {
          if (snap >= productsNum - 1) return;
          else setSnap(snap + 1);
        },
      });
    } else if (0 < pos && pos < 150 && lenis.velocity < -10) {
      lenis.scrollTo(ref.current.children[snap], {
        lock: true,
        onComplete: () => {
          if (snap <= 0) return;
          else setSnap(snap - 1);
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

  const ProductsNav = ({ num, now }: { num: number; now: number }) => {
    const items = [];
    for (let i = 0; i < num; i++) {
      items.push(
        i === now ? (
          <motion.div layoutId="productsNav" className=" w-4 h-4 rounded-full bg-theme"></motion.div>
        ) : (
          <motion.div layoutId="productsNav" className="w-2 h-2 rounded-full bg-text"></motion.div>
        )
      );
    }
    return <>{items}</>;
  };

  return (
    <>
      {productsNum && ref.current && currentView !== undefined && 0 <= currentView && (
        <motion.div
          className=" fixed right-4 h-[30vh] top-[35vh] flex flex-col justify-around items-center rounded-full p-2 bg-white z-10  "
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
        >
          {Array(productsNum)
            .fill(0)
            .map((_, i) =>
              i === currentView ? (
                <motion.div
                  initial={{ scale: 1, opacity: 0.1 }}
                  animate={{ scale: 1.5, opacity: 1 }}
                  key={i}
                  layoutId="productsNav"
                  className="w-2 h-2 rounded-full bg-black"
                ></motion.div>
              ) : (
                <motion.div
                  key={i}
                  initial={{ scale: 1, opacity: 0.1 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-2 h-2 rounded-full bg-black"
                ></motion.div>
              )
            )}
        </motion.div>
      )}

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
    </>
  );
};

export default Products;
