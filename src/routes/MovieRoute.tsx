import { Movie } from '../models/interfaces';
import { MovieDetails } from '../components/Movies';
import { useLoaderData } from 'react-router-dom';

type MovieType = {
  movie: Movie;
};

const MovieRoute = () => {
  const { movie } = useLoaderData() as MovieType;

  return <MovieDetails movie={movie} />;
};

export default MovieRoute;
