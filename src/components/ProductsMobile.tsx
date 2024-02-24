import React, { Children, useEffect, useRef, useState } from "react";
import { headerModeAtom } from "@/atoms";
import { useAtom } from "jotai";
import ProductsIndex from "./Products/ProductsIndex";
import CgProduct from "./Products/CgProduct";
import { useLenis } from "@/providers/LenisProvider";
import FadeInContainer from "./animation/FadeInContainer";
import { motion } from "framer-motion";
import IndexText from "./animation/IndexText";
import { productsInfo } from "@/info";
import SoftwareProduct from "./Products/SoftwareProduct";

const ProductsMobile = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [currentView, setCurrentView] = useState<number | undefined>(undefined);
  const productsNum = ref.current?.children.length;

  return (
    <>
      {productsNum && ref.current && currentView !== undefined && 0 <= currentView && (
        <motion.div
          className=" fixed right-4 h-[30vh] top-[35vh] flex flex-col justify-around items-center rounded-lg p-2 bg-white z-10  "
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
        >
          {Array(productsNum)
            .fill(0)
            .map((_, i) =>
              i === currentView ? (
                <motion.div
                  initial={{ scale: 1, opacity: 0.1 }}
                  animate={{ scale: 2, opacity: 1 }}
                  key={i}
                  layoutId="productsNav"
                  className="w-1.5 h-1.5 rounded-full bg-black"
                ></motion.div>
              ) : (
                <motion.div
                  key={i}
                  initial={{ scale: 1, opacity: 0.1 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-1.5 h-1.5 rounded-full bg-black"
                ></motion.div>
              )
            )}
        </motion.div>
      )}

      <div ref={ref} className=" h-[100vh]">
        <IndexText className=" px-4 "> Software </IndexText>
        {productsInfo.software.map((product) => (
          <div key={product.title}>
            <FadeInContainer fadeInProps={{ distance: 8, duration: 0.1 }} once>
              <SoftwareProduct product={product} mobile />
            </FadeInContainer>
          </div>
        ))}

        <IndexText className=" px-4 "> CG Products </IndexText>
        {productsInfo.cg.map((product) => (
          <div key={product.title}>
            <FadeInContainer fadeInProps={{ distance: 8, duration: 0.1 }} once>
              <CgProduct product={product} mobile />
            </FadeInContainer>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsMobile;
