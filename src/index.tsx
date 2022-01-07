import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginPage from './pages/login.page';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

const link = createHttpLink({
  uri: 'https://tq-template-server-sample.herokuapp.com/graphql',
  credentials: 'same-origin',
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/react' element={<App></App>} />
        <Route
          path='login'
          element={
            <ApolloProvider client={client}>
              <CookiesProvider>
                <LoginPage />
              </CookiesProvider>
            </ApolloProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
