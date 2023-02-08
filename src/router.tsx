import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from './components/common/ErrorPage';
import {
  loadGenres,
  loadMovie,
  loadAllMovies,
  loadMoviesByGenre,
} from './loaders';
import { MovieRoute, MoviesRoute, RootRoute } from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootRoute />,
    errorElement: <ErrorPage />,
    loader: loadGenres,
    children: [
      {
        element: <MoviesRoute />,
        loader: loadAllMovies,
        path: '/',
      },
      {
        element: <MoviesRoute />,
        loader: loadMoviesByGenre,
        path: 'movies/:genre',
      },
      {
        element: <MovieRoute />,
        loader: loadMovie,
        path: 'title/:id',
      },
    ],
  },
]);

export default router;
