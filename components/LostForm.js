import * as React from 'react';
import styles from '../styles/Home.module.css'
import Button from './Button';

export default function LostForm(props) {
    return (
        <div className={styles.cardform}>
          <div className={styles.columnflex}>
            <h1 className={styles.heading} style={{marginBottom: '2em'}}>Tell us more about your pet</h1>
          <form className={styles.cardform}>

            <div className={styles.petNameType}>
                <div className={styles.petName}>
                    <label for="petname">Pet's Name:</label>
                    <input type="text" id="petname" name="petname"></input>
                </div>
    
                <div className={styles.petType}>
                    <label for="pettype">Pet Type:</label>
                    <select id="text" name="pettype">
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                    </select>
                </div>
            </div>
            
            <div className={styles.breedColor}>
                <div className={styles.breed}>
                    <label for="breed">Breed:</label>
                    <input type="text" id="breed" name="breed"></input>
                </div>
                
                <div className={styles.color}>
                    <label for="color">Color:</label>
                    <input type="text" id="color" name="color"></input>
                </div>
            </div>
              
           
            <div className={styles.lastSeen}>
                <label for="lastseen">Last seen at:</label>
                <input type="text" id="location" name="location"></input>
            </div>
  
            <div className={styles.petDes}>
                <label for="petdescription">Pet Description:</label>
                <textarea className={styles.textArea}></textarea>
            </div>

            <div className={styles.contactInfo}>
                <label for="lastseen">Contact Info:</label>
                <textarea className={styles.textArea}></textarea>
            </div>
              <Button name='Create Post'></Button> 
          </form>
          </div>
        </div>
            
    );
}