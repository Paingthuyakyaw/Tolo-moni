"use client";
import { getQueryClient } from "@/util/queryclient";
import { HydrationBoundary, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={undefined}>{children}</HydrationBoundary>
    </QueryClientProvider>
  );
};

export default Provider;
