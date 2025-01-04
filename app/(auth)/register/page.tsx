"use client";
import RegisterPage from "@/pages/auth/register";
import { Suspense } from "react";

const Register = () => {
  return (
    <div className=" flex items-center h-[90vh] justify-center">
      <Suspense fallback={<div>Loading...</div>}>
        <RegisterPage />
      </Suspense>
    </div>
  );
};

export default Register;
