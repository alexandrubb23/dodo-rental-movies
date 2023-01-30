import { MoviesInterface } from '../../models/interfaces';
import MovieCard from './MovieCard';

const MoviesList = ({ movies }: MoviesInterface) => {
  return (
    <>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </>
  );
};

export default MoviesList;
