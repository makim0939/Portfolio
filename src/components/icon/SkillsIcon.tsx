import Image from "next/image";
import React from "react";

const SkillsIcon = ({ src }: { src: string }) => {
  return (
    <div className="">
      <Image src={src} alt="" width={64} height={64} className=" rounded-lg shadow-lg shadow-neutral-200" />
    </div>
  );
};

export default SkillsIcon;
