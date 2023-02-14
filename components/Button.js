import * as React from 'react';
import styles from '../styles/Home.module.css'

export default function ButtonApp(props) {
    return (
      <div>
        <button className={styles.button} onClick={props.onClick} type='submit'>{props.name}</button>
      </div>
    );
}