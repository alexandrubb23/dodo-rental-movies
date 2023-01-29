import { getGenres } from '../services/genresService';

export const loadGenres = async () => {
  const genres = await getGenres();
  return { genres };
};
