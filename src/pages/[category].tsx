import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import ProductItems from '@/components/ProductItems';
import Loading from '@/components/Loading';
import useGetProductsByCategory from '@/hooks/useGetProductsByCategory';

export default function HomePage() {
  const { products, loading } = useGetProductsByCategory();

  if (loading) {
    return <Loading />;
  }

  return (
    <Layout>
      <Seo />
      <main>
        <section className='bg-white'>
          <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
            <div className='flex items-center justify-between space-x-4'>
              <h2 className='text-lg font-medium text-gray-900'>Products</h2>
            </div>
            <div className='mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4'>
              {products.map(
                (product) =>
                  product.quantity > 0 && (
                    <ProductItems key={product.id} product={product} />
                  )
              )}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
