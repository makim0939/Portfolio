"use client";
import React, { useContext, useEffect } from "react";
import useGrid from "../hooks/useGrid";
import { GridAppContext } from "../../providers/GridAppProvider";
import { ScreenWidthContext } from "@/providers/ScreenWidthProvider";
import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import IndexText from "@/components/animation/IndexText";
import FadeInContainer from "@/components/animation/FadeInContainer";
import Delay from "@/components/animation/Delay";
import AdobeLogoSubstitute from "@/components/ui/AdobeLogoSubstitute";
import SkillsIcon from "@/components/icon/SkillsIcon";
import { aboutInfo } from "@/info";

const About = () => {
  const screenWidth = useContext(ScreenWidthContext);
  const gridApp = useContext(GridAppContext);
  useGrid({ gridApp, page: 2 });
  if (screenWidth < 768) return <>🚧モバイル端末用のサイトは現在製作中です🙇‍♀️</>;

  return (
    <>
      <Header page={2} />
      <div className=" relative flex w-full h-screen">
        <div className=" absolute top-[20vh] left-1/2 w-[36.4vw] max-w-[637px]  min-w-[400px] aspect-[91/ 55] transform -translate-x-1/2">
          <ProfileCard page={2} />
        </div>

        <main className=" w-[36.4vw] max-w-[540px] h-full absolute top-[20vh] left-1/2 ">
          <section className=" w-[36.4vw] mb-8 [&_p]:my-1">
            <IndexText className=" mb-2">About</IndexText>
            <FadeInContainer>
              <p>愛知県在住の大学生です。</p>
              <p>
                大学でコンピュータやプログラミングについて学ぶ傍ら、Web開発とCGコンテンツ制作に没頭しております。
              </p>
              <p>卒業後はソフトウェア開発やデジタルコンテンツの制作に携わりたいと考えています。</p>
            </FadeInContainer>
          </section>
          <Delay delay={0.3}>
            <section className=" w-[36.4vw] mb-8">
              <IndexText className=" mb-2">Skills</IndexText>
              <FadeInContainer className=" flex flex-wrap [&>div]:m-2">
                <SkillsIcon src="/assets/logo/BlenderLogo.svg"></SkillsIcon>
                <SkillsIcon src="/assets/logo/TypescriptLogo.svg"></SkillsIcon>
                <SkillsIcon src="/assets/logo/ReactLogo.svg"></SkillsIcon>
                <SkillsIcon src="/assets/logo/ARjsLogo.png"></SkillsIcon>
                <SkillsIcon src="/assets/logo/NextJsLogo.svg"></SkillsIcon>
              </FadeInContainer>
            </section>
          </Delay>
        </main>
      </div>
    </>
  );
};

export default About;
