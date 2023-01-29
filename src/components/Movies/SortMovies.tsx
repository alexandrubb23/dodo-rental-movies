import { SortByField } from '../common';

const fields = ['title', 'year', 'rating'];

const SortMovies = () => {
  return (
    <div id='sort-movies'>
      <div className='sort__text'>Sort by:</div>
      <SortByField data={fields} />
    </div>
  );
};

export default SortMovies;
