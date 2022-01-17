import { useMutation } from '@apollo/client';
import ErrorMessage from 'components/error-message.component';
import { FormInput, FormInputProps } from 'components/form-input.component';
import Spinner from 'components/spinner.component';
import { REGEX_PASSWORD, REGEX_PHONE_NUMBER } from 'helpers/regex';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddUserMutation } from 'server/mutations/user';
import { UserInput } from 'types';
import './add-user.page.style.css';

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
        navigate('/app/users/list');
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
      pattern: REGEX_PHONE_NUMBER,
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
    <div className='AddUserPage'>
      <h1>Adicionar Usuário</h1>

      {loading ? (
        <Spinner />
      ) : (
        <form className='AddUserPage__form' onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.name}
              {...input}
              value={values[input.name as keyof UserInput]}
              onInputChange={input.name != 'confirmPassword' ? handleInputChange : undefined}
            />
          ))}
          <div className='Select'>
            <label className='Select__label' htmlFor='role'>
              Acesso
            </label>
            <select className='Select__select' name='role' onChange={handleSelectChange}>
              <option value={'admin'} label='Administrador'/>
              <option value={'user'} label='Usuário'/>
            </select>
          </div>
          <button className='Button' type='submit'>
            Salvar
          </button>
          <ErrorMessage label={error?.message} />
        </form>
      )}
    </div>
  );
}
