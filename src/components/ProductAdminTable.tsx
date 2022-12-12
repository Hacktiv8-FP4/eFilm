import NextImage from '@/components/NextImage';
import { useAppDispatch } from '@/hooks/redux';
import { updateQuantity } from '@/redux/product';
import { Products } from '@/types';
import * as React from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

type Props = {
  product: Products;
  productIdx: number;
  length: number;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductAdminTable({
  product,
  productIdx,
  length,
}: Props) {
  const [quantity, setQuantity] = React.useState(product.quantity);
  const dispatch = useAppDispatch();

  const updateHandler = () => {
    dispatch(updateQuantity({ id: product.id, quantity }));
  };

  return (
    <tr key={product.id}>
      <td
        className={classNames(
          productIdx !== length - 1 ? 'border-b border-gray-200' : '',
          'py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
        )}
      >
        <div className='flex items-center'>
          <div>
            <NextImage
              useSkeleton
              className=''
              src={product.image}
              width='180'
              height='180'
              imgClassName=''
              alt={product.description}
            />
          </div>
          <div className='ml-4'>
            <div className='text-lg font-bold text-gray-900'>
              {product.title}
            </div>
            <div className='font-medium text-gray-700'>
              {product.description}
            </div>
            <div className='text-gray-500'>{product.category}</div>
          </div>
        </div>
      </td>
      <td
        className={classNames(
          productIdx !== length - 1 ? 'border-b border-gray-200' : '',
          'hidden w-1/12 whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell'
        )}
      >
        <div>
          <label
            htmlFor='price'
            className='block text-sm font-medium text-gray-700'
          >
            Price
          </label>
          <div className='relative mt-1 rounded-md shadow-sm'>
            <input
              type='text'
              name='price'
              id='price'
              className='block w-full rounded-md border-gray-300 pr-8  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
              value={quantity}
            />
            <div className='absolute inset-y-0 right-2 flex cursor-pointer flex-col justify-center'>
              <RiArrowUpSLine onClick={() => setQuantity(quantity + 1)} />
              <RiArrowDownSLine onClick={() => setQuantity(quantity - 1)} />
            </div>
          </div>
        </div>
      </td>
      <td
        className={classNames(
          productIdx !== length - 1 ? 'border-b border-gray-200' : '',
          'relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8'
        )}
      >
        <div
          className='cursor-pointer text-indigo-600 hover:text-indigo-900'
          onClick={() => updateHandler()}
        >
          Update
        </div>
      </td>
    </tr>
  );
}
