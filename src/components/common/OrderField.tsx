import { SortingOptionsInterface } from '../../models/interfaces';
import SortingOptions from './SortingOptions';

const OrderField = <T extends {}>({
  currentField,
  data,
  onClick,
}: Omit<SortingOptionsInterface<T>, 'title'>) => {
  return (
    <SortingOptions
      currentField={currentField}
      data={data}
      onClick={onClick}
      title='Order by'
    />
  );
};

export default OrderField;
