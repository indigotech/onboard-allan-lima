import React, { useState } from 'react';
import './login.page.style.css';

const regexPassword = new RegExp('^(?=.*[0-9])(?=.*[a-zA-Z])(?=.+$)');

function LoginPage() {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email: string = event.target.value;
    setEmail(email);

    const emailValid: boolean = event.target.checkValidity();
    setEmailValid(emailValid);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password: string = event.target.value;
    setPassword(password);

    const passwordValid: boolean = event.target.checkValidity() && regexPassword.test(password);
    setPasswordValid(passwordValid);
  };

  const handleSubmit = () => {
    if (emailValid && passwordValid) {
      alert('Login válido!');
      console.log(email);
      console.log(password);
    } else {
      alert('Há erros com o formulário!');
    }

    setSubmitted(true);
  };

  return (
    <div className='LoginContainer'>
      <h1>Bem-vindo(a) à Taqtile!</h1>
      <form className='Form'>
        <div className='Input'>
          <label htmlFor='email'>E-mail</label>
          <input type='email' name='email' onChange={handleEmailChange} required />
        </div>
        <div className='ErrorMessage'>{submitted && !emailValid ? <p>Email inválido!</p> : ''}</div>

        <div className='Input'>
          <label htmlFor='password'>Senha</label>
          <input type='password' name='password' onChange={handlePasswordChange} required minLength={7} />
        </div>
        <div className='ErrorMessage'>
          {submitted && !passwordValid ? <p>Senha inválida! (+7 caracteres e ao menos uma letra e um número)</p> : ''}
        </div>

        <input type='button' value='Login' className='ButtonSubmit' onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default LoginPage;
