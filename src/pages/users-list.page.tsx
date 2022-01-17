import { useState } from 'react';
import { User } from 'types';
import { useQuery } from '@apollo/client';
import { UsersListQuery } from 'server/queries/users';
import { Pagination } from 'components/pagination.component';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'components/atm.button/button.component';
import { getAddUserRoute, getUserDetailRoute } from 'routes';
import { H1 } from 'components/atm.h1/h1.component';
import { Spinner } from 'components/atm.spinner/spinner.component';
import { ErrorMessage } from 'components/atm.error-message/error-message.component';
import { UsersListPageStyled, UsersListTableStyled } from './users-list.page.styled';

const USER_LIST_QUERY_LIMIT = 10;

export function UsersListPage() {
  const navigate = useNavigate();
  const [offset, setOffset] = useState(0);
  const { loading, data, error } = useQuery(UsersListQuery, {
    variables: {
      limit: USER_LIST_QUERY_LIMIT,
      offset: offset,
    },
  });

  const handleAddButtonClick = () => {
    navigate(getAddUserRoute());
  };

  const getUsersLines = (users?: User[]) => {
    return users?.map((user: User) => (
      <tr key={user.id}>
        <td>
          <Link to={getUserDetailRoute(user.id)} key={user.id}>
            {user.name}
          </Link>
        </td>
        <td>{user.email}</td>
      </tr>
    ));
  };

  return (
    <UsersListPageStyled>
      <H1 text='Listagem de Usuários' />
      <Button label='Adicionar' type='button' onClick={handleAddButtonClick} />
      <UsersListTableStyled>
        {loading ? (
          <Spinner size='large' />
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
                <tbody>{getUsersLines(data?.users?.nodes)}</tbody>
              </table>
            </div>
            <Pagination
              limit={USER_LIST_QUERY_LIMIT}
              total={data?.users?.count}
              offset={offset}
              setOffset={setOffset}
              loading={loading}
            />
          </div>
        )}
      </UsersListTableStyled>
      <ErrorMessage label={error?.message} />
    </UsersListPageStyled>
  );
}
