import _ from 'lodash';

import { URL_QUERY_KEYS } from '../constants';
import { getSearchParamNameFromUrl } from './url';

export const paginate = <T>(
  items: any[],
  pageNumber: number,
  pageSize: number
): T[] => {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
};

export const getPageNumber = (url: string) => {
  const pageNumber = getSearchParamNameFromUrl(url, URL_QUERY_KEYS.PAGE_NUMBER);
  return pageNumber ? Number(pageNumber) : 1;
};
