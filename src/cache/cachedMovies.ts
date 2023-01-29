import { Movie } from '../models/interfaces';
import { getData, setData } from '../utils/localForage';

const cacheKey = 'movies';

export const saveMoviesInCache = (movies: Movie[]) => setData(cacheKey, movies);
export const getMoviesFromCache = async (): Promise<Movie[] | null> =>
  getData(cacheKey);
