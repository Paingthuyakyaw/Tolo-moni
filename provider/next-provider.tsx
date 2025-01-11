"use client";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const NextProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>{children}</NextUIProvider>
    </QueryClientProvider>
  );
};

export default NextProvider;
