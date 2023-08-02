import React, { ReactNode } from "react";
import styles from "./layout.module.scss";
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
        <h1>RootLayout</h1>
        {/* <SessionContainer session={session}>{children}</SessionContainer> */}

        <div className={[styles.custom, styles.pulse].join(" ")}>Scss Test</div>
        <div className={[styles.enlarge, styles.border].join(" ")}>
          Hover Transition Test
        </div>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
