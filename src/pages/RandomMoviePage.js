
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';


const API_URL = 'http://localhost:5000/api';

const RandomMoviePage = () => {
    const [movie, setMovie] = useState({});
    const getRandomMovie = async () => {
        try {
            const response = await axios.get(`${API_URL}/movies/random`);
            setMovie(response.data)
        } catch (err) {
            console.log('Error while getting random movie: ', err)
        }


    }

    useEffect(() => {
        getRandomMovie();
    }, [])

    return (

        <div className='MovieCard'>

            <div className='content-wrapper'>
                <img src={movie.image} alt="poster" />
                <div>
                    <Link to={`/`} className='back-link'>back</Link>
                    <h1>{movie.title}</h1>
                    <h3>Director: {movie.director}</h3>
                    <h4>Stars</h4>
                    <ul>
                        {movie.stars && movie.stars.map((star, i) => <li key={i}>{star}</li>)}
                    </ul>
                    <p>{movie.description}</p>
                </div>
            </div>
        </div>
    );
}

export default RandomMoviePage;