"use client";
import NavBarLayout from "@/components/nav-bar";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const NextProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <NavBarLayout />
        {children}
      </QueryClientProvider>
    </NextUIProvider>
  );
};

export default NextProvider;
