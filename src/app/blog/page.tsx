"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import TextEllipsis from "../../components/common/textEllipsis/TextEllipsis";
import useWindowSize from "../../hooks/useWindowSize";
interface IProps {}

function BlogMain(props: IProps) {
  return (
    <div className={[styles["container"]].join(" ")}>
      <div className={styles["content"]}>
        <h1 className={styles.label}>Row flex Ellipsis</h1>
        <span className={styles["ellipsis"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, rem
          libero quae beatae sed, commodi ex sint omnis et voluptate doloribus
          eligendi inventore est? Neque eveniet provident explicabo velit ex?
        </span>
      </div>
      <TextEllipsis />
    </div>
  );
}

export default BlogMain;
