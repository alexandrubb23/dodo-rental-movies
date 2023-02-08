import { MoviesInterface } from '../../models/interfaces';
import MoviesCardList from './MoviesCardList';

const Movies = ({ movies }: MoviesInterface) => {
  if (movies.length === 0) {
    return <div className='no-movies'>No movies found.</div>;
  }

  return (
    <>
      <div className='movies-container'>
        <MoviesCardList movies={movies} />
      </div>
    </>
  );
};

export default Movies;
