import { SortingOptionsInterface } from '../../models/interfaces';
import SortingOptions from './SortingOptions';

const OrderDirection = <T extends {}>({
  currentField,
  data,
  onClick,
}: Omit<SortingOptionsInterface<T>, 'title'>) => {
  return (
    <SortingOptions
      currentField={currentField}
      data={data}
      onClick={onClick}
      title='Order direction'
    />
  );
};

export default OrderDirection;
