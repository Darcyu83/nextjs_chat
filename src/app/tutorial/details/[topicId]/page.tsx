import React from "react";
import NavButton from "../../../../components/common/button/CustomedNavBtn";

interface IProps {
  params: {
    topicId: string;
  };
}

async function Details({ params }: IProps) {
  const { topicId } = params;

  // const res = await fetch(`http://localhost:9999/topics/${topicId}`);
  // const data: { id: number; title: string; content: string } = await res.json();

  return (
    <div style={{}}>
      <h1>Details :: {topicId}</h1>

      {/* <p>title :: {data.title}</p>
      <p>content :: {data.content}</p> */}
    </div>
  );
}

export default Details;
