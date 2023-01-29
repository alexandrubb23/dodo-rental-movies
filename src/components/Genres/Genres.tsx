import { Link, NavLink } from 'react-router-dom';

import { Genre } from '../../models/interfaces';

const Genres = ({ genres }: { genres: Genre[] }) => {
  return (
    <ul>
      {genres.map(({ id, title }) => {
        const path = id !== '' ? `movies/${title.toLowerCase()}` : '/';
        return (
          <li key={id}>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive ? 'active' : isPending ? 'pending' : ''
              }
              to={path}
            >
              {title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Genres;
