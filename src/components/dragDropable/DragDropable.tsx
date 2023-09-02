"use client";
import React, { DragEvent, useRef, useState } from "react";
import styles from "./styles.module.scss";
import TextEllipsis from "../common/textEllipsis/TextEllipsis";
interface IProps {
  title: string;
}

function DragDropable({ title }: IProps) {
  const [text, setText] = useState("");
  const [list, setList] = useState<string[]>(["aaa", "bbb", "ccc", "ddd"]);

  const [draggedItemIdx, setDraggedItemIdx] = useState<number>();
  const [dragOverItemIdx, setDragOverItemIdx] = useState<number>();

  const onAddItem = () => {
    setList((curr) => [...curr, text]);
    setText("");
  };

  // save reference for dragItem and dragOverItem
  // const draggedItemIdxRef = useRef<number | null>(null);
  // const dragOverItemIdxRef = useRef<number | null>(null);

  const onSortItems = () => {
    const _copied = [...list];

    // remove or save dragged item
    let draggedItem: string = "";

    if (draggedItemIdx === dragOverItemIdx) return;
    if (typeof draggedItemIdx === "number") {
      const extractted = _copied.splice(draggedItemIdx, 1);
      console.log("draggedItem ==== 2", extractted);
      draggedItem = extractted[0];
    }
    // switch position
    if (typeof dragOverItemIdx === "number")
      _copied.splice(dragOverItemIdx, 0, draggedItem + "22");
    console.log("_copied ==== 3", _copied);
    setList((curr) => {
      return _copied;
    });
  };

  // Handle a drag start
  const onDragStart = (e: DragEvent<HTMLDivElement>, idx: number) => {
    console.log("Drag started ==== ", idx);

    setDraggedItemIdx(idx);
  };

  // Handle a drag Enter
  const onDragEnter = (e: DragEvent<HTMLDivElement>, idx: number) => {
    console.log("Drag Enter ==== ", idx);

    setDragOverItemIdx(idx);
  };

  // Handle a drag end
  const onDragEnd = (e: DragEvent<HTMLDivElement>, idx: number) => {
    onSortItems();

    console.log("Drag End ==== ", draggedItemIdx, dragOverItemIdx);

    setDraggedItemIdx(undefined);
    setDragOverItemIdx(undefined);
  };

  // handle a drag leave out of container

  const onDragLeave = () => {
    console.log("%c onDragLeave ==== ", "color: red");
    setDraggedItemIdx(undefined);
    setDragOverItemIdx(undefined);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>List of {title}</h1>

      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <input type="button" value={"추가"} onClick={onAddItem} />
      </div>

      <div className={styles["container"]} onDragExit={onDragLeave}>
        {list.map((str, idx) => (
          <div
            key={str + idx}
            draggable
            onDragStart={(e) => {
              onDragStart(e, idx);
            }}
            onDragEnter={(e) => onDragEnter(e, idx)}
            onDragEnd={(e) => onDragEnd(e, idx)}
            onDragOver={(e) => e.preventDefault()}
            className={[styles["container-text"]]
              .concat(
                dragOverItemIdx !== draggedItemIdx && dragOverItemIdx == idx
                  ? styles["drag-over-item"]
                  : draggedItemIdx === idx
                  ? styles["dragged-item"]
                  : ""
              )
              .join(" ")}
          >
            <TextEllipsis text={str} rowNum={idx + 1} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DragDropable;
