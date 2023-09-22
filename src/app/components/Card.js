import styles from "@/styles/card.module.css"
import Image from "next/image";
import Link from "next/link";

const Card = (movies) => {
  const {_id, title,genres} = movies


  return (
    <>


      <div className={styles.card} >

        <img src={movies.poster_path} alt={title} />
        <h3>{title}</h3>
        <p className={styles.p}>{genres}</p>
        <Link href={`/movie/${_id}`}>

          <button>Read more</button>
        </Link>


      </div>






    </>
  )
}
export default Card;
