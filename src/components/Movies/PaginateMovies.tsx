import { MOVIES_PAGE_SIZE } from '../../constants';
import { MoviesCountInterface } from '../../models/interfaces/movies.interface';
import { useNavigationState } from '../../hooks';
import Pagination from '../common/Pagination';

const PaginateMovies = ({ totalMoviesCount }: MoviesCountInterface) => {
  const navigationState = useNavigationState();

  if (navigationState.loading()) return null;

  return (
    <Pagination
      itemsCount={totalMoviesCount as number}
      pageSize={MOVIES_PAGE_SIZE}
    />
  );
};

export default PaginateMovies;
