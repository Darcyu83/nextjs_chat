import React from "react";

interface IProps {
  roomid: number;
}

function ChatRoom(props: IProps) {
  const { roomid } = props;
  return (
    <div style={{}}>
      <h1>ChatRoom : {roomid}번</h1>
    </div>
  );
}

export default ChatRoom;
