import { useLoaderData } from 'react-router-dom';

import { Genres } from '../Genres';
import { GenresType } from '../../models/types';
import { GithubRepo } from '../common';

const Sidebar = () => {
  const { genres } = useLoaderData() as GenresType;

  const allGenres = [{ id: '', title: 'All Genres' }, ...genres];

  return (
    <div id='sidebar'>
      <h1>Dodo - Rental Movies</h1>
      <div>Filter by genre</div>
      <nav>
        <ul>
          <Genres genres={allGenres} />
        </ul>
      </nav>
      <div id='infos'>
        <GithubRepo />
      </div>
    </div>
  );
};

export default Sidebar;
