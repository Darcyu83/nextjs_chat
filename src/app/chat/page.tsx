"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface IProps {}

function ChatMain(props: IProps) {
  const router = useRouter();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { roomNm, capacity } = e.currentTarget;

    function assertIsFormElment(
      el: Element | HTMLButtonElement | HTMLSelectElement
    ): asserts el is HTMLInputElement {
      if (!("value" in el)) {
        return;
      }
    }

    assertIsFormElment(roomNm);
    assertIsFormElment(capacity);

    const params = {
      roomNm: roomNm.value,
      capacity: capacity.value,
    };

    console.log("form data check ==== ", params);
  };
  return (
    <div className=".container">
      <h1>Chat Landing page</h1>

      <h1>채팅방 만들기</h1>
      <form
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        <ol>
          <li>
            <input placeholder="방제목" name="roomNm" />
          </li>
          <li>
            <input placeholder="방인원" name="capacity" />
          </li>
          <li>
            <input type="submit" value={"제출"} />
          </li>
        </ol>
      </form>
    </div>
  );
}

export default ChatMain;
