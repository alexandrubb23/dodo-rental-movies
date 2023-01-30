import { URL_QUERY_KEYS } from '../constants';
import useAppendQueryStringParams from './useAppendQueryStringParams';

const useAppedQueryStringPageNumber = () => {
  const appendQueryStringParams = useAppendQueryStringParams();

  const append = (pageNumber: number) => {
    const { PAGE_NUMBER } = URL_QUERY_KEYS;

    return `${appendQueryStringParams.appendKey(PAGE_NUMBER)}${pageNumber}`;
  };

  return { append };
};

export default useAppedQueryStringPageNumber;
