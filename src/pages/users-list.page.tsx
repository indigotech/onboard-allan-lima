import { useState } from 'react';
import { User } from 'types';
import './users-list.page.style.css';
import { useQuery } from '@apollo/client';
import { UsersListQuery } from 'server/queries/users';
import Spinner from 'components/spinner.component';
import ErrorMessage from 'components/error-message.component';
import Pagination from 'components/pagination.component';

const LIMIT = 10;

function UsersListPage() {
  const [offset, setOffset] = useState(0);
  const { loading, data, error } = useQuery(UsersListQuery, {
    variables: {
      limit: LIMIT,
      offset: offset,
    },
  });

  return (
    <div className='UsersListContainer'>
      <h1>Listagem de Usuários</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div className='TableContainer'>
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
          </div>
          <Pagination
            limit={LIMIT}
            total={data?.users?.count}
            offset={offset}
            setOffset={setOffset}
            loading={loading}
          />
        </div>
      )}
      <ErrorMessage label={error?.message} />
    </div>
  );
}

export default UsersListPage;
