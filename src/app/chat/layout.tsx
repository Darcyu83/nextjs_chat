import React, { ReactNode } from "react";
import SocketProvider from "../../context/SocketProvider";

interface IProps {
  children: ReactNode;
}

function ChatLayout({ children }: IProps) {
  return <SocketProvider>{children}</SocketProvider>;
}

export default ChatLayout;
