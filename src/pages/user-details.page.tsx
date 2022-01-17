import { useQuery } from '@apollo/client';
import { ErrorMessage } from 'components/atm.error-message/error-message.component';
import { H1 } from 'components/atm.h1/h1.component';
import { Spinner } from 'components/atm.spinner/spinner.component';
import { UserDetail } from 'components/atm.user-detail/user-detail.component';
import { useParams } from 'react-router-dom';
import { UserDetailQuery } from 'server/queries/users';
import { User } from 'types';
import { UserDetailsPageStyled } from './user-details.page.styled';

export function UserDetailsPage() {
  const params = useParams();
  const { data, loading, error } = useQuery<{ user?: User }>(UserDetailQuery, {
    variables: { id: params.userId },
  });

  const birthDate = new Date(data?.user?.birthDate ?? '').toLocaleDateString();

  return (
    <UserDetailsPageStyled>
      {loading ? (
        <Spinner size='large' />
      ) : (
        <>
          <H1 text={`Detalhes ${data?.user?.name ?? ''}`} />
          {error ? (
            ''
          ) : (
            <div className='Details'>
              <UserDetail label='ID' field={data?.user?.id} />
              <UserDetail label='Nome' field={data?.user?.name} />
              <UserDetail label='Telefone' field={data?.user?.phone} />
              <UserDetail label='Data de Nascimento' field={birthDate} />
              <UserDetail label='E-mail' field={data?.user?.email} />
              <UserDetail label='Acesso' field={data?.user?.role} />
            </div>
          )}
        </>
      )}
      <ErrorMessage label={error?.message} />
    </UserDetailsPageStyled>
  );
}
