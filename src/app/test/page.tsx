"use client";
import FadeInContainer from "@/components/animation/FadeInContainer";
import IndexText from "@/components/animation/IndexText";
import { ScreenWidthContext } from "@/components/providers/ScreenWidthProvider";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { motion } from "framer-motion";

const Test = () => {
  const screenWidth = useContext(ScreenWidthContext);
  const [rotation, setRotation] = useState(0);

  if (screenWidth < 768)
    return (
      <>
        <main className="w-[320px] p-4">
          <section>
            <IndexText>Font-size</IndexText>
            <p>
              文字サイズを固定にするか、可変にするかで迷う。
              <br />
              固定にする場合は768px未満、それ以上で文字サイズを設定する。
              <br />
              可変にする場合は、ウィンドウの幅に応じて文字サイズを設定する。
            </p>
          </section>
          <section>
            <IndexText>Mount-animation</IndexText>
            <FadeInContainer>
              <p>Takoyaki</p>
              <p>お好み焼き</p>
              <Image src="vercel.svg" alt="" width={128} height={128} />
            </FadeInContainer>
          </section>
        </main>
      </>
    );
  return (
    <>
      <main className="w-[540px] p-4">
        <section>
          <IndexText>Font-size</IndexText>
          <p>
            文字サイズを固定にするか、可変にするかで迷う。
            <br />
            固定にする場合は768px未満、それ以上で文字サイズを設定する。
            <br />
            可変にする場合は、ウィンドウの幅に応じて文字サイズを設定する。
          </p>
        </section>
        <section>
          <IndexText>Mount-animation</IndexText>
          <FadeInContainer>
            <p>Takoyaki</p>
            <p>お好み焼き</p>
            <Image src="vercel.svg" alt="" width={128} height={128} />
          </FadeInContainer>
        </section>
      </main>
    </>
  );
};

export default Test;
