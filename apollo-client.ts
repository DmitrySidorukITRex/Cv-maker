import { ApolloClient } from '@apollo/client';
import { cache } from './src/apollo/cache';

export const apolloClient = new ApolloClient({
  cache: cache,
  uri: process.env.serverURI,
  credentials: 'include',
});
