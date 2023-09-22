import styles from "@/styles/main.module.css"
import Image from 'next/image'

export default function page() {
  return (
    <>
    <div className={styles.main}>

      <div className={styles.mainleft}>
        <h1>OUR STORY</h1>
        <p>From award-winning dramas to blockbuster action movies, we've got you covered . <br /> Browse our selection of the latest and greatest movies,and find your new favorite<br />  today.</p>
        <button>Explore Movies</button>
      </div>
      <div className={styles.mainright}>

        <Image src={'/vercel.svg'} alt='photo' width={500} height={500} />
      </div>

    </div>
  
    </>
  )
}
