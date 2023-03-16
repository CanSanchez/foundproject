import * as React from 'react';
import styles from '../styles/Form.module.css'
import Button from './Button';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import neighbourhoods from '@/data/neighbourhood';

export default function FormComponent({ onSubmit, type }) {

    const [petType, setPetType] = useState('');
    const [petName, setPetName] = useState();
    const [petColor, setPetColor] = useState('');
    const [petBreed, setPetBreed] = useState('');
    const [lastLocation, setLastLocation] = useState('');
    const [contactPhone, setPhone] = useState('');
    const [contactEmail, setEmail] = useState('');
    const [petDescription, setDescription] = useState('');
    const [petImage, setImage] = useState('');

    const [formType, setFormType] = useState(type);
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();

    const [selectedImage, setSelectedImage] = useState(null);

    console.log(lastLocation, latitude, longitude, petImage);

    // console.log(petType, petName, petColor, petBreed, lastLocation.neighbourhood, contactPhone, contactEmail, petDescription, petImage, formType, lastLocation.latitude, lastLocation.longitude);

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
            latitude,
            longitude
        });
    };

//   upload image to public folder

    const handleImageUpload = () => {

        const formData = new FormData();
        formData.append('file', selectedImage);
        formData.append('upload_preset', 'foundproject');

        axios.post('https://api.cloudinary.com/v1_1/djhxv0heo/image/upload', formData).then((res) => {
            console.log(res.data.secure_url);
            setImage(res.data.secure_url);
        });
    }

    
    useEffect(() => {
        getLocation();
    }, [lastLocation]);

   //get lastlocation and match it to the neighbourhoods array
    const getLocation = () => {
        neighbourhoods.find((neighbourhood) => {
            if (neighbourhood.neighbourhood === lastLocation) {
                setLatitude(neighbourhood.lat);
                setLongitude(neighbourhood.lng);
            }
        });
    }
 
    return (
          <div className={styles.columnflex}>
            {formType === 'lost' ? <h1 className={styles.heading}>Tell us more about your pet</h1> : <h1 className={styles.heading}>Tell us about the pet you found</h1>}
            <form className={styles.cardform} onSubmit={handleSubmit}>
                <div className={styles.uploadfield}>
                    <div className={styles.upload}>
                       {
                            selectedImage ? <img src={URL.createObjectURL(selectedImage)} alt="pet" className={styles.uploadimg}/> : <label htmlFor="img" className={styles.uploadlabel}>Upload a photo of your pet</label>
                       }
                    </div>
                    <input type="file" id="img" name="img" accept="image/*" required
                        onChange={
                            (e) => setSelectedImage(e.target.files[0])
                        }/>
                    <Button name="Upload Photo" onClick={handleImageUpload} />
                </div>

                <div className={styles.field}>
                    
                    <select value={petType}
                        onChange={(e) => setPetType(e.target.value)}
                        id="text" name="pettype">
                        <option value=""></option>
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
             {/* create an autocomplete aria */}
                
                <select value={lastLocation} id="location" name="location" required
                     onChange={(e) => setLastLocation(e.target.value)}>
                    <option value=""></option>
                    {neighbourhoods.map((neighbourhood) => (
                        <option key={neighbourhood.neighbourhood} value={neighbourhood.neighbourhood}>
                            {neighbourhood.neighbourhood}
                        </option>
                    ))}
                </select>
                <label htmlFor='location'>Last seen</label>
            </div>

            
            <div className={styles.field}>
            <input type="number" id="phone" name="phone" required

                value={contactPhone} onChange={(e) => setPhone(e.target.value)}/>
                <label htmlFor='phone'>Phone number</label>
            </div>
            <div className={styles.field}>
                <input type="text" id="email" name="email" required 
                    value={contactEmail} onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor='email'>Email</label>
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