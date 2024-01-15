/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';


const API_URL = 'http://localhost:5000/api';

const MovieDetailsPage = () => {
    const [movie, setMovie] = useState(null);
    const [errorMessage, setErrorMessage] = useState(undefined);

    const { id } = useParams();

    const getMovie = async () => {

        try {
            const response = await axios.get(`${API_URL}/movies/${id}`)
            setMovie(response.data)
        } catch (err) {
            console.log('Error while retrieving movie: ', err)
            const msg = err.response.data.message;
            setErrorMessage(msg);
        }
    }

    useEffect(() => {
        getMovie();
    }, [id])



    return (
        <div className='MovieDetailsPage'>
            {errorMessage && <h2 className='error'>{errorMessage}</h2>}

            {movie && <MovieCard key={movie._id} movie={movie} />}
        </div>
    );
}

export default MovieDetailsPage;