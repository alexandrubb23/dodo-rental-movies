import { useNavigate, useSearchParams } from 'react-router-dom';

import { UnorderedListDataInterface } from '../../models/interfaces';
import { URL_QUERY_KEYS } from '../../constants';
import UnorderedList from './UnorderedList';
import { useAppendQueryStringParams } from '../../hooks';

const SortByField = ({ data }: UnorderedListDataInterface) => {
  const navigation = useNavigate();
  const [queryParams] = useSearchParams();
  const appendQueryStringParams = useAppendQueryStringParams();

  const { SORT_BY } = URL_QUERY_KEYS;

  const appendSortByToCurrentUrl = (fieldName: string) => {
    const to = `${appendQueryStringParams.appendKeyAndValue(
      SORT_BY,
      fieldName
    )}`;
    navigation(to);
  };

  return (
    <UnorderedList
      activeItem={queryParams.get(SORT_BY) ?? ''}
      data={data}
      onItemClick={appendSortByToCurrentUrl}
    />
  );
};

export default SortByField;
