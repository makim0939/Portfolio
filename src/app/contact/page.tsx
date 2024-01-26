"use client";
import React, { useContext } from "react";
import useGrid from "../hooks/useGrid";
import { GridAppContext } from "../GridProvider";
import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import IndexText from "@/components/animation/IndexText";
import FadeInContainer from "@/components/animation/FadeInContainer";
import { ScreenWidthContext } from "@/components/providers/ScreenWidthProvider";

const Contact = () => {
  const screenWidth = useContext(ScreenWidthContext);
  const gridApp = useContext(GridAppContext);
  useGrid({ gridApp, page: 3 });
  if (screenWidth < 768) return <>🚧モバイル端末用のサイトは現在製作中です🙇‍♀️</>;
  return (
    <>
      <Header page={3} />
      <div className=" absolute top-[20vh] left-1/2 w-[36.4vw] max-w-[637px]  min-w-[364px] aspect-[91/ 55] transform -translate-x-1/2">
        <ProfileCard page={3} />
      </div>
      <div className=" absolute top-[64px] w-full p-4">
        <section>
          <IndexText>Contact</IndexText>
        </section>

        <form action="">
          <div className="max-w-[720px]">
            <FadeInContainer>
              <div className=" flex flex-col my-4 ">
                <label htmlFor="">お名前</label>
                <input type="text" className=" border border-text h-8 rounded-sm focus:border-theme" />
              </div>
              <div className=" flex flex-col my-4 ">
                <label htmlFor="">メールアドレス</label>

                <input type="email" className=" border border-text h-8 rounded-sm focus:border-theme" />
              </div>
              <div className=" flex flex-col my-4 ">
                <label htmlFor="">件名</label>
                <input type="" className=" border border-text h-8 rounded-sm focus:border-theme" />
              </div>
              <div className=" flex flex-col my-4 ">
                <label htmlFor="">内容</label>
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={8}
                  className=" border border-text rounded-sm focus:border-theme "
                ></textarea>
              </div>
              <div className=" w-full flex justify-center my-6 ">
                <button className=" w-full h-[42px] border border-text rounded-sm hover:bg-theme_light hover:border-theme transform duration-[.3s]">
                  送信
                </button>
              </div>
            </FadeInContainer>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
