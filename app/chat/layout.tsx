import NavBarLayout from "@/components/nav-bar";
import ChatConv from "@/pages/chat-conv";
import React, { ReactNode } from "react";

const ChatLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavBarLayout />
      <div className=" grid grid-cols-12  ">
        <div className=" bg-gray-50 h-[94vh] col-span-3">
          <ChatConv />
        </div>
        <div className=" col-span-9">{children}</div>
      </div>
    </>
  );
};

export default ChatLayout;
