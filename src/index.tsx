import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ApolloProvider } from '@apollo/client/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const createAuthLink = () =>
  setContext(() => {
    const authToken = localStorage.getItem('Auth-Token');
    let headers: Record<string, any> = {};
    if (authToken) {
      headers.authorization = `Bearer ${authToken}`;
    }
    return { headers };
  });

const commerceLink = createHttpLink({
  uri: 'https://demo.vendure.io/shop-api/shop-api',
  headers: {
    authorization: localStorage.getItem('Auth-Token')
      ? `Bearer ${localStorage.getItem('Auth-Token')}`
      : '',
  },
});

const afterwareLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    const context = operation.getContext();
    const authHeader = context.response.headers.get('Vendure-Auth-Token');

    if (authHeader) {
      localStorage.setItem('Auth-Token', authHeader);
    }
    return response;
  });
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([createAuthLink(), afterwareLink, commerceLink]),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
