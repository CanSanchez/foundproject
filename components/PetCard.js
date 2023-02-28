import * as React from 'react';
import styles from '../styles/Card.module.css'

export default function PetCard(props) {
    return (
        <div className={styles.card}>
            <div className={styles.cardheader}>
                <h1 className={styles.cardtitle}>{props.petname}</h1>
                <p className={styles.cardsubtitle}>{props.pettype}</p>
            </div>
            <div className={styles.cardbody}>
                <img src="https://placekitten.com/200/300" alt="Pet Image" className={styles.cardimage} />
                <p className={styles.cardtext}>{props.description}</p>
                <p className={styles.cardtext}>{props.color}</p>
                <p className={styles.cardtext}>{props.breed}</p>
                <p className={styles.cardtext}>{props.location}</p>
            </div>
        </div>
    );
}