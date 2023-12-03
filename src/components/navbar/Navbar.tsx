"use client";
import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TMenuTitles, menuData } from "./menuData";
import { UrlObject } from "url";

function Navbar() {
  const path = usePathname();

  return (
    <nav className={[styles.nav].join(" ")}>
      {Object.keys(menuData).map((key, idx) => {
        const _key = key as TMenuTitles;
        return (
          <Link
            key={`menu_${idx}`}
            className={
              menuData[key as TMenuTitles].path === `/${path.split("/")[1]}`
                ? styles.active
                : undefined
            }
            href={menuData[_key].path}
          >
            {menuData[_key].title}
          </Link>
        );
      })}
    </nav>
  );
}

export default Navbar;
