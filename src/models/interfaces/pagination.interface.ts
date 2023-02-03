export interface PaginationInterface {
  currentPage: number;
  itemsCount: number;
  onPageChange: (page: number) => void;
  pageSize: number;
}
