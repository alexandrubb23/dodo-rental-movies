import { SortingOptionsInterface } from '../../models/interfaces';
import UnorderedList from './UnorderedList';

const SortingOptions = <T extends {}>({
  currentField,
  data,
  onClick,
  title,
}: SortingOptionsInterface<T>) => {
  return (
    <div className='sorting-container'>
      <div className='sorting-container__text'>{title}:</div>
      <UnorderedList
        activeItem={currentField}
        data={data}
        onItemClick={onClick}
      />
    </div>
  );
};

export default SortingOptions;
