import * as React from 'react';
import SearchBar from '@/components/Search';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-white'>
      <div className='rounded border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-900 sm:px-4'>
        <div className='container mx-auto flex flex-wrap items-center justify-between pl-4'>
          <a href='' className='flex items-center'>
            <h2 className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
              e-Film
            </h2>
          </a>
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
