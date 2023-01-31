import { useLoaderData, useParams } from 'react-router-dom';

import { HeadingPageTitle } from '../components/common';
import { MoviesInterface } from '../models/interfaces';
import { PaginateMovies } from '../components/Movies';
import { upperFirst } from 'lodash/fp';
import Movies from '../components/Movies/Movies';
import { SortingBy } from '../components/common';

const sortByFields = ['title', 'year', 'rating'];

const MoviesRoute = () => {
  const { genre = null } = useParams();
  const { movies, totalMoviesCount } = useLoaderData() as MoviesInterface;

  const title = genre ? `${upperFirst(genre)} Movies` : 'All Genres Movies';
  const hasMoreThanOneMovie = movies.length > 1;

  return (
    <>
      <HeadingPageTitle title={title} />
      <SortingBy data={sortByFields} showSorting={hasMoreThanOneMovie} />
      <Movies movies={movies} />
      <PaginateMovies totalMoviesCount={totalMoviesCount} />
    </>
  );
};

export default MoviesRoute;
