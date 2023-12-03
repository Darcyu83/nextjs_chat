"use client";
import React, { useEffect, useRef, useState } from "react";
import { Socket, io } from "socket.io-client";
import styles from "./ChatRoom.module.scss";
import { useSocketContext } from "../../../context/SocketProvider";
import { SocketCustomEvent } from "../type";
import { useParams } from "next/navigation";

interface IProps {}

interface ChatMsg {
  chat: string;
  createdAt: string;
  room: string;
  user: string;
  __v: number;
  _id: string;
}

interface ChatRoomInfo {
  createdAt: string;
  max: number;
  owner: string;
  password: string;
  title: string;
  __v: number;
  _id: string;
}

interface ResChatInfoAll {
  chats: ChatMsg[];
  room: ChatRoomInfo;
  title: string;
  user: string;
}

function ChatRoom(props: IProps) {
  const { chatSocket } = useSocketContext();

  const params = useParams();

  const [chatMsg, setChatMsg] = useState("");
  const [chatInfoAll, setChatInfoAll] = useState<ResChatInfoAll | null>(null);

  const createChatPrams = (chatInfoAll: ResChatInfoAll, message = "") => ({
    message,
    sender: chatInfoAll.user,
    sendee: chatInfoAll.room.owner,
    roomId: params.roomId,
  });

  const onSendMsg = () => {
    // chatSocket.emit(SocketCustomEvent.CHAT, chatMsg);
    // 디비에 채팅 메시지 저장후 메시지 전달

    const bodyData = { chat: chatMsg };

    if (!chatInfoAll) return;
    const chatParams = createChatPrams(chatInfoAll, chatMsg);
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/chat/room/${params.roomId}/chat`;
    console.log("yuds onSendMsg ==== ", chatSocket, url);

    chatSocket.emit("chat", chatParams);

    // fetch(url, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(bodyData),
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log("성공 ", url, data);
    //     setChatMsg("");
    //   });
  };

  useEffect(() => {
    // const socket = io("http://localhost:4013/chat", {
    //   path: "/yuds.socket.io",
    // });

    if (chatSocket.connected) return;

    chatSocket.connect();

    // socket default event
    chatSocket.on("connect", () => {
      console.log(
        " %c connect socket default event params.roomId",
        "color: red",
        params.roomId
      );

      chatSocket.emit(SocketCustomEvent.JOIN, params.roomId);

      chatSocket.on("entered", (msg) => {
        console.log(" %c entered ===== 0", "color: perple", msg);

        // chatSocket. emit(SocketCustomEvent.NEW_ROOM, "방만들기 요청 from client");
      });

      chatSocket.on(SocketCustomEvent.CONNECTION, () => {
        console.log(
          "%cSocketCustomEvent.CONNECTION ==== ",
          "color: red",
          SocketCustomEvent.CONNECTION,
          chatSocket.connected
        );
      });

      // socket default event
      chatSocket.on("disconnect", () => {
        console.log(" %c disconnect ===== 1", "color: red");
      });

      chatSocket.on("chat", (data) => {
        console.log(" %c chat ===== arrived", "color: teal", data);

        // setChatInfoAll((curr) =>
        //   curr ? { ...curr, chats: [...curr.chats, data] } : curr
        // );
      });

      // const engine = chatSocket. io.engine;
      // console.log(engine.transport.name); // in most cases, prints "polling"

      // engine.once("upgrade", () => {
      //   // called when the transport is upgraded (i.e. from HTTP long-polling to WebSocket)
      //   console.log("engine", engine.transport.name); // in most cases, prints "websocket"
      // });

      // engine.on("packet", ({ type, data }) => {
      //   // called for each packet received
      // });

      // engine.on("packetCreate", () => {
      //   // called for each packet sent
      // });

      // engine.on("drain", () => {
      //   // called when the write buffer is drained
      // });

      // engine.on("close", (reason) => {
      //   // called when the underlying connection is closed
      // });
    });

    return () => {
      chatSocket.disconnect();
    };
  }, [chatSocket, params.roomId]);

  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/chat/room/${params.roomId}`;

    fetch(url, {})
      .then((res) => res.json())
      .then((data) => {
        console.log(url, data);

        setChatInfoAll(data);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles["page-title"]}>노드 채팅방</h1>

      <div className={styles.content}>
        <div className={styles["content-left"]}>
          {chatInfoAll?.chats?.map((chat, idx) => {
            return (
              <p key={chat._id}>
                {chat.user} :: {chat.chat}
              </p>
            );
          })}
        </div>
        <div className={styles["content-right"]}>하이</div>
      </div>

      <input
        name="chatMsg"
        value={chatMsg}
        onChange={(e) => setChatMsg(e.currentTarget.value)}
        placeholder="채팅 메시지를 입력하세요."
      />
      <button
        onClick={() => {
          onSendMsg();
        }}
      >
        보내기
      </button>
    </div>
  );
}

export default ChatRoom;
