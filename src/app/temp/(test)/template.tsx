import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

function Template({ children }: IProps) {
  return (
    <div style={{}}>
      <h1>2 . Template :: {children}</h1>
    </div>
  );
}

export default Template;
