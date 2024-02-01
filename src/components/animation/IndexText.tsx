import React, { useContext, useRef } from "react";
import { easeInOut, motion, useInView } from "framer-motion";
import { animationProperties } from "@/animationProps";
import styles from "./indexText.module.css";
import { ScreenWidthContext } from "../../providers/ScreenWidthProvider";

const IndexText = ({ children, once = true }: { children?: string; once?: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
  });
  if (!children) return null;
  const text = children;
  const charArray = text.split("");
  const width = `${charArray.length * 1.5}rem`;

  const charVariants = {
    initial: { opacity: 0, x: -96 },
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -96 },
  };
  const borderVariants = {
    initial: { scaleX: 0, originX: 0 },
    animate: isInView ? { scaleX: 1 } : { scaleX: 0 },
  };

  return (
    <div className={` ${width} h-11 relative flex`}>
      <div ref={ref} className=" absolute top-0 w-fit flex text-4xl font-extralight">
        {charArray.map((char, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={charVariants}
            initial="initial"
            animate="animate"
            transition={{
              duration: 0.1,
              delay: 0.1 + (charArray.length - i) * 0.07,
              ease: animationProperties.easeOut,
            }}
          >
            {char}
          </motion.div>
        ))}
      </div>
      <div className={`${styles.indexText} absolute left-[-16px] h-11 bg-theme`} style={{ width }}></div>
      <motion.div
        variants={borderVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.5, duration: 2, ease: animationProperties.easeOutSteep }}
        className=" border-b-[1px] border-text_light w-full h-10"
      ></motion.div>
    </div>
  );
};

export default IndexText;
