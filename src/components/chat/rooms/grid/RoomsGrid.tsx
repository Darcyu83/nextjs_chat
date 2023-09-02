import React from "react";
import RoomGridCard from "./roomGridCard/RoomGridCard";
import styles from "./RoomsGrid.module.scss";
import { TRoom } from "../../types";

export const roomInfos: TRoom[] = [
  {
    id: 1,
    imgUrl: "http://localhost:3000 ",
    lastMsg:
      "키보드 워리어가 되고싶니? 아수라 발발타, 묻고 더블로 가 ! 성수대교는 무너졌니?",
    sender: "손나은",
    sentDate: "2023.08.03 10:00",
  },
  {
    id: 2,
    imgUrl: "http://localhost:3000 ",
    lastMsg: "또 연락해 ",
    sender: "후니",
    sentDate: "2023.08.03 10:00",
  },
  {
    id: 3,
    imgUrl: "http://localhost:3000 ",
    lastMsg:
      "키보드 워리어가 되고싶니? 아수라 발발타, 묻고 더블로 가 ! 성수대교는 무너졌니?",
    sender: "키보드 워리어",
    sentDate: "2023.08.03 10:00",
  },

  {
    id: 4,
    imgUrl: "http://localhost:3000 ",
    lastMsg: "굿나잇 ",
    sender: "제니",
    sentDate: "2023.08.03 10:00",
  },
  {
    id: 5,
    imgUrl: "http://localhost:3000 ",
    lastMsg: "굿나잇 ",
    sender: "제니",
    sentDate: "2023.08.03 10:00",
  },
  {
    id: 6,
    imgUrl: "http://localhost:3000 ",
    lastMsg: "굿나잇 ",
    sender: "제니",
    sentDate: "2023.08.03 10:00",
  },
  {
    id: 7,
    imgUrl: "http://localhost:3000 ",
    lastMsg: "굿나잇 ",
    sender: "제니",
    sentDate: "2023.08.03 10:00",
  },
  {
    id: 8,
    imgUrl: "http://localhost:3000 ",
    lastMsg: "굿나잇 ",
    sender: "제니",
    sentDate: "2023.08.03 10:00",
  },
  {
    id: 9,
    imgUrl: "http://localhost:3000 ",
    lastMsg: "굿나잇 ",
    sender: "제니",
    sentDate: "2023.08.03 10:00",
  },
  {
    id: 10,
    imgUrl: "http://localhost:3000 ",
    lastMsg: "굿나잇 ",
    sender: "제니",
    sentDate: "2023.08.03 10:00",
  },
];

interface IProps {}

function RoomsGrid(props: IProps) {
  return (
    <div className={styles.container}>
      {roomInfos.map((room) => {
        return <RoomGridCard key={"room_" + room.id} room={room} />;
      })}
    </div>
  );
}

export default RoomsGrid;
