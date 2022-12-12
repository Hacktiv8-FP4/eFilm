import NextImage from '@/components/NextImage';
import { Products } from '@/types';
import { useRouter } from 'next/router';
import * as React from 'react';

type Props = {
  product: Products;
};

export default function ProductItems({ product }: Props) {
  const router = useRouter();

  return (
    <div className='group relative transform rounded-l p-2 transition-all duration-200 ease-in-out hover:scale-110 hover:shadow-lg'>
      <div className='h-[340px]'>
        <div className='aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-white'>
          <NextImage
            useSkeleton
            className='mx-auto w-52 group-hover:opacity-75'
            src={product.image}
            width='180'
            height='180'
            imgClassName=''
            alt={product.description}
          />
          <div
            className='flex items-end p-4 opacity-0 group-hover:opacity-100'
            aria-hidden='true'
          >
            <div className='w-full rounded-md bg-white bg-opacity-75 py-2 px-4 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter'>
              View Product
            </div>
          </div>
        </div>
        <div className='mt-4 flex items-center justify-between space-x-8 text-gray-900'>
          <h3 className='w-2/3'>
            <a href='#' className='text-base font-medium line-clamp-2'>
              <span
                aria-hidden='true'
                className='absolute inset-0'
                onClick={() => router.push(`/product/${product.id}`)}
              />
              {product.title}
            </a>
          </h3>
          <div className='text-end'>
            <p>${product.price}</p>
            <p className='text-xs'>Stock : {product.quantity}</p>
          </div>
        </div>
        <p className='mt-1 text-sm text-gray-500'>{product.category}</p>
      </div>
      <div className='absolute inset-x-0 bottom-0'>
        <div className='relative flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200'>
          Add to Cart
          <span className='sr-only'>, {product.title}</span>
        </div>
      </div>
    </div>
  );
}
