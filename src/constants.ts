import { env } from './utils';

export const URL_QUERY_KEYS = {
  ORDER_BY: env('VITE_URL_QUERY_ORDER_BY_KEY', 'sortBy'),
  ORDER_DIRECTION: env('VITE_URL_QUERY_ORDER_DIRECTION_KEY', 'orderDirection'),
  PAGE_NUMBER: env('VITE_URL_QUERY_PAGE_NUMBER_KEY', 'page'),
} as const;

export const MOVIES_PAGE_SIZE = env.int('VITE_MOVIES_PAGE_SIZE', 10) as number;
