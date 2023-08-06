"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface IProps {}

function ChatMain(props: IProps) {
  const router = useRouter();
  return (
    <div className=".container">
      <h1>Chat Landing page</h1>

      <p style={{ color: "gray" }}>채팅방 만들기</p>
      <p>토픽 만들기 튜토리얼</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const topic = e.currentTarget.topic;

          const content = e.currentTarget.content;

          function assertIsFormFieldElement(
            element: Element | HTMLSelectElement | HTMLButtonElement
          ): asserts element is HTMLInputElement {
            if (!("value" in element)) throw new Error("폼 요소가 아님");
          }

          assertIsFormFieldElement(topic);
          assertIsFormFieldElement(content);

          console.log("values ==== ", topic.value, content.value);

          const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },

            body: JSON.stringify({
              title: topic.value,
              content: content.value,
            }),
          };
          fetch("http://localhost:9999/topics", options)
            .then((res) => res.json())
            .then((result) => {
              console.log("fetch result ==== ", result.id);

              router.push(`/chat/${result.id}`);
            });
        }}
      >
        <input type="text" name="topic" placeholder="토픽 타이틀" />

        <textarea name="content" placeholder="내용" />

        <input type="submit" value="create" />
      </form>
    </div>
  );
}

export default ChatMain;
