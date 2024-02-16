import React from "react";

const AdobeLogoSubstitute = ({ children }: { children: string }) => {
  const colora = "#FF0000";
  return (
    <p
      className={
        " w-[64px] aspect-square text-2xl border  border-text flex items-center justify-center rounded-lg shadow-lg shadow-neutral-200"
      }
    >
      <b>{children}</b>
    </p>
  );
};

export default AdobeLogoSubstitute;
