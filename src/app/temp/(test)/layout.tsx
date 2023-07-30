import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

function TestLayout({ children }: IProps) {
  return (
    <div style={{}}>
      <div>3 . TestLayout : {children}</div>
    </div>
  );
}

export default TestLayout;
