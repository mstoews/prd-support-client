import { NgModule } from '@angular/core';
import {
  ApolloClientOptions,
  DefaultOptions,
  InMemoryCache,
} from '@apollo/client/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { setContext } from 'apollo-link-context';

const setAuthorizationLink = setContext((request, previousContext) => ({
  headers: { authorization: '1234' },
}));

const asyncAuthLink = setContext(
  (request) =>
    new Promise((success, fail) => {
      // do some async lookup here
      setTimeout(() => {
        success({ token: 'async found token' });
      }, 10);
    })
);

const defaultOpts: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  console.log('createApollo');
  let uri = localStorage.getItem('uri');
  if (uri === null) {
    uri = 'http://localhost:3020/graphql';
  }
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache({
      addTypename: false,
    }),
    defaultOptions: defaultOpts,
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphqlModule {}
