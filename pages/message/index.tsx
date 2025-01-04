"use client";
import { Input } from "@nextui-org/react";
import { IconPaperclip, IconSend2 } from "@tabler/icons-react";
import React from "react";
import MessageData from "./components/message-data";
import io from "socket.io-client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useSearchParams } from "next/navigation";

const chatSocket = io("http://localhost:3001");

const formschema = z.object({
  message: z.string().min(1, { message: "Message required" }),
});

const Message = () => {
  const { register, handleSubmit } = useForm<z.infer<typeof formschema>>({
    resolver: zodResolver(formschema),
    defaultValues: {
      message: "",
    },
  });

  // const searchParam = useSearchParams();

  // const receptionId = searchParam?.get("userId");
  // const conversationId = searchParam?.get("convId");

  return (
    <div className="  relative h-[94vh]">
      <div className="">
        <MessageData />
      </div>

      <div className=" absolute bottom-0 bg-white pb-[30px] pt-[15px] w-full">
        <div className=" mt-4 items-center px-5 gap-3 flex ">
          <IconPaperclip />
          <form
            onSubmit={handleSubmit((value) =>
              chatSocket.emit("sendMessage", {
                message: value.message,
              })
            )}
            className=" w-full"
          >
            <Input {...register("message")} />
          </form>
          <IconSend2 />
        </div>
      </div>
    </div>
  );
};

export default Message;
