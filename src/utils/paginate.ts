import _ from 'lodash';

export const paginate = <T>(
  items: any[],
  pageNumber: number,
  pageSize: number
): T[] => {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
};
