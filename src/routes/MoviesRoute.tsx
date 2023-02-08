import { useLoaderData } from 'react-router-dom';

import { MoviesInterface } from '../models/interfaces';
import MoviesList from '../components/Movies/MoviesList';

const MoviesRoute = () => {
  const { movies } = useLoaderData() as MoviesInterface;

  return <MoviesList movies={movies} />;
};

export default MoviesRoute;
