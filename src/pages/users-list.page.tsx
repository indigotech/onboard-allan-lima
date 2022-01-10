import React from 'react';
import { mockUserList } from 'mock-user-list';
import { User } from 'types';
import './users-list.page.style.css';

function UsersListPage() {
  const users: User[] = mockUserList;

  return (
    <div className='UsersListContainer'>
      <h1>Listagem de Usuários</h1>
      <table>
        <tr>
          <th>Nome</th>
          <th>E-mail</th>
        </tr>
        {users.map((user: User) => {
          return (
            <tr key={user.name}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default UsersListPage;
