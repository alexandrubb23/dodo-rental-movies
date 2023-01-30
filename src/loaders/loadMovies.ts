import { MOVIES_PAGE_SIZE, URL_QUERY_KEYS } from '../constants';
import { Movie } from '../models/interfaces';
import { MoviesParams } from '../models/interfaces/movies';
import { getAllMovies, getMoviesByGenre } from '../services/moviesService';
import { getPageNumber, getSearchParamNameFromUrl, paginate } from '../utils';

type ParamGenreType = {
  genre: string;
};

type RequestUrlType = {
  url: string;
};

type RequestType = {
  request: RequestUrlType;
};

type LoadMoviesByGenreType = {
  params: ParamGenreType;
  request: RequestUrlType;
};

const loadMoviesFn = async (
  loadMovies: ({ genre, sortByFieldName }: MoviesParams) => Promise<Movie[]>,
  request: RequestUrlType,
  otherProps?: { [key: string]: any }
) => {
  const { url } = request;
  const pageNumber = getPageNumber(url);
  const sortByFieldName = getSearchParamNameFromUrl(
    url,
    URL_QUERY_KEYS.SORT_BY
  );

  const movies = await loadMovies({
    sortByFieldName,
    genre: '',
    ...otherProps,
  });

  const paginatedMovies: Movie[] = paginate(
    movies,
    pageNumber,
    MOVIES_PAGE_SIZE
  );

  return { movies: paginatedMovies, totalMoviesCount: movies.length };
};

export const loadAllMovies = async ({ request }: RequestType) => {
  return loadMoviesFn(getAllMovies, request);
};

export const loadMoviesByGenre = async ({
  params,
  request,
}: LoadMoviesByGenreType) => {
  const { genre } = params;
  return loadMoviesFn(getMoviesByGenre, request, { genre });
};
