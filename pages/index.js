import axios from 'axios'
import styles from '../styles/Home.module.css'

export default function Home() {
  async function getName(){
    const resposse =await axios.get('/api/hello') 
    console.log(resposse)
  }
  return (
    <div className={styles.container}>
      <button onClick={getName}>Get Name</button>
    </div>
  )
}
