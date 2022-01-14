import React from 'react';
import { User } from 'types';
import './users-list.page.style.css';
import { useQuery } from '@apollo/client';
import { UsersListQuery } from 'server/queries/users';
import Spinner from 'components/spinner.component';
import ErrorMessage from 'components/error-message.component';

function UsersListPage() {
  const { loading, data, error } = useQuery(UsersListQuery);

  return (
    <div className='UsersListContainer'>
      <h1>Listagem de Usuários</h1>
      {loading ? (
        <Spinner />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
            </tr>
          </thead>
          <tbody>
            {data?.users?.nodes?.map((user: User) => {
              return (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      <ErrorMessage label={error?.message} />
    </div>
  );
}

export default UsersListPage;
