import React from "react";
import DragDropable from "../../components/dragDropable/DragDropable";
import styles from "./styles.module.scss";

interface IProps {}

function TutorialMain(props: IProps) {
  return (
    <div className={styles.container}>
      <h1>TutorialMain</h1>
      <DragDropable title="내 취미" />
    </div>
  );
}

export default TutorialMain;

// 12 : 23460
// 34 :
// 56 : 29520
