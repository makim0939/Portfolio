import React from "react";
import Image from "next/image";
import { productsInfo, productNames } from "@/info";
import IndexText from "@/components/animation/IndexText";
import FadeInContainer from "@/components/animation/FadeInContainer";
import Delay from "@/components/animation/Delay";
import parse from "html-react-parser";

const SoftwareProducts = ({ productName }: { productName: productNames }) => {
  const test = <></>;
  return (
    <div className="h-[100vh] flex items-center justify-center ">
      <div className=" w-2/5 mx-[2.5%] aspect-[4/3] flex items-center justify-center bg-white shadow-xl shadow-neutral-300 rounded-sm border border-neutral-100 border-solid ">
        <div className=" w-[90%] h-[90%] flex items-center justify-center ">
          <Image
            src={productsInfo[productName].image}
            alt=""
            width={0}
            height={0}
            layout="responsive"
            className=" object-cover w-full h-full border rounded-sm "
          />
        </div>
      </div>
      <section className="w-2/5 mx-[2.5%] aspect-[4/3] pl-8">
        <IndexText className=" mb-4">{productsInfo[productName].title}</IndexText>
        <Delay delay={0.7}>
          <FadeInContainer className=" text-lg">
            {parse(productsInfo[productName].description)}
          </FadeInContainer>
        </Delay>
      </section>
    </div>
  );
};

export default SoftwareProducts;
