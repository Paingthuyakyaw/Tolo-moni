import Message from "@/page/message";
import React, { Suspense } from "react";

const Page = () => {
  return (
    <Suspense>
      <Message />
    </Suspense>
  );
};

export default Page;
