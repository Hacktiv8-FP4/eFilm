import NextImage from '@/components/NextImage';
import { Movie } from '@/types';
import * as React from 'react';

type Props = {
  movie: Movie;
};
export default function MovieCard({ movie }: Props) {
  return (
    <div className='max-w-sm overflow-hidden rounded shadow-lg'>
      <NextImage
        useSkeleton
        className='mx-auto w-52 group-hover:opacity-75'
        src={
          movie.Poster !== 'N/A'
            ? movie.Poster
            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png'
        }
        width='180'
        height='180'
        imgClassName=''
        alt={movie.imdbId}
      />
      <div className='px-6 py-4'>
        <div className='mb-2 text-xl font-bold'>{movie.Title}</div>
      </div>
    </div>
  );
}
