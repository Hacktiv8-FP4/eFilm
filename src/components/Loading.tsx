import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import * as React from 'react';
import { ImSpinner2 } from 'react-icons/im';

export default function Loading() {
  return (
    <Layout>
      <Seo />
      <div className='layout min-h-main flex items-center justify-center'>
        <ImSpinner2 size={46} className='animate-spin' />
      </div>
    </Layout>
  );
}
