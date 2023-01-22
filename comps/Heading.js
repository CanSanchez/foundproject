import * as React from 'react';
import styles from '@/styles/Home.module.css'

export default function Heading({text = ""}) {
    return (
      <div>
        <h1 className={styles.heading}>{text}</h1>
      </div>
    );
  }