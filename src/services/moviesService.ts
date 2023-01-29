import sortBy from 'sort-by';

import { getMoviesFromCache, saveMoviesInCache } from '../cache';
import { Movie } from '../models/interfaces';
import { MoviesParams } from '../models/interfaces/movies';
import { GetAllMovies } from '../models/types/movies';
import { fakeNetwork } from '../utils';
import http from './httpService';

const movieIncludesGenre = (genre: string) => (movie: Movie) =>
  movie.genres.includes(genre);

const sortMovies = (
  movies: Movie[],
  sortByFieldName?: string | null
): Movie[] => {
  if (!sortByFieldName) sortByFieldName = '-id';

  const compareFn = sortBy(sortByFieldName);

  return movies.sort(compareFn);
};

export const getAllMovies = async ({ sortByFieldName }: GetAllMovies) => {
  await fakeNetwork(`getMovies:${sortByFieldName}`);

  const { data } = await http.get('movies.json');
  let movies = data as Movie[];

  const sortedMovies = sortMovies(movies, sortByFieldName);

  await saveMoviesInCache(sortedMovies);

  return sortedMovies;
};

export const getMoviesByGenre = async ({
  genre,
  sortByFieldName,
}: MoviesParams) => {
  await fakeNetwork(`getMovies:${genre}`);

  let movies = await getMoviesFromCache();
  if (!movies) {
    movies = await getAllMovies({ sortByFieldName });
  } else {
    movies = sortMovies(movies, sortByFieldName);
  }

  return movies.filter(movieIncludesGenre(genre));
};
