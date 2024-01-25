import React from "react";
import Image from "next/image";

const ApplicationProducts = () => {
  return (
    <div className=" w-[40%] aspect-[4/3] bg-white shadow-xl shadow-neutral-300 rounded-sm border border-neutral-50 border-solid">
      <div className=" p-4 pb-12 w-full h-full">
        <img
          src="/assets/products/portfolio.png"
          alt=""
          className=" object-contain w-full h-full border-[2px] border-theme_light"
        />
      </div>
    </div>
  );
};

export default ApplicationProducts;
