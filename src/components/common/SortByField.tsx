import { useLocation, useNavigate } from 'react-router-dom';

import { UnorderedListDataInterface } from '../../models/interfaces';
import { URL_QUERY_KEYS } from '../../constants';
import { useGetQueryParam } from '../../hooks';
import UnorderedList from './UnorderedList';

const SortByField = ({ data }: UnorderedListDataInterface) => {
  const location = useLocation();
  const navigation = useNavigate();
  const queryParams = useGetQueryParam();

  const { SORT_BY } = URL_QUERY_KEYS;

  const appendSortByToCurrentUrl = (fieldName: string) => {
    navigation(`${location.pathname}?${SORT_BY}=${fieldName}`);
  };

  return (
    <UnorderedList
      activeItem={queryParams.get(SORT_BY)}
      data={data}
      onItemClick={appendSortByToCurrentUrl}
    />
  );
};

export default SortByField;
