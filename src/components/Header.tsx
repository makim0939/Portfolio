"use client";
import React, { ReactHTMLElement, use, useEffect, useRef, useState } from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import Link from "next/link";
import { headerModeAtom, headerUnderLineAtom, prevPageAtom } from "../atoms";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
export const EASE = [0.22, 1, 0.36, 1];

const Header = ({ page }: { page: 1 | 2 | 3 }) => {
  const [prevPage, setPrevPage] = useAtom(prevPageAtom);
  const [headerMode] = useAtom(headerModeAtom);
  const [prevHeaderMode, setPrevHeaderMode] = useState("default");
  const router = useRouter();

  let headerAnimation;
  if (!!prevPage)
    headerAnimation = {
      initial: { opacity: 1, y: 0 },
      animate: { opacity: 1, y: 0 },
    };
  else {
    headerAnimation = {
      initial: { opacity: 0, y: 100 },
      animate: { opacity: 1, y: 0 },
    };
  }
  useEffect(() => {
    if (headerMode === prevHeaderMode) return;
    setPrevHeaderMode(headerMode);
  }, [headerMode, prevHeaderMode]);

  const linkClick = (clicked: "" | "about" | "contact") => {
    setPrevPage(page);
    router.push(`/${clicked}`);
  };

  return (
    <nav className={headerMode === "small" ? "fixed w-fit right-0 z-10" : "fixed top-0 w-full z-10"}>
      <motion.ul
        className={
          headerMode === "small"
            ? "pt-3 text-2xl  md:text-3xl 2xl:text-4xl font-extralight flex justify-around z-10"
            : "pt-3 text-2xl  md:text-3xl 2xl:text-4xl font-extralight flex justify-around z-10"
        }
      >
        <li className="w-24 md:w-32 xl:w-40">
          <motion.h3
            {...headerAnimation}
            transition={{ duration: 0.5, ease: EASE }}
            className="w-full text-center"
          >
            <Link
              href={"/"}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault;
                linkClick("");
              }}
            >
              Home
            </Link>
          </motion.h3>
          {page === 1 && (
            <motion.div
              layoutId="underline"
              transition={{ duration: 0.2, ease: EASE }}
              className=" w-full h-[0.12rem] bg-theme"
              style={{ originY: "0px" }}
            ></motion.div>
          )}
        </li>
        <li className="w-24 md:w-32 xl:w-40">
          <motion.h3
            {...headerAnimation}
            transition={{
              delay: 0.1,
              duration: 0.5,
              ease: EASE,
            }}
            className="w-full text-center"
          >
            <Link
              href={"/about"}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault;
                linkClick("about");
              }}
            >
              About
            </Link>
            {page === 2 && (
              <motion.div
                layoutId="underline"
                transition={{ duration: 0.2, ease: EASE }}
                className=" w-full h-[0.12rem] bg-theme"
                style={{ originY: "0px" }}
              ></motion.div>
            )}
          </motion.h3>
        </li>
        <li className="w-24 md:w-32 xl:w-40">
          <motion.h3
            {...headerAnimation}
            transition={{
              delay: 0.2,
              duration: 0.5,
              ease: EASE,
            }}
            className="w-full text-center"
          >
            <Link
              href={"/contact"}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault;
                linkClick("");
              }}
            >
              Contact
            </Link>
            {page === 3 && (
              <motion.div
                layoutId="underline"
                transition={{ duration: 0.2, ease: EASE }}
                className=" w-full h-[0.12rem] bg-theme"
                style={{ originY: "0px" }}
              ></motion.div>
            )}
          </motion.h3>
        </li>
      </motion.ul>
    </nav>
  );
};

export default Header;
