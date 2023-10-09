import React from "react";
import styles from "./galaxyBtn.module.scss";
interface IProps {}

// https://codepen.io/jh3y/pen/eYPYKep?editors=1100

function GalaxyBtn(props: IProps) {
  return (
    <div className={styles["galaxy-button"]}>
      <button className={styles.btn} style={{}}>
        <h1>GalaxyBtn</h1>
      </button>
    </div>
  );
}

export default GalaxyBtn;
