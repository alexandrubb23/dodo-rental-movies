import { useParams } from 'react-router-dom';
import { useEffect, useCallback, useReducer } from 'react';
import { orderBy, upperFirst } from 'lodash';

import { HeadingPageTitle, OrderDirection, OrderField } from '../common';
import { Movie, MoviesInterface } from '../../models/interfaces';
import { MOVIES_PAGE_SIZE } from '../../constants';
import { OrderByField } from '../../models/types/movies';
import { OrderDirectionType } from '../../models/types';
import { paginate } from '../../utils';
import { useNavigationState } from '../../hooks';
import Movies from './Movies';
import Pagination from '../common/Pagination';

const sortByFields: OrderByField[] = ['year', 'title', 'rating'];
const orderDirections: OrderDirectionType[] = ['desc', 'asc'];

const defaultPageNumber = 1;
const defaultOrderByField = 'year';
const defaultOrderDirection = 'desc';

interface MoviesListState {
  pageNumber: number;
  orderByField: OrderByField;
  orderDirection: OrderDirectionType;
  paginatedMovies: Movie[];
}

const MoviesList = ({ movies }: MoviesInterface) => {
  const { genre } = useParams();
  const navigationState = useNavigationState();

  const initialMoviesState: MoviesListState = {
    pageNumber: defaultPageNumber,
    orderByField: defaultOrderByField,
    orderDirection: defaultOrderDirection,
    paginatedMovies: movies,
  };

  const [moviesListState, setMoviesListState] = useReducer(
    (prev: MoviesListState, next: Partial<MoviesListState>) => ({
      ...prev,
      ...next,
    }),
    initialMoviesState
  );

  const loadMovies = useCallback(() => {
    setMoviesListState({ ...initialMoviesState });
  }, [movies]);

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  const title = genre ? `${upperFirst(genre)} Movies` : 'All Genres Movies';

  const sortMovies = (
    movies: Movie[],
    fieldName: OrderByField,
    direction: OrderDirectionType
  ): Movie[] => orderBy(movies, [fieldName], [direction]);

  const handleOrderByFieldName = (fieldName: OrderByField) => {
    const sortedMovies = sortMovies(
      moviesListState.paginatedMovies,
      fieldName,
      moviesListState.orderDirection
    );

    setMoviesListState({
      orderByField: fieldName,
      paginatedMovies: sortedMovies,
    });
  };

  const handleOrderDirection = (orderDirection: OrderDirectionType) => {
    const sortedMovies = sortMovies(
      moviesListState.paginatedMovies,
      moviesListState.orderByField,
      orderDirection
    );

    setMoviesListState({ orderDirection, paginatedMovies: sortedMovies });
  };

  const handlePageChange = (pageNumber: number) => {
    const paginatedMovies: Movie[] = paginate(
      movies,
      pageNumber,
      MOVIES_PAGE_SIZE
    );

    const orderedMovies = sortMovies(
      paginatedMovies,
      moviesListState.orderByField,
      moviesListState.orderDirection
    );

    setMoviesListState({ pageNumber, paginatedMovies: orderedMovies });
  };

  if (navigationState.loading()) {
    return <div className='loader-dual__ring'></div>;
  }

  return (
    <>
      <HeadingPageTitle title={title} />
      {movies.length > 1 && (
        <>
          <OrderField
            currentField={moviesListState.orderByField}
            data={sortByFields}
            onClick={handleOrderByFieldName}
          />
          <OrderDirection
            currentField={moviesListState.orderDirection}
            data={orderDirections}
            onClick={handleOrderDirection}
          />
        </>
      )}

      <Movies movies={moviesListState.paginatedMovies} />
      <Pagination
        currentPage={moviesListState.pageNumber}
        itemsCount={movies.length}
        onPageChange={handlePageChange}
        pageSize={MOVIES_PAGE_SIZE}
      />
    </>
  );
};

export default MoviesList;
