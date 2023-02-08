import { useNavigate } from 'react-router-dom';

import { URI_PATHS } from '../../constants';
import { UnorderedList } from '../common';

const MovieGenres = ({ genres }: { genres: string[] }) => {
  const navigate = useNavigate();

  const navigateToGenre = (genre: string) => {
    navigate(`${URI_PATHS.MOVIES}/${genre}`);
  };

  return <UnorderedList data={genres} onItemClick={navigateToGenre} />;
};

export default MovieGenres;
