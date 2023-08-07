"use client";

import React, { useEffect } from "react";

import { io } from "socket.io-client";
import styles from "./ChatRoom.module.scss";

interface IProps {}

const SocketEvent = {
  CONNECT: "connection",

  DISCONNECT: "disconnect",
};
function ChatRoom(props: IProps) {
  useEffect(() => {
    const socket = io("/chat");

    socket.on(SocketEvent.CONNECT, () => {
      console.log(SocketEvent.CONNECT, socket.connected);

      const engine = socket.io.engine;
      console.log(engine.transport.name); // in most cases, prints "polling"

      engine.once("upgrade", () => {
        // called when the transport is upgraded (i.e. from HTTP long-polling to WebSocket)
        console.log("engine", engine.transport.name); // in most cases, prints "websocket"
      });

      engine.on("packet", ({ type, data }) => {
        // called for each packet received
      });

      engine.on("packetCreate", () => {
        // called for each packet sent
      });

      engine.on("drain", () => {
        // called when the write buffer is drained
      });

      engine.on("close", (reason) => {
        // called when the underlying connection is closed
      });
    });

    socket.on(SocketEvent.DISCONNECT, () => {
      console.log(SocketEvent.DISCONNECT, socket.connected);
    });
  });

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
