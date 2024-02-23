import { productNames, productsInfo } from "@/info";
import Image from "next/image";
import React, { useEffect } from "react";

const CgProduct = ({ productName, type }: { productName: productNames; type: "video" | "image" }) => {
  const [[width, height], setWindowSize] = React.useState([0, 0]);
  useEffect(() => {
    setWindowSize([window.innerWidth, window.innerHeight]);
  }, []);

  if (type === "video")
    return (
      <div className=" w-[100vw]  h-[100vh] relative">
        <video
          src={productsInfo[productName].image}
          width={width}
          height={height}
          className=" w-[100vw] h-[100vh] object-cover -z-10"
          loop
          autoPlay
          muted
          controls={false}
        ></video>
      </div>
    );
  else if (type === "image")
    return (
      <div className=" w-[100vw] h-[100vh] relative">
        <Image
          src={productsInfo[productName].image}
          alt=""
          width={width}
          height={height}
          className=" w-[100vw] h-[100vh] object-cover -z-10"
          sizes="100vw"
          style={{
            width: "auto",
            height: "100vh",
          }}
        ></Image>
      </div>
    );
};

export default CgProduct;
