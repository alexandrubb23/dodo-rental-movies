import { URL_QUERY_KEYS } from '../constants';
import { Movie } from '../models/interfaces';
import { MoviesParams } from '../models/interfaces/movies';
import { getAllMovies, getMoviesByGenre } from '../services/moviesService';
import { getUrl } from '../utils';

type ParamGenreType = {
  genre: string;
};

type RequestUrlType = {
  url: string;
};

interface RequestInterface {
  request: RequestUrlType;
}

type LoadMoviesByGenreType = {
  params: ParamGenreType;
  request: RequestUrlType;
};

const getSortByFieldName = (url: string) => {
  const { searchParams } = getUrl(url);
  return searchParams.get(URL_QUERY_KEYS.SORT_BY);
};

const loadMoviesFn = async (
  loadMovies: ({ genre, sortByFieldName }: MoviesParams) => Promise<Movie[]>,
  request: RequestUrlType,
  otherProps?: { [key: string]: any }
) => {
  const sortByFieldName = getSortByFieldName(request.url);

  const movies = await loadMovies({
    sortByFieldName,
    genre: '',
    ...otherProps,
  });

  return { movies };
};

export const loadAllMovies = async ({ request }: RequestInterface) => {
  return loadMoviesFn(getAllMovies, request);
};

export const loadMoviesByGenre = async ({
  params,
  request,
}: LoadMoviesByGenreType) => {
  const { genre } = params;
  return loadMoviesFn(getMoviesByGenre, request, { genre });
};
