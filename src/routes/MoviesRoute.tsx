import { useLoaderData, useParams } from 'react-router-dom';

import {
  HeadingPageTitle,
  OrderDirection,
  OrderField,
} from '../components/common';
import { orderBy } from 'lodash';
import { Movie, MoviesInterface } from '../models/interfaces';
import { MOVIES_PAGE_SIZE } from '../constants';
import { OrderByField } from '../models/types/movies';
import { OrderDirectionType } from '../models/types';
import { paginate } from '../utils';
import { upperFirst } from 'lodash/fp';
import { useNavigationState } from '../hooks';
import { useState, useEffect, useCallback } from 'react';
import Movies from '../components/Movies/Movies';
import Pagination from '../components/common/Pagination';

const sortByFields: OrderByField[] = ['year', 'title', 'rating'];
const orderDirections: OrderDirectionType[] = ['desc', 'asc'];

const defaultPageNumber = 1;
const defaultOrderByField = 'year';
const defaultOrderDirection = 'desc';

const MoviesRoute = () => {
  const { genre } = useParams();
  const { loading } = useNavigationState();
  const { movies } = useLoaderData() as MoviesInterface;

  const [pageNumber, setPageNumber] = useState(defaultPageNumber);
  const [orderByField, setOrderByField] =
    useState<OrderByField>(defaultOrderByField);
  const [orderDirection, setOrderDirection] = useState<OrderDirectionType>(
    defaultOrderDirection
  );
  const [paginatedMovies, setPaginatedMovies] = useState<Movie[]>([]);

  const initStates = useCallback(() => {
    setPageNumber(defaultPageNumber);
    setOrderByField(defaultOrderByField);
    setOrderDirection(defaultOrderDirection);
    setPaginatedMovies(movies);
  }, [movies]);

  useEffect(() => {
    initStates();
  }, [initStates]);

  const title = genre ? `${upperFirst(genre)} Movies` : 'All Genres Movies';
  const hasMoreThanOneMovie = movies.length > 1;

  const sortMovies = (
    movies: Movie[],
    fieldName: OrderByField,
    direction: OrderDirectionType
  ): Movie[] => orderBy(movies, [fieldName], [direction]);

  const handleOrderByFieldName = (fieldName: OrderByField) => {
    const sortedMovies = sortMovies(paginatedMovies, fieldName, orderDirection);

    setOrderByField(fieldName);
    setPaginatedMovies(sortedMovies);
  };

  const handleOrderDirection = (orderDirection: OrderDirectionType) => {
    const sortedMovies = sortMovies(
      paginatedMovies,
      orderByField,
      orderDirection
    );

    setOrderDirection(orderDirection);
    setPaginatedMovies(sortedMovies);
  };

  const handlePageChange = (pageNumber: number) => {
    const paginatedMovies: Movie[] = paginate(
      movies,
      pageNumber,
      MOVIES_PAGE_SIZE
    );

    const orderedMovies = sortMovies(
      paginatedMovies,
      orderByField,
      orderDirection
    );

    setPageNumber(pageNumber);
    setPaginatedMovies(orderedMovies);
  };

  return (
    <>
      <HeadingPageTitle title={title} />
      {hasMoreThanOneMovie && !loading() && (
        <>
          <OrderField
            currentField={orderByField}
            data={sortByFields}
            onClick={handleOrderByFieldName}
          />
          <OrderDirection
            currentField={orderDirection}
            data={orderDirections}
            onClick={handleOrderDirection}
          />
        </>
      )}

      <Movies movies={paginatedMovies} />
      {!loading() && (
        <Pagination
          currentPage={pageNumber}
          itemsCount={movies.length}
          onPageChange={handlePageChange}
          pageSize={MOVIES_PAGE_SIZE}
        />
      )}
    </>
  );
};

export default MoviesRoute;
