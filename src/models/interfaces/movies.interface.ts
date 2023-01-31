import { Movie } from './movie.interface';

export interface MoviesCountInterface {
  totalMoviesCount?: number;
}

export interface MoviesInterface extends MoviesCountInterface {
  movies: Movie[];
}
