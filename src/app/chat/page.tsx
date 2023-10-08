"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import RoomsList from "@components/chat/rooms/list/RoomsList";
import RoomRegForm from "@components/chat/roomRegForm/RoomRegForm";
import { io } from "socket.io-client";
import { SocketCustomEvent } from "./type";
import { useSocketContext } from "../../context/SocketProvider";
interface IProps {}

function ChatMain(props: IProps) {
  const { roomSocket } = useSocketContext();

  const router = useRouter();

  const navToChatRoom = () => {};

  useEffect(() => {
    // const socket = io("http://localhost:4013/room", {
    //   path: "/yuds.socket.io", //  / 빼먹으면 동작 안함.
    // });

    const socket = roomSocket.connect();

    socket.on("connect", () => {
      console.log("Room socket :: 연결");

      socket.on(SocketCustomEvent.NEW_ROOM, (msg) => {
        console.log(
          " %c SocketCustomEvent.NEW_ROOM ===== 0",
          "color: yellow",
          msg
        );

        // router.push(`/chat${msg}`)

        // socket.emit(SocketCustomEvent.NEW_ROOM, "방만들기 요청 from client");
      });
      socket.on(SocketCustomEvent.NEW_ROOM, (msg) => {
        console.log(
          " %c SocketCustomEvent.NEW_ROOM ===== 0",
          "color: yellow",
          msg
        );

        // router.push(`/chat${msg}`)

        // socket.emit(SocketCustomEvent.NEW_ROOM, "방만들기 요청 from client");
      });

      socket.on("disconnect", () => {
        console.log("Room socket :: 연결안됨");
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1>채팅룸 리스트</h1>
      <RoomsList />

      <div className={styles["floating-container"]}>
        <h1>채팅방 만들기</h1>
        <RoomRegForm />
      </div>
    </div>
  );
}

export default ChatMain;
