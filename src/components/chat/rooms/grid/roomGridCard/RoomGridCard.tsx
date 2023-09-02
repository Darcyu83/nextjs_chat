import React from "react";
import { TRoom } from "../RoomsGrid";
import styles from "./RoomGridCard.module.scss";
import Link from "next/link";

interface IProps {
  room: TRoom;
}

function RoomGridCard({ room }: IProps) {
  return (
    <div
      className={[
        styles.box,
        room.lastMsg.length > 10 ? styles.purple : undefined,
      ].join(" ")}
    >
      <div className={[styles.content].join(" ")}>
        <Link href={`/chat/${room.id}`}>
          <p>{room.id}</p>
          <p>{room.imgUrl}</p>
          <p>{room.lastMsg}</p>
          <p>{room.sender}</p>
          <p>{room.sentDate}</p>
        </Link>
      </div>
    </div>
  );
}

export default RoomGridCard;
