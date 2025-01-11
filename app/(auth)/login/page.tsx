"use client";
// import Login from "@/pages/auth/login";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const LoginComponent = dynamic(() => import("@/pages/auth/login"), {
  ssr: false,
});

const page = () => {
  return (
    <div className=" container max-w-full flex items-center justify-center h-[90vh] top-0 ">
      <Suspense fallback={<div>Loading...</div>}>
        <LoginComponent />
      </Suspense>
    </div>
  );
};

export default page;
