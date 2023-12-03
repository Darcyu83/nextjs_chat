import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import RoomsList from "@components/chat/rooms/list/RoomsList";
import RoomRegForm from "@components/chat/roomRegForm/RoomRegForm";
import { io } from "socket.io-client";

import { IRoomInfo } from "../../components/chat/types";
interface IProps {}

async function ChatMain(props: IProps) {
  const URL = process.env.NEXT_PUBLIC_BASE_URL + "/chat/rooms";
  const list: IRoomInfo[] = await fetch(URL, {
    cache: "default",
    next: { revalidate: 5000 }, // 캐쉬 5초
  })
    .then((res) => res.json())
    .catch(() => {
      console.log("Room list calls failure");
    });
  console.log("server side rendering ", URL, list);

  return (
    <div className={styles.container}>
      <h1>채팅룸 리스트</h1>
      <RoomsList list={list} />

      <div className={styles["floating-container"]}>
        <h1>채팅방 만들기</h1>
        <RoomRegForm />
      </div>
    </div>
  );
}

export default ChatMain;
