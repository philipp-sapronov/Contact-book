import React from 'react';
import styles from './dotsMenu.module.sass';

export default function DotsMenu(props) {
  console.log(props, 'DOTSMENU PROPS');
  return (
    <div className={styles.wrap} onClick={props.clickHandler(props.targetId, props.targetDomain)}>
      <div className={styles.menu}> </div>
    </div>
  );
}
