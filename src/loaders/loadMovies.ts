import { getAllMovies, getMoviesByGenre } from '../services/moviesService';

type LoadMoviesByGenreType = {
  params: {
    genre: string;
  };
};

export const loadAllMovies = async () => {
  const movies = await getAllMovies();

  return { movies };
};

export const loadMoviesByGenre = async ({ params }: LoadMoviesByGenreType) => {
  const movies = await getMoviesByGenre(params.genre);

  return { movies };
};
