import * as React from 'react';
import styles from '@/styles/Home.module.css'

export default function ButtonApp({name = ""}
) {
    return (
      <div>
        <button className={styles.button}>{name}</button>
      </div>
    );
  }