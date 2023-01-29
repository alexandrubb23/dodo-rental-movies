import { LaunchIcon, PlayIcon, StarIcon } from '../../assets/icons';
import { Movie } from '../../models/interfaces';

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div className='movie-card'>
      <img src={movie.picture} alt={movie.title} />
      <div className='movie-card-content'>
        <p>
          <StarIcon />
          {movie.rating}
        </p>
        <h2 className='heading--movie-title'>{movie.title}</h2>
        <div className='movie-actions'>
          <div className='watch-now'>
            Rent now
            <LaunchIcon />
          </div>
          <div className='justify--space-around'>
            <div className='btn__text'>
              <div
                className='trailers-button-text'
                data-testid='trailer-button'
              >
                <PlayIcon />
                Trailer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
