import { MoviesInterface } from '../../models/interfaces';
import MovieCard from './MovieCard';

const MoviesCardList = ({ movies }: MoviesInterface) => {
  return (
    <>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </>
  );
};

export default MoviesCardList;
