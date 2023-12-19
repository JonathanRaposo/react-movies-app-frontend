import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/add-movie">Add movie</Link>
                </li>
                <li>
                    <Link to="/random-movie">Random movie</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;