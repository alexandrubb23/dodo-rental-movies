import { NavLink } from 'react-router-dom';

import { Movie } from '../../models/interfaces';

const MovieCrew = ({ crew }: Pick<Movie, 'crew'>) => {
  return (
    <ul>
      {Object.entries(crew).map(([key, value]) => {
        return (
          <li key={key}>
            <span className='crew-category'>{key}:</span>
            {value.map(item => (
              <NavLink key={item} to={''}>
                {item}
              </NavLink>
            ))}
          </li>
        );
      })}
    </ul>
  );
};

export default MovieCrew;
