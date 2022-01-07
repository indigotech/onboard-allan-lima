import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginPage from './pages/login.page';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import ContentPage from './pages/content.page';

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
    <ApolloProvider client={client}>
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/app' element={<App></App>}>
              <Route path='content' element={<ContentPage></ContentPage>} />
              <Route path='login' element={<LoginPage />} />
            </Route>
            <Route
              path='*'
              element={<Navigate to="/app/login" />}
            />
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </ApolloProvider>
  </React.StrictMode>,
  rootElement,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
