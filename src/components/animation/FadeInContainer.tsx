import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE } from "@/animationProps";

const FadeInContainer = ({ children }: { children: React.ReactElement | React.ReactElement[] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 100%",
  });
  children = Array.isArray(children) ? children : [children];

  const variants = {
    initial: {
      y: 16,
      opacity: 0,
    },

    animate: isInView
      ? {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            staggerChildren: 0.1,
            ease: EASE,
          },
        }
      : {
          y: 16,
          opacity: 0,
        },
  };
  return (
    <motion.div ref={ref} variants={variants} initial="initial" animate="animate">
      {children.map((child, i) => (
        <motion.div key={i} variants={variants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FadeInContainer;
