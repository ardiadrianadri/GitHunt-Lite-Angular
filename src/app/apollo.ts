import ApolloClient, { createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin',
  }
});

export const client = new ApolloClient({
  networkInterface,
  shouldBatch: true,
});
