import { Metadata } from "next";
import React from "react";

interface IProps {}
export const metadata: Metadata = {
  title: "Next.js || TEST",
  description: "Generated by Next.js",
};
function Test(props: IProps) {
  return (
    <div style={{}}>
      <h1>(test)/Test</h1>
    </div>
  );
}

export default Test;