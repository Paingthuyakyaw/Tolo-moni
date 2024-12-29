"use client";
import { ConversationProps } from "@/store/server/conversation/typed";
import Image from "next/image";
import { useEffect, useState } from "react";
import io from "socket.io-client";
const chatSocket = io("http://localhost:3001");

const ChatConv = () => {
  const userId = localStorage?.getItem("userId");
  const [conv, setConv] = useState<ConversationProps[]>([]);

  useEffect(() => {
    chatSocket.emit("getUserConversations", Number(userId));

    chatSocket.on("userConversations", (data) => setConv(data));

    return () => {
      chatSocket.off("userConversations");
    };
  }, [chatSocket]);

  const boy = "https://ui.shadcn.com/avatars/02.png";
  const girl = "https://ui.shadcn.com/avatars/03.png";

  return (
    <div className=" space-y-3">
      {conv.map((item) => (
        <div className=" mx-8" key={item.id}>
          <div className=" flex items-center py-3s gap-2 rounded-xl py-2 bg-yellow-400 px-5">
            <Image
              src={item.participants[0].user.gender === "male" ? boy : girl}
              alt="Image"
              width={300}
              height={300}
              className=" w-[50px] h-[50px] rounded-full "
            />
            <h5>{item.participants[0].user.username}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatConv;
