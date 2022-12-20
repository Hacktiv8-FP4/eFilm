import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import { ImSpinner2 } from 'react-icons/im';
import useGetMovies from '@/hooks/useGetMovies';
import MovieCard from '@/components/MovieCard';

export default function HomePage() {
  const { loading, searchResult } = useGetMovies();
  if (loading) {
    return (
      <Layout>
        <Seo />
        <div className='layout flex min-h-screen items-center justify-center'>
          <ImSpinner2 size={46} className='animate-spin' />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Seo />
      <main>
        <section className='bg-white'>
          <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
            <div className='flex items-center justify-between space-x-4'>
              <h2 className='text-lg font-medium text-gray-900'>
                The Result of your Movie Search
              </h2>
            </div>
            <div className='mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-5'>
              {searchResult.Response === 'True' ? (
                <>
                  {searchResult.Search.map((movie, idx) => {
                    return <MovieCard movie={movie} key={idx} />;
                  })}
                </>
              ) : (
                <div>{searchResult.Error}</div>
              )}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
