import useGetProducts from '@/hooks/useGetProducts';
import { useRouter } from 'next/router';

const categories = {
  electronics: 'electronics',
  jewelery: 'jewelery',
  'mens-clothing': "men's clothing",
  'womens-clothing': "women's clothing",
};

const useGetProductsByCategory = () => {
  const { products, loading } = useGetProducts();
  const router = useRouter();
  const { category } = router.query;
  const categoryProduct = categories[category as keyof typeof categories];

  return {
    products: products.filter(
      (product) => product.category === categoryProduct
    ),
    loading,
  };
};

export default useGetProductsByCategory;
