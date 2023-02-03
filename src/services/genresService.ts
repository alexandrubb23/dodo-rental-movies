import { Genre } from '../models/interfaces';
import http from './httpService';
import { getGenresFromCache, saveGenresInCache } from '../cache/cachedGenres';
import { fakeNetwork } from '../utils';
import { orderBy } from 'lodash';

export const getGenres = async (): Promise<Genre[]> => {
  await fakeNetwork(`getGenres`);

  let genres = await getGenresFromCache();
  if (!genres) {
    const { data } = await http.get('genres');
    genres = data as Genre[];
  }

  const sortedGenres = orderBy(genres, ['title']);

  await saveGenresInCache(sortedGenres);

  return sortedGenres;
};
