import { URL_QUERY_KEYS } from '../constants';
import useAppendQueryStringParams from './useAppendQueryStringParams';

const useAppedQueryStringPageNumber = () => {
  const appendQueryStringParams = useAppendQueryStringParams();

  const appendPageNumber = (pageNumber: number) => {
    const { PAGE_NUMBER } = URL_QUERY_KEYS;

    return appendQueryStringParams.appendKeyAndValue(PAGE_NUMBER, pageNumber);
  };

  return { appendPageNumber };
};

export default useAppedQueryStringPageNumber;
