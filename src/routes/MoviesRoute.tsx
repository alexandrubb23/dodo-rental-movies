import { useLoaderData, useParams } from 'react-router-dom';
import Movies from '../components/Movies/Movies';
import SortMovies from '../components/Movies/SortMovies';

import { MoviesInterface } from '../models/interfaces';
import { upperFirst } from '../utils/strings';

const MoviesRoute = () => {
  const { movies } = useLoaderData() as MoviesInterface;
  const { genre = null } = useParams();

  const title = genre ? `${upperFirst(genre)} Movies` : 'All Genres Movies';

  return (
    <>
      <hgroup>
        <h1 className='movies-genre__text'>{title}</h1>
      </hgroup>
      {movies.length > 1 && <SortMovies />}
      <Movies movies={movies} />
    </>
  );
};

export default MoviesRoute;
