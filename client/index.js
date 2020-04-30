import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client'
// apollo provider is a glue layer between React app & graphQL server
import { ApolloProvider } from 'react-apollo'

import SongList from './components/SongList'

const client = new ApolloClient({})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <SongList />
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
