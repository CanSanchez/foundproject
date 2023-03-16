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
            setTimeAgo(diffDays + (diffDays > 1 ? ' days ago' : ' day ago'));
        } else if (diffHours > 0) {
            setTimeAgo(diffHours + (diffHours > 1 ? ' hours ago' : ' hour ago'));
        } else if (diffMinutes > 0) {
            setTimeAgo(diffMinutes + (diffMinutes > 1 ? ' minutes ago' : ' minute ago'));
        } else {
            setTimeAgo(diffSeconds + (diffSeconds > 1 ? ' seconds ago' : ' second ago'));
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
                <div className={styles.cardcontact}>
                    {
                        props.formtype === 'found' ?
                        <p>Contact Finder</p>
                        :
                        <p>Contact Owner</p>
                    }
                    <div className={styles.flexrow}>
                        <a href={`tel:${props.phone}`}>
                            <div className={styles.cardcontactitem}>
                                <Image src="/icons/call.png" alt="Phone Icon" width={25} height={25} />
                                <p>Call</p>
                            </div>
                        </a>
                        <a href={`mailto:${props.email}`}>
                            <div className={styles.cardcontactitem}>
                                <Image src="/icons/email.png" alt="Email Icon" width={25} height={25} />
                                <p>Email</p>
                            </div>
                        </a>
                    </div>
                </div>
                <p className={styles.timestamp}>Posted {timeAgo}</p>
            </div>
        </div>
    );
}