import React, { ReactNode } from "react";

import "./globals.css";

import styles from "./layout.module.scss";
import Navbar from "../components/navbar/Navbar";
interface IProps {
  children: ReactNode;
}

export const metaData = {
  title: "NextJs Chat Project",
  description: "NodeJs tutorial with NextJs",
};

async function RootLayout({ children }: IProps) {
  return (
    <html>
      {/* <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>NextJs Chat Project</title>
      </head> */}
      <body>
        {/* 헤더 : 네비게이션 메뉴 */}
        <header className={styles.header}>
          <Navbar />
        </header>

        {/* 좌측 메뉴 */}
        <div className={styles.aside}>dd</div>

        {/* 메인 컨텐트 */}
        <div className={styles.main}>{children}</div>

        {/* 푸터 */}
        <footer className={styles.footer}>푸터</footer>
      </body>
    </html>
  );
}

export default RootLayout;
