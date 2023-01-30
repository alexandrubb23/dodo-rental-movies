import _ from 'lodash';
import { NavLink, useSearchParams } from 'react-router-dom';

import { URL_QUERY_KEYS } from '../../constants';
import { useAppendQueryStringParams } from '../../hooks';
import { PaginationInterface } from '../../models/interfaces';

const Pagination = ({ itemsCount, pageSize }: PaginationInterface) => {
  const [searchParams] = useSearchParams();
  const appendQueryStringParams = useAppendQueryStringParams();

  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);

  return (
    <nav className='pagination'>
      <ul>
        {pages.map(page => {
          const { PAGE_NUMBER } = URL_QUERY_KEYS;
          const pageNumber = `${appendQueryStringParams.appendKey(
            PAGE_NUMBER
          )}${page}`;

          const currentPage = searchParams.get(PAGE_NUMBER);
          const className =
            page.toString() === currentPage || (!currentPage && page === 1)
              ? 'page-item active'
              : 'page-item';

          return (
            <li className={className} key={page}>
              <NavLink to={pageNumber}>{page}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
