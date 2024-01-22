import React, { useEffect, useState } from "react";
import { MotionProps, TargetAndTransition, Transition, motion } from "framer-motion";
import { useAtom } from "jotai";
import { prevPageAtom } from "@/atoms";
import Image from "next/image";
import { profileCardInfo } from "@/info";

const EASE = [0.22, 1, 0.36, 1];
const ProfileCard = ({ page }: { page: 1 | 2 | 3 }) => {
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
  if (!prevPage && page === 1) {
    animationProps.initial.y = 160;
    animationProps.animate.y = 0;
  } else if (!prevPage && page === 2) {
    animationProps.initial.x = 0;
    animationProps.animate.x = "-25vw";
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

  return (
    <motion.div
      className=" w-full h-full flex p-[6%] bg-white shadow-lg shadow-neutral-200 border-neutral-50 border-[1px] border-solid "
      {...(animationProps as MotionProps)}
    >
      <div className="w-2/5 pr-[5%] pt-[5%] ">
        <Image src="/assets/profile.jpg" width={200} height={200} alt="profile image" />
      </div>
      <div className="w-3/5 ">
        <h1 className=" text-2xl xl:text-3xl font-extralight text-center border-b-2 border-theme">
          {profileCardInfo.name}
        </h1>
        <p className="text-center">{profileCardInfo.email}</p>
        <div className="h-full p-2">
          <p className="h-2/3">{profileCardInfo.comment}</p>
          <div className="flex justify-end">
            <div className="h-1/3">links</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
