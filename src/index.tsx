import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginPage from './pages/login.page';
import reportWebVitals from './reportWebVitals';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import UsersListPage from './pages/users-list.page';
import { AddUserPage } from 'pages/add-user.page';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path='app' element={<App />}>
            <Route path='users'>
              <Route path='' element={<UsersListPage />} />
              <Route path='add' element={<AddUserPage />} />
              <Route path='*' element={<Navigate to='/app/users' />} />
            </Route>
            <Route path='login' element={<LoginPage />} />
          </Route>
          <Route path='*' element={<Navigate to='/app/login' />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>,
  rootElement,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
