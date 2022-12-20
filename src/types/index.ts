export type MovieResponse = {
  Response: string;
  totalResults: string;
  Search: Movie[];
  Error: string;
};

export type Movie = {
  Title: string;
  Year: string;
  imdbId: string;
  Poster: string;
};
