import { Genre } from '../models/interfaces';
import { getData, setData } from '../utils';

const cacheKey = 'genres';

export const saveGenresInCache = (movies: Genre[]) => setData(cacheKey, movies);
export const getGenresFromCache = async (): Promise<Genre[] | null> =>
  getData(cacheKey);
