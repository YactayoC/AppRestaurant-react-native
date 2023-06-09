import { Client, User } from '../models';

export interface AuthFormLogin {
  email: string;
  password: string;
}

export interface AuthLoginResponse {
  client: Client;
  token: string;
}

export interface AuthFormRegister {
  fullname: string;
  email: string;
  password: string;
}

export interface AuthRegisterResponse {
  user: User;
  message: string;
}
