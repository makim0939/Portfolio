import React from "react";
import Image from "next/image";
import { SoftwareProductInfo } from "@/info";
import IndexText from "@/components/animation/IndexText";
import FadeInContainer from "@/components/animation/FadeInContainer";
import Delay from "@/components/animation/Delay";

const SoftwareProduct = ({
  product,
  mobile = false,
}: {
  product: SoftwareProductInfo;
  mobile?: boolean;
}) => {
  if (mobile)
    return (
      <div className={"flex flex-col items-center justify-center p-4 "}>
        <h2 className=" w-full text-2xl font-extralight mt-4 mb-2">{product.title}</h2>
        <div className=" w-full aspect-[4/3] flex items-center justify-center bg-white shadow-xl shadow-neutral-300 rounded-sm border border-neutral-100 border-solid ">
          <div className=" w-[90%] h-[90%] flex items-center justify-center ">
            <Image
              src={product.image}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              className=" object-cover w-full h-full border rounded-sm "
            />
          </div>
        </div>

        <section className=" w-full aspect-[4/3] my-8 ">
          <Delay delay={mobile ? 0 : 0.7}>
            <FadeInContainer className=" text-lg">
              <>
                {product.description.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </>

              <p className=" mt-8 mb-2 text-text_light">
                <b>| </b>使用技術
              </p>
              <>
                {product.skill.map((item, i) => (
                  <p key={i} className=" text-text_light">
                    {item}
                  </p>
                ))}
              </>
            </FadeInContainer>
          </Delay>
        </section>
      </div>
    );

  return (
    <div className={"h-[100vh] flex items-center justify-center "}>
      <a
        href={product.url}
        className=" w-2/5 mx-[2.5%] aspect-[4/3] flex items-center justify-center bg-white shadow-xl shadow-neutral-300 rounded-sm border border-neutral-100 border-solid "
      >
        <div className=" w-[90%] h-[90%] flex items-center justify-center ">
          <Image
            src={product.image}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            className=" object-cover w-full h-full border rounded-sm "
          />
        </div>
      </a>

      <section className="w-2/5 mx-[2.5%] aspect-[4/3] pl-8">
        <IndexText className=" mb-4">{product.title}</IndexText>
        <Delay delay={0.7}>
          <FadeInContainer className=" text-lg">
            <>
              {product.description.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </>

            <p className=" mt-8 mb-2 text-text_light">
              <b>| </b>使用技術
            </p>
            <>
              {product.skill.map((item, i) => (
                <p key={i} className=" text-text_light">
                  {item}
                </p>
              ))}
            </>
          </FadeInContainer>
        </Delay>
      </section>
    </div>
  );
};

export default SoftwareProduct;
