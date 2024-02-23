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
  if (screenWidth !== 0 && screenWidth < 768) return <>🚧モバイル端末用のサイトは現在製作中です🙇‍♀️</>;

  return (
    <>
      <Header page={2} />
      <div className=" flex w-full h-full ">
        <div className=" absolute top-[20vh] left-1/2 w-[36.4vw] max-w-[637px]  min-w-[400px] aspect-[91/ 55] transform -translate-x-1/2">
          <ProfileCard page={2} />
        </div>

        <main className=" w-[36.4vw] max-w-[540px] h-full ml-[50vw] mt-[20vh]">
          <section className=" w-[36.4vw] mb-8 [&_p]:my-1">
            <IndexText className=" mb-2">About</IndexText>
            <FadeInContainer once={true}>
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
              <FadeInContainer>
                <section>
                  <p className=" my-2">
                    <b>| </b> Web開発
                  </p>
                  <p>
                    Web開発では、既存の技術を組み合わせ、フルスタックに開発を行うことができます。
                    <br />
                    特に描画系のライブラリを用いたフロントエンド開発が得意です。
                  </p>
                </section>
                <section>
                  <p className=" mt-8 mb-2">
                    <b>| </b> CG制作
                  </p>
                  <p>3DCGではフォトリアルからセルルック調のものまでシーンを作成できます。</p>
                  <p>
                    簡単なキャラクターモデリング・リギングを行い、メタバース環境用アバターの制作を行ったこともあります。
                  </p>
                  <p>AfterEffectsを用いた映像制作やイラスト制作も可能です。</p>
                </section>
                <section>
                  <p className=" mt-8 mb-2">
                    <b>| </b>その他
                  </p>
                  <p>
                    簡単な音楽知識があり、Cubaseを用いて打ち込み、演奏、マスタリングを行い楽曲制作をした経験もございます。
                    どこかでお役に立てるかもしれません。
                  </p>
                </section>
                <p className=" mt-8 mb-4">
                  <b>| </b>使用経験のある技術
                </p>

                <p>Web→</p>
                <div className="flex flex-wrap ">
                  {aboutInfo.skills.web.map((skill, i) => (
                    <SkillsIcon key={i} src={skill.imagePath} size={56} className=" m-2" />
                  ))}
                </div>
                <p>CG→</p>
                <div className="flex flex-wrap ">
                  {aboutInfo.skills.cg.map((skill, i) => (
                    <SkillsIcon key={i} src={skill.imagePath} size={56} className=" m-2" />
                  ))}
                </div>
              </FadeInContainer>
            </section>
          </Delay>
          <div className=" h-[10vh]"></div>
        </main>
      </div>
    </>
  );
};

export default About;
