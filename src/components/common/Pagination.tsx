import _ from 'lodash';
import { NavLink } from 'react-router-dom';

import {
  useAppedQueryStringPageNumber,
  usePaginationItemStyleClass,
} from '../../hooks';
import { PaginationInterface } from '../../models/interfaces';

const Pagination = ({ itemsCount, pageSize }: PaginationInterface) => {
  const paginationItemStyleClass = usePaginationItemStyleClass();
  const appendQueryStringPageNumber = useAppedQueryStringPageNumber();

  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);

  return (
    <nav className='pagination'>
      <ul>
        {pages.map(page => {
          const className = paginationItemStyleClass.getClassName(page);
          const pageNumber = appendQueryStringPageNumber.append(page);

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
