import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE } from "@/animationProps";

type FadeInProps = {
  duration?: number;
  distance?: number;
};

const FadeInContainer = ({
  children,
  fadeInProps = { duration: 0.5, distance: 16 },
  className,
  once = false,
}: {
  children: React.ReactElement | React.ReactElement[];
  fadeInProps?: FadeInProps;
  className?: string;
  once?: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 100%",
    once,
  });
  children = Array.isArray(children) ? children : [children];

  const variants = {
    initial: {
      y: fadeInProps.distance || 16,
      opacity: 0,
    },

    animate: isInView
      ? {
          y: 0,
          opacity: 1,
          transition: {
            duration: fadeInProps.duration || 0.5,
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
    <motion.div ref={ref} variants={variants} initial="initial" animate="animate" className={className}>
      {children.map((child, i) => (
        <motion.div key={i} variants={variants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FadeInContainer;
