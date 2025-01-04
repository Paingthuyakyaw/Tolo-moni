import { chatSocket } from "@/store/server/chat";
import React, { useEffect, useState } from "react";

export interface messageProps {
  id: number;
  message: string;
  senderId: number;
  receptionId: number;
  conversationId: number;
  createdAt: string;
  updatedAt: string;
}

const MessageData = ({
  conversationId,
  senderId,
}: {
  conversationId: number;
  senderId: number;
}) => {
  const [message, setMessage] = useState<messageProps[]>([]);

  useEffect(() => {
    chatSocket.emit("getMessagesInConversation", conversationId);
    chatSocket.on("messageRecieved", (newMessage) => {
      setMessage((prevMessages) => {
        const isDuplicate = prevMessages.some(
          (message) => message.id === newMessage.id
        );
        if (!isDuplicate) {
          return [...prevMessages, newMessage];
        }
        return prevMessages;
      });
    });

    chatSocket.on("conversationMessages", (data) => setMessage(data));

    return () => {
      chatSocket.off("conversationMessages", (data) => setMessage(data));
    };
  }, [conversationId]);

  console.log(message);

  return (
    <div>
      <div className=" pt-5 px-10  w-full">
        {message.map((mes) => (
          <div
            className={`${
              senderId === Number(mes.senderId) ? "text-right " : "text-left"
            } mb-6`}
            key={mes.id}
          >
            <span
              className={`${
                senderId === Number(mes.senderId)
                  ? " text-white  p-3 rounded-xl bg-chatPrimary "
                  : " bg-white p-3 rounded-xl text-left"
              }`}
            >
              {" "}
              {mes.message}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageData;
