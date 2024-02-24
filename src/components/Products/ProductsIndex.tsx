import React from "react";
import { motion } from "framer-motion";
import IndexText from "@/components/animation/IndexText";
import { EASE } from "@/animationProps";
import { text } from "stream/consumers";

const ProductsIndex = ({ children, mobile = false }: { children: string; mobile?: boolean }) => {
  console.log(mobile);
  return (
    <div className={"p-4" + (mobile ? " h-[100vh] " : " h-[100vh] ")}>
      <IndexText> Products</IndexText>
      <section className="w-full h-full flex flex-col items-center justify-center">
        <motion.h1
          className=" text-4xl lg:text-5xl font-extralight mb-2"
          initial={{ y: 0 }}
          whileInView={{ y: -64 }}
          transition={{ duration: 1, ease: EASE }}
        >
          {children}
        </motion.h1>
        <motion.h1
          className=" text-5xl font-extralight"
          initial={{ y: 32 }}
          whileInView={{ y: -64 }}
          transition={{ duration: 1, ease: EASE }}
        >
          ↓
        </motion.h1>
      </section>
    </div>
  );
};

export default ProductsIndex;
