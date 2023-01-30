import { SortByField } from '.';

interface SortingInterface {
  data: string[];
}

const Sorting = ({ data }: SortingInterface) => {
  return (
    <div id='sorting-container'>
      <div className='sort__text'>Sort by:</div>
      <SortByField data={data} />
    </div>
  );
};

export default Sorting;
