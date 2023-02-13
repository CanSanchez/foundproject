import * as React from 'react';
import styles from '../styles/Form.module.css'
import Button from './Button';

export default function LostForm(props) {
    return (
          <div className={styles.columnflex}>
            <h1 className={styles.heading} style={{marginBottom: '1em'}}>Tell us more about your pet</h1>
            <form className={styles.cardform}>
            <div className={styles.field}>
                    
                    <select id="text" name="pettype">
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                    </select>
                    <label for="pettype">Pet Type</label>
                </div>
                <div className={styles.field}>
                    <input type="text" id="petname" name="petname" required></input>
                    <label for="petname">Pet's Name</label>   
                    
                    
                </div>
                    
                
             <div className={styles.field}>  
                
                <input type="text" id="color" name="color" required></input>
                <label for="color">Color</label>
                
            </div>
            <div className={styles.field}>
                <input type="text" id="breed" name="breed" required></input>  
                <label for="breed">Breed</label>
            </div>
    

            <div className={styles.field}>
                <input type="text" id="location" name="location" required></input>
                <label for="location">Last seen</label>
            </div>

            
            <div className={styles.field}>
            <input type="phone" id="phone" name="phone" required></input>
                <label for="phone">Phone number (optional)</label>
            </div>
            <div className={styles.field}>
                <input type="text" id="email" name="email" required></input>
                <label for="email">Email (optional)</label>
            </div>
            <div className={styles.field}>
                <textarea id='description' required></textarea>
                <label for="description">Pet Description:</label>
            </div>

            <span style={{alignSelf: 'center'}}>
                <Button name='Create Post'></Button> 
            </span>
            </form>
          </div>
            
    );
}