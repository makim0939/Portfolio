"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { prevPageAtom } from "../atoms";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
const EASE = [0.22, 1, 0.36, 1];

const Header = ({ page }: { page: 1 | 2 | 3 }) => {
  const [prevPage, setPrevPage] = useAtom(prevPageAtom);
  let headerAnimation;
  if (!!prevPage) headerAnimation = {};
  else
    headerAnimation = {
      initial: { opacity: 0, y: 100 },
      animate: { opacity: 1, y: 0 },
    };

  useEffect(() => {
    return () => {
      if (!window.location.pathname) setPrevPage(0);
      else if (window.location.pathname === "/") setPrevPage(1);
      else if (window.location.pathname === "/about") setPrevPage(2);
      else if (window.location.pathname === "/contact") setPrevPage(3);
    };
  }, [setPrevPage]);

  return (
    <nav className="fixed w-full">
      <ul className="p-3 text-2xl  md:text-3xl 2xl:text-4xl   font-extralight flex justify-around z-10">
        <li className="w-24 md:w-32 xl:w-40">
          <motion.h3 {...headerAnimation} transition={{ duration: 0.5, ease: EASE }} className="w-full text-center">
            <Link href={"/"}>Home</Link>
          </motion.h3>
          {page === 1 && (
            <motion.div
              layoutId="underline"
              className="h-[0.12rem] bg-theme"
              transition={{ duration: 0.2, ease: EASE }}
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
            <Link href={"/about"}> About</Link>
          </motion.h3>
          {page === 2 && (
            <motion.div
              layoutId="underline"
              className="h-[0.12rem] bg-theme"
              transition={{ duration: 0.2, ease: EASE }}
            ></motion.div>
          )}
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
            <Link href={"/contact"}>Contact </Link>
          </motion.h3>

          {page === 3 && (
            <motion.div
              layoutId="underline"
              className="h-[0.12rem] bg-theme"
              transition={{ duration: 0.2, ease: EASE }}
            ></motion.div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
