import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {uri} from '../constants';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri,
  credentials: 'include',
});

const client = new ApolloClient({
  cache,
  link,
});

export default client;
