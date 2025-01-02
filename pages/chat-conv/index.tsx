/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { setConvId } from "@/store/client/conversation.slice";
import { ConversationProps } from "@/store/server/conversation/typed";
import { RootState } from "@/store/store";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import io from "socket.io-client";
const chatSocket = io("http://localhost:3001");

const ChatConv = () => {
  const userId = localStorage?.getItem("userId");
  const [conv, setConvs] = useState<ConversationProps[]>([]);
  const router = useRouter();
  const param = useParams();
  const cov = useSelector((state: RootState) => state.con);
  const dispatch = useDispatch();

  console.log(cov);

  useEffect(() => {
    chatSocket.emit("getUserConversations", Number(userId));

    chatSocket.on("userConversations", (data) => {
      setConvs(data);
      // dispatch(setConv(data));
    });

    return () => {
      chatSocket.off("userConversations");
    };
  }, [chatSocket]);

  const boy = "https://ui.shadcn.com/avatars/02.png";
  const girl = "https://ui.shadcn.com/avatars/03.png";

  return (
    <div className="">
      {conv.map((item) => (
        <div
          onClick={() => {
            router.push(`/chat/${item.id}`);
            dispatch(setConvId(item.id.toString()));
          }}
          key={item.id}
        >
          <div
            className={`flex items-center py-3 gap-2 ${
              param?.id?.toString() === item.id.toString()
                ? " bg-zinc-50"
                : "bg-white"
            }  transition-all duration-100 border-b px-5`}
          >
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
