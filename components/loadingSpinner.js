import React from 'react';
import styles from '@/styles/Spinner.module.css'

const LoadingSpinner = () => (
    <>
        <div className={styles.loadWrapp}>
            <div className={styles.load}>
                <div className={styles.spinner}></div>
                <div className={styles.spinner}></div>
                <div className={styles.spinner}></div>
            </div>
        </div>
    </>
    
);

export default LoadingSpinner;
