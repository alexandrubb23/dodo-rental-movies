import _ from 'lodash';

import { PaginationInterface } from '../../models/interfaces';

const Pagination = ({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
}: PaginationInterface) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);

  return (
    <nav className='pagination'>
      <ul>
        {pages.map(page => {
          return (
            <li
              className={
                page === currentPage ? 'page-item active' : 'page-item'
              }
              key={page}
            >
              <a onClick={() => onPageChange(page)}>{page}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
