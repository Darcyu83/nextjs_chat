"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./BlogMain.module.scss";
import TextEllipsis from "../../components/common/textEllipsis/TextEllipsis";
import useWindowSize from "../../hooks/useWindowSize";
interface IProps {}

function BlogMain(props: IProps) {
  return (
    <div className={[styles["container-100-percent"]].join(" ")}>
      <TextEllipsis />
      {/* <div className={styles.title}>
        <h1 style={{ width: "max-content", whiteSpace: "nowrap" }}>타이틀</h1>
        <TextEllipsis
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto delectus ad, rem debitis quis a quia sed consequuntur
              dolores voluptatum iure accusantium qui animi molestiae dolore
              reiciendis eos! Hic, neque?"
        />
      </div>
      <div className={styles.title}>
        <h1 style={{ width: "max-content", whiteSpace: "nowrap" }}>타이틀</h1>
        <TextEllipsis
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto delectus ad, rem debitis quis a quia sed consequuntur
              dolores voluptatum iure accusantium qui animi molestiae dolore
              reiciendis eos! Hic, neque?"
        />
      </div> */}
    </div>
  );
}

export default BlogMain;
