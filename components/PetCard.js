import * as React from 'react';
import styles from '../styles/Card.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import ButtonApp from './Button';

export default function PetCard(props) {


    const [timeAgo, setTimeAgo] = useState('');
    // change date format to time ago
    const date = new Date(props.date);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const diffDays = Math.floor(diff / (1000 * 3600 * 24));
    const diffHours = Math.floor(diff / (1000 * 3600));
    const diffMinutes = Math.floor(diff / (1000 * 60));
    const diffSeconds = Math.floor(diff / (1000));

    useEffect(() => {
        if (diffDays > 0) {
            setTimeAgo(diffDays + 'days ago');
        } else if (diffHours > 0) {
            setTimeAgo(diffHours + 'hours ago');
        } else if (diffMinutes > 0) {
            setTimeAgo(diffMinutes + 'minutes ago');
        } else {
            setTimeAgo(diffSeconds + 'seconds ago');
        }
    }, []);
    

    return (
        <div className={styles.card}>
            <div className={styles.cardheader} style={(props.formtype === 'found' ? {backgroundColor: '#79edb9'} : null )}>
                <div>
                    <h1 className={styles.cardtitle}>{props.petname}</h1><p>{props.formtype}</p>
                </div>
                <p className={styles.cardsubtitle}>{props.location}</p>
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
                <div className={styles.cardinfo}>
                    <div className={styles.cardinfoitem}>
                        <p className={styles.cardinfotitle}>Type</p>
                        <p className={styles.cardinfosubtitle}>{props.pettype}</p>
                    </div>
                    <div className={styles.cardinfoitem}>
                        <p className={styles.cardinfotitle}>Color</p>
                        <p className={styles.cardinfosubtitle}>{props.color}</p>
                    </div>
                    <div className={styles.cardinfoitem}>
                        <p className={styles.cardinfotitle}>Breed</p>
                        <p className={styles.cardinfosubtitle}>{props.breed}</p>
                    </div>
                </div>
                <div className={styles.carddetails}>
                    <p>Pet Details</p>
                    <p>{props.description}</p>
                </div>
                <div className={styles.carddetails}>
                    {
                        props.formtype === 'found' ?
                        <p>Contact Finder</p>
                        :
                        <p>Contact Owner</p>
                    }
                    <div className={styles.cardcontact}>
                        <div className={styles.cardcontactitem}>
                            <p className={styles.cardcontacttitle}>Email</p>
                        </div>
                    </div> 
                </div>

                <p className={styles.cardtext}>Posted {timeAgo}</p>
            </div>
        </div>
    );
}