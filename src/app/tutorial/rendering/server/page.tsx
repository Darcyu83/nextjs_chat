import React from "react";

interface IProps {}

async function ServerSideRendering(props: IProps) {
  const data: { id: number; title: string; content: string }[] = await fetch(
    "http://localhost:9999/topics"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
  return (
    <div style={{}}>
      <h1>ServerSideRendering</h1>

      {data.map((info) => {
        return (
          <>
            <p>title: {info.title}</p>
            <p>content: {info.content}</p>
          </>
        );
      })}
    </div>
  );
}

export default ServerSideRendering;
