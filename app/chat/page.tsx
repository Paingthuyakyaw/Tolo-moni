import Message from "@/pages/message";
import React, { Suspense } from "react";

const Page = () => {
  return (
    <Suspense>
      <Message />
    </Suspense>
  );
};

export default Page;
