import React, { useEffect, useState } from "react";
import { MotionProps, TargetAndTransition, Transition, motion } from "framer-motion";
import { useAtom } from "jotai";
import { prevPageAtom } from "@/atoms";
import Image from "next/image";
import { profileCardInfo } from "@/info";
import SocialLink from "./SocialLink";

const EASE = [0.22, 1, 0.36, 1];
const ProfileCard = ({ page, isMobile }: { page: 1 | 2 | 3; isMobile: boolean }) => {
  const [prevPage] = useAtom(prevPageAtom);
  const [screenWidth, setScreenWidth] = useState(0);
  const animationProps: {
    initial: TargetAndTransition;
    animate: TargetAndTransition;
    transition: Transition;
  } = {
    initial: {},
    animate: {},
    transition: {},
  };
  animationProps.transition = { duration: 0.5, ease: EASE };

  if (!prevPage) {
    animationProps.initial.opacity = 0;
    animationProps.animate.opacity = 1;
  }
  if (page === 1) {
    if (!prevPage) {
      animationProps.initial.y = 160;
      animationProps.animate.y = 0;
    } else if (prevPage === page) {
      animationProps.initial.opacity = 0;
      animationProps.animate.opacity = 1;
    } else if (prevPage > page) {
      animationProps.initial.x = "-25vw";
      animationProps.animate.x = 0;
    }
  } else if ((!prevPage && page === 2) || (prevPage === 2 && page === 2)) {
    animationProps.initial.x = 0;
    animationProps.animate.x = "-25vw";
  } else if ((!prevPage && page === 3) || (prevPage === 3 && page === 3)) {
    animationProps.initial.opacity = 0;
    animationProps.animate.opacity = 0;
  } else if (page < prevPage && page === 2) {
    animationProps.initial = {
      x: "-50vw",
      opacity: 0,
    };
    animationProps.animate = {
      x: "-25vw",
      opacity: 1,
    };
  } else if (page < prevPage) {
    animationProps.initial.x = "-25vw";
    animationProps.animate.x = 0;
  } else if (page > prevPage && page === 2) {
    animationProps.initial.x = 0;
    animationProps.animate.x = "-25vw";
  } else if (page > prevPage && page === 3) {
    animationProps.initial = {
      x: "-25vw",
      opacity: 1,
    };
    animationProps.animate = {
      x: "-50vw",
      opacity: 0,
    };
    animationProps.transition.duration = 0.3;
  }

  if (isMobile) {
    animationProps.initial = prevPage === 0 ? { opacity: 0, x: 0, y: 64 } : { opacity: 1, x: 0, y: 0 };
    animationProps.animate = { opacity: 1, x: 0, y: 0 };
  }

  return (
    <motion.div
      className={
        " w-full flex p-[6%] bg-white shadow-lg shadow-neutral-200 border border-neutral-50 border-solid "
      }
      {...(animationProps as MotionProps)}
    >
      <div className="w-2/5 pr-[5%] pt-[5%] ">
        <img src="/assets/profile.jpg" />
      </div>
      <div className="w-3/5 flex flex-col">
        <div className=" h-1/3">
          <h1 className=" text-3xl 2xl:text-4xl font-extralight text-center border-b-2 border-theme">
            {profileCardInfo.name}
          </h1>
          {!isMobile && <p className="text-center">{profileCardInfo.email}</p>}
        </div>
        <div className=" h-1/3">
          <p className="">{profileCardInfo.comment}</p>
        </div>
        <div className=" h-1/3 flex [&>*]:ml-2 items-end justify-end">
          <SocialLink social={profileCardInfo.socials.ArtStation} enabled={page === 3 ? false : true} />
          <SocialLink social={profileCardInfo.socials.GitHub} enabled={page === 3 ? false : true} />
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
