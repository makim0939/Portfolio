import React from "react";
import { MotionProps, TargetAndTransition, Transition, motion } from "framer-motion";
import { useAtom } from "jotai";
import { prevPageAtom } from "@/atoms";
import Image from "next/image";
const THEMA = "#0008ff";
const EASE = [0.22, 1, 0.36, 1];
const ProfileCard = ({ page }: { page: 1 | 2 | 3 }) => {
  const [prevPage] = useAtom(prevPageAtom);
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
  } else if (page < prevPage) {
    animationProps.initial.x = "-45vh";
    animationProps.animate.x = 0;
  } else if (page > prevPage && page === 2) {
    animationProps.initial.x = 0;
    animationProps.animate.x = "-45vh";
  }
  return (
    <div className="w-full h-screen">
      <div className="absolute top-1/3 left-1/2 w-[36.4vw] h-[22vw] min-w-[331.6px] min-h-[198px] transform -translate-x-1/2 -translate-y-1/3">
        <motion.div
          className=" w-full h-full  flex  p-[6%] bg-white shadow-lg shadow-neutral-200 border-neutral-50 border-[1px] border-solid "
          {...(animationProps as MotionProps)}
        >
          <div className="w-2/5 pr-[5%] pt-[5%] ">
            <Image src="/assets/profile.jpg" width={200} height={200} alt="profile image" />
          </div>
          <div className="w-3/5 ">
            <h3 className="text-xl text-center border-b-2 border-theme">NAME</h3>
            <div className="h-full">
              <p className="text-center">e-mail@mail.com</p>
              <p className="h-3/5">自己紹介コメントを書くところ</p>
              <div className="flex justify-end">
                <div>links</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileCard;
