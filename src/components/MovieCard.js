import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import noImageIcon from '../assets/images/no-image-1.png';

const API_URL = 'http://localhost:5000';

const MovieCard = ({ movie }) => {
    const [oneMovie, setOneMovie] = useState(movie);
    const [message, setMessage] = useState(undefined);

    const navigate = useNavigate();

    const deleteMovie = () => {

        fetch(`${API_URL}/api/movies/${oneMovie._id}`, { method: 'DELETE' })
            .then((response) => response.json())
            .then((data) => {
                setOneMovie(null)
                setMessage(data.message)
                setTimeout(() => {
                    navigate('/')
                }, 1000)
            })
            .catch((err) => console.log('Error while deleting movie: ', err))

    }

    return (

        <div className='MovieCard'>
            {message && <h2>{message}</h2>}
            {oneMovie && (
                <div className='content-wrapper'>
                    <img
                        src={oneMovie.image ? oneMovie.image : noImageIcon}
                        alt="poster"
                    />
                    <div>
                        <Link to={`/`} className='back-link'>back</Link>
                        <h1>{oneMovie.title}</h1>
                        <h3>Director: {oneMovie.director}</h3>
                        <h4>Stars</h4>
                        <ul>
                            {oneMovie.stars.map((star, i) => <li key={i}>{star}</li>)}
                        </ul>
                        <p>{oneMovie.description}</p>

                        <Link to={`/movies/edit/${oneMovie._id}`} className='update-link'>
                            update |
                        </Link>
                        <button onClick={deleteMovie} className='delete-btn'>
                            delete
                        </button>

                    </div>
                </div>
            )}

        </div>
    );
}
export default MovieCard;