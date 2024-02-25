import { CgProductInfo } from "@/info";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const CgProduct = ({ product, mobile = false }: { product: CgProductInfo; mobile?: boolean }) => {
  const [[width, height], setWindowSize] = React.useState([0, 0]);
  const [canplay, setCanplay] = React.useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setWindowSize([window.innerWidth, window.innerHeight]);

    const onVideoCanplay = (e: Event) => setCanplay(true);
    if (product.type !== "video" || !mobile) return;
    if (!videoRef.current) return;
    const video = videoRef.current;
    video.load();
    video.addEventListener("canplay", onVideoCanplay);
    return () => {
      video.removeEventListener("canplay", onVideoCanplay);
    };
  }, [product, mobile]);

  if (product.type === "video")
    return (
      <div className={mobile ? "p-4" : "w-[100vw]  h-[100vh] relative"}>
        {mobile && <h2 className=" w-full text-2xl font-extralight ">{product.title}</h2>}
        {mobile && !canplay && <p>Loading ... </p>}
        <video
          ref={videoRef}
          src={product.image}
          width={width}
          height={height}
          className=" w-full h-full object-cover -z-10"
          loop
          autoPlay={mobile ? false : true}
          muted
          playsInline={true}
          controls={mobile ? true : false}
          hidden={false}
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
