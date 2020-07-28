import React, { Component } from 'react';
import logo from '../logo.png';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Launches from './Launches';

//create client
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <img src={logo} alt="SpaceX" className="logo mb-5"></img>
          <h2>Launches</h2>
          <Launches />
         
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
