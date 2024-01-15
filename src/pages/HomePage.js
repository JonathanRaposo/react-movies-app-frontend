/* eslint-disable react-hooks/exhaustive-deps */
import Card from '../components/Card';
import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';


const API_URL = 'http://localhost:5000/api';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [errorMessage, setErrorMessage] = useState(undefined);

    const getAllMovies = async () => {
        try {
            const response = await fetch(`${API_URL}/movies`)
            const data = await response.json();
            setMovies(data);

        } catch (err) {
            console.log('Error', err)
        }
    }

    useEffect(() => {
        getAllMovies()
    }, []);


    const getTerm = (e) => {
        setQuery(e.target.value);
    }
    const searchMovie = async () => {


        try {
            const response = await fetch(`${API_URL}/movies/search?q=${query}`)
            const data = await response.json();
            // console.log('data: ', data)
            if (data.message) {
                const msg = data.message;
                setErrorMessage(msg)
                return;
            }
            else {
                setMovies(data);
                setErrorMessage(undefined)
            }
        } catch (err) {
            console.log('Error: ', err);
        }
    }


    return (

        <div className='HomePage'>
            <h1>Movies</h1>
            <SearchBar handleQuery={getTerm} handleSearch={searchMovie} />

            {errorMessage && <h2>{errorMessage}</h2>}
            <div className="movieList-container">

                {movies && movies.map((movie) => <Card key={movie._id} movie={movie} />)}

            </div>
        </div>

    );
}

export default HomePage;