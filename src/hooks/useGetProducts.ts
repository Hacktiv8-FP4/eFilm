import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { getAllProducts } from '@/redux/product';
import * as React from 'react';

const useGetProducts = () => {
  const { products, loading } = useAppSelector(({ products }) => products);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    !products.length && dispatch(getAllProducts());
  }, []);

  return { products, loading };
};

export default useGetProducts;
