"use client";
import NavBarLayout from "@/components/nav-bar";
import { store } from "@/store/store";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { Provider } from "react-redux";

const NextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <NavBarLayout />
      <Provider store={store}>{children}</Provider>
    </NextUIProvider>
  );
};

export default NextProvider;
