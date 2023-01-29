import { useNavigation } from 'react-router-dom';
import { MoviesInterface } from '../../models/interfaces';
import MovieCard from './MovieCard';

const Movies = ({ movies }: MoviesInterface) => {
  const navigation = useNavigation();

  if (movies.length === 0) {
    return <div className='no-movies'>No movies found.</div>;
  }

  if (navigation.state === 'loading') {
    return <div className='loader-dual__ring'></div>;
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
