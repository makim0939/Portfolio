"use client";
import React, { useContext } from "react";
import useGrid from "../hooks/useGrid";
import { GridAppContext } from "../GridProvider";
import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import IndexText from "@/components/animation/IndexText";

const Contact = () => {
  const gridApp = useContext(GridAppContext);
  useGrid({ gridApp, page: 3 });
  return (
    <>
      <Header page={3} />
      <div className=" absolute top-[20vh] left-1/2 w-[36.4vw] max-w-[637px]  min-w-[364px] aspect-[91/ 55] transform -translate-x-1/2">
        <ProfileCard page={3} />
      </div>
      <div className=" absolute top-[64px] w-full p-4">
        <section>
          <IndexText>Contact</IndexText>
          <p>mail : makimura3329@gmail.com</p>
        </section>

        {/* <form action="">
          <div className="max-w-[720px]">
            <div className=" flex flex-col my-4 ">
              <label htmlFor="">お名前</label>
              <input type="text" className=" border border-text h-8 " />
            </div>
            <div className=" flex flex-col my-4 ">
              <label htmlFor="">メールアドレス</label>

              <input type="email" className=" border border-text h-8" />
            </div>
            <div className=" flex flex-col my-4 ">
              <label htmlFor="">件名</label>
              <input type="" className=" border border-text h-8" />
            </div>
            <div className=" flex flex-col my-4 ">
              <label htmlFor="">内容</label>
              <textarea name="" id="" cols={30} rows={8} className=" border border-text"></textarea>
            </div>
          </div>
        </form> */}
      </div>
    </>
  );
};

export default Contact;
