import React from "react";
import { motion } from "framer-motion";
import IndexText from "@/components/animation/IndexText";
import { EASE } from "@/animationProps";
import { text } from "stream/consumers";

const ProductsIndex = ({ children }: { children: string }) => {
  return (
    <div className=" h-[100vh] p-4">
      <IndexText> Products</IndexText>
      <section className="w-full h-[100vh] flex flex-col items-center justify-center">
        <motion.h1
          className=" text-5xl font-extralight mb-2"
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
