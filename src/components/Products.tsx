import { productNames, productsInfo } from "@/info";
import Image from "next/image";
import React, { use, useContext, useEffect, useRef } from "react";
import { motion, useInView, useMotionValueEvent, useScroll } from "framer-motion";
import IndexText from "./animation/IndexText";
import { gridAnimationRequestAtom, headerModeAtom } from "@/atoms";
import { useAtom } from "jotai";
import { EASE } from "@/animationProps";
import { GridAppContext } from "@/app/GridProvider";
import ApplicationProducts from "./ApplicationProducts";
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
    console.log(ref.current.getBoundingClientRect().y);
    if (ref.current.getBoundingClientRect().y < 1) {
      ref.current.className = "";
      // ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      setHeaderMode("small");
      return;
    }
    if (ref.current.getBoundingClientRect().y > -10) {
      ref.current.className = "h-[100vh]";
      gridApp.setScroll();
      setHeaderMode("default");
      return;
    }
  });

  useEffect(() => {
    const setScrollVal = () => {
      gridApp.setScroll(ref.current?.scrollTop);
    };
    if (ref.current) {
      ref.current?.addEventListener("scroll", setScrollVal);
    }
    return () => {
      // ref.current?.removeEventListener("scroll", setScrollVal);
      setHeaderMode("default");
      gridApp.setScroll(0);
    };
  }, [setHeaderMode, gridApp]);

  return (
    <div ref={ref} className="">
      <div className=" snap-start h-[100vh] p-4">
        <IndexText> Products</IndexText>
        <section className="w-full h-[100vh] flex flex-col items-center justify-center">
          <motion.h1
            className=" text-4xl 2xl:text-5xl font-extralight mb-2"
            initial={{ y: 0 }}
            whileInView={{ y: -64 }}
            transition={{ duration: 1, ease: EASE }}
          >
            Software
          </motion.h1>
          <motion.h1
            className=" text-4xl 2xl:text-5xl font-extralight"
            initial={{ y: 32 }}
            whileInView={{ y: -64 }}
            transition={{ duration: 1, ease: EASE }}
          >
            ↓
          </motion.h1>
          <div ref={applicationsHeadRef}></div>
        </section>
      </div>

      <div className="snap-start h-[100vh] px-4">
        <div className="h-[100vh] flex items-center">
          <ApplicationProducts productName="compassChat" />
        </div>
      </div>

      <div className="snap-start h-[100vh] px-4">
        <div className="h-[100vh] flex items-center">
          <ApplicationProducts productName="portfolio" />
        </div>
      </div>

      <div className=" snap-start h-[100vh] p-4">
        <IndexText> Products</IndexText>
        <section className="w-full h-[100vh] flex flex-col items-center justify-center">
          <motion.h1
            className=" text-4xl 2xl:text-5xl font-extralight mb-2"
            initial={{ y: 0 }}
            whileInView={{ y: -64 }}
            transition={{ duration: 1, ease: EASE }}
          >
            CG Products
          </motion.h1>
          <div ref={cgHeadRef}></div>

          <motion.h1
            className=" text-4xl 2xl:text-5xl font-extralight"
            initial={{ y: 32 }}
            whileInView={{ y: -64 }}
            transition={{ duration: 1, ease: EASE }}
          >
            ↓
          </motion.h1>
        </section>
      </div>

      {/* <div className=" snap-start h-[100vh]">
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
      <div className=" snap-start h-[100vh]">
        <section>
          <video
            src={productsInfo["classroom"].image}
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
      <div className=" snap-start h-[100vh]">
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
      <div className=" snap-start h-[100vh]">
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
