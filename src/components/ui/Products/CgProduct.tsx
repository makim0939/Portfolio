import { productNames, productsInfo } from "@/info";
import Image from "next/image";
import React from "react";

const CgProduct = ({ productName, type }: { productName: productNames; type: "video" | "image" }) => {
  if (type === "video")
    return (
      <section className=" w-[100vw]  h-[100vh] relative">
        <video
          src={productsInfo[productName].image}
          width={window.innerWidth}
          height={window.innerHeight}
          className=" w-[100vw] h-[100vh] object-cover -z-10"
          loop
          autoPlay
          muted
          controls={false}
        ></video>
      </section>
    );
  else if (type === "image")
    return (
      <section className=" w-[100vw] h-[100vh] relative">
        <Image
          src={productsInfo[productName].image}
          alt=""
          width={window.innerWidth}
          height={window.innerHeight}
          className=" w-[100vw] h-[100vh] object-cover -z-10"
        ></Image>
      </section>
    );
};

export default CgProduct;
