import { MoviesInterface } from '../../models/interfaces';
import MovieCard from './MovieCard';
import SortMovies from './SortMovies';

const Movies = ({ movies }: MoviesInterface) => {
  if (movies.length === 0) {
    return <div className='no-movies'>No movies found.</div>;
  }

  return (
    <>
      <div className='movies-container'>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default Movies;
