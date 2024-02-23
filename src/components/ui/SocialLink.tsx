import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialLink = ({
  social,
  enabled,
}: {
  social: { url: string; imagePath: string };
  enabled?: boolean;
}) => {
  return (
    <div>
      <Link href={social.url} className={enabled ? "" : "pointer-events-none"}>
        <Image src={social.imagePath} alt={social.url} width={32} height={32} className=" w-8 2xl:w-10" />
      </Link>
    </div>
  );
};

export default SocialLink;
