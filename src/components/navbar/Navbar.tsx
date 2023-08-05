"use client";
import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuData } from "./menuData";

function Navbar() {
  const path = usePathname();
  return (
    <nav className={[styles.nav].join(" ")}>
      {menuData.map((menu, idx) => {
        return (
          <Link
            key={`menu_${idx}`}
            className={menu.path === path ? styles.active : undefined}
            href={menu.path}
          >
            {menu.title}
          </Link>
        );
      })}
    </nav>
  );
}

export default Navbar;
