import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoginPage from './pages/login.page';
import reportWebVitals from './reportWebVitals';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { UsersListPage } from './pages/users-list.page';
import { AddUserPage } from 'pages/add-user.page';
import { UserDetailsPage } from 'pages/user-details.page';
import './index.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='' element={<Navigate to='/login' />} />
            <Route path='users'>
              <Route path='' element={<UsersListPage />} />
              <Route path='add' element={<AddUserPage />} />
              <Route path='details/:userId' element={<UserDetailsPage />} />
              <Route path='*' element={<Navigate to='/users' />} />
            </Route>
            <Route path='login' element={<LoginPage />} />
            <Route path='*' element={<Navigate to='/login' />} />
          </Route>
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
