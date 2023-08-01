import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

function ChatLayout({ children }: IProps) {
  return (
    <div style={{}}>
      <h1>Chat Main Layout</h1>

      {children}
    </div>
  );
}

export default ChatLayout;
