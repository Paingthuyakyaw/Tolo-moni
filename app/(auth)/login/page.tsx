import Login from "@/pages/auth/login";
import { Suspense } from "react";

const page = () => {
  return (
    <div className=" container max-w-full flex items-center justify-center h-[90vh] top-0 ">
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    </div>
  );
};

export default page;
