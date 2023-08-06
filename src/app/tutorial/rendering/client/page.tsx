"use client";
import React, { useEffect, useState } from "react";

interface IProps {
  params: {
    client: "client";
  };
}

function ClientSideRendering({ params }: IProps) {
  const { client } = params;
  const [data, setData] = useState<
    { id: number; title: string; content: string }[]
  >([]);

  //   클라이언트 컴포넌트  test
  useEffect(() => {
    fetch("http://localhost:9999/topics")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div style={{}}>
      <h1>ClientSideRendering :: {client}</h1>

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

export default ClientSideRendering;
