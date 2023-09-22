import Image from 'next/image'
import styles from '@/styles/main.module.css'
import Link from 'next/link'
const Home = ()=> {

  
  return (
   
      <>
      <div className={styles.main}>

        <div className={styles.mainleft}>
          <h1>LET'S WATCH MOVIE TOGETHER</h1>
          <p>From award-winning dramas to blockbuster action movies, we've got you covered . <br /> Browse our selection of the latest and greatest movies,and find your new favorite<br />  today.</p>
         <Link href="/movie"><button>Explore Movies</button></Link> 
        </div>
        <div className={styles.mainright}>

          <Image src={'/vercel.svg'} alt='photo' width={500} height={500} />
        </div>

      </div>
    
      </>
  )
}
export default Home;
