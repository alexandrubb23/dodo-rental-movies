import {
  getAllMovies,
  getMovie,
  getMoviesByGenre,
} from '../services/moviesService';

type Params = {
  params: {
    [key: string]: string | undefined;
  };
};

export const loadAllMovies = async () => {
  const movies = await getAllMovies();

  return { movies };
};

export const loadMoviesByGenre = async ({ params }: Params) => {
  const movies = await getMoviesByGenre(params.genre as string);

  return { movies };
};

export const loadMovie = async ({ params }: Params) => {
  const movie = await getMovie(params.id as string);

  return { movie };
};
