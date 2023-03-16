import * as React from 'react';
import styles from '../styles/Card.module.css'
import Image from 'next/image';

export default function PetCard(props) {


    return (
        <div className={styles.card}>
            <div className={styles.cardheader} style={(props.formtype === 'found' ? {backgroundColor: '#79edb9'} : null )}>
                <div>
                    <h1 className={styles.cardtitle}>{props.petname}</h1><p>{props.formtype}</p>
                </div>
                <p className={styles.cardsubtitle}>{props.pettype}</p>
            </div>
            <div className={styles.cardbody}>
                {/* { props.pettype === 'Dog' ? 
                    // <img src="https://placedog.net/200/300" alt="Pet Image" className={styles.cardimage} /> 
                    <Image src="https://placedog.net/200/300" alt="Pet Image" width={100} height={100} className={styles.cardimage} />
                    : 
                    // <img src="https://placekitten.com/200/300" alt="Pet Image" className={styles.cardimage} />
                    <Image src="https://placekitten.com/200/300" alt="Pet Image" width={100} height={100} className={styles.cardimage} />
                } */}

                <img src={props.image} alt="Pet Image" className={styles.cardimage} />
                <p className={styles.cardtext}>{props.color}</p>
                <p className={styles.cardtext}>{props.breed}</p>
                <p className={styles.cardtext}>{props.location}</p>
                <p className={styles.cardtext}>{props.description}</p>
            </div>
        </div>
    );
}