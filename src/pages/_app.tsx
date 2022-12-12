import { AppProps } from 'next/app';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import { makeStore, persistor } from '@/redux/store';
import withRedux from 'next-redux-wrapper';
import { PersistGate } from 'redux-persist/integration/react';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Component {...pageProps} />
    </PersistGate>
  );
}

export default withRedux(makeStore)(MyApp);
