import React from "react";

interface IProps {
  params: {
    roomId: number;
  };
}

async function ChatRoom({ params }: IProps) {
  const { roomId } = params;

  const data: { id: number; title: string; content: string } = await fetch(
    `http://localhost:9999/topics/${roomId}`
  )
    .then((res) => res.json())
    .then((data) => data);

  return (
    <div style={{}}>
      <h1>Topics</h1>
      <p>id : {roomId}</p>
      <p>title : {data.title}</p>
      <p>content : {data.content}</p>
    </div>
  );
}

export default ChatRoom;
