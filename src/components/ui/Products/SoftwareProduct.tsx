import React from "react";
import Image from "next/image";
import { productsInfo, productNames } from "@/info";

const SoftwareProducts = ({ productName }: { productName: productNames }) => {
  return (
    <div className="h-[100vh] flex items-center">
      <div className=" w-[40%] aspect-[4/3] bg-white shadow-xl shadow-neutral-300 rounded-sm border border-neutral-50 border-solid">
        <div className=" p-4 pb-12 w-full h-full ">
          <Image
            src={productsInfo[productName].image}
            alt=""
            width={0}
            height={0}
            layout="responsive"
            className=" object-cover w-full h-full border-[2px] border-theme_light "
          />
        </div>
        <p>{productsInfo[productName].title}</p>
      </div>
    </div>
  );
};

export default SoftwareProducts;
