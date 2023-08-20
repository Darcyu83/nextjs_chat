"use client";
import { Route } from "next";
import { useRouter } from "next/navigation";
import React from "react";

interface IProps {}

function TopicRegForm(props: IProps) {
  const router = useRouter();
  return (
    <div style={{}}>
      <p>토픽 만들기 튜토리얼</p>
      <form
        onSubmit={async (e) => {
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
          // await fetch("http://localhost:9999/topics", options)
          //   .then((res) => res.json())
          //   .then((result) => {
          //     console.log("fetch result ==== ", result.id);

          //     router.push(`/tutorial/details/${result.id}`);
          //   });
        }}
      >
        <div>
          <input type="text" name="topic" placeholder="토픽 타이틀" />
        </div>

        <div>
          <textarea name="content" placeholder="내용" />
        </div>

        <div>
          <input type="submit" value="create" />
        </div>
      </form>
    </div>
  );
}

export default TopicRegForm;
