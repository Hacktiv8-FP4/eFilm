import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import * as React from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { AiFillStar } from 'react-icons/ai';
import useGetProductById from '@/hooks/useGetProductById';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductPage() {
  const { product } = useGetProductById();

  return (
    <Layout>
      <Seo />
      <main>
        <section className='bg-white'>
          <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
            {/* Product details */}
            <div className='lg:max-w-lg lg:self-end'>
              <div className='mt-4'>
                <h1 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                  {product.title}
                </h1>
              </div>

              <section aria-labelledby='information-heading' className='mt-4'>
                <h2 id='information-heading' className='sr-only'>
                  Product information
                </h2>

                <div className='flex items-center'>
                  <p className='text-lg text-gray-900 sm:text-xl'>
                    ${product.price}
                  </p>

                  <div className='ml-4 border-l border-gray-300 pl-4'>
                    <h2 className='sr-only'>Reviews</h2>
                    <div className='flex items-center'>
                      <div>
                        <div className='flex items-center'>
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <AiFillStar
                              key={rating}
                              className={classNames(
                                product.rating.rate > rating
                                  ? 'text-yellow-400'
                                  : 'text-gray-300',
                                'h-5 w-5 flex-shrink-0'
                              )}
                              aria-hidden='true'
                            />
                          ))}
                        </div>
                        <p className='sr-only'>
                          {product.rating.rate} out of 5 stars
                        </p>
                      </div>
                      <p className='ml-2 text-sm text-gray-500'>
                        {product.rating.count} reviews
                      </p>
                    </div>
                  </div>
                </div>

                <div className='mt-4 space-y-6'>
                  <p className='text-base text-gray-500'>
                    {product.description}
                  </p>
                </div>

                <div className='mt-6 flex items-center'>
                  <FcCheckmark
                    className='h-5 w-5 flex-shrink-0 text-green-500'
                    aria-hidden='true'
                  />
                  <p className='ml-2 text-sm text-gray-500'>
                    In stock and ready to ship
                  </p>
                </div>
              </section>
            </div>

            {/* Product image */}
            <div className='mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center'>
              <div className='aspect-w-1 aspect-h-1 overflow-hidden rounded-lg'>
                <img src={product.image} alt={product.title} />
              </div>
            </div>

            {/* Product form */}
            <div className='mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start'>
              <section aria-labelledby='options-heading'>
                <h2 id='options-heading' className='sr-only'>
                  Product options
                </h2>

                <div className='mt-10'>
                  <button
                    type='submit'
                    className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50'
                  >
                    Add to Cart
                  </button>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
