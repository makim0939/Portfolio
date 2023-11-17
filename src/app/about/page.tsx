"use client";
import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import React, { useContext } from "react";
import { GridAppContext } from "../GridProvider";
import useGrid from "../hooks/useGrid";

const About = () => {
  const gridApp = useContext(GridAppContext);
  useGrid({ gridApp, page: 2 });
  return (
    <>
      <Header page={2} />
      <ProfileCard page={2} />
    </>
  );
};

export default About;
