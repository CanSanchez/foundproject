import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Button from '../components/Button'


const inter = Inter({ subsets: ['latin'] })

export default function LostPage() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.wrappercolumn}>
          <h1 className={styles.heading}>Tell us more about your pet</h1>
        <br></br>
        <div className={styles.form}>
        <form>
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

            <label for="lastseen">Pet Description and Contact Info:</label>
            <textarea></textarea>
        </form>
        </div>
          <Button name='Create Post'></Button>
          
        </div>
      </main>
    </>
  )
}