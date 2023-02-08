export interface Movie {
  genres: string[];
  id: string;
  picture: string;
  rating: number;
  slug: string;
  title: string;
  year: string;
  crew: {
    [key: string]: string[];
  };
}
