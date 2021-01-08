import React from "react";
import Birthday from "./Birthday";
import styles from "./birthdays.module.sass";

export default function Component(props) {
  return (
    <div className={styles.wrap}>
      <div className={styles.aside}>
        <div className={styles.header}>Coming birthday</div>
        {(props.entities || []).map((item) => (
          <Birthday item={item} key={item.ID} />
        ))}
      </div>
    </div>
  );
}