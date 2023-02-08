import { fakeNetwork } from '../utils';
import {
  getMoviesFromCache,
  saveMovieInCache,
  saveMoviesInCache,
} from '../cache';
import { Movie } from '../models/interfaces';
import http from './httpService';
import { orderBy } from 'lodash';
import { getMovieFromCache } from '../cache/cachedMovie';
import { AxiosError } from 'axios';

const movieIncludesGenre = (genre: string) => (movie: Movie) =>
  movie.genres.includes(genre);

const sortMoviesByFieldName = (movies: Movie[]): Movie[] =>
  orderBy(movies, ['year'], ['desc']);

export const getAllMovies = async () => {
  await fakeNetwork('getMovies');

  // TODO: Can be improved by getting from the cache.
  const { data } = await http.get('movies');
  let movies = data as Movie[];

  const sortedMovies = sortMoviesByFieldName(movies);

  await saveMoviesInCache(sortedMovies);

  return sortedMovies;
};

export const getMoviesByGenre = async (genre: string) => {
  await fakeNetwork(`getMovies:${genre}`);

  let movies = await getMoviesFromCache();
  if (!movies) {
    movies = await getAllMovies();
  } else {
    movies = sortMoviesByFieldName(movies);
  }

  const filteredByGenre = movies.filter(movieIncludesGenre(genre));

  return filteredByGenre;
};

export const getMovie = async (id: string) => {
  await fakeNetwork(`getMovie:${id}`);

  const movie = await getMovieFromCache(id);
  if (movie) return movie;

  try {
    const response = await http.get(`movies/title/${id}`);
    const movie = response.data as Movie;

    await saveMovieInCache(id, movie);

    return movie;
  } catch (ex) {
    if (!(ex instanceof AxiosError)) throw ex;

    throw new Response('Not found', {
      statusText: 'The requested movie was not found!',
      status: ex.response?.status,
    });
  }
};
