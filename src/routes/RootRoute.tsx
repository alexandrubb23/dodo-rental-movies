import { useLoaderData, Outlet } from 'react-router-dom';

import { Genres } from '../components/Genres';
import { GenresType } from '../models/types';
import { GithubRepo } from '../components/common';

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
          <GithubRepo />
        </div>
      </div>
      <div id='content'>
        <Outlet />
      </div>
    </>
  );
};

export default RootRoute;
