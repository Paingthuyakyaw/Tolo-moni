import { chatSocket } from "@/store/server/chat";
import React, { useEffect, useRef, useState } from "react";

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
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [message]);

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

  return (
    <div className=" h-[85vh] overflow-y-scroll">
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
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default MessageData;
