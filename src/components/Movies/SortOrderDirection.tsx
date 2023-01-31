import { SortByField } from '../common';

const fields = ['desc', 'asc'];

const SortOrderDirection = () => {
  return (
    <div id='sort-order-direction-movies'>
      <div className='sort__text'>Order direction:</div>
      <SortByField data={fields} />
    </div>
  );
};

export default SortOrderDirection;
