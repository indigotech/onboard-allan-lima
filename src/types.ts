export interface UserLogin {
  email: string;
  password: string;
}

export interface User {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  birthDate?: string;
  password?: string;
  role?: 'user' | 'admin';
}

export interface UserInput {
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  password: string;
  role?: 'user' | 'admin';
}
