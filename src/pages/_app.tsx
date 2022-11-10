import '../../styles/globals.scss';
import type { ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../../apollo-client';
import Layout from '../components/Layout';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ApolloProvider client={apolloClient}>
      <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
    </ApolloProvider>
  );
}

export default MyApp;
