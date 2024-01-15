import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const API_URL = 'http://localhost:5000/api';

const EditMoviePage = () => {
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [stars, setStars] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [errorMessage, setErrorMessage] = useState(undefined);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${API_URL}/movies/${id}`)
            .then((response) => {
                const movie = response.data;
                setTitle(movie.title);
                setDirector(movie.director);
                setStars(movie.stars);
                setDescription(movie.description);
                setImage(movie.image);
            })
            .catch((err) => console.log('Error while retrieving movie: ', err));
    }, [id]);

    const handleFileUpload = (e) => {

        const uploadFile = new FormData();
        uploadFile.append('imageUrl', e.target.files[0])
        axios
            .post(`${API_URL}/upload`, uploadFile)
            .then((response) => {
                setImage(response.data.fileUrl)
            })
            .catch((err) => console.log('Error uploading file: ', err))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedMovie = { title, director, stars, description, image };

        axios
            .put(`${API_URL}/movies/${id}`, updatedMovie)
            .then((response) => {
                // console.log('updated movie: ', response.data)
                navigate(`/movies/${id}`)
            })
            .catch((err) => {
                console.log('Error while updating movie: ', err)
                const msg = err.response.data.message;
                setErrorMessage(msg)
            });

    }



    return (
        <div className='EditMoviePage'>
            <h3>Edit Movie</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title'>Title</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor='director'>Director</label>
                <input
                    type="text"
                    id="director"
                    value={director}
                    onChange={(e) => setDirector(e.target.value)}
                />
                <label htmlFor='actors'>Actors</label>
                <input
                    type="text"
                    id="actors"
                    placeholder='separate actors with comma'
                    value={stars}
                    onChange={(e) => setStars(e.target.value)}
                />
                <label htmlFor='description'>Description</label>
                <textarea
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label htmlFor='image'>click here to upload image
                    <input
                        type="file"
                        id="image"
                        onChange={(e) => handleFileUpload(e)}
                        hidden
                    />

                </label>

                <button type="submit">Update</button>
                {errorMessage && <p className='error'>{errorMessage}</p>}
            </form>
        </div>
    );
}

export default EditMoviePage;