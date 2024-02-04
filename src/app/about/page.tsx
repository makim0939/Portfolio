"use client";
import React, { useContext } from "react";
import useGrid from "../hooks/useGrid";
import { GridAppContext } from "../../providers/GridAppProvider";
import { ScreenWidthContext } from "@/providers/ScreenWidthProvider";
import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import IndexText from "@/components/animation/IndexText";
import FadeInContainer from "@/components/animation/FadeInContainer";
import Delay from "@/components/animation/Delay";

const About = () => {
  const screenWidth = useContext(ScreenWidthContext);
  const gridApp = useContext(GridAppContext);
  useGrid({ gridApp, page: 2 });
  if (screenWidth < 768) return <>🚧モバイル端末用のサイトは現在製作中です🙇‍♀️</>;

  return (
    <>
      <Header page={2} />
      <div className=" relative flex w-full h-screen">
        <div className=" absolute top-[20vh] left-1/2 w-[36.4vw] max-w-[637px]  min-w-[364px] aspect-[91/ 55] transform -translate-x-1/2">
          <ProfileCard page={2} />
        </div>

        <main className=" w-[36.4vw] max-w-[540px] h-full absolute top-[20vh] left-1/2 ">
          <section className=" w-[36.4vw] mb-8">
            <IndexText>About</IndexText>
            <FadeInContainer>
              <p>朝ごはん</p>
              <p>昼後はん</p>
              <p>夜ご飯</p>
            </FadeInContainer>
          </section>
          <Delay delay={0.3}>
            <section className=" w-[36.4vw] mb-8">
              <IndexText>Skills</IndexText>
              <FadeInContainer>
                <p>朝ごはん</p>
                <p>昼後はん</p>
                <p>夜ご飯</p>
              </FadeInContainer>
            </section>
          </Delay>
        </main>
      </div>
    </>
  );
};

export default About;
