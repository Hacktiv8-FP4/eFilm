import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useRouter } from 'next/router';

const useGetProductById = () => {
  const router = useRouter();
  const { id } = router.query;
  const { products } = useAppSelector(({ products }) => products);
  const { user } = useAppSelector(({ user }) => user);
  const dispatch = useAppDispatch();

  const product = products.find((product) => product.id === Number(id))!;

  return {
    product,
    user,
    router,
    dispatch,
  };
};

export default useGetProductById;
