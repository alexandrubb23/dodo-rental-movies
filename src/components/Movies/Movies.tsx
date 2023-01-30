import { useNavigation } from 'react-router-dom';

import { MOVIES_PAGE_SIZE } from '../../constants';
import { MoviesInterface } from '../../models/interfaces';
import MoviesList from './MoviesList';
import Pagination from '../common/Pagination';
import Sorting from '../common/Sorting';

const sortByFields = ['title', 'year', 'rating'];

const Movies = ({ movies, totalMoviesCount }: MoviesInterface) => {
  const navigation = useNavigation();

  if (movies.length === 0) {
    return <div className='no-movies'>No movies found.</div>;
  }

  if (navigation.state === 'loading') {
    return <div className='loader-dual__ring'></div>;
  }

  return (
    <>
      {movies.length > 1 && <Sorting data={sortByFields} />}
      <div className='movies-container'>
        <MoviesList movies={movies} />
      </div>
      <Pagination
        itemsCount={totalMoviesCount as number}
        pageSize={MOVIES_PAGE_SIZE}
      />
    </>
  );
};

export default Movies;
