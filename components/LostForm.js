import * as React from 'react';
import styles from '../styles/Form.module.css'
import Button from './Button';
import { useRouter } from 'next/router';
import { useState } from 'react';


export default function LostForm({ onSubmit }) {

    const [petType, setPetType] = useState('Dog');
    const [petName, setPetName] = useState();
    const [petColor, setPetColor] = useState('');
    const [petBreed, setPetBreed] = useState('');
    const [lastLocation, setLastLocation] = useState('');
    const [contactPhone, setPhone] = useState('');
    const [contactEmail, setEmail] = useState('');
    const [petDescription, setDescription] = useState('');
    const [petImage, setImage] = useState('https://place.dog/300/200');
    const [title, setTitle] = useState('Lost Pet');

    console.log(petType, petName, petColor, petBreed, lastLocation, contactPhone, contactEmail, petDescription, petImage, title);

    const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();
        await onSubmit({
            petType,
            petName,
            petColor,
            petBreed,
            lastLocation,
            contactPhone,
            contactEmail,
            petDescription,
            petImage,
            title
        });
    };

    return (
          <div className={styles.columnflex}>
            
            <form className={styles.cardform} onSubmit={handleSubmit}>
                <div className={styles.field}>
                    
                    <select value={petType}
                        onChange={(e) => setPetType(e.target.value)}
                        id="text" name="pettype">
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                    </select>
                    <label htmlFor='pettype'>Pet Type</label>

                </div>
                <div className={styles.field}>
                    <input type="text" id="petname" name="petname" required 
                        value={petName} onChange={(e) => setPetName(e.target.value)}/>
                    <label htmlFor='petname'>Pet's Name</label>   
                </div> 
                <div className={styles.field}>  
                
                    <input type="text" id="color" name="color" required
                        value={petColor} onChange={(e) => setPetColor(e.target.value)} />
                    <label htmlFor='color'>Color</label>
                
                </div>
            <div className={styles.field}>
                <input type="text" id="breed" name="breed" required 
                    value={petBreed} onChange={(e) => setPetBreed(e.target.value)}/>  
                <label htmlFor='breed'>Breed</label>
            </div>
    

            <div className={styles.field}>
                <input type="text" id="location" name="location" required
                    value={lastLocation} onChange={(e) => setLastLocation(e.target.value)}/>
                <label htmlFor='location'>Last seen</label>
            </div>

            
            <div className={styles.field}>
            <input type="phone" id="phone" name="phone" required 
                value={contactPhone} onChange={(e) => setPhone(e.target.value)}/>
                <label htmlFor='phone'>Phone number (optional)</label>
            </div>
            <div className={styles.field}>
                <input type="text" id="email" name="email" required 
                    value={contactEmail} onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor='email'>Email (optional)</label>
            </div>
            <div className={styles.field}>
                <textarea id='description' required
                    value={petDescription} onChange={(e) => setDescription(e.target.value)}></textarea>
                <label htmlFor='description'>Pet Description:</label>
            </div>

            <span style={{alignSelf: 'center'}}>
                <Button name='Create Post'></Button> 
            </span>
            </form>
          </div>
    );
}