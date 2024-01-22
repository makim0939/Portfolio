import { productNames, productsInfo } from "@/info";
import Image from "next/image";
import React, { use, useContext, useEffect, useRef } from "react";
import FadeInContainer from "./animation/FadeInContainer";
import Link from "next/link";
import { motion, useInView, useMotionValueEvent, useScroll } from "framer-motion";
import IndexText from "./animation/IndexText";
import { gridAnimationRequestAtom, headerModeAtom } from "@/atoms";
import { useAtom } from "jotai";
import { EASE } from "@/animationProps";
import { GridAppContext } from "@/app/GridProvider";
const Products = ({ screenWidth }: { screenWidth: number }) => {
  const gridApp = useContext(GridAppContext);
  const ref = useRef<HTMLDivElement>(null);
  const [, setHeaderMode] = useAtom(headerModeAtom);
  const [, setGridAnimationRequest] = useAtom(gridAnimationRequestAtom);
  const { scrollY } = useScroll();
  const applicationsHeadRef = useRef<HTMLDivElement>(null);
  const cgHeadRef = useRef<HTMLDivElement>(null);
  const isApplicationInView = useInView(applicationsHeadRef);
  const isCGInView = useInView(cgHeadRef);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!ref.current) return;
    if (ref.current.getBoundingClientRect().y < 1) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      ref.current.className = "snap-mandatory snap-y h-[100vh] overflow-auto";
      setHeaderMode("small");
      return;
    }
    if (ref.current.getBoundingClientRect().y > -10) {
      ref.current.className = "h-[100vh]";
      setHeaderMode("default");
      return;
    }
  });

  useEffect(() => {
    if (ref.current) {
      ref.current?.addEventListener("scroll", () => {
        console.log("Scroll");
        gridApp.setScroll(ref.current?.scrollTop);
      });
    }
    return () => {
      setHeaderMode("default");
    };
  }, [setHeaderMode, gridApp]);

  return (
    <div ref={ref} className="h-[100vh] overflow-hidden">
      <div className=" snap-start h-full p-4">
        <IndexText> Products</IndexText>
        <section className="w-full h-full flex flex-col items-center justify-center">
          <motion.h1
            className=" text-4xl font-extralight mb-2"
            initial={{ y: 0 }}
            whileInView={{ y: -64 }}
            transition={{ duration: 1, ease: EASE }}
          >
            Applications
          </motion.h1>
          <motion.h1
            className=" text-4xl font-extralight"
            initial={{ y: 32 }}
            whileInView={{ y: -64 }}
            transition={{ duration: 1, ease: EASE }}
          >
            ↓
          </motion.h1>
          <div ref={applicationsHeadRef}></div>
        </section>
      </div>

      <div className=" snap-start h-full">
        <section>
          <p>CompassChat</p>
        </section>
      </div>

      <div className=" snap-start h-full p-4">
        <IndexText> Products</IndexText>
        <section className="w-full h-full flex flex-col items-center justify-center">
          <motion.h1
            className=" text-4xl font-extralight mb-2"
            initial={{ y: 0 }}
            whileInView={{ y: -64 }}
            transition={{ duration: 1, ease: EASE }}
          >
            CG Products
          </motion.h1>
          <div ref={cgHeadRef}></div>

          <motion.h1
            className=" text-4xl font-extralight"
            initial={{ y: 32 }}
            whileInView={{ y: -64 }}
            transition={{ duration: 1, ease: EASE }}
          >
            ↓
          </motion.h1>
        </section>
      </div>

      {/* <div className=" snap-start h-full">
        <section className="w-full flex">
          <Link href={"https://compass-chat.vercel.app/"}>
            <Image
              src={productsInfo["compassChat"].image}
              width={240}
              height={240}
              alt=""
              className=" rounded-xl"
            ></Image>
          </Link>

          <section className="mx-16">
            <h3 className="mb-2 text-2xl font-extralight">{productsInfo["compassChat"].title}</h3>
            <p>{productsInfo["compassChat"].description}</p>
          </section>
        </section>
      </div> */}
      <div className=" snap-start h-full">
        <section>
          <video
            src={productsInfo["cloud"].image}
            width={window.innerWidth}
            height={window.innerHeight}
            className=" w-[100vw] h-[100vh] object-cover -z-10"
            loop
            autoPlay
            muted
            controls={false}
          ></video>
        </section>
      </div>
      <div className=" snap-start h-full">
        <section>
          <video
            src={productsInfo["studio"].image}
            width={window.innerWidth}
            height={window.innerHeight}
            className=" w-[100vw] h-[100vh] object-cover -z-10"
            loop
            autoPlay
            muted
            controls={false}
          ></video>
        </section>
      </div>

      <div className=" snap-start">
        <section className=" w-[100vw] h-[100vh] bg-slate-400">
          <Image
            src={productsInfo["prism"].image}
            alt=""
            width={window.innerWidth}
            height={window.innerHeight}
            className=" w-[100vw] h-[100vh] object-cover -z-10"
          ></Image>
        </section>
      </div>
    </div>
  );
};

export default Products;
