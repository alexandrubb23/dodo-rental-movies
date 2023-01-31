import { env } from './utils';

export const URL_QUERY_KEYS = {
  SORT_BY: env('VITE_URL_QUERY_SORT_BY_KEY', 'sortBy'),
  PAGE_NUMBER: env('VITE_URL_QUERY_PAGE_NUMBER_KEY', 'page'),
} as const;

export const MOVIES_PAGE_SIZE = env.int('VITE_MOVIES_PAGE_SIZE', 10) as number;
