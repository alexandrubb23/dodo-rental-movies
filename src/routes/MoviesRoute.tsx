import { useLoaderData, useParams } from 'react-router-dom';

import { HeadingPageTitle } from '../components/common';
import { MoviesInterface } from '../models/interfaces';
import { upperFirst } from '../utils/strings';
import Movies from '../components/Movies/Movies';
import SortMovies from '../components/Movies/SortMovies';

const MoviesRoute = () => {
  const { movies } = useLoaderData() as MoviesInterface;
  const { genre = null } = useParams();

  const title = genre ? `${upperFirst(genre)} Movies` : 'All Genres Movies';

  return (
    <>
      <HeadingPageTitle title={title} />
      {movies.length > 1 && <SortMovies />}
      <Movies movies={movies} />
    </>
  );
};

export default MoviesRoute;
