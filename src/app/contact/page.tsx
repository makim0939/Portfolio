"use client";
import React, { useContext } from "react";
import useGrid from "../hooks/useGrid";
import { GridAppContext } from "../GridProvider";
import Header from "@/components/Header";

const Contact = () => {
  const gridApp = useContext(GridAppContext);
  useGrid({ gridApp, page: 3 });
  return (
    <>
      <Header page={3} />
    </>
  );
};

export default Contact;
