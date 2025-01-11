"use client";
import { Input } from "@nextui-org/react";
import { IconPaperclip, IconSend2 } from "@tabler/icons-react";
import React from "react";
import MessageData from "./components/message-data";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import UseLocalStorage from "@/hook/use-storage";
import { chatSocket } from "@/store/server/chat";
// import { useSearchParams } from "next/navigation";

const formschema = z.object({
  message: z.string().min(1, { message: "Message required" }),
});

const Message = () => {
  const { nameOfCookie: senderId } = UseLocalStorage("userId");

  const { register, handleSubmit, reset } = useForm<z.infer<typeof formschema>>(
    {
      resolver: zodResolver(formschema),
      defaultValues: {
        message: "",
      },
    }
  );

  const searchParam = useSearchParams();

  const receptionId = searchParam?.get("userId");
  const conversationId = searchParam?.get("convId");

  return (
    <div className="  relative">
      <div className="">
        <MessageData
          senderId={Number(senderId)}
          conversationId={Number(conversationId)}
        />
      </div>

      <div className="  bottom-0 bg-white pb-[30px] pt-[15px] w-full">
        <div className=" mt-4 items-center px-5 gap-3 flex ">
          <IconPaperclip />
          <form
            onSubmit={handleSubmit((value) => {
              chatSocket.emit("sendMessage", {
                message: value.message,
                conversationId: Number(conversationId),
                receptionId: Number(receptionId),
                senderId: Number(senderId),
              });

              reset();
            })}
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
