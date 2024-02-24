"use client";
import React, { useContext, useEffect, useState } from "react";
import useGrid from "../hooks/useGrid";
import { GridAppContext } from "../../providers/GridAppProvider";
import { ScreenWidthContext } from "@/providers/ScreenWidthProvider";
import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import IndexText from "@/components/animation/IndexText";
import FadeInContainer from "@/components/animation/FadeInContainer";

const inputNames: { [key: string]: string } = {
  name: "entry.2005620554",
  email: "entry.1045781291",
  title: "entry.1065046570",
  content: "entry.1166974658",
  check: "entry.17237134",
};

const Contact = () => {
  const screenWidth = useContext(ScreenWidthContext);
  const gridApp = useContext(GridAppContext);
  useGrid({ gridApp, page: 3 });
  const [isSended, setIsSended] = useState(false);
  const [error, setError] = useState(false);
  const isMobile = screenWidth !== 0 && screenWidth < 768;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = document.getElementById("contactForm") as HTMLFormElement;
    const formData = new FormData(form);
    const action = form.getAttribute("action") as string;

    let body = "";
    for (let key in inputNames) {
      const data = formData.get(key);
      const stmt = formData.get(key) ? `${inputNames[key]}=${encodeURIComponent(data as string)}&` : "";
      body += stmt;
    }

    fetch(action, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    }).then((res) => {
      console.log(res);
      setIsSended(true);
    });
  };

  if (isMobile)
    return (
      <>
        <Header page={3} />
        <div className="aspect-[91/ 55] w-[364px] mx-auto mt-16 mb-4 aspect-[91/55] ">
          <ProfileCard page={3} isMobile={isMobile} />
        </div>
        <div className=" w-full p-4 ">
          <section>
            <IndexText className=" my-4">Contact</IndexText>
          </section>

          <FadeInContainer>
            <section className=" my-8 ">
              <p className=" mb-4">
                <b>|</b> ご気軽にお問い合わせください。
              </p>
              <p>お問い合わせはフォームまたは下記メールからお願いいたします。</p>
              <p className="  flex items-center">
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
          </FadeInContainer>
          <div className=" w-full flex flex-col ">
            {!isSended ? (
              <form
                id="contactForm"
                action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScqaVZRgwPEutExbcWLifZ4NbpL1b6Pnn0UEnbNv8yTRrBroQ/formResponse"
                onSubmit={onSubmit}
                className="w-full"
              >
                <FadeInContainer className=" flex flex-col justify-center">
                  <div className=" flex flex-col my-2 ">
                    <label htmlFor="">
                      お名前<span className=" text-red-500"> *</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required={true}
                      className=" border border-text h-8 rounded-sm focus:border-theme"
                    />
                  </div>
                  <div className=" flex flex-col my-4 ">
                    <label htmlFor="">
                      メールアドレス <span className=" text-red-500"> *</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required={true}
                      className=" border border-text h-8 rounded-sm focus:border-theme"
                    />
                  </div>
                  <div className=" flex flex-col my-4 ">
                    <label htmlFor="">
                      件名<span className=" text-red-500"> *</span>
                    </label>

                    <input
                      type="text"
                      name="title"
                      required={true}
                      className=" border border-text h-8 rounded-sm focus:border-theme"
                    />
                  </div>
                  <div className=" flex flex-col my-4 ">
                    <label htmlFor="">
                      内容 <span className=" text-red-500"> *</span>
                    </label>
                    <textarea
                      name="content"
                      required={true}
                      id=""
                      cols={30}
                      rows={8}
                      className=" border border-text rounded-sm focus:border-theme "
                    ></textarea>
                  </div>
                  <div className=" flex justify-center">
                    <input
                      type="checkbox"
                      name="check"
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
              <div className={isMobile ? "" : " w-1/2 mr-8 pb-8"}>
                <p className=" ">
                  お問い合わせありがとうございます ! <br />
                  返信まで今しばらくお待ちくださいませ。
                </p>
              </div>
            )}
            <div className=" border-[0.5px] border-text_light my-2 "></div>

            <FadeInContainer>
              <section className="my-8">
                <p className=" mb-4">
                  <b>|</b> フィードバックアンケートにご協力お願いいたします。
                </p>
                <p>ポートフォリオサイトの改善のためのアンケートを実施しております。</p>
                <p>ご協力いただけましたら以下のリンクよりご回答ください。</p>

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdgbKP0hTGEENYvCKtSw2HLQd8kHBvSOnhztcgdp546ky5WEQ/viewform?usp=sf_link"
                  className=" w-fit text-[#0066c0] flex items-center  "
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
      </>
    );

  return (
    <>
      <Header page={3} />
      <div className="aspect-[91/ 55] absolute top-[20vh] left-1/2 w-[36.4vw] max-w-[637px]  min-w-[400px] transform -translate-x-1/2 -z-10">
        <ProfileCard page={3} isMobile={isMobile} />
      </div>
      <div className=" w-full p-4 pt-16">
        <section>
          <IndexText className=" my-4">Contact</IndexText>
        </section>
        <div className=" w-full flex ">
          {!isSended ? (
            <form
              id="contactForm"
              action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScqaVZRgwPEutExbcWLifZ4NbpL1b6Pnn0UEnbNv8yTRrBroQ/formResponse"
              onSubmit={onSubmit}
              className={isMobile ? "w-full" : " w-1/2 mr-8 pb-8"}
            >
              <FadeInContainer className=" flex flex-col justify-center">
                <div className=" flex flex-col my-2 ">
                  <label htmlFor="">
                    お名前<span className=" text-red-500"> *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required={true}
                    className=" border border-text h-8 rounded-sm focus:border-theme"
                  />
                </div>
                <div className=" flex flex-col my-4 ">
                  <label htmlFor="">
                    メールアドレス <span className=" text-red-500"> *</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required={true}
                    className=" border border-text h-8 rounded-sm focus:border-theme"
                  />
                </div>
                <div className=" flex flex-col my-4 ">
                  <label htmlFor="">
                    件名<span className=" text-red-500"> *</span>
                  </label>

                  <input
                    type="text"
                    name="title"
                    required={true}
                    className=" border border-text h-8 rounded-sm focus:border-theme"
                  />
                </div>
                <div className=" flex flex-col my-4 ">
                  <label htmlFor="">
                    内容 <span className=" text-red-500"> *</span>
                  </label>
                  <textarea
                    name="content"
                    required={true}
                    id=""
                    cols={30}
                    rows={8}
                    className=" border border-text rounded-sm focus:border-theme "
                  ></textarea>
                </div>
                <div className=" flex justify-center">
                  <input
                    type="checkbox"
                    name="check"
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
            <div className=" w-1/2 mr-8 pb-8 ">
              <p className=" ">
                お問い合わせありがとうございます ! <br />
                返信まで今しばらくお待ちくださいませ。
              </p>
            </div>
          )}
          <div className=" mx-4 2xl:mx-16 my-2">
            <FadeInContainer>
              <section className=" mb-4">
                <p className=" mb-4">
                  <b>|</b> ご気軽にお問い合わせください。
                </p>
                <p>お問い合わせはフォームまたは下記メールからお願いいたします。</p>
                <p className="  flex items-center ">
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
                <p>ポートフォリオサイトの改善のためのアンケートを実施しております。</p>
                <p>ご協力いただけましたら以下のリンクよりご回答ください。</p>

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdgbKP0hTGEENYvCKtSw2HLQd8kHBvSOnhztcgdp546ky5WEQ/viewform?usp=sf_link"
                  className=" w-fit text-[#0066c0] flex items-center  "
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
