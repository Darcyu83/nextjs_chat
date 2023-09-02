"use client";
import React from "react";
import { useSocketContext } from "../../../context/SocketProvider";
import styles from "./RoomRegForm.module.scss";

interface IProps {}

function RoomRegForm(props: IProps) {
  const { roomSocket } = useSocketContext();
  console.log("룸소켓컨텍스트 2", roomSocket);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { roomNm, max, password } = e.currentTarget;

    function assertIsFormElment(
      el: Element | HTMLButtonElement | HTMLSelectElement
    ): asserts el is HTMLInputElement {
      if (!("value" in el)) {
        return;
      }
    }

    assertIsFormElment(roomNm);
    assertIsFormElment(max);
    assertIsFormElment(password);

    const params = {
      title: roomNm.value,
      max: max.value,
      password: password.value,
    };

    const url = (process.env.NEXT_PUBLIC_BASE_URL ?? "") + "/chat/room";
    console.log("form data check ==== ", params, url);
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .then((data) => console.log("data === ", data))
      .catch((err) => console.log("페치 에러 ", err));
  };

  return (
    <form
      className={styles["flex-col-6"]}
      method="POST"
      onSubmit={(e) => {
        onSubmit(e);
      }}
    >
      <ol>
        <li>
          <input placeholder="방제목" name="roomNm" />
        </li>
        <li>
          <input placeholder="수용 인원(최소 2명)" name="max" />
        </li>
        <li>
          <input placeholder="비밀번호(없으면 공개방)" name="password" />
        </li>
        <li>
          <input type="submit" value={"생성"} />
        </li>
      </ol>
    </form>
  );
}

export default RoomRegForm;
