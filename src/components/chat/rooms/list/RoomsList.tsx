"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./RoomsList.module.scss";
import { roomInfos } from "../grid/RoomsGrid";
import RoomListCard from "./roomListCard/RoomListCard";
import { IRoomInfo } from "../../types";
import { useSocketContext } from "../../../../context/SocketProvider";
import { useRouter } from "next/navigation";
import { SocketCustomEvent } from "../../../../app/chats/type";
import { Socket } from "socket.io-client";

interface IProps {
  list: IRoomInfo[];
}

function RoomsList({ list }: IProps) {
  const { globalSocket, roomSocket } = useSocketContext();

  // const socketRef = useRef<Socket | null>(null);
  const cntRef = useRef(0);

  // const router = useRouter();

  const sendMsgToRoom1 = () => {
    console.log(
      "%c sendMsgToRoom1 :: 보내기",
      "background: purple; color: white",
      roomSocket.connected,
      "aa"
    );

    roomSocket.emit("snedMsgToRoom", "snedMsgToRoom :: 메시지만 보낼 때  ");
  };

  const sendMsgToRoom2 = () => {
    cntRef.current += 1;
    console.log(
      "%c sendMsgToRoom2 :: 보내기",
      "background: purple; color: white"
    );
    roomSocket.emit("snedMsgToRoom", {
      msg: "snedMsgToRoom :: 메시지만 보낼 때  ",
      info: { roomId: cntRef.current },
    });
  };

  const navToChatRoom = () => {};

  useEffect(() => {
    const gbSocket = globalSocket.connect();

    gbSocket.on("connect", () => {
      console.log(
        "%cGlobal socket :: 연결",
        "background: purple; color: white"
      );

      gbSocket.on(SocketCustomEvent.BROADCAST_TEST, (msg) => {
        console.log(
          " %c SocketCustomEvent.BROADCAST_TEST ===== 0",
          "color: crimson",
          msg
        );
      });

      gbSocket.on("entire", (msg) => {
        console.log(" %c entire ===== 1", "color: crimson", msg);
      });
    });
  }, []);

  useEffect(() => {
    // const socket = io("http://localhost:4013/room", {
    //   path: "/yuds.socket.io", //  / 빼먹으면 동작 안함.
    // });

    console.log(
      "%cRoom socket :: 연결",
      "background: purple; color: yellow",
      roomSocket.connected
    );

    if (roomSocket.connected) return;

    roomSocket.connect();

    roomSocket.on("connect", () => {
      console.log("%cRoom socket :: 연결", "background: purple; color: white");

      roomSocket.on(SocketCustomEvent.NEW_ROOM, (msg) => {
        console.log(
          " %c SocketCustomEvent.NEW_ROOM ===== ",
          "color: yellow",
          msg
        );
        // router.push(`/chat${msg}`)

        // roomSocket.emit(SocketCustomEvent.NEW_ROOM, "방만들기 요청 from client");
      });
      roomSocket.on("noRoomId", (msg) => {
        console.log(" %c noRoomId ===== ", "color: yellow", msg);
        // router.push(`/chat${msg}`)

        // roomSocket.emit(SocketCustomEvent.NEW_ROOM, "방만들기 요청 from client");
      });

      roomSocket.on(SocketCustomEvent.TO_TEST, (msg) => {
        console.log(
          " %c SocketCustomEvent.TO_TEST ===== 0",
          "color: teal",
          msg
        );
      });

      roomSocket.on("receivedMsgToFE", (msg) => {
        console.log(" %c receivedMsgToFE ===== 0", "color: teal", msg);
      });

      roomSocket.on("disconnect", () => {
        console.log("Room socket :: disconnect");
      });
    });

    return () => {
      roomSocket.disconnect();
    };
  }, [roomSocket]);

  return (
    <div className={styles.container}>
      <div onClick={sendMsgToRoom1}>방 생성 메시지 보내기 </div>
      <div onClick={sendMsgToRoom2}>방 생성 데이터 보내기 </div>
      {list.map((info) => {
        return <RoomListCard key={info._id} info={info} />;
      })}
    </div>
  );
}

export default RoomsList;
