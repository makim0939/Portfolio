"use client";
import { gridAppAtom } from "@/atoms";
import Grid from "@/components/Grid";
import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import { useAtom } from "jotai";
import { useContext } from "react";
import { GridAppContext } from "./GridProvider";
import useGrid from "./hooks/useGrid";

export default function Home() {
  const gridApp = useContext(GridAppContext);
  useGrid({ grid: gridApp, page: 1 });
  return (
    <>
      <Header page={1} />
      <ProfileCard />
    </>
  );
}
