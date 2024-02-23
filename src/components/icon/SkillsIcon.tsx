import Image from "next/image";
import React from "react";

const SkillsIcon = ({ src, size, className = "" }: { src: string; size: number; className?: string }) => {
  return (
    <Image
      src={src}
      alt=""
      width={size}
      height={size}
      className={" p-1 bg-white rounded-lg shadow-lg shadow-neutral-200" + className}
      style={{ width: size, height: size }}
    />
  );
};

export default SkillsIcon;
