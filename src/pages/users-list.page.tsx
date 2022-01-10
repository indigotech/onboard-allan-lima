import React from 'react';
import { mockUserList } from 'mock-user-list';
import { User } from 'types';
import './users-list.page.style.css';
import { useQuery } from '@apollo/client';
import { UsersListQuery } from 'server/mutations/users';

function UsersListPage() {
  const users: User[] = mockUserList;
  const { loading, data, error } = useQuery(UsersListQuery);

  const test = () => {
    console.log(data);
    console.log(error)
  };

  return (
    <div className='UsersListContainer'>
      <h1>Listagem de Usuários</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => {
            return (
              <tr key={user.name}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={test}>Teste</button>
    </div>
  );
}

export default UsersListPage;
