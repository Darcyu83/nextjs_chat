"use client";

import Link from "next/link";
import React from "react";
import styles from "./button.module.scss";
import type { Route } from "next";

function NavButton<T extends string>({
  href,
  title,
}: {
  href: Route<T> | URL;
  title: string;
}) {
  return (
    <div className={styles.outlined}>
      <Link href={href}>{title}</Link>
    </div>
  );
}

export default NavButton;
