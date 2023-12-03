import { Metadata } from "next";
import React from "react";
import RoomsGrid from "../components/chat/rooms/grid/RoomsGrid";
import styles from "./styles.module.scss";
import GalaxyBtn from "../components/common/button/galaxyBtn/GalaxyBtn";
interface IProps {
  // params: { rtnMsg: string };
}

export const metadata: Metadata = {
  title: "메인화면",
};

function Main({}: IProps) {
  return (
    <div className={styles.container}>
      <RoomsGrid />
      {/* 블로그 리스트 */}
      {/* <Rooms /> */}
    </div>
  );
}

export default Main;

export const generateStaticParams = async (ctx: any) => {
  const delay = 1;
  const rtnMsg = await new Promise<string>((res, rej) => {
    setTimeout(() => {
      console.log(`Fetching delay ${delay / 1000}초 후 실행됨.`);
      res("result from generateStaticParams ");
    }, delay);
  });

  console.log("타임아웃 실행됨. == =결과 리턴", rtnMsg, ctx);
  return Array.from([
    {
      rtnMsg: rtnMsg,
    },
  ]);
};
