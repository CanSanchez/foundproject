import * as React from 'react';
import styles from '../styles/Home.module.css'

export default function PetCard() {
    return (
        <div className={styles.card}>
            <div className={styles.cardheader}>
                <h1 className={styles.cardtitle}>Pet Name</h1>
                <p className={styles.cardsubtitle}>Pet Type</p>
            </div>
            <div className={styles.cardbody}>
                <img src="https://placekitten.com/200/300" alt="Pet Image" className={styles.cardimage} />
                <p className={styles.cardtext}>Pet Description</p>
                <p className={styles.cardtext}>Pet Color</p>
                <p className={styles.cardtext}>Pet Breed</p>
                <p className={styles.cardtext}>Last Seen</p>
            </div>
        </div>
    );
}