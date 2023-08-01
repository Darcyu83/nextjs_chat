import React from "react";

interface IProps {
  params: { rtnMsg: string };
}

function App({ params }: IProps) {
  return (
    <div style={{}}>
      <h1>App / </h1>
      {params.rtnMsg}
    </div>
  );
}

export default App;

export const generateStaticParams = async (ctx: any) => {
  const rtnMsg = await new Promise<string>((res, rej) => {
    setTimeout(() => {
      console.log("타임아웃 실행됨.");
      res("result from generateStaticParams ");
    }, 1);
  });

  console.log("타임아웃 실행됨. == =결과 리턴", rtnMsg, ctx);
  return Array.from([
    {
      rtnMsg: rtnMsg,
    },
  ]);
};
