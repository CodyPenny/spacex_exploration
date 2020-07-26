import React, { Component } from 'react';
import logo from '../logo.png';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <img src={logo} alt="SpaceX" className="logo"></img>
          <h1 className="logo">test</h1>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
