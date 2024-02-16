import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialLink = ({ social }: { social: { url: string; imagePath: string } }) => {
  return (
    <div>
      <Link href={social.url}>
        <Image src={social.imagePath} alt={social.url} width={32} height={32} />
      </Link>
    </div>
  );
};

export default SocialLink;
