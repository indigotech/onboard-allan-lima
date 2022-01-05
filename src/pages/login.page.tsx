import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);


  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailValid(true);

    if (!event.target.checkValidity()) {
      setEmailValid(false);
    }
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordValid(true);

    const reg = new RegExp('^(?=.*[0-9])(?=.*[a-zA-Z])(?=.+$)');

    if (!event.target.checkValidity() || !reg.test(password)) {
      
      setPasswordValid(false);
    }
  }

  const submit = () => {
    if (emailValid && passwordValid) {
      alert('Login válido!');
      console.log(email);
      console.log(password);
    } else {
      alert('Há erros com o formulário!');
    }
    
    setSubmitted(true);
  }



  return (
    <div className='Login'>
      <h1>Bem-vindo(a) à Taqtile!</h1>
      <form>
        <label>
          E-mail:
          <input type='email' name='email' onChange={handleEmailChange} required/>
        </label>
        <br/>
        {submitted && !emailValid ? <div>Email inválido!<br/></div> : ''}
        <label>
          Senha:
          <input
            type='password'
            name='password'
            onChange={handlePasswordChange}
            required
            minLength={7}
          />
        </label>
        {submitted && !passwordValid ? <div>Senha inválida! (+7 caracteres e ao menos uma letra e um número)<br/></div> : ''}
        <br/>
        <input type='button' value='Login' onClick={submit} />
      </form>
    </div>
  );
}

export default LoginPage;
