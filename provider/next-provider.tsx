"use client";
import NavBarLayout from "@/components/nav-bar";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";

const NextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <NavBarLayout />
      {children}
    </NextUIProvider>
  );
};

export default NextProvider;
