import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { removeFromCart, updateQuantity } from '@/redux/cart';
import { Products } from '@/types';
import * as React from 'react';
import { IoClose } from 'react-icons/io5';

type Props = {
  product: Products;
  productIdx: number;
};

export default function CartList({ product, productIdx }: Props) {
  const { products } = useAppSelector(({ products }) => products);
  const dispatch = useAppDispatch();
  const quantity = products.find((item) => item.id === product.id)?.quantity;

  return (
    <li key={product.id} className='flex py-6 sm:py-10'>
      <div className='flex-shrink-0'>
        <img
          src={product.image}
          alt={product.title}
          className='h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48'
        />
      </div>

      <div className='ml-4 flex flex-1 flex-col justify-between sm:ml-6'>
        <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
          <div>
            <div className='flex justify-between'>
              <h3 className='text-sm'>
                <a
                  href={product.image}
                  className='font-medium text-gray-700 hover:text-gray-800'
                >
                  {product.title}
                </a>
              </h3>
            </div>
            <p className='mt-1 text-sm font-medium text-gray-900'>
              $ {product.price}
            </p>
          </div>

          <div className='mt-4 sm:mt-0 sm:pr-9'>
            <label htmlFor={`quantity-${productIdx}`} className='sr-only'>
              Quantity, {product.title}
            </label>
            <select
              id={`quantity-${productIdx}`}
              name={`quantity-${productIdx}`}
              className='max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm'
              onChange={(e) => {
                const value = e.target.value;
                dispatch(
                  updateQuantity({ id: product.id, quantity: Number(value) })
                );
              }}
            >
              {quantity &&
                Array.from(Array(quantity).keys()).map((item) => (
                  <option key={item}>{item + 1}</option>
                ))}
            </select>

            <div className='absolute top-0 right-0'>
              <button
                type='button'
                className='-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500'
                onClick={() => dispatch(removeFromCart({ id: product.id }))}
              >
                <span className='sr-only'>Remove</span>
                <IoClose className='h-5 w-5' aria-hidden='true' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
