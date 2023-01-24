import * as React from 'react';
import styles from '../styles/Home.module.css'
import Button from './Button';

export default function LostForm(props) {
    return (
          <div className={styles.columnflex}>
            <h1 className={styles.heading} style={{marginBottom: '2em'}}>Tell us more about your pet</h1>
          <form className={styles.cardform}>
              <label for="petname">Pet's Name:</label>
              <input type="text" id="petname" name="petname"></input>
  
              <label for="pettype">Pet Type:</label>
              <select id="text" name="pettype">
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
              </select>
  
              <label for="color">Color:</label>
              <input type="text" id="color" name="color"></input>
  
              <label for="breed">Breed:</label>
              <input type="text" id="breed" name="breed"></input>
  
              <label for="lastseen">Last seen at:</label>
              <input type="text" id="location" name="location"></input>
  
              <label for="lastseen">Pet Description:</label>
              <textarea></textarea>

              <label for="lastseen">Contact Info:</label>
              <textarea></textarea>
              <Button name='Create Post'></Button> 
          </form>
          </div>
            
    );
}