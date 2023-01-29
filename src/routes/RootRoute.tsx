import { useLoaderData, Outlet } from 'react-router-dom';
import { GitHubIcon } from '../assets/icons';

import { Genres } from '../components/Genres';
import { GenresType } from '../models/types';

const RootRoute = () => {
  const { genres } = useLoaderData() as GenresType;

  return (
    <>
      <div id='sidebar'>
        <h1>Dodo - Rental Movies</h1>
        <div>Filter by genre</div>
        <nav>
          <ul>
            <Genres genres={[{ id: '', title: 'All Genres' }, ...genres]} />
          </ul>
        </nav>
        <div id='infos'>
          <a href='https://github.com/alexandrubb23/dodo-rental-movies'>
            <GitHubIcon />
            Github
          </a>
        </div>
      </div>
      <div id='content'>
        <Outlet />
      </div>
    </>
  );
};

export default RootRoute;
