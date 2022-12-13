export type Products = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  quantity: number;
  rating: {
    rate: number;
    count: number;
  };
};

export type Cart = Products;

export type User = {
  username: string;
  password: string;
};

export type UserResponse = {
  token: string | null;
  admin?: boolean;
};

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
