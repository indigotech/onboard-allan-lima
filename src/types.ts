export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  birthDate?: string;
  password?: string;
  role?: string;
}

export interface UserInput {
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  password: string;
  role?: 'user' | 'admin';
}
