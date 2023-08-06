"use client";
import React from "react";
import NavButton from "../common/button/NavButton";
import { useParams } from "next/navigation";
interface IProps {}
export default function ControlPanel({}: IProps) {
  const params = useParams();
  const topicId = Number(params.topicId);
  console.log("params ==== ", params);

  return (
    <ol>
      <li>
        <NavButton href={`/tutorial/create`} title="Create" />
      </li>

      {params.topicId && (
        <>
          <li>
            <NavButton href={`/tutorial/details/${topicId}`} title="Update" />
          </li>
          <li>
            <NavButton href={`/tutorial/details/${topicId}`} title="Delete" />
          </li>

          <li>
            <NavButton
              href={`/tutorial/details/${Number(topicId + 1)}`}
              title="Move to next topic"
            />
          </li>
        </>
      )}
    </ol>
  );
}
