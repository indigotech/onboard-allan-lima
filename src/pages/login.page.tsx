import { useMutation } from '@apollo/client';
import { validateEmail, validatePassword } from 'helpers/login.validations';
import Spinner from 'components/spinner.component';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import './login.page.style.css';
import { LoginMutation } from 'server/mutations/login';
import ErrorMessage from 'components/error-message.component';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [, setCookie] = useCookies(['token']);
  const [login, { loading, error }] = useMutation(LoginMutation);
  const navigate = useNavigate();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email: string = event.target.value;
    setEmail(email);

    const emailValid: boolean = validateEmail(event.target);
    setEmailValid(emailValid);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password: string = event.target.value;
    setPassword(password);

    const passwordValid: boolean = validatePassword(event.target);
    setPasswordValid(passwordValid);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    event.preventDefault();
    if (emailValid && passwordValid) {
      login({
        variables: { email: email, password: password },
        onCompleted: ({ login }) => {
          setCookie('token', login.token);
          navigate('/app/users');
        },
      });
    }
    setSubmitted(true);
  };

  const emailError = submitted && !emailValid ? 'Email inválido!' : '';
  const passwordError =
    submitted && !passwordValid ? 'Senha inválida! (+7 caracteres e ao menos uma letra e um número)' : '';

  return (
    <div className='LoginContainer'>
      <h1>Bem-vindo(a) à Taqtile!</h1>
      <form className='Form'>
        <div className='Input'>
          <label htmlFor='email'>E-mail</label>
          <input type='email' name='email' onChange={handleEmailChange} required />
        </div>
        <ErrorMessage label={emailError} />
        <div className='Input'>
          <label htmlFor='password'>Senha</label>
          <input type='password' name='password' onChange={handlePasswordChange} required minLength={7} />
        </div>
        <ErrorMessage label={passwordError} />
        {loading ? <Spinner /> : <input type='button' value='Login' className='ButtonSubmit' onClick={handleSubmit} />}
      </form>
      <ErrorMessage label={error?.message} />
    </div>
  );
}

export default LoginPage;
