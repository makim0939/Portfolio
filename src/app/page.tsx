"use client";

import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import { useAtom } from "jotai";
import { useContext } from "react";
import { GridAppContext } from "./GridProvider";
import useGrid from "./hooks/useGrid";

export default function Home() {
  const gridApp = useContext(GridAppContext);
  useGrid({ gridApp, page: 1 });
  return (
    <>
      <Header page={1} />
      <ProfileCard page={1} />
      <div style={{ height: 8000 }}></div>
    </>
  );
}
