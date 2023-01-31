import { SortByField } from '.';

interface SortingInterface {
  data: string[];
  showSorting?: boolean;
}

const SortingBy = ({ data, showSorting }: SortingInterface) => {
  if (showSorting === false) return null;

  return (
    <div id='sorting-container'>
      <div className='sort__text'>Sort by:</div>
      <SortByField data={data} />
    </div>
  );
};

export default SortingBy;
