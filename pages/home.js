import Map from '../components/map/';
import styles from '@/styles/Home.module.css'

export default function Home() {
  
  return (
    <main className={styles.home}>
        <div className={styles.wrappercolumn}>
            <Map />
        </div>
    </main>
)
}