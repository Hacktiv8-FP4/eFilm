import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { getSearchMovies } from '@/redux/movies';
import { useEffect } from 'react';

const useGetMovies = () => {
  const { searchResult, loading } = useAppSelector(({ movies }) => movies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSearchMovies('man'));
  }, []);

  return { searchResult, loading };
};

export default useGetMovies;
