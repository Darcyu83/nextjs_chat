"use client";

import Link from "next/link";
import React, { ReactNode } from "react";
import styles from "./button.module.scss";
import type { Route } from "next";

function CustomedNavBtn<T extends string>({
  href,
  title,
  children,
}: {
  href: Route<T> | URL;
  title?: string;
  children?: ReactNode;
}) {
  return (
    <Link className={styles.outlined} href={href}>
      {title ? title : children}
    </Link>
  );
}

export default CustomedNavBtn;
