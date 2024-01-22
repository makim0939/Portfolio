import Image from "next/image";
import React from "react";

const SkillsIcon = ({ src }: { src: string }) => {
  return (
    //   <Image src={src} alt="" width={64} height={64} />
    <div style={{ width: 64, height: 64, backgroundColor: "#aaa" }}></div>
  );
};

export default SkillsIcon;
