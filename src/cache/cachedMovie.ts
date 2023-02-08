import { Movie } from '../models/interfaces';
import { getData, setData } from '../utils/localForage';

const cacheKey = 'movie';

export const saveMovieInCache = (id: string, movie: Movie) =>
  setData(id + cacheKey, movie);
export const getMovieFromCache = async (id: string): Promise<Movie | null> =>
  getData(id + cacheKey);
