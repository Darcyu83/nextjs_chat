import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

function RootLayout({ children }: IProps) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>asdf</title>
      </head>
      <body>
        {/* <SessionContainer session={session}>{children}</SessionContainer> */}
        MainRootLayout : {children}
      </body>
    </html>
  );
}

export default RootLayout;
