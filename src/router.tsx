import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from './components/common/ErrorPage';
import { loadGenres, loadAllMovies, loadMoviesByGenre } from './loaders';
import { MoviesRoute, RootRoute } from './routes';

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
    ],
  },
]);

export default router;
