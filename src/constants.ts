import { env } from './utils';

export const MOVIES_PAGE_SIZE = env.int('VITE_MOVIES_PAGE_SIZE', 10) as number;

export const URI_PATHS = {
  MOVIES: '/movies',
};
