import React from "react";
import styles from "./dotsMenu.module.sass";

export default function DotsMenu(props) {
  return (
    <div
      className={styles.wrap}
      // onClick={props.clickHandler(props.triggerId, props.module)}
    >
      <div className={styles.menu}> </div>
    </div>
  );
}
