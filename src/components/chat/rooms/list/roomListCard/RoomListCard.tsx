import React from "react";
import { IRoomInfo, TRoom } from "../../../types";
import styles from "./RoomListCard.module.scss";
import Image from "next/image";
import CustomedNavBtn from "../../../../common/button/CustomedNavBtn";
import Link from "next/link";
import { Metadata } from "next";

interface IProps {
  info: IRoomInfo;
}

export const metaData: Metadata = {
  title: "채팅방",
};

function RoomListCard({ info }: IProps) {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <p>{info.title}</p>
        {info.password && (
          <Image
            src={"/icons/lock.png"}
            alt="자물쇠"
            width={16}
            height={16}
            objectFit="contain"
          />
        )}
      </div>
      <p className={styles.msg}>{info.max}</p>
      <p className={styles.date}>{info.createdAt}</p>

      <Link href={`/chat/${info._id}`} className={styles.btn}>
        <Image
          src={"/icons/enter.png"}
          alt="입장"
          width={16}
          height={16}
          style={{ objectFit: "contain" }}
        />
      </Link>
    </div>
  );
}

export default RoomListCard;
