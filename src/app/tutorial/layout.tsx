import React, { ReactNode } from "react";
import styles from "./layout.module.scss";
import Link from "next/link";
import ControlPanel from "../../components/actionPanel/ControlPanel";
interface IProps {
  children: ReactNode;
}

async function TutorialLayout({ children }: IProps) {
  const data: { id: number; title: string; content: string }[] = [];
  //   await fetch(
  //   "http://localhost:9999/topics",
  //   // { next: { revalidate: 0 } }
  //   { cache: "no-store" }
  // )
  //   .then((res) => res.json())
  //   .then((data) => data);

  return <div className={styles.container}>{children}</div>;
}

export default TutorialLayout;
