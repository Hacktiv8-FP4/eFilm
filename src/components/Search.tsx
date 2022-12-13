import { useAppDispatch } from '@/hooks/redux';
import { getSearchMovies } from '@/redux/movies';
import * as React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';

export default function SearchBar() {
  const [query, setQuery] = React.useState('');

  const dispatch = useAppDispatch();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getSearchMovies(query));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className='mr-3'>
      <label htmlFor='search' className='sr-only' />
      <div className='relative text-gray-400 focus-within:text-gray-400'>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          <HiOutlineSearch className='h-5 w-5' aria-hidden='true' />
        </div>
        <form onSubmit={onSubmit}>
          <input
            id='search'
            name='search'
            className='text-grey-900 placeholder-grey-700 block w-full rounded-md border border-transparent bg-slate-300 bg-opacity-25 py-2 pl-10 pr-3 leading-5 focus:bg-white focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm'
            placeholder='Search for articles'
            type='search'
            onChange={onChange}
          />
        </form>
      </div>
    </div>
  );
}
