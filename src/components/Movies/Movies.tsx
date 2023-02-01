import { useNavigationState } from '../../hooks';

import { MoviesInterface } from '../../models/interfaces';
import MoviesList from './MoviesList';

const Movies = ({ movies }: MoviesInterface) => {
  const navigationState = useNavigationState();

  if (movies.length === 0) {
    return <div className='no-movies'>No movies found.</div>;
  }

  if (navigationState.loading()) {
    return <div className='loader-dual__ring'></div>;
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
