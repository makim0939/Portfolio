import { CgProductInfo } from "@/info";
import Image from "next/image";
import React, { useEffect } from "react";

const CgProduct = ({ product, mobile = false }: { product: CgProductInfo; mobile?: boolean }) => {
  const [[width, height], setWindowSize] = React.useState([0, 0]);
  const [loaded, setLoaded] = React.useState(false);
  useEffect(() => {
    setWindowSize([window.innerWidth, window.innerHeight]);

    const onVideoLoaded = () => {
      setLoaded(true);
    };

    if (product.type !== "video") return;
    const video = document.querySelector("video");
    if (!video) return;
    video.addEventListener("loadedmetadata", onVideoLoaded);
    return () => {
      video.removeEventListener("loadedmetadata", onVideoLoaded);
    };
  }, [product]);

  if (product.type === "video")
    return (
      <div className={mobile ? "p-4" : "w-[100vw]  h-[100vh] relative"}>
        {mobile && <h2 className=" w-full text-2xl font-extralight ">{product.title}</h2>}
        {!loaded && <p>Loading ... </p>}
        <video
          src={product.image}
          width={width}
          height={height}
          className=" w-full h-full object-cover -z-10"
          loop
          autoPlay
          muted
          playsInline={true}
          controls={false}
          hidden={!loaded}
        ></video>
      </div>
    );
  else if (product.type === "image")
    return (
      <div className={mobile ? "p-4" : "w-[100vw]  h-[100vh] relative"}>
        {mobile && <h2 className=" w-full text-2xl font-extralight ">{product.title}</h2>}
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
