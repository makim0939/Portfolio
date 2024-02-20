"use client";
import React, { ReactHTMLElement, use, useEffect, useRef, useState } from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import Link from "next/link";
import { headerModeAtom, headerUnderLineAtom, prevPageAtom } from "../atoms";
import { useAtom } from "jotai";
export const EASE = [0.22, 1, 0.36, 1];

const Header = ({ page }: { page: 1 | 2 | 3 }) => {
  const [prevPage, setPrevPage] = useAtom(prevPageAtom);
  const [headerMode] = useAtom(headerModeAtom);
  const [prevHeaderMode, setPrevHeaderMode] = useState("default");

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
  const underlineRef = useRef<HTMLDivElement>(null);
  const prevUnderlineRef = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    if (page === prevPage && headerMode === prevHeaderMode) return;
    setPrevHeaderMode(headerMode);
    return () => {
      if (!window.location.pathname) setPrevPage(0);
      else if (window.location.pathname === "/") setPrevPage(1);
      else if (window.location.pathname === "/about") setPrevPage(2);
      else if (window.location.pathname === "/contact") setPrevPage(3);
    };
  }, [setPrevPage, page, prevPage, headerMode, prevHeaderMode]);

  console.log(page, prevPage);
  console.log(underlineRef, prevUnderlineRef);
  return (
    <nav className={headerMode === "small" ? "fixed w-fit right-0 z-10" : "fixed w-full z-10"}>
      <motion.ul
        ref={ulRef}
        layoutId={prevPage ? undefined : "header"}
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
            <Link href={"/"}>Home</Link>
          </motion.h3>
          {page === 1 && <div ref={underlineRef} className="w-full"></div>}
          {prevPage === 1 && <div ref={prevUnderlineRef}></div>}
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
            <Link href={"/about"}> About</Link>
          </motion.h3>
          {page === 2 && <div ref={underlineRef} className="w-full"></div>}
          {prevPage === 2 && <div ref={prevUnderlineRef}></div>}
        </li>
        <li className="w-24 md:w-32 xl:w-40">
          <div className=" relative top-0">
            <motion.h3
              {...headerAnimation}
              transition={{
                delay: 0.2,
                duration: 0.5,
                ease: EASE,
              }}
              className="w-full text-center"
            >
              <Link href={"/contact"}>Contact </Link>
            </motion.h3>
          </div>
          {page === 3 && <div ref={underlineRef} className="w-full"></div>}
          {prevPage === 3 && <div ref={prevUnderlineRef}></div>}
        </li>
      </motion.ul>
      {page === prevPage && (
        <motion.div
          className=" w-[192px] h-[0.12rem] bg-theme"
          layoutId="underline"
          style={{ width: underlineRef.current?.getBoundingClientRect().width }}
          initial={{
            x: prevUnderlineRef.current ? prevUnderlineRef.current.getBoundingClientRect().x! : 0,
          }}
          animate={{
            x:
              headerMode === "small"
                ? underlineRef.current?.getBoundingClientRect().x! -
                  ulRef.current?.getBoundingClientRect().x!
                : underlineRef.current?.getBoundingClientRect().x,
          }}
          transition={{ duration: 0.2, ease: EASE }}
        ></motion.div>
      )}
    </nav>
  );
};

export default Header;
