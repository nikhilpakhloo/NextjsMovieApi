import React from 'react'
import Card from '../components/Card';
import styles from '@/styles/movie.module.css'

const page =async () => {
  const url = process.env.key;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b754417841msh08b4b0114fc7df9p1f58a2jsn7f6a0b7e116a',
      'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
    }
  };
  

    const response = await fetch(url, options)
    const result = await response.json();
    const main_data = result.movies
    // console.log("mydata",main_data)






  return (
    <>
    
    <section className={styles.card}>
    
    {main_data.map((movies)=>{
      return <Card key={movies.id} {...movies}/>
    }
   )}
   </section>



   
   

 
  
  
 
  
    
    
    </>
  )
}

export default page