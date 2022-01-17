import { useMutation } from '@apollo/client';
import { Button } from 'components/atm.button/button.component';
import { ErrorMessage } from 'components/atm.error-message/error-message.component';
import { FormInput, FormInputProps } from 'components/atm.form-input/atm.form-input.component';
import { H1 } from 'components/atm.h1/h1.component';
import { Spinner } from 'components/atm.spinner/spinner.component';
import { REGEX_PASSWORD } from 'helpers/regex';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddUserMutation } from 'server/mutations/user';
import { UserInput } from 'types';
import { AddUserPageStyled } from './add-user.page.styled';

export function AddUserPage() {
  const navigate = useNavigate();
  const [addUser, { loading, error }] = useMutation(AddUserMutation);
  const [values, setValues] = useState<UserInput>({
    name: '',
    email: '',
    phone: '',
    birthDate: '',
    password: '',
    role: 'user',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValues({ ...values, role: event.target.value as 'user' | 'admin' });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addUser({
      variables: { data: { ...values } },
      onCompleted: () => {
        navigate('/users/list');
      },
    });
  };

  const inputs: FormInputProps[] = [
    {
      name: 'name',
      type: 'text',
      placeholder: 'Nome',
      errorMessage: 'O nome é inválido.',
      label: 'Nome',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'E-mail',
      errorMessage: 'O e-mail é inválido.',
      label: 'E-mail',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      placeholder: 'Telefone',
      errorMessage: 'O telefone é inválido. (+99(99)9999x-9999 sem espaços)',
      label: 'Telefone',
      required: true,
      minLength: 7,
    },
    {
      name: 'birthDate',
      type: 'date',
      placeholder: 'Data de Nascimento',
      errorMessage: 'A data de nascimento é inválida!',
      label: 'Data de Nascimento',
      required: true,
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Senha',
      errorMessage: 'Senha inválida. (+7 caracteres e ao menos uma letra e um número)',
      label: 'Senha',
      required: true,
      pattern: REGEX_PASSWORD,
    },
    {
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirmar Senha',
      errorMessage: 'As senhas não conferem.',
      label: 'Confirmar Senha',
      required: true,
      pattern: values.password,
    },
  ];

  return (
    <AddUserPageStyled>
      <H1 text='Adicionar Usuário' />
      {loading ? (
        <Spinner size='large' />
      ) : (
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.name}
              {...input}
              value={values[input.name as keyof UserInput]}
              onChange={input.name != 'confirmPassword' ? handleInputChange : undefined}
            />
          ))}
          <div className='Select'>
            <label htmlFor='role'>Acesso</label>
            <select name='role' onChange={handleSelectChange}>
              <option value='admin'>Administrador</option>
              <option value='user'>Usuário</option>
            </select>
          </div>
          <Button label='Salvar' type='submit' />
          <ErrorMessage label={error?.message} />
        </form>
      )}
    </AddUserPageStyled>
  );
}
