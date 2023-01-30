import { useSearchParams } from 'react-router-dom';

import { URL_QUERY_KEYS } from '../constants';

const usePaginationItemStyleClass = () => {
  const [searchParams] = useSearchParams();

  const getClassName = (pageNumber: number) => {
    const currentPage = searchParams.get(URL_QUERY_KEYS.PAGE_NUMBER);
    return pageNumber.toString() === currentPage ||
      (!currentPage && pageNumber === 1)
      ? 'page-item active'
      : 'page-item';
  };

  return { getClassName };
};

export default usePaginationItemStyleClass;
