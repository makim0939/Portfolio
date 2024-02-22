"use client";
import React, { useContext, useEffect, useState } from "react";
import useGrid from "../hooks/useGrid";
import { GridAppContext } from "../../providers/GridAppProvider";
import { ScreenWidthContext } from "@/providers/ScreenWidthProvider";
import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import IndexText from "@/components/animation/IndexText";
import FadeInContainer from "@/components/animation/FadeInContainer";
import "@/app/globalIcon.scss";

const Contact = () => {
  const screenWidth = useContext(ScreenWidthContext);
  const gridApp = useContext(GridAppContext);
  useGrid({ gridApp, page: 3 });
  const [isSended, setIsSended] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSended(true);
  };

  if (screenWidth !== 0 && screenWidth < 768) return <>🚧モバイル端末用のサイトは現在製作中です🙇‍♀️</>;
  return (
    <>
      <Header page={3} />
      <div className=" absolute top-[20vh] left-1/2 w-[36.4vw] max-w-[637px]  min-w-[400px] aspect-[91/ 55] transform -translate-x-1/2 -z-10">
        <ProfileCard page={3} />
      </div>
      <div className=" pt-16 w-full p-4">
        <section>
          <IndexText className=" my-4">Contact</IndexText>
        </section>
        <div className=" w-ful flex">
          {!isSended ? (
            <form
              action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScqaVZRgwPEutExbcWLifZ4NbpL1b6Pnn0UEnbNv8yTRrBroQ/formResponse"
              target="hidden-iframe"
              onSubmit={onSubmit}
              className="  w-1/2 mr-8 pb-8"
            >
              <FadeInContainer className=" flex flex-col justify-center">
                <div className=" flex flex-col my-2 ">
                  <label htmlFor="">
                    お名前<span className=" text-red-500"> *</span>
                  </label>
                  <input
                    type="text"
                    required={true}
                    name="entry.2005620554"
                    className=" border border-text h-8 rounded-sm focus:border-theme"
                  />
                </div>
                <div className=" flex flex-col my-4 ">
                  <label htmlFor="">
                    メールアドレス <span className=" text-red-500"> *</span>
                  </label>
                  <input
                    type="email"
                    required={true}
                    name="entry.1045781291"
                    className=" border border-text h-8 rounded-sm focus:border-theme"
                  />
                </div>
                <div className=" flex flex-col my-4 ">
                  <label htmlFor="">
                    件名<span className=" text-red-500"> *</span>
                  </label>

                  <input
                    type="text"
                    required={true}
                    name="entry.1065046570"
                    className=" border border-text h-8 rounded-sm focus:border-theme"
                  />
                </div>
                <div className=" flex flex-col my-4 ">
                  <label htmlFor="">
                    内容 <span className=" text-red-500"> *</span>
                  </label>
                  <textarea
                    required={true}
                    name="entry.1166974658"
                    id=""
                    cols={30}
                    rows={8}
                    className=" border border-text rounded-sm focus:border-theme "
                  ></textarea>
                </div>
                <div className=" flex justify-center">
                  <input
                    type="checkbox"
                    name="entry.17237134"
                    value="送信確認メールを受け取る"
                    className=" w-5 mx-1"
                  />
                  <label className=" mx-1"> 送信確認メールを受け取る</label>
                </div>
                <div className=" w-full flex justify-center my-6 ">
                  <button
                    type="submit"
                    className=" w-full h-[42px] border border-text rounded-sm hover:bg-theme_light hover:border-theme transform duration-[.3s]"
                  >
                    送信
                  </button>
                </div>
              </FadeInContainer>
            </form>
          ) : (
            <p>送信しました。</p>
          )}

          <div className=" mx-4 2xl:mx-16 my-2">
            <FadeInContainer>
              <section className=" mb-4">
                <p className=" mb-4">
                  <b>|</b> ご気軽にお問い合わせください。
                </p>
                <p>お問い合わせはフォームまたは下記メールからお願いいたします。</p>
                <p className=" my-0.5 flex items-center">
                  <span className=" mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                      fill="#252528"
                    >
                      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                    </svg>
                  </span>
                  makimura3329@gmail.com
                </p>
              </section>
              <section className="my-8">
                <p className=" mb-4">
                  <b>|</b> フィードバックアンケートにご協力お願いいたします。
                </p>
                <p className="my-0.5">ポートフォリオサイトの改善のためのアンケートを実施しております。</p>
                <p>ご協力いただけましたら以下のリンクよりご回答ください。</p>

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdgbKP0hTGEENYvCKtSw2HLQd8kHBvSOnhztcgdp546ky5WEQ/viewform?usp=sf_link"
                  className=" w-fit text-[#0066c0] flex items-center my-0.5 "
                >
                  <span className=" underline">フィードバックアンケート</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                      fill="#0066c0"
                    >
                      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v80h-80v-80H200v560h560v-80h80v80q0 33-23.5 56.5T760-120H200Zm480-160-56-56 103-104H360v-80h367L624-624l56-56 200 200-200 200Z" />
                    </svg>
                  </span>
                </a>
              </section>
            </FadeInContainer>
          </div>
        </div>

        <div className=" h-[10vh]"></div>
      </div>
    </>
  );
};

export default Contact;
