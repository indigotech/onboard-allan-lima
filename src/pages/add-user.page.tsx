import './add-user.page.style.css';

export function AddUserPage() {
  return (
    <div className='AddUserPageContainer'>
      <h1>Adicionar Usuário</h1>
      <form className='FormAddUser'>
        <label htmlFor='name'>Nome</label>
        <input type='text' name='name' />
        <label htmlFor='email'>E-mail</label>
        <input type='email' name='email' />
        <label htmlFor='phone'>Telefone</label>
        <input type='text' name='phone' />
        <label htmlFor='birthDate'>Data de Nascimento</label>
        <input type='text' name='birthDate' />
        <label htmlFor='password'>Senha</label>
        <input type='password' name='password' />
        <label htmlFor='phone'>Telefone</label>
        <input type='text' name='phone' />
        <label htmlFor='role'>Privilégio</label>
        <select name='role'>
          <option value='admin'>Administrador</option>
          <option value='user'>Usuário</option>
        </select>
      </form>
      <button className='Button' type='button'>Salvar</button>
    </div>
  );
}
