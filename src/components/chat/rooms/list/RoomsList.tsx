import React from "react";
import styles from "./RoomsList.module.scss";
import { roomInfos } from "../grid/RoomsGrid";
import RoomListCard from "./roomListCard/RoomListCard";
import { IRoomInfo } from "../../types";
interface IProps {}

async function RoomsList(props: IProps) {
  const URL = process.env.NEXT_PUBLIC_BASE_URL + "/chat/rooms";
  const list: IRoomInfo[] = await fetch(URL).then((res) => res.json());
  console.log("server side rendering ", URL, list);
  return (
    <div className={styles.container}>
      {list.map((info) => {
        return <RoomListCard key={info._id} info={info} />;
      })}
    </div>
  );
}

export default RoomsList;
