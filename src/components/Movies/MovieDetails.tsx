import { HeadingPageTitle, ReactRouter } from '../common';
import { Movie } from '../../models/interfaces';
import MoviePicture from './MoviePicture';
import MovieGenres from './MovieGenres';
import MovieCrew from './MovieCrew';
import MovieDescription from './MovieDescription';

const MovieDetails = ({ movie }: { movie: Movie }) => {
  const { crew, title, picture, year } = movie;

  const randomNumber = Math.floor(Math.random() * 3) + 1;

  return (
    <>
      <HeadingPageTitle title={title} />
      <div className='movie-details__movie-info'>
        <div className='movie-info__movie-year'>
          {year} {randomNumber}h {randomNumber}4m
        </div>
      </div>
      <div id='movie-container'>
        <div className='movie-container__movie-media'>
          <MoviePicture picture={picture} title={title} />
          <ReactRouter />
        </div>
        <div className='movie-container__genres'>
          <MovieGenres genres={movie.genres} />
        </div>
        <div className='movie-container__description'>
          <MovieDescription />
        </div>
        <div className='movie-container__crew'>
          <MovieCrew crew={crew} />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
