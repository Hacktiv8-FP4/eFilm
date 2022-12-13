import { useAppSelector } from '@/hooks/redux';

const useGetMovies = () => {
  const { searchResult, loading } = useAppSelector(({ movies }) => movies);

  return { searchResult, loading };
};

export default useGetMovies;
