import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const API_URL = 'http://localhost:5000';

const AddNewMoviePage = () => {
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [stars, setStars] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestBody = { title, director, stars, description, image };

        fetch(`${API_URL}/api/movies`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('data: ', data)
                if (data.message) {
                    const msg = data.message
                    setErrorMessage(msg);
                    return
                } else {
                    navigate(`/movies/${data._id}`)
                }
            })
            .catch((err) => console.log('Error: ', err));
    }

    return (
        <div className="AddNewMoviePage">
            <h3>Add Movie</h3>
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
                <label htmlFor='image'>Image</label>
                <input
                    type="text"
                    id="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <button type="submit">Add</button>
                {errorMessage && <p className='error'>{errorMessage}</p>}
            </form>
        </div>
    );
}

export default AddNewMoviePage;