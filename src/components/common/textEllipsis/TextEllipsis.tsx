"use client";

import React, { CSSProperties, useEffect, useRef, useState } from "react";
import styles from "./style.module.css";
import useWindowSize from "../../../hooks/useWindowSize";
import Image from "next/image";

interface IProps {
  text?: string;
  fontSize?: CSSProperties["fontSize"];
  fontColor?: CSSProperties["color"];
  maxWidthControlled?: number;
}

function TextEllipsis({
  fontSize,
  fontColor,
  text = "",
  maxWidthControlled,
}: IProps) {
  const windowSize = useWindowSize();
  const widthRef = useRef<HTMLDivElement | null>(null);
  //   const widthRef = useRef<HTMLDivElement[]>([]);
  const [maxWidth, setMaxWidth] = useState(0);

  useEffect(() => {
    console.log(
      "%c 최대 넓이 재설정 ==== ",
      "color : yellow",
      windowSize.width,
      widthRef.current?.clientWidth
    );

    if (widthRef.current) {
      setMaxWidth(widthRef.current.clientWidth);
    }
    // if (widthRef.current) setMaxWidth(widthRef.current[0]?.clientWidth);
  }, [windowSize.width]);

  //   useEffect(() => {
  //     console.log("windowSize ==== ", windowSize);
  //   }, [windowSize]);

  const test = () => {
    console.log("%c 왜 안돼 ?  === test", "color: red");
  };

  return (
    // <div
    //   className={styles.container}
    //   ref={(e) => {
    //     widthRef.current = e;
    //   }}
    //   onResize={test}
    // >
    //   <div
    //     key={windowSize.width}
    //     // ref={(el) => {
    //     //   el && (widthRef.current[windowSize.width ?? 0] = el);
    //     // }}

    //     className={[styles["container-ellipsis"]].join(" ")}
    //     onResize={test}
    //     onLoad={test}
    //     style={{
    //       fontSize,
    //       color: fontColor,
    //       maxWidth: maxWidthControlled
    //         ? maxWidthControlled
    //         : maxWidth || undefined,
    //     }}
    //   >
    //     {!!maxWidth && <p className={styles["font-style-default"]}>{text}</p>}
    //   </div>
    // </div>
    <div className={styles["flex-box"]}>
      <div className={styles["ellipsis-img-wrapper"]}>
        <Image
          src="/vercel.svg"
          alt="아이콘"
          width={100}
          height={20}
          objectFit="contain"
        />
      </div>

      <div className={styles["ellipsis-text-wrapper"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, rem
        libero quae beatae sed, commodi ex sint omnis et voluptate doloribus
        eligendi inventore est? Neque eveniet provident explicabo velit ex?
      </div>
    </div>
  );
}

export default TextEllipsis;
