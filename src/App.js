import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import EditMoviePage from './pages/EditMoviePage';
import AddNewMoviePage from './pages/AddNewMoviePage';
import RandomMoviePage from './pages/RandomMoviePage';




const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="add-movie" element={<AddNewMoviePage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
        <Route path="/movies/edit/:id" element={<EditMoviePage />} />
        <Route path="random-movie" element={<RandomMoviePage />} />

      </Routes>
    </div>
  );
}

export default App;
