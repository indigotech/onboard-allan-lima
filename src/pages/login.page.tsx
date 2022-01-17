import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { FormInput, FormInputProps } from 'components/atm.form-input/atm.form-input.component';
import { H1 } from 'components/atm.h1/h1.component';
import { Button } from 'components/atm.button/button.component';
import { ErrorMessage } from 'components/atm.error-message/error-message.component';
import { LoginPageStyled } from './login.page.styled';
import { LoginMutation } from 'data/graphql/mutations/login.mutation';
import { REGEX_PASSWORD } from 'helpers/regex';
import { getUsersListRoute } from 'routes';
import { UserLogin } from 'types';

function LoginPage() {
  const [, setCookie] = useCookies(['token']);
  const [login, { loading, error }] = useMutation(LoginMutation);
  const navigate = useNavigate();
  const [values, setValues] = useState<UserLogin>({
    email: '',
    password: '',
  });

  const inputs: FormInputProps[] = [
    {
      name: 'email',
      type: 'email',
      placeholder: 'E-mail',
      errorMessage: 'O e-mail é inválido.',
      label: 'E-mail',
      required: true,
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Senha',
      errorMessage: 'Senha inválida! (+7 caracteres e ao menos uma letra e um número)',
      label: 'Senha',
      required: true,
      minLength: 7,
      pattern: REGEX_PASSWORD,
    },
  ];

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login({
      variables: { email: values.email, password: values.password },
      onCompleted: ({ login }) => {
        setCookie('token', login.token);
        navigate(getUsersListRoute());
      },
    });
  };

  return (
    <LoginPageStyled>
      <H1 text='Bem-vindo(a) à Taqtile!' />
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput
            key={input.name}
            {...input}
            value={values[input.name as keyof UserLogin]}
            onChange={handleInputChange}
          />
        ))}
        <Button label='Login' type='submit' loading={loading} />
      </form>
      <ErrorMessage label={error?.message} />
    </LoginPageStyled>
  );
}

export default LoginPage;
