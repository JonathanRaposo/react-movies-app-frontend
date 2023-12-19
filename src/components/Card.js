import { Link } from 'react-router-dom';



const Card = ({ movie }) => {

    return (
        <div className="Card">
            <Link to={`/movies/${movie._id}`}>
                <img src={movie.image} alt="poster" />
            </Link>
            <h3>{movie.title}</h3>
            <Link to={`/movies/${movie._id}`} className='details-link'>See more</Link>
        </div>
    );
}

export default Card;