import React from 'react';

function LoginPage() {

  return (
    <div className='Login'>
      <h1>Bem-vindo(a) à Taqtile!</h1>
      <form>
        <label>
          E-mail:
          <input type='email' name='email' />
        </label>
        <label>
          Senha:
          <input type='password' name='password' />
        </label>
        <input type='submit' value='Login' />
      </form>
    </div>
  );
}

export default Login;
