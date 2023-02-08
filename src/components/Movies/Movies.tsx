import { MoviesInterface } from '../../models/interfaces';
import MoviesList from './MoviesList';

const Movies = ({ movies }: MoviesInterface) => {
  if (movies.length === 0) {
    return <div className='no-movies'>No movies found.</div>;
  }

  return (
    <>
      <div className='movies-container'>
        <MoviesList movies={movies} />
      </div>
    </>
  );
};

export default Movies;
