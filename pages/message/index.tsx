"use client";
import { Input } from "@nextui-org/react";
import { IconPaperclip, IconSend2 } from "@tabler/icons-react";
import React from "react";

const Message = () => {
  return (
    <div className="  relative h-[94vh]">
      <div className="">Hello Paing</div>

      <div className=" absolute bottom-0 bg-white pb-[30px] pt-[15px] w-full">
        <div className=" mt-4 items-center px-5 gap-3 flex ">
          <IconPaperclip />
          <Input />
          <IconSend2 />
        </div>
      </div>
    </div>
  );
};

export default Message;
