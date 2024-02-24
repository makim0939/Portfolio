import { CgProductInfo } from "@/info";
import Image from "next/image";
import React, { useEffect } from "react";

const CgProduct = ({ product, mobile = false }: { product: CgProductInfo; mobile?: boolean }) => {
  const [[width, height], setWindowSize] = React.useState([0, 0]);
  useEffect(() => {
    setWindowSize([window.innerWidth, window.innerHeight]);
  }, []);

  if (product.type === "video")
    return (
      <div className=" w-[100vw]  h-[100vh] relative">
        <video
          src={product.image}
          width={width}
          height={height}
          className=" w-full h-full object-cover -z-10"
          loop
          autoPlay
          muted
          controls={false}
        ></video>
      </div>
    );
  else if (product.type === "image")
    return (
      <div className=" w-[100vw] h-[100vh] relative">
        <Image
          src={product.image}
          alt=""
          width={width}
          height={height}
          className=" w-full h-full object-cover -z-10"
        ></Image>
      </div>
    );
};

export default CgProduct;
