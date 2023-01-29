import { MoviesParams } from '../../interfaces/movies';

export type GetAllMovies = Omit<MoviesParams, 'genre'>;
