import styles from '@/styles/moviedetails.module.css'

const page = async ({ params }) => {
    const id = params.id
    const url = `https://movies-api14.p.rapidapi.com/show/${id}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b754417841msh08b4b0114fc7df9p1f58a2jsn7f6a0b7e116a',
            'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
        }
    };


    const response = await fetch(url, options)
    const result = await response.json();

    const main_data = result.show
    const seasondata = result.seasons
    console.log("Season", seasondata)
    const videoId = main_data.youtube_trailer.split('v=')[1];


    return (
        <>
            <div className={styles.container}>


                <iframe width={1000} height={500} src={`https://www.youtube.com/embed/${videoId}`}></iframe>
                <h1>Movie Name: {main_data.title}</h1>









            </div>
        </>

    )
}
export default page;