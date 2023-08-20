"use client";

import React, { CSSProperties, useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import useWindowSize from "../../../hooks/useWindowSize";
import Image from "next/image";

interface IProps {
  text?: string;
  rowNum?: number;
  fontSize?: CSSProperties["fontSize"];
  fontColor?: CSSProperties["color"];
  maxWidthControlled?: number;
}

function TextEllipsis({
  fontSize,
  fontColor,
  text = "",
  rowNum,
  maxWidthControlled,
}: IProps) {
  return (
    <div className={styles["container-ellipsis"]}>
      <div className={styles["ellipsis-text-wrapper"]}>
        {rowNum}. - {text} :: Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Voluptate, ratione. Odio assumenda explicabo culpa provident,
        illum atque aliquam quos consequuntur recusandae? Suscipit eius dolor
        eaque illo minima similique harum qui.
      </div>
    </div>
  );
}

export default TextEllipsis;
