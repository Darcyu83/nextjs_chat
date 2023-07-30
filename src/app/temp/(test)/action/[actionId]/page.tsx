import React from "react";

export const generateStaticParams = async (ctx: any) => {
  const rtnMsg = await new Promise<string>((res, rej) => {
    setTimeout(() => {
      console.log("타임아웃 실행됨.");
      res("result from generateStaticParams ");
    }, 2000);
  });

  console.log("타임아웃 실행됨. == =결과 리턴", rtnMsg, ctx);
  return [
    {
      rtnMsg: rtnMsg,
    },
  ];
};

interface IProps {
  params: { actionId: number; rtnMsg: string };
}

function Action({ params }: IProps) {
  console.log("Action===========", params?.rtnMsg);

  return (
    <div style={{}}>
      <h1>
        {JSON.stringify(params)}
        <h1>(test)/:actionId :: action</h1>
      </h1>
    </div>
  );
}

export default Action;
