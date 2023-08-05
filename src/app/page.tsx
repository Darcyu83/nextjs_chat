import { Metadata } from "next";
import React from "react";
import Rooms from "../components/chat/rooms/Rooms";
import styles from "./Main.module.scss";
interface IProps {
  // params: { rtnMsg: string };
}

export const metadata: Metadata = {
  title: "메인화면",
};

function Main({}: IProps) {
  return (
    <div className={styles.container}>
      {/* 챗룸 리스트 */}
      <Rooms />
      {/* 블로그 리스트 */}
      {/* <Rooms /> */}
    </div>
  );
}

export default Main;

export const generateStaticParams = async (ctx: any) => {
  const rtnMsg = await new Promise<string>((res, rej) => {
    setTimeout(() => {
      console.log("타임아웃 실행됨.");
      res("result from generateStaticParams ");
    }, 1);
  });

  console.log("타임아웃 실행됨. == =결과 리턴", rtnMsg, ctx);
  return Array.from([
    {
      rtnMsg: rtnMsg,
    },
  ]);
};
