"use client";

import React, { useEffect } from "react";

import { io } from "socket.io-client";
import styles from "./ChatRoom.module.scss";
import { useSocketContext } from "../../../context/SocketProvider";

interface IProps {}

const SocketCustomEvent = {
  CONNECTION: "connection",
  // DISCONNECTION: "disconnect",
  NEW_ROOM: "newRoom",
};

function ChatRoom(props: IProps) {
  const { chatSocket } = useSocketContext();
  useEffect(() => {
    // const socket = io("http://localhost:4013/chat", {
    //   path: "/yuds.socket.io",
    // });

    const socket = chatSocket.connect();

    // socket default event
    socket.on("connect", () => {
      console.log(" %c connect socket default event ", "color: red");

      socket.on(SocketCustomEvent.NEW_ROOM, (msg) => {
        console.log(
          " %c SocketCustomEvent.NEW_ROOM ===== 0",
          "color: yellow",
          msg
        );

        socket.emit(SocketCustomEvent.NEW_ROOM, "방만들기 요청 from client");
      });

      socket.on(SocketCustomEvent.CONNECTION, () => {
        console.log(
          "SocketCustomEvent.CONNECTION ==== ",
          SocketCustomEvent.CONNECTION,
          socket.connected
        );
      });

      // socket default event
      socket.on("disconnect", () => {
        console.log(" %c disconnect ===== 1", "color: red");
      });

      // const engine = socket.io.engine;
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
      socket.disconnect();
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles["page-title"]}>노드 채팅방</h1>

      <div className={styles.content}>
        <div className={styles["content-left"]}>
          {[...Array(10)].map((_, idx) => {
            return <p key={idx}>메시지:: {idx}</p>;
          })}
        </div>
        <div className={styles["content-right"]}>하이</div>
      </div>
    </div>
  );
}

export default ChatRoom;
