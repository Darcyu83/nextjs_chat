import React from "react";
import { TRoom } from "../Rooms";
import styles from "./RoomCard.module.scss";

interface IProps {
  room: TRoom;
}

function RoomCard({ room }: IProps) {
  return (
    <div
      className={[
        styles.box,
        room.lastMsg.length > 10 ? styles.purple : undefined,
      ].join(" ")}
    >
      <div className={[styles.content].join(" ")}>
        <p>{room.id}</p>
        {/* <p>{room.imgUrl}</p> */}
        <p>{room.lastMsg}</p>
        <p>{room.sender}</p>
        {/* <p>{room.sentDate}</p> */}
      </div>
    </div>
  );
}

export default RoomCard;
