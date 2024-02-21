import Image from "next/image";
import React from "react";

const SkillsIcon = ({ src }: { src: string }) => {
  return (
    <Image
      src={src}
      alt=""
      width={64}
      height={64}
      className=" bg-white rounded-lg shadow-lg shadow-neutral-200"
    />
  );
};

export default SkillsIcon;
