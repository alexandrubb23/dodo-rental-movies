import { useLoaderData, useParams } from 'react-router-dom';

import { HeadingPageTitle } from '../components/common';
import { MoviesInterface } from '../models/interfaces';
import { upperFirst } from 'lodash/fp';
import Movies from '../components/Movies/Movies';

const MoviesRoute = () => {
  const { genre = null } = useParams();
  const { movies, totalMoviesCount } = useLoaderData() as MoviesInterface;

  const title = genre ? `${upperFirst(genre)} Movies` : 'All Genres Movies';

  return (
    <>
      <HeadingPageTitle title={title} />
      <Movies movies={movies} totalMoviesCount={totalMoviesCount} />
    </>
  );
};

export default MoviesRoute;
